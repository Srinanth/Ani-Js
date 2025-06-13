export const animationsCSS = `
@keyframes twFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.tw-fade-in {
  animation: twFadeIn 0.5s ease-out forwards;
}

@keyframes twSlideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.tw-slide-up {
  animation: twSlideUp 0.5s ease-out forwards;
}
@keyframes twSlideDown {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.tw-slide-down {
  animation: twSlideDown 0.5s ease-out forwards;
}
@keyframes twSlideLeft {
  from { transform: translateX(20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
.tw-slide-left {
  animation: twSlideLeft 0.5s ease-out forwards;
}
@keyframes twSlideRight {
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
.tw-slide-right {
  animation: twSlideRight 0.5s ease-out forwards;
}
@keyframes twFadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}
.tw-fade-out {
  animation: twFadeOut 0.5s ease-in forwards;
}
@keyframes twScaleUp {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
.tw-scale-up {
  animation: twScaleUp 0.5s ease-out forwards;
}
@keyframes twScaleDown {
  from { transform: scale(1.1); opacity: 1; }
  to { transform: scale(1); opacity: 0; }
}
.tw-scale-down {
  animation: twScaleDown 0.5s ease-in forwards;
}
  @keyframes twEnlarge {
  from { transform: scale(1); }
  to { transform: scale(1.2); }
}
.tw-enlarge {
  animation: twEnlarge 0.5s ease-out forwards;
}
@keyframes twShrink {
  from { transform: scale(1.2); }
  to { transform: scale(1); }
}
.tw-shrink {
  animation: twShrink 0.5s ease-in forwards;
}
@keyframes twRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.tw-rotate {
  animation: twRotate 0.5s ease-in-out forwards;
}
`;
