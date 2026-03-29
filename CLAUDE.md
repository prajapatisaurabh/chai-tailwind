# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Start development server (with HMR)
npm run dev

# Build dist/ bundles for npm publish
npm run build

# Preview production build
npm run preview

# Create npm package tarball (dry-run: npm pack --dry-run)
npm run pack

# Publish to npm
npm publish --access public
```

No test framework is configured.

## Architecture

`chai-choco-tailwind` is a **zero-build-step, runtime CSS utility engine** with a chocolate color palette. It scans the DOM for `chai-choco-*` classes and injects matching CSS directly into `<head>`. No PostCSS, no config file, no compilation.

### Three-module pipeline (`src/parser/`)

```
initStyleEngine()  ← src/index.js
  ├── extractClasses()   ← src/parser/class-extractor.js
  │     Reads document.body.innerHTML, extracts all unique class names via regex
  ├── generateCSS()      ← src/parser/css-generator.js
  │     Maps classes → CSS strings (static map + dynamic pattern rules)
  └── applyStyles()      ← src/parser/style-injector.js
        Creates <style data-chai-choco> element, appends to document.head
        (HMR-safe: removes any existing injection before re-injecting)
```

**class-extractor.js** — regex-parses `class="..."` attributes from raw HTML string, returns a deduplicated array.

**css-generator.js** — three rule types:

- _Static map:_ fixed class-name → CSS string (colors, layout, buttons, cards, badges, inputs, animations, etc.)
- _Single-property dynamic:_ `chai-choco-p-{n}` → `padding: n×4px`, `chai-choco-gap-{n}` → `gap: n×4px`, `chai-choco-text-{n}` → `font-size: npx`
- _Multi-property dynamic:_ `chai-choco-px-{n}` → `padding-left + right`, `chai-choco-py-{n}`, `chai-choco-mx-{n}`, `chai-choco-my-{n}`

**style-injector.js** — removes any prior `[data-chai-choco]` style tag, then injects the generated CSS string.

The engine runs **immediately on import** (called at the bottom of `src/index.js`). The demo+docs page is `index.html`.

### Package distribution

- `npm run build` → outputs `dist/chai-choco-tailwind.esm.js` (ESM) and `dist/chai-choco-tailwind.umd.js` (UMD/CDN)
- `package.json` `exports` field has dual-format conditional: `import` → ESM, `require` → UMD
- `files` includes both `dist/` and `src/` so consumers can import raw source if preferred
- Build is configured in `vite.config.js` with Vite library mode

### Adding new utilities

- **Static class:** add an entry to the `utilities` object in `css-generator.js`
- **Single-property dynamic:** add to the `dynamicRules` array
- **Multi-property dynamic:** add to the `multiPropRules` array with a `props` function
- No changes needed outside `css-generator.js` for any of the above

### Chocolate palette

`#1a0a00` void → `#2C1810` dark → `#3D1F10` rich → `#4A2515` deep → `#7B4A2D` mid → `#8B5E3C` milk → `#C68642` caramel → `#D4924A` gold → `#E8D5B7` cream → `#F5E6D3` latte → `#FFF8F0` light text → `#A0785A` muted text
