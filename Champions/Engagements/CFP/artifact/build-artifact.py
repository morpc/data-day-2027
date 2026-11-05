#!/usr/bin/env python3
"""Build the CFP promo kit artifact page and exports of its graphics.

Outputs:
  cfp-promo-kit.html       the artifact page (republish it with the Artifact tool)
  exports/cfp-slide.pdf    the 1920x1080 promo slide, with clickable links
  exports/cfp-slide.png    the same slide as an image, for decks
  exports/cfp-social.pdf   the 1080x1080 social graphic, with clickable links
  exports/cfp-social.png   the same graphic as an image, for social posts

The drawing code lives in graphics.js and is inlined into the page and into
each PDF's print page (print.src.html). The white and full-color Data Day logos
(website assets), the MORPC logo (website footer), and the CFP QR code are
inlined as data URIs, because the artifact sandbox blocks external images.
The PDFs keep the links because headless Chromium turns <a> elements laid over
the image into PDF link annotations.

Rerun after editing the page, graphics.js, or print.src.html.
Pass --no-exports to rebuild only the page.

Usage: python3 Champions/Engagements/CFP/artifact/build-artifact.py [--no-exports]
"""
import base64
import io
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

from PIL import Image

HERE = Path(__file__).resolve().parent
REPO = HERE.parents[3]
SRC = HERE / "cfp-promo-kit.src.html"
PRINT_SRC = HERE / "print.src.html"
GRAPHICS = HERE / "graphics.js"
OUT = HERE / "cfp-promo-kit.html"
EXPORT_DIR = HERE / "exports"
LOGO = REPO / "docs/assets/datadaylogo-white.svg"
LOGO_PRIMARY = REPO / "docs/assets/datadaylogo-primary.svg"
QR = REPO / "Breakouts/CFP/QRCode for Data Day 2027_ CFP_cropped.png"
MORPC_LOGO = REPO / "docs/assets/morpc-logo.png"

EXPORTS = [
    # (which graphic, output file stem, width, height, title)
    ("slide", "cfp-slide", 1920, 1080, "Data Day 2027 CFP Slide"),
    ("social", "cfp-social", 1080, 1080, "Data Day 2027 CFP Social Graphic"),
]


def data_uri(mime: str, raw: bytes) -> str:
    return f"data:{mime};base64,{base64.b64encode(raw).decode('ascii')}"


def qr_png() -> bytes:
    # The QR is pure black and white; 1-bit PNG cuts it to about a third of the size.
    buf = io.BytesIO()
    Image.open(QR).convert("1").save(buf, format="PNG", optimize=True)
    return buf.getvalue()


def fill(template: str, values: dict) -> str:
    # Dicts keep insertion order: GRAPHICS_JS is listed first so the asset
    # placeholders it carries are filled by the later keys.
    for key, value in values.items():
        template = template.replace("{{" + key + "}}", value)
    if "{{" in template:
        start = template.index("{{")
        raise SystemExit(f"error: unreplaced placeholder {template[start:start + 30]!r} in a built page")
    return template


def find_browser() -> str:
    for name in ("chromium", "chromium-browser", "google-chrome"):
        path = shutil.which(name)
        if path:
            return path
    raise SystemExit("error: no Chromium/Chrome binary found (tried chromium, chromium-browser, google-chrome)")


def render(browser: str, page: str, out: Path, mode_args: list) -> None:
    """Load page in headless Chromium and write out (a PDF or a screenshot, per mode_args)."""
    # Snap Chromium cannot read the system temp dir, so stage the print page next to this script.
    with tempfile.TemporaryDirectory(dir=HERE, prefix=".print-") as tmp:
        html = Path(tmp) / "print.html"
        html.write_text(page, encoding="utf-8")
        out.unlink(missing_ok=True)
        # Chromium can exit non-zero on harmless GPU warnings, so judge success by the file.
        result = subprocess.run(
            [browser, "--headless", "--disable-gpu", "--virtual-time-budget=10000", *mode_args, html.as_uri()],
            capture_output=True, text=True,
        )
        if not out.exists() or out.stat().st_size == 0:
            sys.stderr.write(result.stderr[-2000:])
            raise SystemExit(f"error: Chromium did not produce {out}")


def main() -> int:
    for path in (SRC, PRINT_SRC, GRAPHICS, LOGO, LOGO_PRIMARY, QR, MORPC_LOGO):
        if not path.exists():
            print(f"error: missing input {path}", file=sys.stderr)
            return 1

    # Indent the shared script to sit inside each page's <script> block.
    graphics = "\n".join(("  " + line) if line else line for line in GRAPHICS.read_text(encoding="utf-8").split("\n"))
    assets = {
        "GRAPHICS_JS": graphics,
        "LOGO_WHITE": data_uri("image/svg+xml", LOGO.read_bytes()),
        "LOGO_PRIMARY": data_uri("image/svg+xml", LOGO_PRIMARY.read_bytes()),
        "QR": data_uri("image/png", qr_png()),
        "MORPC_LOGO": data_uri("image/png", MORPC_LOGO.read_bytes()),
    }

    OUT.write_text(fill(SRC.read_text(encoding="utf-8"), assets), encoding="utf-8")
    print(f"wrote {OUT} ({OUT.stat().st_size // 1024} KB)")

    if "--no-exports" in sys.argv[1:]:
        return 0

    browser = find_browser()
    EXPORT_DIR.mkdir(exist_ok=True)
    template = PRINT_SRC.read_text(encoding="utf-8")
    for which, stem, width, height, title in EXPORTS:
        page = fill(template, {**assets, "WHICH": which, "W": str(width), "H": str(height), "TITLE": title})
        pdf, png = EXPORT_DIR / f"{stem}.pdf", EXPORT_DIR / f"{stem}.png"
        render(browser, page, pdf, ["--no-pdf-header-footer", f"--print-to-pdf={pdf}"])
        render(browser, page, png, ["--hide-scrollbars", "--force-device-scale-factor=1",
                                    f"--window-size={width},{height}", f"--screenshot={png}"])
        print(f"wrote {pdf} and {png.name}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
