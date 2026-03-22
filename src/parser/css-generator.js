// ─── Chocolate Palette Reference ─────────────────────────────────────────────
// Void:      #1a0a00   Dark:    #2C1810   Rich:    #3D1F10   Deep:    #4A2515
// Mid:       #7B4A2D   Milk:    #8B5E3C   Caramel: #C68642   Gold:    #D4924A
// Cream:     #E8D5B7   Latte:   #F5E6D3   Light:   #FFF8F0   Muted:   #A0785A
// ─────────────────────────────────────────────────────────────────────────────

const utilities = {
  // ── BACKGROUND COLORS ──────────────────────────────────────────────────────
  "chai-choco-bg-void": `.chai-choco-bg-void          { background-color: #1a0a00; }`,
  "chai-choco-bg-darkest": `.chai-choco-bg-darkest       { background-color: #2C1810; }`,
  "chai-choco-bg-dark": `.chai-choco-bg-dark          { background-color: #3D1F10; }`,
  "chai-choco-bg-rich": `.chai-choco-bg-rich          { background-color: #4A2515; }`,
  "chai-choco-bg-mid": `.chai-choco-bg-mid           { background-color: #7B4A2D; }`,
  "chai-choco-bg-milk": `.chai-choco-bg-milk          { background-color: #8B5E3C; }`,
  "chai-choco-bg-caramel": `.chai-choco-bg-caramel       { background-color: #C68642; }`,
  "chai-choco-bg-gold": `.chai-choco-bg-gold          { background-color: #D4924A; }`,
  "chai-choco-bg-cream": `.chai-choco-bg-cream         { background-color: #E8D5B7; }`,
  "chai-choco-bg-latte": `.chai-choco-bg-latte         { background-color: #F5E6D3; }`,
  "chai-choco-bg-gradient": `.chai-choco-bg-gradient      { background: linear-gradient(135deg, #2C1810, #7B4A2D); }`,
  "chai-choco-bg-gradient-warm": `.chai-choco-bg-gradient-warm { background: linear-gradient(135deg, #4A2515, #C68642); }`,
  "chai-choco-bg-gradient-gold": `.chai-choco-bg-gradient-gold { background: linear-gradient(135deg, #7B4A2D, #D4924A); }`,

  // ── TEXT COLORS ────────────────────────────────────────────────────────────
  "chai-choco-text-light": `.chai-choco-text-light   { color: #FFF8F0; }`,
  "chai-choco-text-cream": `.chai-choco-text-cream   { color: #F5E6D3; }`,
  "chai-choco-text-muted": `.chai-choco-text-muted   { color: #A0785A; }`,
  "chai-choco-text-caramel": `.chai-choco-text-caramel { color: #C68642; }`,
  "chai-choco-text-gold": `.chai-choco-text-gold    { color: #D4924A; }`,
  "chai-choco-text-dark": `.chai-choco-text-dark    { color: #2C1810; }`,

  // ── LAYOUT ─────────────────────────────────────────────────────────────────
  "chai-choco-flex-center": `.chai-choco-flex-center  { display: flex; align-items: center; justify-content: center; }`,
  "chai-choco-flex-between": `.chai-choco-flex-between { display: flex; align-items: center; justify-content: space-between; }`,
  "chai-choco-flex-col": `.chai-choco-flex-col     { display: flex; flex-direction: column; }`,
  "chai-choco-flex-wrap": `.chai-choco-flex-wrap    { display: flex; flex-wrap: wrap; }`,
  "chai-choco-grid": `.chai-choco-grid         { display: grid; }`,
  "chai-choco-grid-2": `.chai-choco-grid-2       { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }`,
  "chai-choco-grid-3": `.chai-choco-grid-3       { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }`,
  "chai-choco-stack": `.chai-choco-stack > * + * { margin-top: 16px; }`,
  "chai-choco-container": `.chai-choco-container    { max-width: 1100px; margin: 0 auto; padding: 0 24px; }`,
  "chai-choco-w-full": `.chai-choco-w-full       { width: 100%; }`,
  "chai-choco-h-full": `.chai-choco-h-full       { height: 100%; }`,

  // ── TYPOGRAPHY ─────────────────────────────────────────────────────────────
  "chai-choco-font-bold": `.chai-choco-font-bold       { font-weight: 700; }`,
  "chai-choco-font-semibold": `.chai-choco-font-semibold   { font-weight: 600; }`,
  "chai-choco-font-medium": `.chai-choco-font-medium     { font-weight: 500; }`,
  "chai-choco-font-light": `.chai-choco-font-light      { font-weight: 300; }`,
  "chai-choco-uppercase": `.chai-choco-uppercase       { text-transform: uppercase; }`,
  "chai-choco-capitalize": `.chai-choco-capitalize      { text-transform: capitalize; }`,
  "chai-choco-italic": `.chai-choco-italic          { font-style: italic; }`,
  "chai-choco-tracking-wide": `.chai-choco-tracking-wide   { letter-spacing: 0.08em; }`,
  "chai-choco-tracking-wider": `.chai-choco-tracking-wider  { letter-spacing: 0.15em; }`,
  "chai-choco-leading-snug": `.chai-choco-leading-snug    { line-height: 1.35; }`,
  "chai-choco-leading-relaxed": `.chai-choco-leading-relaxed { line-height: 1.75; }`,
  "chai-choco-text-center": `.chai-choco-text-center     { text-align: center; }`,
  "chai-choco-text-left": `.chai-choco-text-left       { text-align: left; }`,
  "chai-choco-text-right": `.chai-choco-text-right      { text-align: right; }`,
  "chai-choco-truncate": `.chai-choco-truncate        { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }`,

  // ── BORDER RADIUS ──────────────────────────────────────────────────────────
  "chai-choco-rounded-sm": `.chai-choco-rounded-sm   { border-radius: 6px; }`,
  "chai-choco-rounded": `.chai-choco-rounded      { border-radius: 10px; }`,
  "chai-choco-rounded-lg": `.chai-choco-rounded-lg   { border-radius: 16px; }`,
  "chai-choco-rounded-xl": `.chai-choco-rounded-xl   { border-radius: 24px; }`,
  "chai-choco-rounded-full": `.chai-choco-rounded-full { border-radius: 9999px; }`,

  // ── BORDERS ────────────────────────────────────────────────────────────────
  "chai-choco-border": `.chai-choco-border         { border: 1px solid #7B4A2D; }`,
  "chai-choco-border-cream": `.chai-choco-border-cream   { border: 1px solid #E8D5B7; }`,
  "chai-choco-border-caramel": `.chai-choco-border-caramel { border: 1px solid #C68642; }`,
  "chai-choco-border-2": `.chai-choco-border-2       { border: 2px solid #7B4A2D; }`,
  "chai-choco-outline-none": `.chai-choco-outline-none   { outline: none; }`,

  // ── SHADOWS ────────────────────────────────────────────────────────────────
  "chai-choco-shadow-soft": `.chai-choco-shadow-soft    { box-shadow: 0 4px 16px rgba(44,24,16,0.25); }`,
  "chai-choco-shadow-md": `.chai-choco-shadow-md      { box-shadow: 0 8px 28px rgba(44,24,16,0.35); }`,
  "chai-choco-shadow-hard": `.chai-choco-shadow-hard    { box-shadow: 0 12px 40px rgba(26,10,0,0.55); }`,
  "chai-choco-shadow-caramel": `.chai-choco-shadow-caramel { box-shadow: 0 0 24px rgba(198,134,66,0.45); }`,
  "chai-choco-shadow-glow": `.chai-choco-shadow-glow    { box-shadow: 0 0 32px rgba(212,146,74,0.65); }`,

  // ── BUTTONS ────────────────────────────────────────────────────────────────
  "chai-choco-btn": `
    .chai-choco-btn {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 12px 28px;
      border-radius: 12px;
      font-weight: 600;
      font-size: 15px;
      color: #FFF8F0;
      background: linear-gradient(135deg, #4A2515, #C68642);
      cursor: pointer;
      border: none;
      overflow: hidden;
      transition: all 0.3s ease;
      text-decoration: none;
    }
    .chai-choco-btn:hover  { transform: translateY(-2px) scale(1.03); box-shadow: 0 10px 28px rgba(198,134,66,0.45); }
    .chai-choco-btn:active { transform: scale(0.97); }
    .chai-choco-btn::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(120deg, transparent, rgba(255,248,240,0.35), transparent);
      transform: translateX(-100%);
      transition: transform 0.55s ease;
    }
    .chai-choco-btn:hover::before { transform: translateX(100%); }`,

  "chai-choco-btn-outline": `
    .chai-choco-btn-outline {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 12px 28px;
      border-radius: 12px;
      font-weight: 600;
      font-size: 15px;
      color: #C68642;
      background: transparent;
      border: 2px solid #C68642;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
    }
    .chai-choco-btn-outline:hover  { background: #C68642; color: #1a0a00; transform: translateY(-2px); }
    .chai-choco-btn-outline:active { transform: scale(0.97); }`,

  "chai-choco-btn-ghost": `
    .chai-choco-btn-ghost {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 10px 24px;
      border-radius: 10px;
      font-weight: 500;
      font-size: 15px;
      color: #F5E6D3;
      background: rgba(245,230,211,0.06);
      border: 1px solid rgba(245,230,211,0.15);
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
    }
    .chai-choco-btn-ghost:hover  { background: rgba(245,230,211,0.14); border-color: rgba(245,230,211,0.3); transform: translateY(-1px); }
    .chai-choco-btn-ghost:active { transform: scale(0.97); }`,

  "chai-choco-btn-sm": `.chai-choco-btn-sm { padding: 7px 18px !important; font-size: 13px !important; border-radius: 8px !important; }`,
  "chai-choco-btn-lg": `.chai-choco-btn-lg { padding: 16px 36px !important; font-size: 17px !important; border-radius: 16px !important; }`,

  // ── CARDS ──────────────────────────────────────────────────────────────────
  "chai-choco-card": `
    .chai-choco-card {
      background: #2C1810;
      border-radius: 16px;
      padding: 24px;
      border: 1px solid #4A2515;
      box-shadow: 0 4px 16px rgba(26,10,0,0.4);
      color: #FFF8F0;
      transition: all 0.3s ease;
    }
    .chai-choco-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(26,10,0,0.6); border-color: #7B4A2D; }`,

  "chai-choco-card-cream": `
    .chai-choco-card-cream {
      background: #F5E6D3;
      border-radius: 16px;
      padding: 24px;
      border: 1px solid #E8D5B7;
      box-shadow: 0 4px 20px rgba(44,24,16,0.12);
      color: #2C1810;
      transition: all 0.3s ease;
    }
    .chai-choco-card-cream:hover { transform: translateY(-4px); box-shadow: 0 14px 36px rgba(44,24,16,0.22); }`,

  "chai-choco-card-glass": `
    .chai-choco-card-glass {
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      background: rgba(44,24,16,0.45);
      border-radius: 16px;
      padding: 24px;
      border: 1px solid rgba(198,134,66,0.2);
      color: #FFF8F0;
      transition: all 0.3s ease;
    }
    .chai-choco-card-glass:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(198,134,66,0.25); border-color: rgba(198,134,66,0.4); }`,

  // ── BADGES ─────────────────────────────────────────────────────────────────
  "chai-choco-badge": `
    .chai-choco-badge {
      display: inline-flex;
      align-items: center;
      padding: 4px 12px;
      border-radius: 9999px;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.04em;
      background: #4A2515;
      color: #F5E6D3;
    }`,

  "chai-choco-badge-caramel": `
    .chai-choco-badge-caramel {
      display: inline-flex;
      align-items: center;
      padding: 4px 12px;
      border-radius: 9999px;
      font-size: 12px;
      font-weight: 600;
      background: rgba(198,134,66,0.18);
      color: #D4924A;
      border: 1px solid rgba(198,134,66,0.35);
    }`,

  "chai-choco-badge-cream": `
    .chai-choco-badge-cream {
      display: inline-flex;
      align-items: center;
      padding: 4px 12px;
      border-radius: 9999px;
      font-size: 12px;
      font-weight: 600;
      background: rgba(245,230,211,0.12);
      color: #F5E6D3;
      border: 1px solid rgba(245,230,211,0.22);
    }`,

  "chai-choco-badge-dark": `
    .chai-choco-badge-dark {
      display: inline-flex;
      align-items: center;
      padding: 4px 12px;
      border-radius: 9999px;
      font-size: 12px;
      font-weight: 600;
      background: #1a0a00;
      color: #C68642;
      border: 1px solid #3D1F10;
    }`,

  // ── INPUTS ─────────────────────────────────────────────────────────────────
  "chai-choco-input": `
    .chai-choco-input {
      width: 100%;
      padding: 10px 16px;
      border-radius: 10px;
      background: #2C1810;
      border: 1px solid #4A2515;
      color: #FFF8F0;
      font-size: 15px;
      outline: none;
      transition: border-color 0.25s ease, box-shadow 0.25s ease;
      box-sizing: border-box;
    }
    .chai-choco-input::placeholder { color: #A0785A; }
    .chai-choco-input:focus { border-color: #C68642; box-shadow: 0 0 0 3px rgba(198,134,66,0.2); }`,

  "chai-choco-input-cream": `
    .chai-choco-input-cream {
      width: 100%;
      padding: 10px 16px;
      border-radius: 10px;
      background: #FFF8F0;
      border: 1px solid #E8D5B7;
      color: #2C1810;
      font-size: 15px;
      outline: none;
      transition: border-color 0.25s ease, box-shadow 0.25s ease;
      box-sizing: border-box;
    }
    .chai-choco-input-cream::placeholder { color: #A0785A; }
    .chai-choco-input-cream:focus { border-color: #C68642; box-shadow: 0 0 0 3px rgba(198,134,66,0.15); }`,

  "chai-choco-label": `
    .chai-choco-label {
      display: block;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.07em;
      text-transform: uppercase;
      color: #A0785A;
      margin-bottom: 6px;
    }`,

  // ── INTERACTIONS ───────────────────────────────────────────────────────────
  "chai-choco-hover-lift": `.chai-choco-hover-lift   { transition: transform 0.3s ease; } .chai-choco-hover-lift:hover   { transform: translateY(-5px); }`,
  "chai-choco-hover-scale": `.chai-choco-hover-scale  { transition: transform 0.3s ease; } .chai-choco-hover-scale:hover  { transform: scale(1.05); }`,
  "chai-choco-hover-glow": `.chai-choco-hover-glow   { transition: box-shadow 0.3s ease; } .chai-choco-hover-glow:hover  { box-shadow: 0 0 20px rgba(198,134,66,0.4); }`,
  "chai-choco-hover-bright": `.chai-choco-hover-bright { transition: filter 0.25s ease; } .chai-choco-hover-bright:hover { filter: brightness(1.12); }`,
  "chai-choco-cursor-pointer": `.chai-choco-cursor-pointer  { cursor: pointer; }`,
  "chai-choco-select-none": `.chai-choco-select-none     { user-select: none; }`,
  "chai-choco-transition": `.chai-choco-transition      { transition: all 0.3s ease; }`,
  "chai-choco-transition-fast": `.chai-choco-transition-fast { transition: all 0.15s ease; }`,
  "chai-choco-pointer-none": `.chai-choco-pointer-none    { pointer-events: none; }`,

  // ── ANIMATIONS ─────────────────────────────────────────────────────────────
  "chai-choco-fade-in": `
    .chai-choco-fade-in { animation: chocoFadeIn 0.6s ease forwards; }
    @keyframes chocoFadeIn {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }`,

  "chai-choco-slide-up": `
    .chai-choco-slide-up { animation: chocoSlideUp 0.5s ease-out; }
    @keyframes chocoSlideUp {
      from { transform: translateY(24px); opacity: 0; }
      to   { transform: translateY(0);    opacity: 1; }
    }`,

  "chai-choco-slide-in": `
    .chai-choco-slide-in { animation: chocoSlideIn 0.4s ease-out; }
    @keyframes chocoSlideIn {
      from { transform: translateX(-20px); opacity: 0; }
      to   { transform: translateX(0);     opacity: 1; }
    }`,

  "chai-choco-bounce": `
    .chai-choco-bounce { animation: chocoBounce 1.2s ease infinite; }
    @keyframes chocoBounce {
      0%, 100% { transform: translateY(0); }
      50%      { transform: translateY(-10px); }
    }`,

  "chai-choco-pulse": `
    .chai-choco-pulse { animation: chocoPulse 2s ease infinite; }
    @keyframes chocoPulse {
      0%, 100% { opacity: 1; }
      50%      { opacity: 0.55; }
    }`,

  "chai-choco-glow-pulse": `
    .chai-choco-glow-pulse { animation: chocoGlowPulse 2s ease infinite; }
    @keyframes chocoGlowPulse {
      0%, 100% { box-shadow: 0 0 0    rgba(198,134,66,0.3); }
      50%      { box-shadow: 0 0 28px rgba(198,134,66,0.85); }
    }`,

  "chai-choco-shimmer": `
    .chai-choco-shimmer { position: relative; overflow: hidden; }
    .chai-choco-shimmer::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, transparent 0%, rgba(212,146,74,0.25) 50%, transparent 100%);
      transform: translateX(-100%);
      animation: chocoShimmer 2s ease infinite;
    }
    @keyframes chocoShimmer {
      from { transform: translateX(-100%); }
      to   { transform: translateX(100%); }
    }`,

  "chai-choco-spin": `
    .chai-choco-spin { animation: chocoSpin 1s linear infinite; }
    @keyframes chocoSpin {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }`,

  // ── MISC ───────────────────────────────────────────────────────────────────
  "chai-choco-divider": `.chai-choco-divider { border: none; border-top: 1px solid #3D1F10; margin: 16px 0; }`,

  "chai-choco-avatar": `
    .chai-choco-avatar {
      width: 48px;
      height: 48px;
      border-radius: 9999px;
      overflow: hidden;
      background: #4A2515;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #FFF8F0;
      font-weight: 600;
      font-size: 16px;
      flex-shrink: 0;
    }`,

  "chai-choco-chip": `
    .chai-choco-chip {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 9999px;
      font-size: 11px;
      font-weight: 500;
      background: #3D1F10;
      color: #C68642;
    }`,

  "chai-choco-sr-only": `
    .chai-choco-sr-only {
      position: absolute;
      width: 1px; height: 1px;
      padding: 0; margin: -1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      border: 0;
    }`,
};

