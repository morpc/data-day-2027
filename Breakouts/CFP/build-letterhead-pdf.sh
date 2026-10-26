#!/usr/bin/env bash
# Build the CFP on MORPC letterhead: cfp-2027-draft.md -> cfp-2027-draft-letterhead.pdf.
# Rerun whenever the CFP draft changes.
#
# The letterhead version drops the internal audience/status note and the
# "(DRAFT)" H1 above the letter, plus the officer signature table, which the
# letterhead footer already carries. The letter's own title is promoted to H1.
#
# Usage: Breakouts/CFP/build-letterhead-pdf.sh
set -euo pipefail

repo="$(cd "$(dirname "$0")/../.." && pwd)"
src="$repo/Breakouts/CFP/cfp-2027-draft.md"
out="$repo/Breakouts/CFP/cfp-2027-draft-letterhead.pdf"
letterhead="$repo/Assets/2026-MORPC-Letterhead-Final-Updated 5-19.docx"

staged="$(mktemp -d "$repo/Breakouts/CFP/.letterhead-XXXXXX")"
trap 'rm -rf "$staged"' EXIT

# Keep everything after the first '---'; drop the officer table; promote the letter title.
awk 'f; /^---$/ && !f {f=1}' "$src" \
  | sed -e '/^| William Murdock/,/^| Executive Director/d' -e '0,/^## /s/^## /# /' \
  > "$staged/cfp.md"

python3 "$repo/.claude/skills/create-pdf/build_pdf.py" "$staged/cfp.md" -o "$out" --letterhead "$letterhead"
