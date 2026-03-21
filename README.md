# Chai Tailwind

A lightweight, runtime CSS utility engine — inspired by Tailwind CSS but with **zero build step**.

## What is this?

Chai Tailwind is a minimal CSS-in-JS-style engine that scans your HTML for `chai-*` utility classes at runtime and injects the matching CSS directly into the `<head>` — no PostCSS, no config file, no compilation needed.

Think of it as a micro Tailwind that works in any plain HTML file by just dropping in a `<script>` tag.

---

## How it works

The engine is split into three modules:

### 1. [src/parser/class-extractor.js](src/parser/class-extractor.js)

Reads `document.body.innerHTML` and extracts every unique class name using a regex scan over `class="..."` attributes.

### 2. [src/parser/css-generator.js](src/parser/css-generator.js)

Takes the list of extracted classes and generates CSS strings by:

- Looking up **static utilities** (e.g. `chai-bg-dark`, `chai-btn`, `chai-card-glass`) in a predefined map
- Applying **dynamic rules** for pattern-based classes like `chai-p-4` → `padding: 16px`, `chai-text-18` → `font-size: 18px`

### 3. [src/parser/style-injector.js](src/parser/style-injector.js)

Creates a `<style>` element, sets its content to the generated CSS, and appends it to `<head>`.

### Entry point: [src/index.js](src/index.js)

Orchestrates all three steps in sequence on page load.

---

## Available Utility Classes

### Colors

| Class             | Effect                      |
| ----------------- | --------------------------- |
| `chai-bg-dark`    | Dark background (`#0f172a`) |
| `chai-bg-primary` | Indigo-to-violet gradient   |
| `chai-text-light` | Light text (`#f8fafc`)      |
| `chai-text-muted` | Muted text (`#94a3b8`)      |

### Layout

| Class              | Effect                      |
| ------------------ | --------------------------- |
| `chai-flex-center` | Flex row, centered          |
| `chai-stack`       | Vertical stack with spacing |
| `chai-grid`        | `display: grid`             |

### Spacing (Dynamic)

| Class        | Effect             |
| ------------ | ------------------ |
| `chai-p-{n}` | `padding: n × 4px` |
| `chai-m-{n}` | `margin: n × 4px`  |

### Typography (Dynamic)

| Class            | Effect                      |
| ---------------- | --------------------------- |
| `chai-text-{n}`  | `font-size: npx`            |
| `chai-font-bold` | `font-weight: 700`          |
| `chai-uppercase` | `text-transform: uppercase` |

### Borders & Shadows

| Class              | Effect                |
| ------------------ | --------------------- |
| `chai-rounded`     | `border-radius: 8px`  |
| `chai-rounded-xl`  | `border-radius: 20px` |
| `chai-border`      | `1px solid` border    |
| `chai-shadow-soft` | Subtle drop shadow    |
| `chai-shadow-glow` | Indigo glow shadow    |

### Components

| Class             | Effect                                    |
| ----------------- | ----------------------------------------- |
| `chai-btn`        | Styled gradient button with shimmer hover |
| `chai-card`       | White card with hover lift                |
| `chai-card-glass` | Glassmorphism card with blur              |

### Interactions

| Class              | Effect                  |
| ------------------ | ----------------------- |
| `chai-hover-lift`  | Lifts element on hover  |
| `chai-hover-scale` | Scales element on hover |

### Animations

| Class             | Effect                     |
| ----------------- | -------------------------- |
| `chai-fade-in`    | Fade in + slide up on load |
| `chai-slide-up`   | Slide up on load           |
| `chai-bounce`     | Infinite bounce            |
| `chai-glow-pulse` | Pulsing glow effect        |

---

## Usage

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My App</title>
  </head>
  <body class="chai-bg-dark">
    <div class="chai-flex-center chai-p-10">
      <h1 class="chai-text-light chai-font-bold chai-text-32 chai-fade-in">
        Hello, Chai!
      </h1>
      <button class="chai-btn chai-glow-pulse">Click me</button>
    </div>

    <script type="module" src="/src/index.js"></script>
  </body>
</html>
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173` to see the demo.

---

## Project Structure

```
chai-tailwind/
├── src/
│   ├── index.js                  # Engine entry point
│   └── parser/
│       ├── class-extractor.js    # Scans DOM for chai-* classes
│       ├── css-generator.js      # Maps classes → CSS strings
│       └── style-injector.js     # Injects <style> into <head>
├── index.html                    # Demo page
└── package.json
```

---

## Author

**Saurabh Prajapati** — MIT License
