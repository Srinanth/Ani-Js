[![NPM Version](https://img.shields.io/npm/v/ani-js?color=F3FC6F)](https://www.npmjs.com/package/ani-js)
[![NPM Downloads](https://img.shields.io/npm/dt/ani-js?color=F3FC6F)](https://www.npmjs.com/package/ani-js)

# Ani-Js

A lightweight JavaScript animation library that mimics Tailwind-style utility classes — no Tailwind installation needed. Injects minimal CSS for clean animations like `fadeIn`, `slideUp`, and more.

* 📦 No Tailwind required
* 💨 Utility-class style like `.tw-fade-in`
* ⚡ Zero setup, just import and use
* 🧩 Works with plain JavaScript, React, Vue, TypeScript, and more
* 🎨 100+ prebuilt animations and effects

---

## 📚 Documentation & Playground

For full **features**, **class names**, **playground**, **demos**, and **advanced usage**, visit the official website:
👉 [Ani-Js.com](https://ani-js.vercel.app/)

⭐ If you find this package useful, please consider [dropping a star](https://github.com/Srinanth/ani-js) on GitHub!

---

## 🚀 Installation

```bash
npm install ani-js
```

or

```bash
yarn add ani-js
```

---

## 🔧 Usage

### 📜 HTML / Vanilla JavaScript

#### ✅ Class-based (CSS-only, simplest)

```html
<!-- HTML -->
<!-- Link the CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ani-js@latest/ani-js.css">

<div class="tw-fade-in">Hello World</div>

```

#### ✅ JavaScript Function-based (Dynamic)

```html
<div id="box">Hello</div>
<button id="btn">Animate</button>

<script type="module">
  import { fadeIn } from 'ani-js';

  document.getElementById('btn').addEventListener('click', () => {
    const el = document.getElementById('box');
    fadeIn(el, 700);
  });
</script>
```

> ⚠️ **Note**: Direct ESM imports only work when served using a dev server (e.g. Vite, Webpack, Parcel), or from a CDN with module support.
> For quick demos or class-only usage, prefer the CDN CSS approach.

---

### ⚛️ React

#### Class-based (Best for global use)

> Add to `main.jsx` or `App.jsx`:

```js
import 'ani-js/ani-js.css';
```

Then use:

```jsx
<div className="tw-slide-up">Hello</div>
```

#### JavaScript function-based (On event/effect)

```jsx
import { slideUp } from 'ani-js';
import { useRef, useEffect } from 'react';

function MyComponent() {
  const ref = useRef();

  useEffect(() => {
    slideUp(ref.current, 600);
  }, []);

  return <div ref={ref}>Welcome!</div>;
}
```

#### Global CSS import (best for most cases)

In `src/index.css` or `App.css`:

```css
@import 'ani-js/ani-js.css';
```

This way, you don’t have to import CSS in your JS/TS files.

---

## 💡 Summary of Use Cases

| Environment       | Class-based (CSS)     | Function-based (JS)                        |
| ----------------- | --------------------- | ------------------------------------------ |
| HTML              | ✅ Yes (via CDN)      | ✅ Yes (via import or CDN module)          |
| React             | ✅ Yes (`ani-js.css`) | ✅ Yes (`import { fadeIn } from 'ani-js'`) |
| Vue, Svelte, etc. | ✅ Yes                | ✅ Yes                                     |

---

## 🤝 Contributing

### 🗽 Getting Started

1. **Fork** the repository
2. **Clone your fork locally**

   ```bash
   git clone https://github.com/Srinanth/Ani-Js.git
   cd ani-js
   ```
3. **Create a feature branch**

   ```bash
   git checkout -b addition/new-animation
   ```
4. **Make changes** – Add new animations, improve logic, or refactor existing code
5. **Commit your changes**

   ```bash
   git commit -m "✨ Added New Animation"
   ```
6. **Push to your branch**

   ```bash
   git push origin addition/new-animation
   ```
7. **Open a Pull Request** on GitHub

---

### 📊 Development Guidelines

* **Code Style**: Follow existing patterns used in JavaScript, CSS, and React files
* **Animations**: Use consistent utility class naming (`tw-fade-in`, `tw-bounce`, etc.)
* **Testing**:

  * Manually test animations using the local playground
* **CSS**: Keep styles minimal and optimized
* **Performance**: Prefer CSS animations unless JavaScript is necessary

---

### 🧪 Local Dev Tips

* Use [Vite](https://vitejs.dev) for a fast local development environment
* Use the local playground HTML/React page to test all animations live
* Keep animations scoped and reusable

---