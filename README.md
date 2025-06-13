
# Ani-Js

A lightweight JavaScript animation library that mimics Tailwind-style utility classes — no Tailwind installation needed. Injects minimal CSS for clean animations like `fadeIn`, `slideUp`, and more.

- 📦 No Tailwind required  
- 💨 Utility-class style like `.tw-fade-in`  
- ⚡ Zero setup, just import and use  
- 🧩 Works with plain JavaScript, React, Vue, TypeScript, and more  

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
<button onclick="animate()">Animate</button>

<script type="module">
  import { fadeIn } from 'ani-js';

  function animate() {
    const el = document.getElementById('box');
    fadeIn(el, 700);
  }
</script>
```

### ⚛️ React

```jsx
import { slideUp } from 'ani-js';
import { useEffect, useRef } from 'react';

function MyComponent() {
  const ref = useRef();

  useEffect(() => {
    slideUp(ref.current, 600);
  }, []);

  return <div ref={ref}>Welcome!</div>;
}
```

---

## ✨ Supported Animations

| Function          | Class Name         | Description                         |
|------------------|--------------------|-------------------------------------|
| `fadeIn(el)`      | `.tw-fade-in`      | Fade in from opacity 0              |
| `fadeOut(el)`     | `.tw-fade-out`     | Fade out to opacity 0               |
| `slideUp(el)`     | `.tw-slide-up`     | Slide upward and fade in            |
| `slideDown(el)`   | `.tw-slide-down`   | Slide downward and fade in          |
| `slideLeft(el)`   | `.tw-slide-left`   | Slide in from right                 |
| `slideRight(el)`  | `.tw-slide-right`  | Slide in from left                  |
| `scaleUp(el)`     | `.tw-scale-up`     | Scale up while fading in            |
| `scaleDown(el)`   | `.tw-scale-down`   | Scale down while fading out         |
| `enlarge(el)`     | `.tw-enlarge`      | Enlarge the element                 |
| `shrink(el)`      | `.tw-shrink`       | Shrink the element                  |
| `rotate(el)`      | `.tw-rotate`       | Full 360° rotation                  |

All animations accept an optional duration parameter (in milliseconds).

---

## 🔍 How It Works

- Minimal CSS is injected automatically only once using a helper function.
- You call `fadeIn(el)` or `slideUp(el)` from your JS code.
- The function:
  - Injects CSS if not already injected.
  - Applies the utility class (e.g., `tw-fade-in`) to the element.
  - Optionally sets `animation-duration` based on your parameter.

---

## 📦 Local Development & Testing

### Method 1: Pack & Install Locally

```bash
npm pack
```

This will generate a `.tgz` file. Then in another project:

```bash
npm install /path/to/ani-js.tgz
```

### Method 2: Link for Live Development

```bash
# Inside your library folder
npm link

# Inside your test project
npm ani-js
```

---

## 📄 License

MIT © 2025 Srinanth
