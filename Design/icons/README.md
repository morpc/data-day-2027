# Data Day 2027 Icon Set ("A Consistent Line")

27 icons drawn on one grid with one stroke weight, echoing the logo's rounded, humanist
line. **16 topic** marks (`topic/`) for the public session topic tags and the program, and
**11 UI/wayfinding** marks (`ui/`) for the site and signage.

## Spec (lock this for any future icons)

| | |
|---|---|
| **Grid** | 24×24px artboard, 2px safe margin (≈ 20×20 live area) |
| **Stroke** | 1.75px, round caps & joins, no mixed weights |
| **Fills** | Outline by default; small solid dots/squares allowed as accents only |
| **Color** | Monochrome per use: Fog `#F2F4F6` on dark, Ink `#171C21` on light. Teal / Green reserved for active / selected states, never the default |

Every icon uses `stroke="currentColor"`, so color follows the surrounding text `color`.
Solid accent bits are set to `fill="currentColor"` so they track the same color. To show a
selected/active state, set `color` to Teal `#00A79D` or Green `#7CB46A`. On the Dark Blue
`#073451` bands, step up to Teal 300 `#85D5D0` so the active state clears 4.5:1.

```html
<!-- default -->
<span style="color:#F2F4F6"><!-- inline the svg --></span>
<!-- active/selected -->
<span style="color:#00A79D"><!-- same svg --></span>
```

## Files

**`topic/`** (16). The eleven public session topic tags, in the order the CFP lists them:
data-governance · data-management · data-infrastructure · data-analysis ·
data-visualization · ai-machine-learning · gis-mapping · open-data · privacy-ethics ·
program-evaluation-research · data-literacy

Plus five that are not topic tags: the four Regional Data Agenda focus areas
(housing-community-dev · transportation-mobility · infrastructure-econ-dev ·
energy-sustainability), which are internal CFP metadata, and workshops-hands-on, which marks
a session *format* rather than a topic. See
[session-tagging-model-draft.md](../../Breakouts/CFP/session-tagging-model-draft.md).

> **Known issue:** seven of the original topic icons (those whose `<title>` contains `&`)
> use a raw ampersand rather than `&amp;`, so they are not well-formed XML. They render
> fine inlined into HTML, which is how this set is used, but they will not load as
> standalone `.svg` files via `<img>` or CSS `url()`. The five icons added in 2026-09 escape
> it correctly. Worth normalizing the older seven before any standalone-file use.

**`ui/`**: calendar-date · location-venue · registration-ticket · keynote-microphone ·
breakout-sessions · lunch · networking · schedule-agenda · sponsors · accessibility ·
social-share

All are standalone, self-contained SVGs at `viewBox="0 0 24 24"` with a `<title>` for
accessibility. Verified with Inkscape renders (white-on-dark). All 22 read clearly at
small size.

---

*Icon set imported 2026-07-14. Recolored 2026-07-21 to the "Data Day Classic" palette.
Style matches [`../logo/`](../logo) and the [palette](../palette.md).*
