// CFP promo graphics: the slide and the square social image, drawn on canvas in the
// homepage hero's type system. Shared by the kit artifact page and the PDF builds;
// build-artifact.py inlines it into both.
// Graphics: drawn on canvas in the homepage hero's type system (trend mark lockup, teal
// Figtree 800 title, JetBrains Mono eyebrows, icon facts row), then shown as <img> so
// viewers can save them.
const C = {
  band: "#073451", divider: "#4A6B80", teal: "#00A79D", teal300: "#85D5D0", blue300: "#89BEDF",
  navy200: "#BFCAD2", ink: "#171C21", fog: "#F2F4F6", white: "#FFFFFF",
  blue600: "#07588B", slate: "#5F6B75", mist: "#DDE2E7",
};
const SANS = 'Figtree, "Segoe UI", Helvetica, Arial, sans-serif';
const MONO = '"JetBrains Mono", ui-monospace, Menlo, monospace';
const DD_RATIO = 692.52 / 175.48;
const MORPC_RATIO = 500 / 175;
const LINKS = { site: "https://morpc.org/dataday", form: "https://tinyurl.com/dataday-cfp" };

// The homepage hero's trend mark (docs/index.html), with currentColor set to Fog.
const TREND_MARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="165 113 490 490">
  <path d="M 173.99191,559.10665 H 641.5168" fill="none" stroke="#F2F4F6" stroke-width="14.4" stroke-linecap="round"/>
  <path d="m 211.37723,123.12357 v 467.5249" fill="none" stroke="#F2F4F6" stroke-width="14.4" stroke-linecap="round"/>
  <circle cx="248.69173" cy="498.01663" r="9.2476263" fill="none" stroke="#F2F4F6" stroke-width="7.42475"/>
  <circle cx="348.375" cy="505.53125" r="9.2476263" fill="none" stroke="#F2F4F6" stroke-width="7.42475"/>
  <circle cx="407.53125" cy="406.77148" r="9.2476263" fill="none" stroke="#F2F4F6" stroke-width="7.42475"/>
  <circle cx="504.25195" cy="427.41211" r="9.2476263" fill="none" stroke="#F2F4F6" stroke-width="7.42475"/>
  <circle cx="516.61914" cy="296.58984" r="9.2476263" fill="none" stroke="#F2F4F6" stroke-width="7.42475"/>
  <path transform="translate(0.13638047,-0.05627852)" fill="#00A79D" d="M 576.82651 204.18714 A 3.6003599 3.6003599 0 0 0 575.09799 205.31214 L 549.66245 235.31018 A 3.6003599 3.6003599 0 0 0 551.37534 241.08558 L 559.21909 243.43714 C 519.67073 364.08588 444.71797 425.09234 378.71128 456.52893 C 328.57672 480.40621 284.06451 486.94206 264.28354 488.74183 C 266.26284 491.02009 267.46909 493.9852 267.46909 497.21253 C 267.46909 499.28394 266.97063 501.24655 266.09214 502.98987 C 287.35294 500.99257 333.42188 494.04738 384.90268 469.52893 C 453.71797 436.75471 532.23539 372.19244 573.01206 247.56995 L 581.1937 250.02308 A 3.6003599 3.6003599 0 0 0 585.80503 246.17151 L 581.42026 207.23792 A 3.6003599 3.6003599 0 0 0 578.89096 204.1969 A 3.6003599 3.6003599 0 0 0 576.82651 204.18714 z"/>
