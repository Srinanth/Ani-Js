[![NPM Version](https://img.shields.io/npm/v/ani-js?color=F3FC6F)](https://www.npmjs.com/package/ani-js)
[![NPM Downloads](https://img.shields.io/npm/dw/ani-js?color=F3FC6F)](https://www.npmjs.com/package/ani-js)
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

| Function                | Class Name                  | Description                                      |
|-------------------------|-----------------------------|--------------------------------------------------|
| `fadeIn(el)`            | `.tw-fade-in`               | Fade in from opacity 0                           |
| `fadeOut(el)`           | `.tw-fade-out`              | Fade out to opacity 0                            |
| `slideUp(el)`           | `.tw-slide-up`              | Slide upward and fade in                         |
| `slideDown(el)`         | `.tw-slide-down`            | Slide downward and fade in                       |
| `slideLeft(el)`         | `.tw-slide-left`            | Slide in from the right                          |
| `slideRight(el)`        | `.tw-slide-right`           | Slide in from the left                           |
| `scaleUp(el)`           | `.tw-scale-up`              | Scale up while fading in                         |
| `scaleDown(el)`         | `.tw-scale-down`            | Scale down while fading out                      |
| `enlarge(el)`           | `.tw-enlarge`               | Slightly enlarges the element                    |
| `shrink(el)`            | `.tw-shrink`                | Slightly shrinks the element                     |
| `rotate(el)`            | `.tw-rotate`                | Rotates the element 360°                         |
| `bounce(el)`            | `.tw-bounce`                | Bounces the element repeatedly                   |
| `shake(el)`             | `.tw-shake`                 | Horizontal shaking animation                     |
| `pulse(el)`             | `.tw-pulse`                 | Pulsing zoom effect                              |
| `flash(el)`             | `.tw-flash`                 | Quick opacity flicker                            |
| `wobble(el)`            | `.tw-wobble`                | Shaky wobble motion                              |
| `swing(el)`             | `.tw-swing`                 | Swing back and forth                             |
| `tada(el)`              | `.tw-tada`                  | Small celebratory zooms in-out                   |
| `jello(el)`             | `.tw-jello`                 | Wiggly skew motion                               |
| `zoomIn(el)`            | `.tw-zoom-in`               | Zoom in from scale 0.5 to 1                      |
| `zoomOut(el)`           | `.tw-zoom-out`              | Zoom out to scale 0.5 and fade                   |
| `HoverPop(el)`          | `.tw-hoverpop`              | Hover: pop animation                             |
| `HoverShrink(el)`       | `.tw-hovershrink`           | Hover: slight shrink                             |
| `HoverEnlarge(el)`      | `.tw-hoverenlarge`          | Hover: slight enlarge                            |
| `HoverShake(el)`        | `.tw-hovershake`            | Hover: left-right shake                          |
| `HoverFade(el)`         | `.tw-hoverfade`             | Hover: reduce opacity                            |
| `HoverGlow(el)`         | `.tw-hover-glow`            | Hover: glowing box-shadow                        |
| `Glow(el)`              | `.tw-glow`                  | Static glowing box-shadow                        |
| `Shadow(el)`            | `.tw-shadow`                | Applies dark shadow                              |
| `HoverShadow(el)`       | `.tw-hover-shadow`          | Hover: grows in shadow intensity                 |
| `flipInX(el)`           | `.tw-flip-in-x`             | Entrance: flips in along X-axis                  |
| `flipOutX(el)`          | `.tw-flip-out-x`            | Exit: flips out along X-axis                     |
| `flipInY(el)`           | `.tw-flip-in-y`             | Entrance: flips in along Y-axis                  |
| `flipOutY(el)`          | `.tw-flip-out-y`            | Exit: flips out along Y-axis                     |
| `rotateIn(el)`          | `.tw-rotate-in`             | Entrance: rotates in                             |
| `rotateOut(el)`         | `.tw-rotate-out`            | Exit: rotates out                                |
| `rollIn(el)`            | `.tw-roll-in`               | Entrance: rolls in                               |
| `rollOut(el)`           | `.tw-roll-out`              | Exit: rolls out                                  |
| `lightSpeedIn(el)`      | `.tw-light-speed-in`        | Entrance: fast skewed slide in                   |
| `lightSpeedOut(el)`     | `.tw-light-speed-out`       | Exit: fast skewed slide out                      |
| `jackInTheBox(el)`      | `.tw-jack-in-the-box`       | Entrance: rotate + scale bounce in               |
| `heartbeat(el)`         | `.tw-heartbeat`             | Loop: pulsing heartbeat scale                    |
| `blink(el)`             | `.tw-blink`                 | Loop: blinking animation                         |
| `wave(el)`              | `.tw-wave`                  | Loop: emoji/text waving motion                   |
| `sway(el)`              | `.tw-sway`                  | Loop: slow side-to-side sway                     |
| `floating(el)`          | `.tw-floating`              | Loop: smooth up-and-down motion                  |
| `hoverBlur(el)`         | `.tw-hover-blur`            | Hover: applies blur on hover                     |
| `hoverRotate(el)`       | `.tw-hover-rotate`          | Hover: rotates slightly                          |
| `hoverUnderlineLeft(el)`| `.tw-hover-underline-left`  | Hover: underline grows from left                 |
| `hoverUnderlineRight(el)`| `.tw-hover-underline-right`| Hover: underline grows from right                |
| `hoverBorderGlow(el)`   | `.tw-hover-border-glow`     | Hover: border glow effect                        |
| `hoverScaleBounce(el)`  | `.tw-hover-scale-bounce`    | Hover: bouncy scaling effect                     |
| `hoverTilt(el)`         | `.tw-hover-tilt`            | Hover: slight tilt effect                        |
| `glitch(el)`            | `.tw-glitch`                | Special: jittery glitch animation                |
| `neonGlow(el)`          | `.tw-neon-glow`             | Special: pulsing neon glow                       |
| `shimmer(el)`           | `.tw-shimmer`               | Special: animated shimmer loading effect         |
| `typingEffect(el)`      | `.tw-typing-effect`         | Special: text typing with blinking cursor        |
| `revealUp(el)`          | `.tw-reveal-up`             | Utility: fades in while sliding upward           |
| `revealDown(el)`        | `.tw-reveal-down`           | Utility: fades in while sliding downward         |
| `collapse(el)`          | `.tw-collapse`              | Utility: collapses height to 0                   |
| `expand(el)`            | `.tw-expand`                | Utility: expands height from 0                   |
| `fadeSlide(el)`         | `.tw-fade-slide`            | Utility: fade in + slide combo                   |
| `bounceIn(el)`          | `.tw-bounce-in`             | Utility: animated bounce in                      |
| `bounceOut(el)`         | `.tw-bounce-out`            | Utility: animated bounce out                     |
| `scaleReveal(el)`       | `.tw-scale-reveal`          | Utility: reveal from scaled center               |
| `rotateYFlipCard(el)`   | `.tw-rotate-y-flip-card`    | Utility: 3D card flip on hover                   |



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
