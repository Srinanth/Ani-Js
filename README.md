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
> for React Import the package then in your App.jsx or Main.jsx import the classes from "../node_modules/ani-js/ani-js.css" set it as global so you can use it anywhere.
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

## ✨ Supported Animations

# Ani-JS Function Reference

| Function                  | Class Name               | Description                                      |
|:--------------------------|:-------------------------|:-------------------------------------------------|
| `fadeIn(el)`              | `tw-fadeIn`              | Fade in from opacity 0                           |
| `fadeOut(el)`             | `tw-fadeOut`             | Fade out to opacity 0                            |
| `slideUp(el)`             | `tw-slideUp`             | Slide upward and fade in                         |
| `slideDown(el)`           | `tw-slideDown`           | Slide downward and fade in                       |
| `slideLeft(el)`           | `tw-slideLeft`           | Slide in from the right                          |
| `slideRight(el)`          | `tw-slideRight`          | Slide in from the left                           |
| `scaleUp(el)`             | `tw-scaleUp`             | Scale up while fading in                         |
| `scaleDown(el)`           | `tw-scaleDown`           | Scale down while fading out                      |
| `enlarge(el)`             | `tw-enlarge`             | Slightly enlarges the element                    |
| `shrink(el)`              | `tw-shrink`              | Slightly shrinks the element                     |
| `rotate(el)`              | `tw-rotate`              | Rotates the element 360°                         |
| `bounce(el)`              | `tw-bounce`              | Bounces the element repeatedly                   |
| `shake(el)`               | `tw-shake`               | Horizontal shaking animation                     |
| `pulse(el)`               | `tw-pulse`               | Pulsing zoom effect                              |
| `flash(el)`               | `tw-flash`               | Quick opacity flicker                            |
| `wobble(el)`              | `tw-wobble`              | Shaky wobble motion                              |
| `swing(el)`               | `tw-swing`               | Swing back and forth                             |
| `tada(el)`                | `tw-tada`                | Small celebratory zooms in-out                   |
| `jello(el)`               | `tw-jello`               | Wiggly skew motion                               |
| `Glow(el)`                | `tw-Glow`                | Static glowing box-shadow                        |
| `Shadow(el)`              | `tw-Shadow`              | Applies dark shadow                              |
| `zoomIn(el)`              | `tw-zoomIn`              | Zoom in from scale 0.5 to 1                      |
| `zoomOut(el)`             | `tw-zoomOut`             | Zoom out to scale 0.5 and fade                   |
| `heartbeat(el)`           | `tw-heartbeat`           | Loop: pulsing heartbeat scale                    |
| `blink(el)`               | `tw-blink`               | Loop: blinking animation                         |
| `wave(el)`                | `tw-wave`                | Loop: emoji/text waving motion                   |
| `sway(el)`                | `tw-sway`                | Loop: slow side-to-side sway                     |
| `floating(el)`            | `tw-floating`            | Loop: smooth up-and-down motion                  |
| `glitch(el)`              | `tw-glitch`              | Special: jittery glitch animation                |
| `neonGlow(el)`            | `tw-neonGlow`            | Special: pulsing neon glow                       |
| `shimmer(el)`             | `tw-shimmer`             | Special: animated shimmer loading effect         |
| `typingEffect(el)`        | `tw-typingEffect`        | Special: text typing with blinking cursor        |
| `revealUp(el)`            | `tw-revealUp`            | Utility: fades in while sliding upward           |
| `revealDown(el)`          | `tw-revealDown`          | Utility: fades in while sliding downward         |
| `collapse(el)`            | `tw-collapse`            | Utility: collapses height to 0                   |
| `expand(el)`              | `tw-expand`              | Utility: expands height from 0                   |
| `fadeSlide(el)`           | `tw-fadeSlide`           | Utility: fade in + slide combo                   |
| `bounceIn(el)`            | `tw-bounceIn`            | Utility: animated bounce in                      |
| `bounceOut(el)`           | `tw-bounceOut`           | Utility: animated bounce out                     |
| `scaleReveal(el)`         | `tw-scaleReveal`         | Utility: reveal from scaled center               |
| `rotateYFlipCard(el)`     | `tw-rotate-y-flip-card`  | Utility: 3D card flip on hover                   |
| `flipInX(el)`             | `tw-flipInX`             | Entrance: flips in along X-axis                  |
| `flipOutX(el)`            | `tw-flipOutX`            | Exit: flips out along X-axis                     |
| `flipInY(el)`             | `tw-flipInY`             | Entrance: flips in along Y-axis                  |
| `flipOutY(el)`            | `tw-flipOutY`            | Exit: flips out along Y-axis                     |
| `rotateIn(el)`            | `tw-rotateIn`            | Entrance: rotates in                             |
| `rotateOut(el)`           | `tw-rotateOut`           | Exit: rotates out                                |
| `rollIn(el)`              | `tw-rollIn`              | Entrance: rolls in                               |
| `rollOut(el)`             | `tw-rollOut`             | Exit: rolls out                                  |
| `lightSpeedIn(el)`        | `tw-lightSpeedIn`        | Entrance: fast skewed slide in                   |
| `lightSpeedOut(el)`       | `tw-lightSpeedOut`       | Exit: fast skewed slide out                      |
| `jackInTheBox(el)`        | `tw-jackInTheBox`        | Entrance: rotate + scale bounce in               |
| `glowPulse(el)`           | `tw-glow-pulse`          | Loop: glowing pulse with scale/rotation          |
| `sparkle(el)`             | `tw-sparkle`             | Loop: floating sparkle dot                       |
| `teleport(el)`            | `tw-teleport`            | Utility: rapid vanish + reappear in patterns     |
| `curtain(el)`             | `tw-curtain`             | Entrance: horizontal curtain reveal              |
| `mirror(el)`              | `tw-mirror`              | Loop: mirror flipping animation                  |
| `aura(el)`                | `tw-aura`                | Loop: glowing cyan aura effect                   |
| `dust(el)`                | `tw-dust`                | Exit: float up, fade, scale out                  |
| `zigzag(el)`              | `tw-zigzag`              | Loop: side-to-side zigzag motion                 |
| `orbit(el)`               | `tw-orbit`               | Loop: object rotates around a center             |
| `popUpSpin(el)`           | `tw-popup-spin`          | Entrance: scale + spin popup                     |
| `Snap(el)`                | `tw-thanos-snap`         | Exit: dusty vanish with blur and clip effect     |
| `UpsideDown(el)`          | `tw-upside-down`         | Turns the object upside down                     |
| `HoverPop(el)`            | `tw-hover-pop`           | Hover: pop animation                             |
| `HoverShrink(el)`         | `tw-hover-shrink`        | Hover: slight shrink                             |
| `HoverEnlarge(el)`        | `tw-hover-enlarge`       | Hover: slight enlarge                            |
| `HoverShake(el)`          | `tw-hover-shake`         | Hover: left-right shake                          |
| `HoverFade(el)`           | `tw-hover-fade`          | Hover: reduce opacity                            |
| `HoverGlow(el)`           | `tw-hover-glow`          | Hover: glowing box-shadow                        |
| `HoverShadow(el)`         | `tw-hover-shadow`        | Hover: grows in shadow intensity                 |
| `hoverBlur(el)`           | `tw-hover-Blur`          | Hover: applies blur on hover                     |
| `hoverRotate(el)`         | `tw-hover-Rotate`        | Hover: rotates slightly                          |
| `hoverUnderlineLeft(el)`  | `tw-hover-UnderlineLeft` | Hover: underline grows from left                 |
| `hoverUnderlineRight(el)` | `tw-hover-UnderlineRight`| Hover: underline grows from right                |
| `hoverBorderGlow(el)`     | `tw-hover-BorderGlow`    | Hover: border glow effect                        |
| `hoverScaleBounce(el)`    | `tw-hover-ScaleBounce`   | Hover: bouncy scaling effect                     |
| `hoverTilt(el)`           | `tw-hover-Tilt`          | Hover: slight tilt effect                        |
| `HoverUpsideDown(el)`     | `tw-hover-upsidedown`    | Hover: Turns the object upside down              |
| `HoverTeleport(el)`       | `tw-hover-teleport`      | Hover: Teleports the object on hover             |
| `ColorCycle(el)`          | `tw-color-cycle`         | Color: cycles through multiple color themes      |
| `BlackRed(el)`            | `tw-black-red`           | Color: black background with red text            |
| `BlackBlue(el)`           | `tw-black-blue`          | Color: black background with blue text           |
| `BlackGreen(el)`          | `tw-black-green`         | Color: black background with green text          |
| `BlackPurple(el)`         | `tw-black-purple`        | Color: black background with purple text         |
| `BlackYellow(el)`         | `tw-black-yellow`        | Color: black background with yellow text         |
| `BlackWhite(el)`          | `tw-black-white`         | Color: black background with white text          |
| `BlackOrange(el)`         | `tw-black-orange`        | Color: black background with orange text         |
| `BlackPink(el)`           | `tw-black-pink`          | Color: black background with pink text           |
| `BlackGray(el)`           | `tw-black-gray`          | Color: black background with gray text           |
| `BlackCyan(el)`           | `tw-black-cyan`          | Color: black background with cyan text           |
| `BlackBrown(el)`          | `tw-black-brown`         | Color: black background with brown text          |
| `BlackGold(el)`           | `tw-black-gold`          | Color: black background with gold text           |
| `BlackSilver(el)`         | `tw-black-silver`        | Color: black background with silver text         |
| `BlackMagenta(el)`        | `tw-black-magenta`       | Color: black background with magenta text        |
| `BlueYellow(el)`          | `tw-blue-yellow`         | Color: blue background with yellow text          |
| `DarkGreenLime(el)`       | `tw-dark-green-lime`     | Color: dark green background with lime text      |
| `PurpleOrange(el)`        | `tw-purple-orange`       | Color: purple background with orange text        |
| `IndigoPink(el)`          | `tw-indigo-pink`         | Color: indigo background with pink text          |
| `GrayCyan(el)`            | `tw-gray-cyan`           | Color: gray background with cyan text            |
| `DarkBlueWhite(el)`       | `tw-dark-blue-white`     | Color: dark blue background with white text      |
| `TealSalmon(el)`          | `tw-teal-salmon`         | Color: teal background with salmon text          |
| `OliveViolet(el)`         | `tw-olive-violet`        | Color: olive background with violet text         |
| `BrownSkyBlue(el)`        | `tw-brown-sky-blue`      | Color: brown background with sky blue text       |
| `MidnightGreenMint(el)`   | `tw-midnight-green-mint` | Color: midnight green background with mint text  |
| `CrimsonLemon(el)`        | `tw-crimson-lemon`       | Color: crimson background with lemon text        |
| `SlatePeach(el)`          | `tw-slate-peach`         | Color: slate background with peach text          |
| `CharcoalLavender(el)`    | `tw-charcoal-lavender`   | Color: charcoal background with lavender text    |
| `MaroonMint(el)`          | `tw-maroon-mint`         | Color: maroon background with mint text          |
| `DarkCyanGold(el)`        | `tw-dark-cyan-gold`      | Color: dark cyan background with gold text       |
| `DeepPurpleIvory(el)`     | `tw-deep-purple-ivory`   | Color: deep purple background with ivory text    |
| `ForestPink(el)`          | `tw-forest-pink`         | Color: forest green background with pink text    |
| `SteelRose(el)`           | `tw-steel-rose`          | Color: steel background with rose text           |
| `EggplantSun(el)`         | `tw-eggplant-sun`        | Color: eggplant background with sun-yellow text  |

All animations accept an optional duration parameter (in milliseconds).

---
