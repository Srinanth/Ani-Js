import { injectCSS } from "./inject.js";

function animate(el, className, duration = 500) {
  injectCSS();
  el.style.animationDuration = `${duration}ms`;
  el.classList.add(className);
}

const animations = {
  fadeIn: "tw-fade-in",
  fadeOut: "tw-fade-out",
  slideUp: "tw-slide-up",
  slideDown: "tw-slide-down",
  slideLeft: "tw-slide-left",
  slideRight: "tw-slide-right",
  scaleUp: "tw-scale-up",
  scaleDown: "tw-scale-down",
  enlarge: "tw-enlarge",
  shrink: "tw-shrink",
  rotate: "tw-rotate",
  bounce: "tw-bounce",
  shake: "tw-shake",
  pulse: "tw-pulse",
  flash: "tw-flash",
  wobble: "tw-wobble",
  swing: "tw-swing",
  tada: "tw-tada",
  jello: "tw-jello",
  Glow: "tw-glow",
  Shadow: "tw-shadow",
  zoomIn: "tw-zoom-in",
  zoomOut: "tw-zoom-out",
  heartbeat: "tw-heartbeat",
  blink: "tw-blink",
  wave: "tw-wave",
  sway: "tw-sway",
  floating: "tw-floating",
  glitch: "tw-glitch",
  neonGlow: "tw-neon-glow",
  shimmer: "tw-shimmer",
  typingEffect: "tw-typing-effect",
  revealUp: "tw-reveal-up",
  revealDown: "tw-reveal-down",
  collapse: "tw-collapse",
  expand: "tw-expand",
  fadeSlide: "tw-fade-slide",
  bounceIn: "tw-bounce-in",
  bounceOut: "tw-bounce-out",
  scaleReveal: "tw-scale-reveal",
  rotateYFlipCard: "tw-rotate-y-flip-card",
  flipInX: "tw-flip-in-x",
  flipOutX: "tw-flip-out-x",
  flipInY: "tw-flip-in-y",
  flipOutY: "tw-flip-out-y",
  rotateIn: "tw-rotate-in",
  rotateOut: "tw-rotate-out",
  rollIn: "tw-roll-in",
  rollOut: "tw-roll-out",
  lightSpeedIn: "tw-light-speed-in",
  lightSpeedOut: "tw-light-speed-out",
  jackInTheBox: "tw-jack-in-the-box",
  GlowPulse: "tw-glow-pulse",
  Sparkle: "tw-sparkle",
  Teleport: "tw-teleport",
  Curtain: "tw-curtain",
  Mirror: "tw-mirror",
  Aura: "tw-aura",
  Dust: "tw-dust",
  ZigZag: "tw-zigzag",
  Orbit: "tw-orbit",
  PopUpSpin: "tw-popup-spin",
  Snap:"tw-thanos-snap",

  HoverPop: "tw-hoverpop",
  HoverShrink: "tw-hovershrink",
  HoverEnlarge: "tw-hoverenlarge",
  HoverShake: "tw-hovershake",
  HoverFade: "tw-hoverfade",
  HoverGlow: "tw-hover-glow",
  HoverShadow: "tw-hover-shadow",
  hoverBlur: "tw-hover-blur",
  hoverRotate: "tw-hover-rotate",
  hoverUnderlineLeft: "tw-hover-underline-left",
  hoverUnderlineRight: "tw-hover-underline-right",
  hoverBorderGlow: "tw-hover-border-glow",
  hoverScaleBounce: "tw-hover-scale-bounce",
  hoverTilt: "tw-hover-tilt",
};

const exports = {};

for (const [name, className] of Object.entries(animations)) {
  exports[name] = (el, duration = 500) => animate(el, className, duration);
}

export const {
  fadeIn, fadeOut, slideUp, slideDown, slideLeft, slideRight,
  scaleUp, scaleDown, enlarge, shrink, rotate, bounce,
  shake, pulse, flash, wobble, swing, tada,
  jello, zoomIn, zoomOut, flipInX, flipOutX, flipInY,
  flipOutY, rotateIn, rotateOut, rollIn, rollOut, lightSpeedIn,
  lightSpeedOut, jackInTheBox, heartbeat, blink, wave, sway,
  floating, glitch, neonGlow, shimmer, typingEffect, revealUp,
  revealDown, collapse, expand, fadeSlide, bounceIn, bounceOut,
  scaleReveal, rotateYFlipCard, Glow, Shadow, GlowPulse, Sparkle,
  Teleport,Curtain,Mirror,Aura,Dust,ZigZag,Orbit,PopUpSpin,Snap,


  HoverPop, HoverShrink, HoverEnlarge, HoverShake, HoverFade, HoverGlow,
  HoverShadow, hoverBlur, hoverRotate, hoverUnderlineLeft, hoverUnderlineRight, hoverBorderGlow,
  hoverScaleBounce, hoverTilt
} = exports;

