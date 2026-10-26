#!/usr/bin/env python3
"""Render a Markdown file to a MORPC / Data Day styled PDF.

Pipeline: Markdown -> HTML (python-markdown) -> headless Chromium -> PDF.
Matches the house style of the Champions FAQ / Ways-to-Help PDFs:
the document's first H1 becomes the navy title, placed under the MORPC
logo; H2s are steel-blue section headings with rules.

Usage:
    python3 build_pdf.py INPUT.md [-o OUTPUT.pdf] [--no-logo] [--logo PATH]
                         [--letterhead DOCX]

Defaults: OUTPUT is INPUT with a .pdf extension; the logo is the MORPC
horizontal logo in the repo's Assets/ folder.

--letterhead lays the document over a Word letterhead: page 1 gets the
letterhead's first-page design, later pages its continuation design. The
MORPC logo is dropped, since the letterhead already carries it.
"""
import argparse
import base64
import mimetypes
import shutil
import subprocess
import sys
import tempfile
import zipfile
from pathlib import Path

import markdown

SKILL_DIR = Path(__file__).resolve().parent
REPO_ROOT = SKILL_DIR.parents[2]  # .claude/skills/create-pdf -> repo root
DEFAULT_LOGO = REPO_ROOT / "Assets" / "MORPC_HORIZONTAL LOGO_PRIMARY COLOR (1).png"
STYLE = SKILL_DIR / "style.css"

# Content margins that clear the letterhead art: page 1 starts below the
# logo/address block and every page stops above the officer line / footer art.
LETTERHEAD_CSS = """
@page { margin: 1.6in 1in 1.65in 1in; }
@page :first { margin-top: 2.3in; }
"""

CHROMIUM_CANDIDATES = ["chromium", "chromium-browser", "google-chrome", "google-chrome-stable"]

# Full Data Day horizontal lockup (mark + wordmark). Primary color version, for paper.
EVENT_LOCKUP = REPO_ROOT / "Design" / "logo" / "Primary Horizontal Logo.svg"


def find_chromium() -> str:
    for name in CHROMIUM_CANDIDATES:
        path = shutil.which(name)
        if path:
            return path
    sys.exit("error: no Chromium/Chrome binary found (tried: %s)" % ", ".join(CHROMIUM_CANDIDATES))


def data_uri(path: Path) -> str:
    mime = mimetypes.guess_type(str(path))[0] or "image/png"
    b64 = base64.b64encode(path.read_bytes()).decode("ascii")
    return f"data:{mime};base64,{b64}"


def build_html(md_path: Path, logo: Path | None, extra_css: str = "") -> str:
    body = markdown.markdown(
        md_path.read_text(encoding="utf-8"),
        extensions=["extra", "sane_lists", "smarty"],
    )
    css = STYLE.read_text(encoding="utf-8")
    # Event lockup at left (always shown); MORPC logo at right unless --no-logo.
    if EVENT_LOCKUP.exists():
        lockup = f'<img class="event-lockup" src="{data_uri(EVENT_LOCKUP)}" alt="Data Day 2027">'
    else:
        print(f"warning: event lockup not found at {EVENT_LOCKUP}", file=sys.stderr)
        lockup = ""
    morpc = ""
    if logo and logo.exists():
        morpc = f'<img class="morpc" src="{data_uri(logo)}" alt="MORPC">'
    elif logo:
        print(f"warning: logo not found at {logo}; rendering without it", file=sys.stderr)
    header = f'<div class="doc-header">{lockup}{morpc}</div>'
    return (
        "<!DOCTYPE html><html><head><meta charset='utf-8'>"
        f"<style>{css}{extra_css}</style></head><body>{header}{body}</body></html>"
    )


