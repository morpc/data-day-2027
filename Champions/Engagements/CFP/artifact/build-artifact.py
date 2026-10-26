#!/usr/bin/env python3
"""Assemble the CFP promo kit artifact page.

Inlines the white and full-color Data Day logos (website assets), the MORPC logo
(the website footer logo), and the CFP QR code as data URIs into
cfp-promo-kit.src.html, writing cfp-promo-kit.html. The artifact sandbox
blocks external images, so the assets must be embedded.

Rerun after editing the source page, then republish cfp-promo-kit.html with the
Artifact tool.

Usage: python3 Champions/Engagements/CFP/artifact/build-artifact.py
"""
import base64
import io
import sys
from pathlib import Path

from PIL import Image

HERE = Path(__file__).resolve().parent
REPO = HERE.parents[3]
SRC = HERE / "cfp-promo-kit.src.html"
OUT = HERE / "cfp-promo-kit.html"
LOGO = REPO / "docs/assets/datadaylogo-white.svg"
LOGO_PRIMARY = REPO / "docs/assets/datadaylogo-primary.svg"
QR = REPO / "Breakouts/CFP/QRCode for Data Day 2027_ CFP_cropped.png"
MORPC_LOGO = REPO / "docs/assets/morpc-logo.png"


def data_uri(mime: str, raw: bytes) -> str:
    return f"data:{mime};base64,{base64.b64encode(raw).decode('ascii')}"


def qr_png() -> bytes:
    # The QR is pure black and white; 1-bit PNG cuts it to about a third of the size.
    buf = io.BytesIO()
    Image.open(QR).convert("1").save(buf, format="PNG", optimize=True)
    return buf.getvalue()


def main() -> int:
    for path in (SRC, LOGO, LOGO_PRIMARY, QR, MORPC_LOGO):
        if not path.exists():
            print(f"error: missing input {path}", file=sys.stderr)
            return 1
    page = SRC.read_text(encoding="utf-8")
    page = page.replace("{{LOGO_WHITE}}", data_uri("image/svg+xml", LOGO.read_bytes()))
    page = page.replace("{{LOGO_PRIMARY}}", data_uri("image/svg+xml", LOGO_PRIMARY.read_bytes()))
    page = page.replace("{{QR}}", data_uri("image/png", qr_png()))
    page = page.replace("{{MORPC_LOGO}}", data_uri("image/png", MORPC_LOGO.read_bytes()))
    if "{{" in page:
        print("error: unreplaced placeholder left in the page", file=sys.stderr)
        return 1
    OUT.write_text(page, encoding="utf-8")
    print(f"wrote {OUT} ({OUT.stat().st_size // 1024} KB)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
