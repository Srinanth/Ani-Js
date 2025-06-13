import { animationsCSS } from './css.js';

let injected = false;

export function injectCSS() {
  if (injected) return;
  const style = document.createElement('style');
  style.textContent = animationsCSS;
  document.head.appendChild(style);
  injected = true;
}