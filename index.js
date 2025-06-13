import { injectCSS } from './inject.js';

export function fadeIn(el, duration = 500) {
  injectCSS();
  el.style.animationDuration = `${duration}ms`;
  el.classList.add('tw-fade-in');
}

export function slideUp(el, duration = 500) {
  injectCSS();
  el.style.animationDuration = `${duration}ms`;
  el.classList.add('tw-slide-up');
}
export function slideDown(el, duration = 500) {
  injectCSS();
  el.style.animationDuration = `${duration}ms`;
  el.classList.add('tw-slide-down');
}
export function slideLeft(el, duration = 500) {
  injectCSS();
  el.style.animationDuration = `${duration}ms`;
  el.classList.add('tw-slide-left');
}
export function slideRight(el, duration = 500) {
  injectCSS();
  el.style.animationDuration = `${duration}ms`;
  el.classList.add('tw-slide-right');
}
export function fadeOut(el, duration = 500) {
  injectCSS();
  el.style.animationDuration = `${duration}ms`;
  el.classList.add('tw-fade-out');
}
export function scaleUp(el, duration = 500) {
  injectCSS();
  el.style.animationDuration = `${duration}ms`;
  el.classList.add('tw-scale-up');
}
export function scaleDown(el, duration = 500) {
  injectCSS();
  el.style.animationDuration = `${duration}ms`;
  el.classList.add('tw-scale-down');
}
export function enlarge(el, duration = 500) {
  injectCSS();
  el.style.animationDuration = `${duration}ms`;
  el.classList.add('tw-enlarge');
}
export function shrink(el, duration = 500) {
  injectCSS();
  el.style.animationDuration = `${duration}ms`;
  el.classList.add('tw-shrink');
}
export function rotate(el, duration = 500) {
  injectCSS();
  el.style.animationDuration = `${duration}ms`;
  el.classList.add('tw-rotate');
}