// ── DYNAMIC RULES ─────────────────────────────────────────────────────────────
// Single-property: chai-choco-{prefix}-{n} → property: n × multiplier px
const dynamicRules = [
  { prefix: "chai-choco-p-", property: "padding", multiplier: 4 },
  { prefix: "chai-choco-pt-", property: "padding-top", multiplier: 4 },
  { prefix: "chai-choco-pb-", property: "padding-bottom", multiplier: 4 },
  { prefix: "chai-choco-m-", property: "margin", multiplier: 4 },
  { prefix: "chai-choco-mt-", property: "margin-top", multiplier: 4 },
  { prefix: "chai-choco-mb-", property: "margin-bottom", multiplier: 4 },
  { prefix: "chai-choco-gap-", property: "gap", multiplier: 4 },
  { prefix: "chai-choco-text-", property: "font-size", multiplier: 1 },
  // Note: chai-choco-text-{word} classes (light, cream, etc.) resolve via the
  // static utilities map above. parseInt("light") === NaN → skipped safely.
];

// Multi-property dynamic handlers (px/py/mx/my set two properties at once)
const multiPropRules = [
  {
    prefix: "chai-choco-px-",
    props: (v) => `padding-left: ${v}px; padding-right: ${v}px;`,
    multiplier: 4,
  },
  {
    prefix: "chai-choco-py-",
    props: (v) => `padding-top: ${v}px; padding-bottom: ${v}px;`,
    multiplier: 4,
  },
  {
    prefix: "chai-choco-mx-",
    props: (v) => `margin-left: ${v}px; margin-right: ${v}px;`,
    multiplier: 4,
  },
  {
    prefix: "chai-choco-my-",
    props: (v) => `margin-top: ${v}px; margin-bottom: ${v}px;`,
    multiplier: 4,
  },
];

export function generateCSS(classes) {
  let css = "";

  for (const cls of classes) {
    // 1. Static lookup first
    if (utilities[cls]) {
      css += utilities[cls] + "\n";
      continue;
    }

    // 2. Single-property dynamic rules
    let matched = false;
    for (const { prefix, property, multiplier } of dynamicRules) {
      if (cls.startsWith(prefix)) {
        const val = parseInt(cls.slice(prefix.length));
        if (!isNaN(val)) {
          css += `.${cls} { ${property}: ${val * multiplier}px; }\n`;
        }
        matched = true;
        break;
      }
    }
    if (matched) continue;

    // 3. Multi-property dynamic rules
    for (const { prefix, props, multiplier } of multiPropRules) {
      if (cls.startsWith(prefix)) {
        const val = parseInt(cls.slice(prefix.length));
        if (!isNaN(val)) {
          css += `.${cls} { ${props(val * multiplier)} }\n`;
        }
        break;
      }
    }
  }

  return css;
}
