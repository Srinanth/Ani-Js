[![NPM Version](https://img.shields.io/npm/v/ani-js?color=F3FC6F)](https://www.npmjs.com/package/ani-js)
[![NPM Downloads](https://img.shields.io/npm/dt/ani-js?color=F3FC6F)](https://www.npmjs.com/package/ani-js)
[![NPM Downloads](https://img.shields.io/npm/dw/ani-js?color=F3FC6F)](https://www.npmjs.com/package/ani-js)
# Ani-Js

A lightweight JavaScript animation library that mimics Tailwind-style utility classes — no Tailwind installation needed. Injects minimal CSS for clean animations like `fadeIn`, `slideUp`, and more.

- 📦 No Tailwind required  
- 💨 Utility-class style like `.tw-fade-in`  
- ⚡ Zero setup, just import and use  
- 🧩 Works with plain JavaScript, React, Vue, TypeScript, and more  
- 🎨 100+ prebuilt animations and effects

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

### 📜 Vanilla JavaScript

```html
<div id="box">Hello</div>
<button id="btn">Animate</button>
<!-- for class based usage -->
<div id="box" class="tw-fade-in">Hello</div>
<script type="module">
  import { fadeIn } from 'ani-js';

  document.getElementById('btn').addEventListener('click', () => {
    const el = document.getElementById('box');
    fadeIn(el, 700);
  });
</script>
```
> ⚠️ **Important:**  
> This example uses **ES Module syntax (`import`)** and **will not work by directly opening the HTML file in a browser**.  
>
> To run this successfully, you must:
> - Use a **module-aware bundler or dev server** such as **[Vite](https://vitejs.dev/)**, **Webpack**, or **Parcel**
> **OR**
> - Load `ani-js` from a **CDN** (like [jsDelivr](https://cdn.jsdelivr.net/npm/ani-js@latest/index.js), [UNPKG](https://app.unpkg.com/ani-js@1.4.0/files/index.js)) that 
> supports **ES Modules**
> - To use as classes in Html use stylesheets as [jsDelivr](https://cdn.jsdelivr.net/npm/ani-js@latest/ani-js.css)
> - For React Import the package then in your App.jsx or Main.jsx import the classes from "../node_modules/ani-js/ani-js.css" set it as global so you can use it anywhere.
> Without one of these setups, your browser will **throw a module resolution error** and the animation will fail to load.

---

### ⚛️ React

```jsx
import { slideUp } from 'ani-js';
import { useEffect, useRef } from 'react';

function MyComponent() {
  return (
    //for class based usage
    <div className="tw-slide-up">
      Welcome!
    </div>
  );
}

function MyComponent() {
  const ref = useRef();

  useEffect(() => {
    slideUp(ref.current, 600);
  }, []);

  return <div ref={ref}>Welcome!</div>;
}
```

---
## 📚 More Info

For full **features**, **class names**,**playground**, **demos**, and **advanced usage**, visit the official website:  
👉 [https://ani-js.vercel.app/](https://ani-js.vercel.app/)

⭐ If you find this project useful, consider [dropping a star](https://github.com/Srinanth/ani-js) on GitHub!

---