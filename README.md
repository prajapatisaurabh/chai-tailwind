# chai-choco-tailwind 🍫

[![npm](https://img.shields.io/npm/v/chai-choco-tailwind)](https://www.npmjs.com/package/chai-choco-tailwind)
[![license](https://img.shields.io/npm/l/chai-choco-tailwind)](LICENSE)

A chocolate-themed, **zero-build-step** runtime CSS utility engine. Drop in one script tag — no PostCSS, no config file, no compilation needed.

---

## Install

```bash
npm install chai-choco-tailwind
```

```js
// Import in your entry file — engine auto-runs on import
import 'chai-choco-tailwind'
```

**Or via CDN (plain HTML):**

```html
<script type="module"
  src="https://unpkg.com/chai-choco-tailwind/dist/chai-choco-tailwind.esm.js">
</script>
```

---

## Quick Example

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Choco Page</title>
  <script type="module"
    src="https://unpkg.com/chai-choco-tailwind/dist/chai-choco-tailwind.esm.js">
  </script>
</head>
<body class="chai-choco-bg-void">

  <div class="chai-choco-flex-center chai-choco-p-10">
    <div class="chai-choco-card chai-choco-stack">

      <span class="chai-choco-badge-caramel">New</span>

      <h1 class="chai-choco-font-bold chai-choco-text-32 chai-choco-text-caramel">
        Hello, Choco World! 🍫
      </h1>

      <p class="chai-choco-text-muted chai-choco-leading-relaxed">
        Runtime CSS. No build step. Just drop in the script tag.
      </p>

      <button class="chai-choco-btn chai-choco-glow-pulse">Get Started</button>

    </div>
  </div>

</body>
</html>
```

---

## How it works

The engine runs as three sequential steps on import:

1. **Scan** — reads all `class="..."` attributes from the DOM
2. **Generate** — maps class names to CSS (static map + dynamic pattern rules)
3. **Inject** — appends a single `<style data-chai-choco>` tag to `<head>`

Only the classes you actually use are included in the output.

---

## Utility Classes

All classes use the `chai-choco-` prefix.

### Backgrounds

| Class | Value |
|---|---|
| `chai-choco-bg-void` | `#1a0a00` |
| `chai-choco-bg-darkest` | `#2C1810` |
| `chai-choco-bg-dark` | `#3D1F10` |
| `chai-choco-bg-rich` | `#4A2515` |
| `chai-choco-bg-mid` | `#7B4A2D` |
| `chai-choco-bg-milk` | `#8B5E3C` |
| `chai-choco-bg-caramel` | `#C68642` |
| `chai-choco-bg-gold` | `#D4924A` |
| `chai-choco-bg-cream` | `#E8D5B7` |
| `chai-choco-bg-latte` | `#F5E6D3` |
| `chai-choco-bg-gradient` | dark → mid choco |
| `chai-choco-bg-gradient-warm` | deep → caramel |
| `chai-choco-bg-gradient-gold` | mid → gold |

### Text Colors

| Class | Value |
|---|---|
| `chai-choco-text-light` | `#FFF8F0` |
| `chai-choco-text-cream` | `#F5E6D3` |
| `chai-choco-text-muted` | `#A0785A` |
| `chai-choco-text-caramel` | `#C68642` |
| `chai-choco-text-gold` | `#D4924A` |
| `chai-choco-text-dark` | `#2C1810` |

### Layout

| Class | Effect |
|---|---|
| `chai-choco-flex-center` | Flex, center both axes |
| `chai-choco-flex-between` | Flex, space-between |
| `chai-choco-flex-col` | Flex column |
| `chai-choco-flex-wrap` | Flex wrap |
| `chai-choco-grid` | `display: grid` |
| `chai-choco-grid-2` | 2-column grid, 20px gap |
| `chai-choco-grid-3` | 3-column grid, 20px gap |
| `chai-choco-stack` | `> * + *` vertical spacing |
| `chai-choco-container` | Centered, max-width 1100px |
| `chai-choco-w-full` | `width: 100%` |
| `chai-choco-h-full` | `height: 100%` |

### Spacing (Dynamic)

| Class | Effect |
|---|---|
| `chai-choco-p-{n}` | `padding: n × 4px` |
| `chai-choco-pt-{n}` | `padding-top: n × 4px` |
| `chai-choco-pb-{n}` | `padding-bottom: n × 4px` |
| `chai-choco-px-{n}` | `padding-left + right: n × 4px` |
| `chai-choco-py-{n}` | `padding-top + bottom: n × 4px` |
| `chai-choco-m-{n}` | `margin: n × 4px` |
| `chai-choco-mt-{n}` | `margin-top: n × 4px` |
| `chai-choco-mb-{n}` | `margin-bottom: n × 4px` |
| `chai-choco-mx-{n}` | `margin-left + right: n × 4px` |
| `chai-choco-my-{n}` | `margin-top + bottom: n × 4px` |
| `chai-choco-gap-{n}` | `gap: n × 4px` |

### Typography

| Class | Effect |
|---|---|
| `chai-choco-text-{n}` | `font-size: npx` |
| `chai-choco-font-bold` | `font-weight: 700` |
| `chai-choco-font-semibold` | `font-weight: 600` |
| `chai-choco-font-medium` | `font-weight: 500` |
| `chai-choco-font-light` | `font-weight: 300` |
| `chai-choco-uppercase` | `text-transform: uppercase` |
| `chai-choco-capitalize` | `text-transform: capitalize` |
| `chai-choco-italic` | `font-style: italic` |
| `chai-choco-tracking-wide` | `letter-spacing: 0.08em` |
| `chai-choco-tracking-wider` | `letter-spacing: 0.15em` |
| `chai-choco-leading-snug` | `line-height: 1.35` |
| `chai-choco-leading-relaxed` | `line-height: 1.75` |
| `chai-choco-text-center/left/right` | text alignment |
| `chai-choco-truncate` | ellipsis overflow |

### Borders & Shadows

| Class | Effect |
|---|---|
| `chai-choco-rounded-sm` | `border-radius: 6px` |
| `chai-choco-rounded` | `border-radius: 10px` |
| `chai-choco-rounded-lg` | `border-radius: 16px` |
| `chai-choco-rounded-xl` | `border-radius: 24px` |
| `chai-choco-rounded-full` | `border-radius: 9999px` |
| `chai-choco-border` | `1px solid #7B4A2D` |
| `chai-choco-border-cream` | `1px solid #E8D5B7` |
| `chai-choco-border-caramel` | `1px solid #C68642` |
| `chai-choco-border-2` | `2px solid #7B4A2D` |
| `chai-choco-shadow-soft` | Subtle chocolate shadow |
| `chai-choco-shadow-md` | Medium shadow |
| `chai-choco-shadow-hard` | Deep shadow |
| `chai-choco-shadow-caramel` | Caramel ambient glow |
| `chai-choco-shadow-glow` | Gold glow shadow |

### Components

| Class | Effect |
|---|---|
| `chai-choco-btn` | Gradient button + shimmer on hover |
| `chai-choco-btn-outline` | Caramel border, fills on hover |
| `chai-choco-btn-ghost` | Subtle transparent button |
| `chai-choco-btn-sm` | Small size modifier |
| `chai-choco-btn-lg` | Large size modifier |
| `chai-choco-card` | Dark chocolate card |
| `chai-choco-card-cream` | Light latte card |
| `chai-choco-card-glass` | Glassmorphism card |
| `chai-choco-badge` | Pill badge (dark) |
| `chai-choco-badge-caramel` | Caramel tint badge |
| `chai-choco-badge-cream` | Cream tint badge |
| `chai-choco-badge-dark` | Void-dark badge |
| `chai-choco-chip` | Small tag chip |
| `chai-choco-input` | Dark-mode input |
| `chai-choco-input-cream` | Light-mode input |
| `chai-choco-label` | Form label |
| `chai-choco-avatar` | Circular avatar container |
| `chai-choco-divider` | Horizontal rule |

### Interactions

| Class | Effect |
|---|---|
| `chai-choco-hover-lift` | `translateY(-5px)` on hover |
| `chai-choco-hover-scale` | `scale(1.05)` on hover |
| `chai-choco-hover-glow` | Caramel glow on hover |
| `chai-choco-hover-bright` | `brightness(1.12)` on hover |
| `chai-choco-cursor-pointer` | `cursor: pointer` |
| `chai-choco-select-none` | `user-select: none` |
| `chai-choco-transition` | `transition: all 0.3s ease` |
| `chai-choco-transition-fast` | `transition: all 0.15s ease` |

### Animations

| Class | Effect |
|---|---|
| `chai-choco-fade-in` | Fade in + slide up |
| `chai-choco-slide-up` | Slide up from below |
| `chai-choco-slide-in` | Slide in from left |
| `chai-choco-bounce` | Infinite vertical bounce |
| `chai-choco-pulse` | Opacity pulse |
| `chai-choco-glow-pulse` | Caramel glow pulse |
| `chai-choco-shimmer` | Gold shimmer sweep |
| `chai-choco-spin` | Continuous rotation |

---

## Development

```bash
npm install
npm run dev      # start Vite dev server
npm run build    # build dist/ for npm publish
npm run preview  # preview the production build
npm pack         # create .tgz tarball
```

---

## Project Structure

```
chai-choco-tailwind/
├── src/
│   ├── index.js                  # Engine entry — auto-runs on import
│   └── parser/
│       ├── class-extractor.js    # Scans DOM for chai-choco-* classes
│       ├── css-generator.js      # Maps classes → CSS (static + dynamic)
│       └── style-injector.js     # Injects <style> into <head>
├── dist/                         # Built output (after npm run build)
├── index.html                    # Live demo + docs page
├── vite.config.js                # Library mode build config
└── package.json
```

---

## Author

**Saurabh Prajapati** — MIT License

Made with 🍫 for the ChaiCode community.
