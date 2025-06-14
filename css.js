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

@keyframes twBounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-30px); }
  60% { transform: translateY(-15px); }
}
.tw-bounce {
  animation: twBounce 1s ease infinite;
}
  
@keyframes twPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
.tw-pulse {
  animation: twPulse 1s ease-in-out infinite;
}
@keyframes twFlash {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.tw-flash {
  animation: twFlash 1s ease-in-out infinite;
}
@keyframes twShake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
  20%, 40%, 60%, 80% { transform: translateX(10px); }
}
.tw-shake {
  animation: twShake 0.5s ease-in-out infinite;
}
@keyframes twSwing {
  20% { transform: rotate(15deg); }
  40% { transform: rotate(-10deg); }
  60% { transform: rotate(5deg); }
  80% { transform: rotate(-5deg); }
  to { transform: rotate(0deg); }
}
.tw-swing {
  animation: twSwing 1s ease-in-out infinite;
}

@keyframes twWobble {
  0%, 100% { transform: none; }
  15% { transform: translateX(-25%) rotate(-5deg); }
  30% { transform: translateX(20%) rotate(3deg); }
  45% { transform: translateX(-15%) rotate(-2deg); }
  60% { transform: translateX(10%) rotate(1deg); }
  75% { transform: translateX(-5%) rotate(0deg); }
}
.tw-wobble {
  animation: twWobble 1s ease-in-out infinite;
}

@keyframes twZoomIn {
  from { transform: scale(0.5); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
.tw-zoom-in {
  animation: twZoomIn 0.5s ease-out forwards;
}

@keyframes twZoomOut {
  from { transform: scale(1); opacity: 1; }
  to { transform: scale(0.5); opacity: 0; }
}
.tw-zoom-out {
  animation: twZoomOut 0.5s ease-in forwards;
}

@keyframes twHoverpop {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
.tw-hoverpop {
  animation: twHoverpop 0.3s ease-in-out infinite;
}

@keyframes twHovershake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}
.tw-hovershake {
  animation: twHovershake 0.5s ease-in-out infinite;
}

@keyframes twHoverfade {
  from { opacity: 1; }
  to { opacity: 0.5; }
}
.tw-hoverfade {
  animation: twHoverfade 0.5s ease-in-out forwards;
}

@keyframes twHoverenlarge {
  from { transform: scale(1); }
  to { transform: scale(1.2); }
}
.tw-hoverenlarge {
  animation: twHoverenlarge 0.5s ease-out forwards;
}

@keyframes twHovershrink {
  from { transform: scale(1.2); }
  to { transform: scale(1); }
}
.tw-hovershrink {
  animation: twHovershrink 0.5s ease-in forwards;
}

@keyframes twHoverGlow {
  from { box-shadow: 0 0 5px rgba(255, 255, 255, 0); }
  to { box-shadow: 0 0 20px rgba(255, 255, 255, 1); }
}
.tw-hover-glow {
  animation: twHoverGlow 0.5s ease-in-out forwards;
}

@keyframes twGlow {
  from { box-shadow: 0 0 5px rgba(255, 255, 255, 0); }
  to { box-shadow: 0 0 20px rgba(255, 255, 255, 1); }
}
.tw-glow {
  animation: twGlow 0.5s ease-in-out forwards;
}

@keyframes twShadow {
  from { box-shadow: 0 0 5px rgba(0, 0, 0, 0); }
  to { box-shadow: 0 0 20px rgba(0, 0, 0, 1); }
}
.tw-shadow {
  animation: twShadow 0.5s ease-in-out forwards;
}

@keyframes twHoverShadow {
  from { box-shadow: 0 0 5px rgba(0, 0, 0, 0); }
  to { box-shadow: 0 0 20px rgba(0, 0, 0, 1); }
}
.tw-hover-shadow {
  animation: twHoverShadow 0.5s ease-in-out forwards;
}
@keyframes twTada {
  0%, 100% { transform: scale(1); }
  10%, 20% { transform: scale(1.1); }
  30%, 50%, 70%, 90% { transform: scale(0.9); }
}
.tw-tada {
  animation: twTada 1s ease-in-out infinite;
}

@keyframes twJello {
  0%, 100% { transform: none; }
  10% { transform: skewX(-10deg); }
  20% { transform: skewX(10deg); }
  30% { transform: skewX(-5deg); }
  40% { transform: skewX(5deg); }
}
.tw-jello {
  animation: twJello 1s ease-in-out infinite;
}



`;