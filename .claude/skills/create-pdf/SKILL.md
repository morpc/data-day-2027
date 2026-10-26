---
name: create-pdf
description: Render a Markdown file to a polished, MORPC / Data Day-branded PDF — matching the house style of the Champions FAQ and ways_to_help PDFs (MORPC logo, navy title, steel-blue section headings, clean sans-serif body). Use whenever asked to "make a PDF", "export to PDF", or produce a print/share-ready version of a Markdown doc in this repo.
---

# Create a Data Day PDF

Converts a Markdown document into a branded PDF via **Markdown → styled HTML → headless Chromium**. The output matches the established house style: the MORPC horizontal logo at top-left, the document's first `# H1` as a navy title with a heavy rule, `## H2`s as steel-blue section headings with light rules, smart-quoted sans-serif body, and styled tables/blockquotes.

## Usage

```bash
python3 .claude/skills/create-pdf/build_pdf.py INPUT.md [-o OUTPUT.pdf] [--no-logo] [--logo PATH]
```

- Default output is `INPUT.pdf` (same name, next to the source).
- Default logo is `Assets/MORPC_HORIZONTAL LOGO_PRIMARY COLOR (1).png`; override with `--logo` or omit with `--no-logo`.
- `--letterhead DOCX` prints the doc on a Word letterhead (e.g. `Assets/2026-MORPC-Letterhead-Final-Updated 5-19.docx`): page 1 gets the letterhead's first-page design, later pages its continuation design, and the MORPC logo is dropped. Needs LibreOffice (`soffice`) and `pdftk`. Content margins are set in `LETTERHEAD_CSS` in `build_pdf.py`.

Tests for letterhead mode: `python3 .claude/skills/create-pdf/test_build_pdf.py`.

Example — regenerate the FAQ:

```bash
python3 .claude/skills/create-pdf/build_pdf.py Champions/Recruitment/faq.md
```

## How to author the Markdown

Write the doc so it maps cleanly onto the style:

- **One `# H1`** at the top — becomes the title under the logo. Use the full title, e.g. `# Data Day 2027 Champions — Frequently Asked Questions`.
- **`## H2`** for top-level sections (gets a rule), **`### H3`** for sub-sections.
- **`**Bold:**` lead-ins** for FAQ questions or labels — they render in navy, matching the existing docs.
- Bullets, numbered lists, tables, and `> blockquotes` (rendered as soft callouts — good for status/notes) are all styled. Strip draft-only status blockquotes before producing a final share-ready PDF.

## After generating

Always **visually verify** the result before declaring it done: read page 1 of the output PDF (and any page with a table) and confirm the logo, title rule, headings, and pagination look right. Confirm `pdfinfo` reports letter-size pages.

## Notes / gotchas

- Requires `python3` with the `markdown` package and a Chromium/Chrome binary (`chromium`, `chromium-browser`, or `google-chrome`). The script auto-detects the browser.
- The script stages its scratch HTML in the **output directory**, not `/tmp` — under a sandbox the Chromium subprocess may not share `/tmp`, which otherwise yields a blank `ERR_FILE_NOT_FOUND` page. Keep it that way.
- Chromium may exit non-zero on harmless GPU warnings; the script judges success by the produced file, not the exit code.
- To restyle all PDFs at once, edit `style.css` (colors are CSS variables at the top) and re-run the script on each source.
