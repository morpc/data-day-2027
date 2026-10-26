#!/usr/bin/env bash
# Build the Champions CFP promo kit outputs:
#   cfp-promo-kit.md         -> cfp-promo-kit.pdf                       (champion handout)
#   graphics/cfp-slide.html  -> graphics/cfp-slide-1920x1080.png        (16:9 promo slide)
#   graphics/cfp-social.html -> graphics/cfp-social-1080.png            (square social post)
# Rerun whenever the kit, the graphics, or the CFP facts change.
#
# The PDF drops the internal audience/status note above the first '---'.
# The graphics need network access for the Figtree web font; without it the
# text falls back to Arial.
#
# Usage: Champions/Engagements/CFP/build-kit.sh
set -euo pipefail

kit="$(cd "$(dirname "$0")" && pwd)"
repo="$(cd "$kit/../../.." && pwd)"
dir="$kit/graphics"

browser="$(command -v chromium || command -v chromium-browser || command -v google-chrome || true)"
if [[ -z "$browser" ]]; then
  echo "error: no Chromium/Chrome binary found (tried chromium, chromium-browser, google-chrome)" >&2
  exit 1
fi

render() {
  local src="$1" out="$2" size="$3"
  rm -f "$dir/$out"
  # Chromium can exit non-zero on harmless GPU warnings, so judge success by the file.
  "$browser" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --virtual-time-budget=5000 --window-size="$size" \
    --screenshot="$dir/$out" "file://$dir/$src" >/dev/null 2>&1 || true
  if [[ ! -s "$dir/$out" ]]; then
    echo "error: Chromium did not produce $dir/$out" >&2
    exit 1
  fi
  echo "wrote $dir/$out"
}

render cfp-slide.html cfp-slide-1920x1080.png 1920,1080
render cfp-social.html cfp-social-1080.png 1080,1080

staged="$(mktemp -d "$kit/.kit-XXXXXX")"
trap 'rm -rf "$staged"' EXIT

# Keep the H1, drop the audience/status blockquote, keep everything after the first '---'.
{ sed -n '1p' "$kit/cfp-promo-kit.md"; echo; awk 'f; /^---$/ && !f {f=1}' "$kit/cfp-promo-kit.md"; } \
  > "$staged/cfp-promo-kit.md"

python3 "$repo/.claude/skills/create-pdf/build_pdf.py" "$staged/cfp-promo-kit.md" -o "$kit/cfp-promo-kit.pdf"
