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
.tw-hoverpop:hover {
  animation: twHoverpop 0.3s ease-in-out;
}

@keyframes twHovershake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}
.tw-hovershake:hover {
  animation: twHovershake 0.5s ease-in-out;
}

@keyframes twHoverfade {
  from { opacity: 1; }
  to { opacity: 0.5; }
}
.tw-hoverfade:hover {
  animation: twHoverfade 0.5s ease-in-out forwards;
}

@keyframes twHoverenlarge {
  from { transform: scale(1); }
  to { transform: scale(1.2); }
}
.tw-hoverenlarge:hover {
  animation: twHoverenlarge 0.5s ease-out forwards;
}

@keyframes twHovershrink {
  from { transform: scale(1.2); }
  to { transform: scale(1); }
}
.tw-hovershrink:hover {
  animation: twHovershrink 0.5s ease-in forwards;
}

@keyframes twHoverGlow {
  from { box-shadow: 0 0 5px rgba(255, 255, 255, 0); }
  to { box-shadow: 0 0 20px rgba(255, 255, 255, 1); }
}
.tw-hover-glow:hover {
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
.tw-hover-shadow:hover {
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

@keyframes twFlipInX {
  from { transform: perspective(400px) rotateX(90deg); opacity: 0; }
  to { transform: perspective(400px) rotateX(0); opacity: 1; }
}
.tw-flip-in-x { animation: twFlipInX 0.6s ease-out forwards; }

@keyframes twFlipOutX {
  from { transform: perspective(400px) rotateX(0); opacity: 1; }
  to { transform: perspective(400px) rotateX(90deg); opacity: 0; }
}
.tw-flip-out-x { animation: twFlipOutX 0.6s ease-in forwards; }

@keyframes twFlipInY {
  from { transform: perspective(400px) rotateY(90deg); opacity: 0; }
  to { transform: perspective(400px) rotateY(0); opacity: 1; }
}
.tw-flip-in-y { animation: twFlipInY 0.6s ease-out forwards; }

@keyframes twFlipOutY {
  from { transform: perspective(400px) rotateY(0); opacity: 1; }
  to { transform: perspective(400px) rotateY(90deg); opacity: 0; }
}
.tw-flip-out-y { animation: twFlipOutY 0.6s ease-in forwards; }

@keyframes twRotateIn {
  from { transform: rotate(-200deg); opacity: 0; }
  to { transform: rotate(0deg); opacity: 1; }
}
.tw-rotate-in { animation: twRotateIn 0.6s ease-out forwards; }

@keyframes twRotateOut {
  from { transform: rotate(0deg); opacity: 1; }
  to { transform: rotate(200deg); opacity: 0; }
}
.tw-rotate-out { animation: twRotateOut 0.6s ease-in forwards; }

@keyframes twRollIn {
  from { transform: translateX(-100%) rotate(-120deg); opacity: 0; }
  to { transform: translateX(0) rotate(0deg); opacity: 1; }
}
.tw-roll-in { animation: twRollIn 0.8s ease-out forwards; }

@keyframes twRollOut {
  from { transform: translateX(0) rotate(0); opacity: 1; }
  to { transform: translateX(100%) rotate(120deg); opacity: 0; }
}
.tw-roll-out { animation: twRollOut 0.8s ease-in forwards; }

@keyframes twLightSpeedIn {
  from { transform: translateX(100%) skewX(-30deg); opacity: 0; }
  to { transform: translateX(0) skewX(0); opacity: 1; }
}
.tw-light-speed-in { animation: twLightSpeedIn 0.5s ease-out forwards; }

@keyframes twLightSpeedOut {
  from { transform: translateX(0) skewX(0); opacity: 1; }
  to { transform: translateX(-100%) skewX(30deg); opacity: 0; }
}
.tw-light-speed-out { animation: twLightSpeedOut 0.5s ease-in forwards; }

@keyframes twJackInTheBox {
  from { opacity: 0; transform: scale(0.1) rotate(30deg); }
  50% { transform: rotate(-10deg); }
  70% { transform: rotate(3deg); }
  to { opacity: 1; transform: scale(1) rotate(0); }
}
.tw-jack-in-the-box { animation: twJackInTheBox 1s ease forwards; }


`;