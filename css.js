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

@keyframes twHeartbeat {
  0%, 100% { transform: scale(1); }
  14%, 42%, 70% { transform: scale(1.3); }
}
.tw-heartbeat { animation: twHeartbeat 1.5s ease-in-out infinite; }

@keyframes twBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.tw-blink { animation: twBlink 1s step-start infinite; }

@keyframes twWave {
  0% { transform: rotate(0); }
  20% { transform: rotate(15deg); }
  40% { transform: rotate(-10deg); }
  60% { transform: rotate(15deg); }
  80% { transform: rotate(-5deg); }
  100% { transform: rotate(0); }
}
.tw-wave { animation: twWave 2s ease-in-out infinite; transform-origin: bottom center; display: inline-block; }

@keyframes twSway {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(10px); }
}
.tw-sway { animation: twSway 2s ease-in-out infinite; }

@keyframes twFloating {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.tw-floating { animation: twFloating 3s ease-in-out infinite; }

.tw-hover-blur:hover { filter: blur(2px); transition: filter 0.3s ease; }
.tw-hover-rotate:hover { transform: rotate(10deg); transition: transform 0.3s ease; }
.tw-hover-underline-left:hover { border-bottom: 2px solid; transform: scaleX(1); transform-origin: left; transition: all 0.3s ease; }
.tw-hover-underline-right:hover { border-bottom: 2px solid; transform: scaleX(1); transform-origin: right; transition: all 0.3s ease; }
.tw-hover-border-glow:hover { box-shadow: 0 0 10px 2px rgba(255,255,255,0.7); transition: box-shadow 0.3s ease; }
.tw-hover-scale-bounce:hover { transform: scale(1.1); transition: transform 0.3s ease; }
.tw-hover-tilt:hover { transform: rotate(3deg) skewX(3deg); transition: transform 0.3s ease; }

@keyframes twGlitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(2px, -2px); }
  60% { transform: translate(-1px, 1px); }
  80% { transform: translate(1px, -1px); }
  100% { transform: translate(0); }
}
.tw-glitch { animation: twGlitch 0.3s infinite; }