def render_pdf(html: str, out_path: Path) -> None:
    chromium = find_chromium()
    # Stage scratch files in the output directory, not /tmp: when running
    # under a sandbox the Chromium subprocess may not share the parent's
    # /tmp view, so a temp HTML there renders as ERR_FILE_NOT_FOUND.
    with tempfile.TemporaryDirectory(dir=str(out_path.parent), prefix=".pdfbuild-") as tmp:
        html_file = Path(tmp) / "doc.html"
        html_file.write_text(html, encoding="utf-8")
        cmd = [
            chromium, "--headless=new", "--disable-gpu", "--no-sandbox",
            f"--user-data-dir={tmp}/profile",
            "--no-pdf-header-footer",
            "--run-all-compositor-stages-before-draw",
            "--virtual-time-budget=10000",
            f"--print-to-pdf={out_path}",
            html_file.as_uri(),
        ]
        result = subprocess.run(cmd, capture_output=True, text=True)
        # Chromium can exit non-zero on harmless GPU warnings, so judge
        # success by the output file rather than the return code.
        if not out_path.exists() or out_path.stat().st_size == 0:
            sys.exit(f"error: Chromium failed to render PDF\n{result.stderr}")


def letterhead_background(docx: Path, workdir: Path) -> Path:
    """Render a 2-page PDF of the letterhead with an empty body: page 1 is the
    first-page design, page 2 the continuation design."""
    blank = workdir / "letterhead-blank.docx"
    with zipfile.ZipFile(docx) as src, zipfile.ZipFile(blank, "w", zipfile.ZIP_DEFLATED) as dst:
        for item in src.infolist():
            data = src.read(item)
            if item.filename == "word/document.xml":
                xml = data.decode("utf-8")
                start = xml.index("<w:body>") + len("<w:body>")
                sect = xml.rindex("<w:sectPr")
                page_break = '<w:p><w:r><w:br w:type="page"/></w:r></w:p><w:p/>'
                data = (xml[:start] + page_break + xml[sect:]).encode("utf-8")
            dst.writestr(item, data)
    result = subprocess.run(
        ["soffice", f"-env:UserInstallation={(workdir / 'lo-profile').as_uri()}",
         "--headless", "--convert-to", "pdf", "--outdir", str(workdir), str(blank)],
        capture_output=True, text=True,
    )
    pdf = blank.with_suffix(".pdf")
    if not pdf.exists():
        sys.exit(f"error: LibreOffice failed to render the letterhead\n{result.stdout}{result.stderr}")
    return pdf


def apply_letterhead(content: Path, docx: Path, out_path: Path, workdir: Path) -> None:
    background = letterhead_background(docx, workdir)
    # multibackground pairs page N with background page N and repeats the
    # last background page (the continuation design) for the rest.
    result = subprocess.run(
        ["pdftk", str(content), "multibackground", str(background), "output", str(out_path)],
        capture_output=True, text=True,
    )
    if result.returncode != 0:
        sys.exit(f"error: pdftk failed to apply the letterhead\n{result.stderr}")


def main() -> None:
    ap = argparse.ArgumentParser(description="Render Markdown to a MORPC-styled PDF.")
    ap.add_argument("input", type=Path, help="Markdown file to render")
    ap.add_argument("-o", "--output", type=Path, help="Output PDF (default: INPUT.pdf)")
    ap.add_argument("--logo", type=Path, default=DEFAULT_LOGO, help="Logo image path")
    ap.add_argument("--no-logo", action="store_true", help="Render without a logo")
    ap.add_argument("--letterhead", type=Path, help="Word letterhead (.docx) to print the document on")
    args = ap.parse_args()

    if not args.input.exists():
        sys.exit(f"error: input not found: {args.input}")
    if args.letterhead and not args.letterhead.exists():
        sys.exit(f"error: letterhead not found: {args.letterhead}")
    out = args.output or args.input.with_suffix(".pdf")

    if args.letterhead:
        html = build_html(args.input, None, LETTERHEAD_CSS)
        with tempfile.TemporaryDirectory(dir=str(out.resolve().parent), prefix=".pdfbuild-") as tmp:
            content = Path(tmp) / "content.pdf"
            render_pdf(html, content)
            apply_letterhead(content, args.letterhead.resolve(), out.resolve(), Path(tmp))
    else:
        logo = None if args.no_logo else args.logo
        html = build_html(args.input, logo)
        render_pdf(html, out.resolve())
    print(f"wrote {out}")


if __name__ == "__main__":
    main()
