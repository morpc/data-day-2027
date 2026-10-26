"""Tests for build_pdf.py's letterhead mode.

Run: python3 .claude/skills/create-pdf/test_build_pdf.py
Needs Chromium, LibreOffice (soffice), pdftk, and pdftotext, same as the script.
"""
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

SKILL_DIR = Path(__file__).resolve().parent
SCRIPT = SKILL_DIR / "build_pdf.py"
LETTERHEAD = SKILL_DIR.parents[2] / "Assets" / "2026-MORPC-Letterhead-Final-Updated 5-19.docx"


def page_text(pdf: Path, page: int) -> str:
    return subprocess.run(
        ["pdftotext", "-f", str(page), "-l", str(page), str(pdf), "-"],
        capture_output=True, text=True, check=True,
    ).stdout


def page_count(pdf: Path) -> int:
    info = subprocess.run(["pdfinfo", str(pdf)], capture_output=True, text=True, check=True).stdout
    return int(next(l for l in info.splitlines() if l.startswith("Pages:")).split()[1])


class LetterheadTest(unittest.TestCase):
    def build(self, md: str) -> Path:
        tmp = Path(tempfile.mkdtemp(dir=SKILL_DIR, prefix=".test-"))
        self.addCleanup(subprocess.run, ["rm", "-rf", str(tmp)])
        src = tmp / "doc.md"
        src.write_text(md, encoding="utf-8")
        out = tmp / "doc.pdf"
        result = subprocess.run(
            [sys.executable, str(SCRIPT), str(src), "-o", str(out), "--letterhead", str(LETTERHEAD)],
            capture_output=True, text=True,
        )
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(result.stderr, "")
        self.assertEqual(result.stdout.strip(), f"wrote {out}")
        return out

    def test_first_page_carries_letterhead_footer_and_content(self):
        out = self.build("# Test Title\n\nHello letterhead.\n")
        self.assertEqual(page_count(out), 1)
        text = page_text(out, 1)
        self.assertIn("Test Title", text)
        self.assertIn("Hello letterhead.", text)
        self.assertIn("Ben Kessler", text)  # officer line from the first-page footer

    def test_later_pages_use_continuation_letterhead(self):
        out = self.build("# Long\n\n" + "\n\n".join(f"Paragraph {i}." for i in range(120)))
        self.assertGreaterEqual(page_count(out), 2)
        self.assertIn("Ben Kessler", page_text(out, 1))
        page2 = page_text(out, 2)
        self.assertIn("Paragraph", page2)
        self.assertNotIn("Ben Kessler", page2)  # continuation footer has no officer line

    def test_letterhead_html_has_no_logo_header(self):
        sys.path.insert(0, str(SKILL_DIR))
        import build_pdf
        tmp = Path(tempfile.mkdtemp(dir=SKILL_DIR, prefix=".test-"))
        self.addCleanup(subprocess.run, ["rm", "-rf", str(tmp)])
        src = tmp / "doc.md"
        src.write_text("# Title\n", encoding="utf-8")
        html = build_pdf.build_html(src, None, letterhead=True)
        self.assertNotIn("doc-header", html.split("</style>")[1])
        self.assertIn("<h1>Title</h1>", html)

    def test_missing_letterhead_is_reported(self):
        result = subprocess.run(
            [sys.executable, str(SCRIPT), str(SCRIPT), "--letterhead", "/nonexistent.docx"],
            capture_output=True, text=True,
        )
        self.assertNotEqual(result.returncode, 0)
        self.assertIn("letterhead not found", result.stderr)


if __name__ == "__main__":
    unittest.main()