@keyframes twNeonGlow {
  0%, 100% { text-shadow: 0 0 5px #fff; }
  50% { text-shadow: 0 0 20px #0ff; }
}
.tw-neon-glow { animation: twNeonGlow 1s ease-in-out infinite; }

@keyframes twShimmer {
  0% { background-position: -100% 0; }
  100% { background-position: 100% 0; }
}
.tw-shimmer {
  background: linear-gradient(to right, #eeeeee 0%, #dddddd 50%, #eeeeee 100%);
  background-size: 200% 100%;
  animation: twShimmer 1.5s linear infinite;
}

@keyframes twTyping {
  from { width: 0; }
  to { width: 100%; }
}
.tw-typing {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid;
  animation: twTyping 3s steps(30, end) forwards;
}

@keyframes twRevealUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.tw-reveal-up { animation: twRevealUp 0.5s ease-out forwards; }

@keyframes twRevealDown {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.tw-reveal-down { animation: twRevealDown 0.5s ease-out forwards; }

@keyframes twCollapse {
  from { height: auto; opacity: 1; }
  to { height: 0; opacity: 0; }
}
.tw-collapse { animation: twCollapse 0.3s ease forwards; overflow: hidden; }

@keyframes twExpand {
  from { height: 0; opacity: 0; }
  to { height: auto; opacity: 1; }
}
.tw-expand { animation: twExpand 0.3s ease forwards; overflow: hidden; }

@keyframes twFadeSlideLeft {
  from { transform: translateX(20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
.tw-fade-slide-left { animation: twFadeSlideLeft 0.5s ease-out forwards; }

@keyframes twBounceIn {
  0% { transform: scale(0.5); opacity: 0; }
  60% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); }
}
.tw-bounce-in { animation: twBounceIn 0.6s ease-out forwards; }

@keyframes twBounceOut {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0.5); opacity: 0; }
}
.tw-bounce-out { animation: twBounceOut 0.6s ease-in forwards; }

@keyframes twScaleReveal {
  from { transform: scale(0); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
.tw-scale-reveal { animation: twScaleReveal 0.4s ease-out forwards; }

@keyframes twRotateYFlip {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(180deg); }
}
.tw-rotate-y-flip { animation: twRotateYFlip 0.8s ease-in-out forwards; transform-style: preserve-3d; }

.tw-perspective {
  perspective: 1000px;
}
  
@keyframes twGlowPulse{
  0% {
    opacity: 0.3;
    transform: scale(0.8) rotate(0deg);
  }
  25% {
    opacity: 1;
    transform: scale(1.2) rotate(90deg);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9) rotate(180deg);
  }
  75% {
    opacity: 1;
    transform: scale(1.1) rotate(270deg);
  }
  100% {
    opacity: 0.3;
    transform: scale(0.8) rotate(360deg);
  }
}
.tw-glow-pulse {
  animation: twGlowPulse 1.2s infinite ease-in-out;
}

@keyframes twSparkle {
  0% {
    transform: translateY(0) scale(0.8);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-10px) scale(1.2);
    opacity: 1;
  }
  100% {
    transform: translateY(0) scale(0.8);
    opacity: 0.3;
  }
}

.tw-sparkle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: black;
  border-radius: 50%;
  box-shadow: 0 0 6px white;
  animation: twSparkle 3s infinite ease-in-out;
  pointer-events: none;
}

@keyframes twTeleport {
  0%, 4% {
    opacity: 1;
    transform: translate(0, 0);
  }
  5%, 9% {
    opacity: 0;
    transform: translate(-100px, 0); 
  }
  10%, 14% {
    opacity: 1;
    transform: translate(-100px, 0);
  }
  15%, 19% {
    opacity: 0;
    transform: translate(100px, 0); 
  }
  20%, 24% {
    opacity: 1;
    transform: translate(100px, 0);
  }
  25%, 29% {
    opacity: 0;
    transform: translate(0, 100px); 
  }
  30%, 34% {
    opacity: 1;
    transform: translate(0, 100px);
  }
  35%, 39% {
    opacity: 0;
    transform: translate(0, -100px); 
  }
  40%, 44% {
    opacity: 1;
    transform: translate(0, -100px);
  }
  45%, 49% {
    opacity: 0;
    transform: translate(-100px, 100px); 
  }
  50%, 54% {
    opacity: 1;
    transform: translate(-100px, 100px);
  }
  55%, 59% {
    opacity: 0;
    transform: translate(100px, 100px); 
  }
  60%, 64% {
    opacity: 1;
    transform: translate(100px, 100px);
  }
  65%, 69% {
    opacity: 0;
    transform: translate(100px, -100px); 
  }
  70%, 74% {
    opacity: 1;
    transform: translate(100px, -100px);
  }
  75%, 79% {
    opacity: 0;
    transform: translate(-100px, -100px); 
  }
  80%, 84% {
    opacity: 1;
    transform: translate(-100px, -100px);
  }
  85%, 89% {
    opacity: 0;
    transform: translate(50px, 50px); 
  }
  90%, 94% {
    opacity: 1;
    transform: translate(50px, 50px);
  }
  95%, 99% {
    opacity: 0;
    transform: translate(0, 0); 
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}

.tw-teleport {
  animation: twTeleport 4s ease-in-out infinite;
}

@keyframes twCurtain {
  0% {
    transform: scaleX(0);
    transform-origin: left;
    opacity: 0.3;
  }
  100% {
    transform: scaleX(1);
    transform-origin: left;
    opacity: 1;
  }
}

.tw-curtain {
  animation: twCurtain 0.8s ease-out;
}

@keyframes twMirror {
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(-1);
  }
  100% {
    transform: scaleX(1);
  }
}

.tw-mirror {
  animation: twMirror 1s ease-in-out;
}

@keyframes twAura {
  0% {
    box-shadow: 0 0 0px rgba(0, 255, 255, 0.6);
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 255, 255, 1);
  }
  100% {
    box-shadow: 0 0 0px rgba(0, 255, 255, 0.6);
  }
}

.tw-aura {
  animation: twAura 1.2s infinite ease-in-out;
}
@keyframes twDust {
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px) scale(1.2);
  }
}

.tw-dust {
  animation: twDust 0.6s ease-out forwards;
}

@keyframes twZigZag {
  0% { transform: translateX(0); }
  20% { transform: translateX(-10px); }
  40% { transform: translateX(10px); }
  60% { transform: translateX(-10px); }
  80% { transform: translateX(10px); }
  100% { transform: translateX(0); }
}

.tw-zigzag {
  animation: twZigZag 0.8s ease-in-out;
}

@keyframes twOrbit {
  0% {
    transform: rotate(0deg) translateX(20px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(20px) rotate(-360deg);
  }
}

.tw-orbit {
  animation: twOrbit 1.5s linear infinite;
}

@keyframes twPopUpSpin {
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 0;
  }
  60% {
    transform: scale(1.2) rotate(270deg);
    opacity: 1;
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
}

.tw-popup-spin {
  animation: twPopUpSpin 0.8s ease-out;
}

@keyframes twThanosSnap {
  0% {
    opacity: 1;
    transform: translateY(0) rotate(0deg) scale(1);
    filter: blur(0px);
    clip-path: inset(0% 0% 0% 0%);
  }
  40% {
    opacity: 0.6;
    transform: translateY(-10px) rotate(5deg) scale(1.02);
    filter: blur(1px);
    clip-path: inset(10% 5% 10% 0%);
  }
  100% {
    opacity: 0;
    transform: translateY(-80px) rotate(15deg) scale(1.1);
    filter: blur(6px);
    clip-path: inset(50% 90% 50% 80%);
  }
}

.tw-thanos-snap {
  display: inline-block;
  padding: 10px 20px;
  background: #a020f0;
  color: white;
  font-weight: bold;
  border-radius: 6px;
  animation: twThanosSnap 1.5s ease-in-out forwards;
}
`;