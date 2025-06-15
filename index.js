import { injectCSS } from './inject.js';

function animate(el, className, duration = 500) {
  injectCSS();
  el.style.animationDuration = `${duration}ms`;
  el.classList.add(className);
}

const animations = {
  fadeIn: 'tw-fade-in',
  fadeOut: 'tw-fade-out',

  slideUp: 'tw-slide-up',
  slideDown: 'tw-slide-down',
  slideLeft: 'tw-slide-left',
  slideRight: 'tw-slide-right',

  scaleUp: 'tw-scale-up',
  scaleDown: 'tw-scale-down',
  enlarge: 'tw-enlarge',
  shrink: 'tw-shrink',

  rotate: 'tw-rotate',
  bounce: 'tw-bounce',
  shake: 'tw-shake',
  pulse: 'tw-pulse',
  flash: 'tw-flash',
  wobble: 'tw-wobble',
  swing: 'tw-swing',
  tada: 'tw-tada',
  jello: 'tw-jello',
  Glow: 'tw-glow',
  Shadow: 'tw-shadow',
  zoomIn: 'tw-zoom-in',
  zoomOut: 'tw-zoom-out',

  HoverPop: 'tw-hoverpop',
  HoverShrink: 'tw-hovershrink',
  HoverEnlarge: 'tw-hoverenlarge',
  HoverShake: 'tw-hovershake',
  HoverFade: 'tw-hoverfade',
  HoverGlow: 'tw-hover-glow',
  HoverShadow: 'tw-hover-shadow',

  flipInX: 'tw-flip-in-x',
  flipOutX: 'tw-flip-out-x',
  flipInY: 'tw-flip-in-y',
  flipOutY: 'tw-flip-out-y',
  rotateIn: 'tw-rotate-in',
  rotateOut: 'tw-rotate-out',
  rollIn: 'tw-roll-in',
  rollOut: 'tw-roll-out',
  lightSpeedIn: 'tw-light-speed-in',
  lightSpeedOut: 'tw-light-speed-out',
  jackInTheBox: 'tw-jack-in-the-box',
};

const exports = {};

for (const [name, className] of Object.entries(animations)) {
  exports[name] = (el, duration = 500) => animate(el, className, duration);
}

export const {
  fadeIn,
  fadeOut,
  slideUp,
  slideDown,
  slideLeft,
  slideRight,
  scaleUp,
  scaleDown,
  enlarge,
  shrink,
  rotate,
  bounce,
  shake,
  pulse,
  flash,
  wobble,
  swing,
  tada,
  jello,
  zoomIn,
  zoomOut,
  HoverPop,
  HoverShrink,
  HoverEnlarge,
  HoverShake,
  HoverFade,
  HoverGlow,
  Glow,
  Shadow,
  HoverShadow,
  flipInX,
  flipOutX, 
  flipInY, 
  flipOutY,
  rotateIn, 
  rotateOut, 
  rollIn, 
  rollOut,
  lightSpeedIn, 
  lightSpeedOut, 
  jackInTheBox,
} = exports;
