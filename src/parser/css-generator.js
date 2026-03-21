const utilities = {
  // COLORS
  "chai-bg-primary": `.chai-bg-primary { background: linear-gradient(135deg, #6366f1, #8b5cf6); }`,
  "chai-bg-dark": `.chai-bg-dark { background-color: #0f172a; }`,
  "chai-text-light": `.chai-text-light { color: #f8fafc; }`,
  "chai-text-muted": `.chai-text-muted { color: #94a3b8; }`,

  // LAYOUT
  "chai-flex-center": `.chai-flex-center { display: flex; align-items: center; justify-content: center; }`,
  "chai-grid": `.chai-grid { display: grid; }`,
  "chai-stack": `.chai-stack > * + * { margin-top: 12px; }`,

  // BORDER / RADIUS
  "chai-rounded": `.chai-rounded { border-radius: 8px; }`,
  "chai-rounded-xl": `.chai-rounded-xl { border-radius: 20px; }`,
  "chai-border": `.chai-border { border: 1px solid #e5e7eb; }`,

  // SHADOW
  "chai-shadow-soft": `.chai-shadow-soft { box-shadow: 0 4px 20px rgba(0,0,0,0.08); }`,
  "chai-shadow-glow": `.chai-shadow-glow { box-shadow: 0 0 20px rgba(99,102,241,0.6); }`,

  // TYPOGRAPHY
  "chai-font-bold": `.chai-font-bold { font-weight: 700; }`,
  "chai-uppercase": `.chai-uppercase { text-transform: uppercase; }`,

  // ANIMATIONS
  "chai-fade-in": `
    .chai-fade-in { animation: chaiFadeIn 0.6s ease forwards; }
    @keyframes chaiFadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to   { opacity: 1; transform: translateY(0); }
    }`,

  "chai-slide-up": `
    .chai-slide-up { animation: chaiSlideUp 0.5s ease-out; }
    @keyframes chaiSlideUp {
      from { transform: translateY(20px); opacity: 0; }
      to   { transform: translateY(0);    opacity: 1; }
    }`,

  "chai-bounce": `
    .chai-bounce { animation: chaiBounce 1s infinite; }
    @keyframes chaiBounce {
      0%, 100% { transform: translateY(0); }
      50%      { transform: translateY(-10px); }
    }`,

  "chai-glow-pulse": `
    .chai-glow-pulse { animation: chaiGlowPulse 2s infinite; }
    @keyframes chaiGlowPulse {
      0%,100% { box-shadow: 0 0 0  rgba(99,102,241,0.4); }
      50%     { box-shadow: 0 0 20px rgba(99,102,241,0.9); }
    }`,

  // BUTTON
  "chai-btn": `
    .chai-btn {
      position: relative;
      padding: 12px 28px;
      border-radius: 12px;
      font-weight: 600;
      color: white;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      cursor: pointer;
      overflow: hidden;
      transition: all 0.3s ease;
    }
    .chai-btn:hover  { transform: translateY(-2px) scale(1.03); box-shadow: 0 10px 25px rgba(99,102,241,0.4); }
    .chai-btn:active { transform: scale(0.97); }
    .chai-btn::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent);
      transform: translateX(-100%);
      transition: transform 0.6s;
    }
    .chai-btn:hover::before { transform: translateX(100%); }`,

  // GLASS CARD
  "chai-card-glass": `
    .chai-card-glass {
      backdrop-filter: blur(14px);
      background: rgba(255,255,255,0.08);
      border-radius: 16px;
      padding: 20px;
      border: 1px solid rgba(255,255,255,0.15);
      transition: all 0.3s ease;
    }
    .chai-card-glass:hover { transform: translateY(-6px); box-shadow: 0 15px 40px rgba(0,0,0,0.2); }`,

  // CARD
  "chai-card": `
    .chai-card {
      background: #ffffff;
      border-radius: 16px;
      padding: 20px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
    }
    .chai-card:hover { transform: translateY(-4px); box-shadow: 0 20px 50px rgba(0,0,0,0.2); }`,

  // INTERACTIONS
  "chai-hover-lift": `.chai-hover-lift { transition: transform 0.3s ease; } .chai-hover-lift:hover { transform: translateY(-5px); }`,
  "chai-hover-scale": `.chai-hover-scale { transition: transform 0.3s ease; } .chai-hover-scale:hover { transform: scale(1.05); }`,
};

const dynamicRules = [
  { prefix: "chai-p-", property: "padding", multiplier: 4 },
  { prefix: "chai-m-", property: "margin", multiplier: 4 },
  { prefix: "chai-text-", property: "font-size", multiplier: 1 },
];

export function generateCSS(classes) {
  let css = "";

  for (const cls of classes) {
    if (utilities[cls]) {
      css += utilities[cls] + "\n";
      continue;
    }

    for (const { prefix, property, multiplier } of dynamicRules) {
      if (cls.startsWith(prefix)) {
        const val = parseInt(cls.slice(prefix.length));
        if (!isNaN(val)) {
          css += `.${cls} { ${property}: ${val * multiplier}px; }\n`;
        }
        break;
      }
    }
  }

  return css;
}
