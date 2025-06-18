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

| Function                | Description                                      |
|-------------------------|--------------------------------------------------|
| `fadeIn(el)`            | Fade in from opacity 0                           |
| `fadeOut(el)`           | Fade out to opacity 0                            |
| `slideUp(el)`           | Slide upward and fade in                         |
| `slideDown(el)`         | Slide downward and fade in                       |
| `slideLeft(el)`         | Slide in from the right                          |
| `slideRight(el)`        | Slide in from the left                           |
| `scaleUp(el)`           | Scale up while fading in                         |
| `scaleDown(el)`         | Scale down while fading out                      |
| `enlarge(el)`           | Slightly enlarges the element                    |
| `shrink(el)`            | Slightly shrinks the element                     |
| `rotate(el)`            | Rotates the element 360°                         |
| `bounce(el)`            | Bounces the element repeatedly                   |
| `shake(el)`             | Horizontal shaking animation                     |
| `pulse(el)`             | Pulsing zoom effect                              |
| `flash(el)`             | Quick opacity flicker                            |
| `wobble(el)`            | Shaky wobble motion                              |
| `swing(el)`             | Swing back and forth                             |
| `tada(el)`              | Small celebratory zooms in-out                   |
| `jello(el)`             | Wiggly skew motion                               |
| `zoomIn(el)`            | Zoom in from scale 0.5 to 1                      |
| `zoomOut(el)`           | Zoom out to scale 0.5 and fade                   |
| `HoverPop(el)`          | Hover: pop animation                             |
| `HoverShrink(el)`       | Hover: slight shrink                             |
| `HoverEnlarge(el)`      | Hover: slight enlarge                            |
| `HoverShake(el)`        | Hover: left-right shake                          |
| `HoverFade(el)`         | Hover: reduce opacity                            |
| `HoverGlow(el)`         | Hover: glowing box-shadow                        |
| `Glow(el)`              | Static glowing box-shadow                        |
| `Shadow(el)`            | Applies dark shadow                              |
| `HoverShadow(el)`       | Hover: grows in shadow intensity                 |
| `flipInX(el)`           | Entrance: flips in along X-axis                  |
| `flipOutX(el)`          | Exit: flips out along X-axis                     |
| `flipInY(el)`           | Entrance: flips in along Y-axis                  |
| `flipOutY(el)`          | Exit: flips out along Y-axis                     |
| `rotateIn(el)`          | Entrance: rotates in                             |
| `rotateOut(el)`         | Exit: rotates out                                |
| `rollIn(el)`            | Entrance: rolls in                               |
| `rollOut(el)`           | Exit: rolls out                                  |
| `lightSpeedIn(el)`      | Entrance: fast skewed slide in                   |
| `lightSpeedOut(el)`     | Exit: fast skewed slide out                      |
| `jackInTheBox(el)`      | Entrance: rotate + scale bounce in               |
| `heartbeat(el)`         | Loop: pulsing heartbeat scale                    |
| `blink(el)`             | Loop: blinking animation                         |
| `wave(el)`              | Loop: emoji/text waving motion                   |
| `sway(el)`              | Loop: slow side-to-side sway                     |
| `floating(el)`          | Loop: smooth up-and-down motion                  |
| `hoverBlur(el)`         | Hover: applies blur on hover                     |
| `hoverRotate(el)`       | Hover: rotates slightly                          |
| `hoverUnderlineLeft(el)`| Hover: underline grows from left                 |
| `hoverUnderlineRight(el)`| Hover: underline grows from right              |
| `hoverBorderGlow(el)`   | Hover: border glow effect                        |
| `hoverScaleBounce(el)`  | Hover: bouncy scaling effect                     |
| `hoverTilt(el)`         | Hover: slight tilt effect                        |
| `glitch(el)`            | Special: jittery glitch animation                |
| `neonGlow(el)`          | Special: pulsing neon glow                       |
| `shimmer(el)`           | Special: animated shimmer loading effect         |
| `typingEffect(el)`      | Special: text typing with blinking cursor        |
| `revealUp(el)`          | Utility: fades in while sliding upward           |
| `revealDown(el)`        | Utility: fades in while sliding downward         |
| `collapse(el)`          | Utility: collapses height to 0                   |
| `expand(el)`            | Utility: expands height from 0                   |
| `fadeSlide(el)`         | Utility: fade in + slide combo                   |
| `bounceIn(el)`          | Utility: animated bounce in                      |
| `bounceOut(el)`         | Utility: animated bounce out                     |
| `scaleReveal(el)`       | Utility: reveal from scaled center               |
| `rotateYFlipCard(el)`   | Utility: 3D card flip on hover                   |
| `glowPulse(el)`         | Loop: glowing pulse with scale/rotation          |
| `sparkle(el)`           | Loop: floating sparkle dot                       |
| `teleport(el)`          | Utility: rapid vanish + reappear in patterns     |
| `curtain(el)`           | Entrance: horizontal curtain reveal              |
| `mirror(el)`            | Loop: mirror flipping animation                  |
| `aura(el)`              | Loop: glowing cyan aura effect                   |
| `dust(el)`              | Exit: float up, fade, scale out                  |
| `zigzag(el)`            | Loop: side-to-side zigzag motion                 |
| `orbit(el)`             | Loop: object rotates around a center             |
| `popUpSpin(el)`         | Entrance: scale + spin popup                     |
| `Snap(el)`              | Exit: dusty vanish with blur and clip effect     |
| `UpsideDown(el)`        | Turns the object upside down                     |
| `HoverUpsideDown(el)`   | Hover: Turns the object upside down              |
| `HoverTeleport(el)`     | Hover: Teleports the object on hover             |
| `ColorCycle`            | Color: cycles through multiple color themes      |
| `BlackRed`              | Color: black background with red text            |
| `BlackBlue`             | Color: black background with blue text           |
| `BlackGreen`            | Color: black background with green text          |
| `BlackPurple`           | Color: black background with purple text         |
| `BlackYellow`           | Color: black background with yellow text         |
| `BlackWhite`            | Color: black background with white text          |
| `BlackOrange`           | Color: black background with orange text         |
| `BlackPink`             | Color: black background with pink text           |
| `BlackGray`             | Color: black background with gray text           |
| `BlackCyan`             | Color: black background with cyan text           |
| `BlackBrown`            | Color: black background with brown text          |
| `BlackGold`             | Color: black background with gold text           |
| `BlackSilver`           | Color: black background with silver text         |
| `BlackMagenta`          | Color: black background with magenta text        |
| `BlueYellow`            | Color: blue background with yellow text          |
| `DarkGreenLime`         | Color: dark green background with lime text      |
| `PurpleOrange`          | Color: purple background with orange text        |
| `IndigoPink`            | Color: indigo background with pink text          |
| `GrayCyan`              | Color: gray background with cyan text            |
| `DarkBlueWhite`         | Color: dark blue background with white text      |
| `TealSalmon`            | Color: teal background with salmon text          |
| `OliveViolet`           | Color: olive background with violet text         |
| `BrownSkyBlue`          | Color: brown background with sky blue text       |
| `MidnightGreenMint`     | Color: midnight green background with mint text  |
| `CrimsonLemon`          | Color: crimson background with lemon text        |
| `SlatePeach`            | Color: slate background with peach text          |
| `CharcoalLavender`      | Color: charcoal background with lavender text    |
| `MaroonMint`            | Color: maroon background with mint text          |
| `DarkCyanGold`          | Color: dark cyan background with gold text       |
| `DeepPurpleIvory`       | Color: deep purple background with ivory text    |
| `ForestPink`            | Color: forest green background with pink text    |
| `SteelRose`             | Color: steel background with rose text           |
| `EggplantSun`           | Color: eggplant background with sun-yellow text  |


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
