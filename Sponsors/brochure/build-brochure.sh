#!/usr/bin/env bash
# Render brochure.html to the one-page letter PDF in Sponsors/.
# Needs Chromium and a network connection (fonts load from Google Fonts).
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
OUT="$HERE/../DataDay2027_SponsorshipBrochure.pdf"
BROWSER="$(command -v chromium || command -v chromium-browser || command -v google-chrome)"

rm -f "$OUT"
# Chromium can exit non-zero on harmless GPU warnings, so judge success by the file.
"$BROWSER" --headless --disable-gpu --virtual-time-budget=10000 --no-pdf-header-footer \
  --print-to-pdf="$OUT" "file://$HERE/brochure.html" 2>/dev/null || true
[ -s "$OUT" ] || { echo "error: Chromium did not produce $OUT" >&2; exit 1; }
echo "wrote $OUT"