</svg>`;

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function text(ctx, str, x, y, size, weight, color, family = SANS, spacing = "0px") {
  ctx.font = `${weight} ${size}px ${family}`;
  ctx.fillStyle = color;
  ctx.letterSpacing = spacing;
  ctx.fillText(str, x, y);
  const w = ctx.measureText(str).width;
  ctx.letterSpacing = "0px";
  return w;
}

// Mono uppercase eyebrow, 0.14em tracking, Blue 300 (the hero's .eyebrow).
function eyebrow(ctx, str, x, y, size) {
  return text(ctx, str.toUpperCase(), x, y, size, 400, C.blue300, MONO, `${size * 0.14}px`);
}

// Teal button shape with Ink text (the site's primary button).
function pill(ctx, str, x, y, size) {
  ctx.font = `700 ${size}px ${SANS}`;
  const padX = size * 0.9, h = size * 1.9;
  const w = ctx.measureText(str).width + padX * 2;
  ctx.fillStyle = C.teal;
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, h / 2);
  ctx.fill();
  ctx.fillStyle = C.ink;
  ctx.textBaseline = "middle";
  ctx.fillText(str, x + padX, y + h / 2 + size * 0.04);
  ctx.textBaseline = "alphabetic";
  return h;
}

// The hero facts-row icons, drawn from the same 24-unit SVG paths.
function icon(ctx, kind, x, y, size) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size / 24, size / 24);
  ctx.strokeStyle = C.blue300; ctx.fillStyle = C.blue300;
  ctx.lineWidth = 1.75; ctx.lineCap = "round"; ctx.lineJoin = "round";
  if (kind === "date") {
    ctx.beginPath(); ctx.roundRect(4, 5.5, 16, 15, 2); ctx.stroke();
    ctx.stroke(new Path2D("M4 10H20M8 3.5V7.5M16 3.5V7.5"));
    ctx.beginPath(); ctx.roundRect(13.3, 13, 3, 3, 0.6); ctx.fill();
  } else if (kind === "place") {
    ctx.stroke(new Path2D("M12 21C12 21 6 15.5 6 10.5C6 6.9 8.9 4 12 4C15.1 4 18 6.9 18 10.5C18 15.5 12 21 12 21Z"));
    ctx.beginPath(); ctx.arc(12, 10.5, 2, 0, Math.PI * 2); ctx.fill();
  } else {
    ctx.beginPath(); ctx.arc(12, 12, 8.5, 0, Math.PI * 2); ctx.stroke();
    ctx.stroke(new Path2D("M12 7.5V12L15 14"));
  }
  ctx.restore();
}

// One facts-row item: icon, optional white label, value (Teal 300 when highlighted).
function fact(ctx, kind, label, value, x, y, size, highlight) {
  const s = size * 1.15;
  icon(ctx, kind, x, y - size * 0.92, s);
  let tx = x + s + size * 0.45;
  if (label) tx += text(ctx, label, tx, y, size, 600, C.white) + size * 0.4;
  text(ctx, value, tx, y, size, 600, highlight ? C.teal300 : C.white);
}

// Trend mark beside the teal title and white subhead (the hero lockup).
function lockup(ctx, mark, x, y, markSize, titleLines, titleSize, subLines, subSize) {
  ctx.drawImage(mark, x, y, markSize, markSize);
  const tx = x + markSize + markSize * 0.22;
  let ty = y + titleSize * 0.82;
  titleLines.forEach((line, i) => {
    if (i) ty += titleSize * 1.04;
    text(ctx, line, tx, ty, titleSize, 800, C.teal300);
  });
  ty += subSize * 1.55;
  subLines.forEach((line) => { text(ctx, line, tx, ty, subSize, 700, C.white, SANS, `${subSize * 0.02}px`); ty += subSize * 1.3; });
}

// Teal-dot bulleted list, wrapped to width (or at "\n") and vertically centered on midY.
function bullets(ctx, items, x, midY, size, width) {
  ctx.font = `500 ${size}px ${SANS}`;
  const indent = size * 0.9, lineH = size * 1.3, itemGap = size * 0.6;
  const wrapped = items.map((item) => item.split("\n").flatMap((para) => {
    const lines = [];
    let line = "";
    para.split(" ").forEach((word) => {
      const next = line ? `${line} ${word}` : word;
      if (line && ctx.measureText(next).width > width - indent) { lines.push(line); line = word; }
      else line = next;
    });
    lines.push(line);
    return lines;
  }));
  const total = wrapped.reduce((h, l) => h + l.length * lineH, 0) + itemGap * (items.length - 1);
  let y = midY - total / 2 + size * 0.95;
  wrapped.forEach((lines) => {
    ctx.fillStyle = C.teal;
    ctx.beginPath(); ctx.arc(x + size * 0.22, y - size * 0.33, size * 0.2, 0, Math.PI * 2); ctx.fill();
    lines.forEach((line) => { text(ctx, line, x + indent, y, size, 500, C.slate); y += lineH; });
    y += itemGap;
  });
}

// Link-style underline: a thin rule in the text color, with gaps around descenders
// (cut by stroking the glyphs in the background color before filling them).
function underlinedText(ctx, str, x, y, size, weight, color, bg) {
  ctx.font = `${weight} ${size}px ${SANS}`;
  const w = ctx.measureText(str).width;
  ctx.fillStyle = color;
  ctx.fillRect(x, y + size * 0.14, w, Math.max(2, size * 0.06));
  ctx.strokeStyle = bg; ctx.lineWidth = size * 0.16; ctx.lineJoin = "round";
  ctx.strokeText(str, x, y);
  ctx.fillText(str, x, y);
  return w;
}

// "More info at" in white, then the site URL in teal with a link underline (on navy).
// Returns the URL's link region.
function moreInfo(ctx, x, y, leadSize, urlSize) {
  const lead = text(ctx, "More info at ", x, y, leadSize, 600, C.white);
  const w = underlinedText(ctx, "morpc.org/dataday", x + lead, y, urlSize, 600, C.teal300, C.band);
  return { href: LINKS.site, label: "morpc.org/dataday", x: x + lead, y: y - urlSize * 0.85, w, h: urlSize * 1.2 };
}

// Largest size up to max at which str fits in width.
function fitSize(ctx, str, weight, max, width) {
  ctx.font = `${weight} ${max}px ${SANS}`;
  return Math.min(max, Math.floor(max * width / ctx.measureText(str).width));
}

function canvas(w, h) {
  const cv = document.createElement("canvas");
  cv.width = w; cv.height = h;
  const ctx = cv.getContext("2d");
  ctx.fillStyle = C.band; ctx.fillRect(0, 0, w, h);
  return [cv, ctx];
}

function drawSlide(mark, qr, ddLogo, morpc) {
  const [cv, ctx] = canvas(1920, 1080);
  const links = [];
  const split = 1080;

  // Left panel (light): the call for proposals, dark on light. Headline, pill, QR block,
  // and logo row are spaced evenly between 96px top and bottom margins.
  ctx.fillStyle = C.fog; ctx.fillRect(0, 0, split, 1080);
  const x = 96;
  text(ctx, "Share your work", x, 166, 96, 800, C.band);
  text(ctx, "at Data Day 2027", x, 268, 96, 800, C.band);
  pill(ctx, "Proposals due Monday, November 30", x, 325, 38);

  const qrTop = 428, card = 320, cardH = 384, qrSize = 276;
  ctx.fillStyle = C.white; ctx.strokeStyle = C.mist; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.roundRect(x, qrTop, card, cardH, 20); ctx.fill(); ctx.stroke();
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(qr, x + (card - qrSize) / 2, qrTop + 22, qrSize, qrSize);
  ctx.imageSmoothingEnabled = true;
  ctx.textAlign = "center";
  text(ctx, "Scan to submit", x + card / 2, qrTop + 328, 26, 800, C.band);
  text(ctx, "or visit tinyurl.com/dataday-cfp", x + card / 2, qrTop + 362, 19, 600, C.blue600);
  ctx.textAlign = "left";
  links.push({ href: LINKS.form, label: "Submit a proposal: tinyurl.com/dataday-cfp", x, y: qrTop, w: card, h: cardH });

  bullets(ctx, [
    "45-minute sessions",
    "All topics and skill levels welcome",
    "Focus on interaction and\naudience engagement",
  ], x + card + 52, qrTop + cardH / 2, 30, 984 - (x + card + 52));

  // Base of the left panel: Data Day and MORPC logos, filling the width.
  const right = split - 96, logoH = 108, logoTop = 877;
  ctx.fillStyle = C.mist; ctx.fillRect(x, logoTop - 32, right - x, 2);
  ctx.drawImage(ddLogo, x, logoTop, logoH * DD_RATIO, logoH);
  ctx.drawImage(morpc, right - logoH * MORPC_RATIO, logoTop, logoH * MORPC_RATIO, logoH);

  // Right panel (navy): the event, set like the homepage hero, with the mark centered over the title.
  const ex = split + 96;
  const titleSize = fitSize(ctx, "Plotting What's Next", 800, 80, 1920 - 80 - ex);
  ctx.font = `800 ${titleSize}px ${SANS}`;
  const titleW = ctx.measureText("Plotting What's Next").width;
  const markSize = 340;
  ctx.drawImage(mark, ex + titleW / 2 - markSize / 2, 100, markSize, markSize);
  text(ctx, "Plotting What's Next", ex, 536, titleSize, 800, C.teal300);
  text(ctx, "Five years forward for", ex, 592, 33, 700, C.white, SANS, "0.66px");
  text(ctx, "Central Ohio's data community", ex, 635, 33, 700, C.white, SANS, "0.66px");
  fact(ctx, "date", "Date", "Thursday, February 18, 2027", ex, 750, 28, true);
  fact(ctx, "place", "", "CSCC Center for Workforce Development", ex, 806, 28);
  fact(ctx, "time", "", "9:00 AM – 3:45 PM", ex, 862, 28);
  links.push(moreInfo(ctx, ex, 976, 32, 46));
  return { src: cv.toDataURL("image/png"), width: 1920, height: 1080, links };
}

function drawSocial(mark, ddLogo, morpc) {
  const [cv, ctx] = canvas(1080, 1080);
  const links = [];
  const x = 80, right = 1000, split = 446;

  // Top panel (navy): the event, as the homepage hero lockup.
  lockup(ctx, mark, x, 64, 150, ["Plotting What's Next"], fitSize(ctx, "Plotting What's Next", 800, 66, right - x - 183), ["Five years forward for", "Central Ohio's data community"], 28);
  fact(ctx, "date", "Date", "Thursday, February 18, 2027", x, 282, 26, true);
  fact(ctx, "place", "", "CSCC Center for Workforce Development", x, 328, 26);
  links.push(moreInfo(ctx, x, 392, 28, 38));

  // Bottom panel (light): the call for proposals, dark on light, with the logos at its base.
  ctx.fillStyle = C.fog; ctx.fillRect(0, split, 1080, 1080 - split);
  text(ctx, "Share your work", x, 572, 82, 800, C.band);
  text(ctx, "at Data Day 2027", x, 660, 82, 800, C.band);
  pill(ctx, "Proposals due Monday, November 30", x, 694, 32);
  bullets(ctx, [
    "45-minute sessions",
    "All topics and skill levels welcome",
    "Focus on interaction and audience engagement",
  ], x, 838, 26, right - x);

  const logoH = 74, logoTop = 950;
  ctx.fillStyle = C.mist; ctx.fillRect(x, logoTop - 24, right - x, 2);
  ctx.drawImage(ddLogo, x, logoTop, logoH * DD_RATIO, logoH);
  ctx.drawImage(morpc, right - logoH * MORPC_RATIO, logoTop, logoH * MORPC_RATIO, logoH);
  return { src: cv.toDataURL("image/png"), width: 1080, height: 1080, links };
}

// Draws both graphics. assets holds data URIs for the QR code, the full-color Data Day
// logo, and the MORPC logo. Resolves to { slide, social }, each { src, width, height, links }
// with link regions in canvas pixels.
async function renderGraphics(assets) {
  try {
    await Promise.all([
      document.fonts.load('800 96px "Figtree"'),
      document.fonts.load('700 32px "Figtree"'),
      document.fonts.load('600 28px "Figtree"'),
      document.fonts.load('500 30px "Figtree"'),
      document.fonts.load('400 24px "JetBrains Mono"'),
    ]);
  } catch (e) { /* fall back to system fonts */ }
  const markSrc = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(TREND_MARK);
  const [mark, qr, ddLogo, morpc] = await Promise.all(
    [markSrc, assets.qr, assets.ddLogo, assets.morpc].map(loadImage));
  return { slide: drawSlide(mark, qr, ddLogo, morpc), social: drawSocial(mark, ddLogo, morpc) };
}

// Shows a rendered graphic in an <img> and lays clickable links over its link regions.
// The links are positioned in percentages so they track the image at any width.
function showGraphic(img, g) {
  img.src = g.src;
  g.links.forEach((l) => {
    const a = document.createElement("a");
    a.href = l.href; a.target = "_blank"; a.rel = "noopener";
    a.className = "hotspot";
    a.setAttribute("aria-label", l.label);
    a.title = l.label;
    Object.assign(a.style, {
      left: `${(l.x / g.width) * 100}%`, top: `${(l.y / g.height) * 100}%`,
      width: `${(l.w / g.width) * 100}%`, height: `${(l.h / g.height) * 100}%`,
    });
    img.parentElement.appendChild(a);
  });
}
