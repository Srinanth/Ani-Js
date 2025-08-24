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
@keyframes twTeleportHover {
  0% {
    opacity: 1;
    transform: translate(0, 0);
  }
  10% {
    opacity: 0;
    transform: translate(0, 0);
  }
  11% {
    transform: translate(-150px, 0);
  }
  12% {
    opacity: 1;
    transform: translate(-150px, 0);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
.tw-hover-teleport {
  transition: none;
}

.tw-hover-teleport:hover {
  animation: twTeleportHover 1s ease-in-out forwards;
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

@keyframes twUpsideDown {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(180deg);
  }
}

.tw-upside-down {
  transform-style: preserve-3d;
  animation: twUpsideDown 0.8s ease-in-out forwards;
  
}
.tw-hover-upsidedown {
  transform-style: preserve-3d;
  transition: transform 0.8s ease-in-out;
}

.tw-hover-upsidedown:hover {
  transform: rotateX(180deg);
}

@keyframes twColorCycle {
  0%   { background-color: #FF5733; color: #FFF700; }   /* Orange + Yellow */
  10%  { background-color: #FF8D1A; color: #00FF00; }   /* Light Orange + Lime */
  20%  { background-color: #FFD700; color: #0000FF; }   /* Gold + Blue */
  30%  { background-color: #00FF00; color: #FF00FF; }   /* Lime + Magenta */
  40%  { background-color: #00FFFF; color: #FF1493; }   /* Aqua + Deep Pink */
  50%  { background-color: #1E90FF; color: #FFD700; }   /* Dodger Blue + Gold */
  60%  { background-color: #8A2BE2; color: #00FF00; }   /* BlueViolet + Lime */
  70%  { background-color: #FF1493; color: #00FFFF; }   /* Deep Pink + Aqua */
  80%  { background-color: #FF4500; color: #00FF7F; }   /* OrangeRed + Spring Green */
  90%  { background-color: #00FA9A; color: #FF4500; }   /* Medium Spring Green + OrangeRed */
  100% { background-color: #FF5733; color: #FFF700; }   /* Back to start */
}

.tw-color-cycle {
  animation: twColorCycle 6s linear infinite;
}

@keyframes twBlackRed {
  0% { background-color: black; color: red; }
  100% { background-color: black; color: red; }
}
.tw-black-red {
  animation: twBlackRed 1s linear infinite;
}
@keyframes twBlackGreen {
  0% { background-color: black; color: green; }
  100% { background-color: black; color: green; }
}
.tw-black-green {
  animation: twBlackGreen 1s linear infinite;
}
@keyframes twBlackBlue {
  0% { background-color: black; color: blue; }
  100% { background-color: black; color: blue; }
}
.tw-black-blue {
  animation: twBlackBlue 1s linear infinite;
}
@keyframes twBlackYellow {
  0% { background-color: black; color: yellow; }
  100% { background-color: black; color: yellow; }
}
.tw-black-yellow {
  animation: twBlackYellow 1s linear infinite;
}
@keyframes twBlackPurple {
  0% { background-color: black; color: purple; }
  100% { background-color: black; color: purple; }
}
.tw-black-purple {
  animation: twBlackPurple 1s linear infinite;
}
@keyframes twBlackWhite {
  0% { background-color: black; color: white; }
  100% { background-color: black; color: white; }
}
.tw-black-white {
  animation: twBlackWhite 1s linear infinite;
}
@keyframes twBlackCyan {
  0% { background-color: black; color: cyan; }
  100% { background-color: black; color: cyan; }
}
.tw-black-cyan {
  animation: twBlackCyan 1s linear infinite;
}
@keyframes twBlackMagenta {
  0% { background-color: black; color: magenta; }
  100% { background-color: black; color: magenta; }
}
.tw-black-magenta {
  animation: twBlackMagenta 1s linear infinite;
}
@keyframes twBlackOrange {
  0% { background-color: black; color: orange; }
  100% { background-color: black; color: orange; }
}
.tw-black-orange {
  animation: twBlackOrange 1s linear infinite;
}
@keyframes twBlackPink {
  0% { background-color: black; color: pink; }
  100% { background-color: black; color: pink; }
}
.tw-black-pink {
  animation: twBlackPink 1s linear infinite;
}
@keyframes twBlackGray {
  0% { background-color: black; color: gray; }
  100% { background-color: black; color: gray; }
}
.tw-black-gray {
  animation: twBlackGray 1s linear infinite;
}
@keyframes twBlackBrown {
  0% { background-color: black; color: brown; }
  100% { background-color: black; color: brown; }
}
.tw-black-brown {
  animation: twBlackBrown 1s linear infinite;
}
@keyframes twBlackGold {
  0% { background-color: black; color: gold; }
  100% { background-color: black; color: gold; }
}
.tw-black-gold {
  animation: twBlackGold 1s linear infinite;
}
@keyframes twBlackSilver {
  0% { background-color: black; color: silver; }
  100% { background-color: black; color: silver; }
}
.tw-black-silver {
  animation: twBlackSilver 1s linear infinite;
}

@keyframes twBlueYellow {
  0% { background-color: blue; color: yellow; }
  100% { background-color: blue; color: yellow; }
}
.tw-blue-yellow {
  animation: twBlueYellow 1s linear infinite;
}

@keyframes twDarkGreenLime {
  0% { background-color: #004d00; color: #ccff00; }
  100% { background-color: #004d00; color: #ccff00; }
}
.tw-dark-green-lime {
  animation: twDarkGreenLime 1s linear infinite;
}

@keyframes twPurpleOrange {
  0% { background-color: purple; color: orange; }
  100% { background-color: purple; color: orange; }
}
.tw-purple-orange {
  animation: twPurpleOrange 1s linear infinite;
}

@keyframes twIndigoPink {
  0% { background-color: indigo; color: pink; }
  100% { background-color: indigo; color: pink; }
}
.tw-indigo-pink {
  animation: twIndigoPink 1s linear infinite;
}

@keyframes twGrayCyan {
  0% { background-color: gray; color: cyan; }
  100% { background-color: gray; color: cyan; }
}
.tw-gray-cyan {
  animation: twGrayCyan 1s linear infinite;
}

@keyframes twDarkBlueWhite {
  0% { background-color: #00008b; color: white; }
  100% { background-color: #00008b; color: white; }
}
.tw-dark-blue-white {
  animation: twDarkBlueWhite 1s linear infinite;
}

@keyframes twTealSalmon {
  0% { background-color: teal; color: salmon; }
  100% { background-color: teal; color: salmon; }
}
.tw-teal-salmon {
  animation: twTealSalmon 1s linear infinite;
}

@keyframes twOliveViolet {
  0% { background-color: olive; color: violet; }
  100% { background-color: olive; color: violet; }
}
.tw-olive-violet {
  animation: twOliveViolet 1s linear infinite;
}

@keyframes twBrownSkyBlue {
  0% { background-color: brown; color: skyblue; }
  100% { background-color: brown; color: skyblue; }
}
.tw-brown-skyblue {
  animation: twBrownSkyBlue 1s linear infinite;
}

@keyframes twCrimsonLemon {
  0% { background-color: crimson; color: lemonchiffon; }
  100% { background-color: crimson; color: lemonchiffon; }
}
.tw-crimson-lemon {
  animation: twCrimsonLemon 1s linear infinite;
}

@keyframes twSlatePeach {
  0% { background-color: slategray; color: peachpuff; }
  100% { background-color: slategray; color: peachpuff; }
}
.tw-slate-peach {
  animation: twSlatePeach 1s linear infinite;
}

@keyframes twCharcoalLavender {
  0% { background-color: #36454F; color: lavender; }
  100% { background-color: #36454F; color: lavender; }
}
.tw-charcoal-lavender {
  animation: twCharcoalLavender 1s linear infinite;
}

@keyframes twMaroonMint {
  0% { background-color: maroon; color: mediumspringgreen; }
  100% { background-color: maroon; color: mediumspringgreen; }
}
.tw-maroon-mint {
  animation: twMaroonMint 1s linear infinite;
}

@keyframes twDarkCyanGold {
  0% { background-color: darkcyan; color: gold; }
  100% { background-color: darkcyan; color: gold; }
}
.tw-dark-cyan-gold {
  animation: twDarkCyanGold 1s linear infinite;
}

@keyframes twDeepPurpleIvory {
  0% { background-color: #4b0082; color: ivory; }
  100% { background-color: #4b0082; color: ivory; }
}
.tw-deep-purple-ivory {
  animation: twDeepPurpleIvory 1s linear infinite;
}

@keyframes twForestPink {
  0% { background-color: forestgreen; color: hotpink; }
  100% { background-color: forestgreen; color: hotpink; }
}
.tw-forest-pink {
  animation: twForestPink 1s linear infinite;
}

@keyframes twSteelRose {
  0% { background-color: steelblue; color: rosybrown; }
  100% { background-color: steelblue; color: rosybrown; }
}
.tw-steel-rose {
  animation: twSteelRose 1s linear infinite;
}

@keyframes twEggplantSun {
  0% { background-color: #614051; color: #fcd12a; }
  100% { background-color: #614051; color: #fcd12a; }
}
.tw-eggplant-sun {
  animation: twEggplantSun 1s linear infinite;
}

@keyframes twMidnightMint {
  0% { background-color: #003b36; color: #aaffcc; }
  100% { background-color: #003b36; color: #aaffcc; }
}
.tw-midnight-green-mint {
  animation: twMidnightMint 1s linear infinite;
}

@keyframes twFadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.tw-fade-in-up { animation: twFadeInUp 0.6s ease-out; }


@keyframes twHinge {
  0% { transform: rotate(0); transform-origin: top left; }
  100% { transform: rotate(80deg); opacity: 0; }
}
.tw-hinge { animation: twHinge 1s ease-in; }

@keyframes twStretchIn {
  0% { transform: scaleX(0.1) scaleY(0.1); opacity: 0; }
  80% { transform: scaleX(1.1) scaleY(1.1); }
  100% { transform: scaleX(1) scaleY(1); opacity: 1; }
}
.tw-stretch-in { animation: twStretchIn 0.7s ease-out; }

@keyframes twFadeOutUp {
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-20px); }
}
.tw-fade-out-up { animation: twFadeOutUp 0.6s ease-in; }

@keyframes twPuffOut {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
}
.tw-puff-out { animation: twPuffOut 0.5s ease-out; }

@keyframes twVanishOut {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0.5); opacity: 0; }
}
.tw-vanish-out { animation: twVanishOut 0.4s ease-in; }

@keyframes twRubberBand {
  0% { transform: scaleX(1); }
  30% { transform: scaleX(1.25) scaleY(0.75); }
  60% { transform: scaleX(0.85) scaleY(1.15); }
  100% { transform: scaleX(1) scaleY(1); }
}
.tw-rubber-band { animation: twRubberBand 0.8s ease; }

@keyframes twWiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}
.tw-wiggle { animation: twWiggle 0.6s ease-in-out infinite; }


@keyframes twSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.tw-spin { animation: twSpin 1.5s linear infinite; }

@keyframes twFrostedGlass {
  0% { backdrop-filter: blur(0); opacity: 1; }
  100% { backdrop-filter: blur(10px); opacity: 0.8; }
}
.tw-frosted-glass { animation: twFrostedGlass 1.2s ease-in-out alternate infinite; }

@keyframes twRipple {
  0% { box-shadow: 0 0 0 0 rgba(0, 150, 255, 0.7); }
  100% { box-shadow: 0 0 0 20px rgba(0, 150, 255, 0); }
}
.tw-ripple { animation: twRipple 1.5s ease-out infinite; }

@keyframes tw-hologram {
  0% { opacity: 0.8; text-shadow: 0 0 10px #0ff; }
  50% { opacity: 1; text-shadow: 0 0 20px #0ff, 0 0 30px #0ff; }
  100% { opacity: 0.8; text-shadow: 0 0 10px #0ff; }
}
.tw-hologram {
  animation: tw-hologram 3s ease infinite;
  color: #0ff;
}

@keyframes twSkew {
  0%, 100% { transform: skewX(0deg); }
  50% { transform: skewX(15deg); }
}
.tw-skew { animation: twSkew 1s ease-in-out infinite; }

@keyframes twWarp {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.1) rotate(2deg); }
}
.tw-warp { animation: twWarp 2s ease-in-out infinite; }


@keyframes twHoverSkew {
  0% { transform: skewX(0deg); }
  100% { transform: skewX(10deg); }
}
.tw-hover-skew:hover { animation: twHoverSkew 0.3s ease-out forwards; }


@keyframes twHoverJitter {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
}
.tw-hover-jitter:hover { animation: twHoverJitter 0.2s linear infinite; }

@keyframes twRainbowFlow {
  0% { background: #ff0000; }
  16% { background: #ffff00; }
  33% { background: #00ff00; }
  50% { background: #00ffff; }
  66% { background: #0000ff; }
  83% { background: #ff00ff; }
  100% { background: #ff0000; }
}
.tw-rainbow-flow { animation: twRainbowFlow 8s linear infinite; }

@keyframes twHeatmap {
  0% { background: #ff0000; }
  50% { background: #0000ff; }
  100% { background: #ff0000; }
}
.tw-heatmap { animation: twHeatmap 4s ease-in-out infinite; }


@keyframes twloadcomplete {
  0% { stroke-dashoffset: 100; transform: scale(0.8); }
  50% { transform: scale(1.1); }
  100% { stroke-dashoffset: 0; transform: scale(1); }
}
.tw-load-complete {
  animation: twloadcomplete 0.6s ease-out forwards;
}
  @keyframes twscrollreveal {
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
}
.tw-scroll-reveal {
  animation: twscrollreveal 0.8s ease-out both;
}

@media (prefers-reduced-motion: no-preference) {
  .tw-scroll-reveal {
    animation-delay: 0.1s;
    animation-fill-mode: both;
  }
}
  @keyframes twtypewriter {
  from { width: 0 }
  to { width: 100% }
}
  @keyframes twblinkcaret {
  from, to { border-color: transparent }
  50% { border-color: black; }
}
.tw-typewriter {
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid; /* Cursor */
  animation: 
    twtypewriter 3s steps(40) forwards,
    twblinkcaret 0.75s step-end infinite;
}

@keyframes twtextgradientshift {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
.tw-text-gradient-shift {
  background: linear-gradient(90deg, #ff0000, #ff00ff, #0000ff);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: twtextgradientshift 3s linear infinite;
}

@keyframes twcolorpulse {
  0%, 100% { color: inherit; }
  50% { color: #4CAF50; }
}
.tw-color-pulse {
  animation: twcolorpulse 3s ease infinite;
}
@keyframes twletterspace {
  0%, 100% { letter-spacing: normal; }
  50% { letter-spacing: 2px; }
}
.tw-letter-space {
  animation: twletterspace 3s ease infinite;
}

@keyframes tw-flicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    text-shadow: 
      0 0 5px #fff,
      0 0 10px #fff,
      0 0 20px #0ff,
      0 0 40px #0ff;
    opacity: 1;
  }
  20%, 24%, 55% {
    opacity: 0.5;
    text-shadow: none;
  }
}
.tw-neon-flicker {
  animation: tw-flicker 3s infinite alternate;
}

@keyframes tw-drip {
  0% { transform: translateY(0) scaleY(0.8); }
  50% { transform: translateY(20px) scaleY(1.2); }
  100% { transform: translateY(40px) scaleY(0.9); }
}
.tw-liquid-drip {
  display: inline-block;
  animation: tw-drip 2s ease-in-out infinite;
  transform-origin: bottom;
}

@keyframes tw-magnetic {
  0% { transform: translate(0); }
  50% { transform: translate(5px, -5px); }
  100% { transform: translate(0); }
}
.tw-magnetic:hover {
  animation: tw-magnetic 0.8s ease infinite;
}

@keyframes tw-fold {
  0% { transform: rotateX(0); }
  50% { transform: rotateX(180deg); }
  100% { transform: rotateX(0); }
}
.tw-paper-fold {
  transform-style: preserve-3d;
  animation: tw-fold 3s ease-in-out infinite;
}

@keyframes tw-glitch {
  0% { clip-path: inset(0 0 98% 0); }
  10% { clip-path: inset(15% 0 30% 0); }
  20% { clip-path: inset(80% 0 5% 0); }
  30% { clip-path: inset(0 0 60% 0); }
  40% { clip-path: inset(50% 0 20% 0); }
  50% { clip-path: inset(10% 0 70% 0); }
  60% { clip-path: inset(0 0 30% 0); }
  70% { clip-path: inset(30% 0 40% 0); }
  80% { clip-path: inset(70% 0 10% 0); }
  90% { clip-path: inset(10% 0 60% 0); }
  100% { clip-path: inset(0 0 50% 0); }
}
.tw-glitch-pixel {
  animation: tw-glitch 2s linear infinite alternate;
}

@keyframes tw-smoke {
  0% { opacity: 1; filter: blur(0); }
  100% { opacity: 0; filter: blur(20px); }
}
.tw-smoke-out {
  animation: tw-smoke 2s ease-out forwards;
}

@keyframes tw-flare {
  0% { opacity: 0; transform: rotate(0deg) translateX(0); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: rotate(360deg) translateX(50px); }
}
.tw-lens-flare::after {
  content: '✦';
  position: absolute;
  animation: tw-flare 3s ease infinite;
}

@keyframes tw-ink-spread {
  from { clip-path: circle(0% at 50% 50%); }
  to { clip-path: circle(150% at 50% 50%); }
}
.tw-ink-reveal {
  animation: tw-ink-spread 2s ease-out forwards;
}
  

@keyframes tw-pulse-morph {
  0% { 
    transform: scale(1);
    background-color: #ff4d4d;
  }
  50% { 
    transform: scale(1.2);
    background-color: #4d79ff;
  }
  100% { 
    transform: scale(1);
    background-color: #ff4d4d;
  }
}
.tw-pulse-morph {
  animation: tw-pulse-morph 3s ease infinite;
}

@keyframes tw-gradient-wave {
  0%, 100% { 
    transform: scale(1);
    background: linear-gradient(90deg, #ff4d4d, #ff9a4d);
  }
  50% { 
    transform: scale(1.1);
    background: linear-gradient(90deg, #4d79ff, #4dffb8);
  }
}
.tw-gradient-wave {
  animation: tw-gradient-wave 4s ease infinite;
  background-size: 200% 200%;
}

@keyframes tw-color-expand {
  0% { 
    width: 100px;
    background-color: #ff4d4d;
  }
  50% { 
    width: 200px;
    background-color: #4d79ff;
  }
  100% { 
    width: 100px;
    background-color: #ff9a4d;
  }
}
.tw-color-expand {
  height: 50px;
  animation: tw-color-expand 3s ease infinite;
}

@keyframes tw-hue-scale {
  0% { 
    transform: scale(1);
    filter: hue-rotate(0deg);
  }
  100% { 
    transform: scale(1.5);
    filter: hue-rotate(360deg);
  }
}
.tw-hue-scale {
  animation: tw-hue-scale 4s alternate infinite;
}

@keyframes tw-bounce-color {
  0%, 100% { 
    transform: translateY(0) scale(1);
    background-color: #ff4d4d;
  }
  25% { 
    transform: translateY(-50px) scale(1.2);
    background-color: #4d79ff;
  }
  75% { 
    transform: translateY(25px) scale(0.8);
    background-color: #9a4dff;
  }
}
.tw-bounce-color {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: tw-bounce-color 2s ease infinite;
}

@keyframes tw-color-pop {
  0%, 20%, 50%, 80%, 100% { 
    transform: scale(1);
  }
  40% { 
    transform: scale(1.5);
    background-color: #4d79ff;
  }
  60% { 
    transform: scale(0.8);
    background-color: #9a4dff;
  }
} 
.tw-color-pop {
  animation: tw-color-pop 3s ease infinite;
}

@keyframes tw-liquid-metal {
  0% {
    transform: scale(1);
    background: linear-gradient(135deg, #a8a8a8, #e0e0e0);
    box-shadow: 0 0 15px rgba(224, 224, 224, 0.8);
  }
  25% {
    transform: scale(1.05);
    background: linear-gradient(135deg, #e0e0e0, #a8a8a8);
    filter: hue-rotate(45deg);
  }
  50% {
    transform: scale(1.1);
    background: linear-gradient(135deg, #c0c0c0, #d0d0d0);
    box-shadow: 0 0 25px rgba(192, 192, 192, 0.9);
  }
  75% {
    transform: scale(1.05);
    background: linear-gradient(135deg, #d0d0d0, #b0b0b0);
    filter: hue-rotate(-45deg);
  }
  100% {
    transform: scale(1);
    background: linear-gradient(135deg, #a8a8a8, #e0e0e0);
    box-shadow: 0 0 15px rgba(224, 224, 224, 0.8);
  }
}

.tw-liquid-metal {
  animation: tw-liquid-metal 4s ease-in-out infinite;
  border-radius: 8px;
  padding: 20px;
  display: inline-block;
  background-size: 200% 200%;
}

@keyframes tw-shapeshift {
  0% {
    border-radius: 0;
    width: 100px;
    height: 100px;
    transform: skew(0deg);
  }
  15% { /* Circle */
    border-radius: 50%;
    width: 100px;
    height: 100px;
    transform: skew(0deg);
  }
  30% { /* Tall Rectangle */
    border-radius: 0;
    width: 80px;
    height: 120px;
    transform: skew(0deg);
  }
  45% { /* Parallelogram */
    border-radius: 0;
    width: 120px;
    height: 80px;
    transform: skew(30deg);
  }
  60% { /* Squircle */
    border-radius: 25%;
    width: 100px;
    height: 100px;
    transform: skew(0deg);
  }
  75% { /* Diamond */
    border-radius: 0;
    width: 100px;
    height: 100px;
    transform: rotate(45deg);
  }
  90% { /* Rounded Rectangle */
    border-radius: 15px;
    width: 120px;
    height: 80px;
    transform: skew(0deg);
  }
  100% { /* Back to Square */
    border-radius: 0;
    width: 100px;
    height: 100px;
    transform: skew(0deg);
  }
}

.tw-shapeshift {
  animation: tw-shapeshift 8s ease-in-out infinite;
  background: linear-gradient(45deg, #ff4d4d, #4d79ff);
  margin: 20px;
  display: inline-block;
  will-change: border-radius, transform, width, height;
}

@keyframes tw-white-pink {
  0% { background-color: white; color: pink; }
  100% { background-color: white; color: pink; }
}
.tw-white-pink {
  animation: tw-white-pink 1s linear infinite;
}

@keyframes tw-white-red {
  0% { background-color: white; color: red; }
  100% { background-color: white; color: red; }
}
.tw-white-red {
  animation: tw-white-red 1s linear infinite;
}

@keyframes tw-white-blue {
  0% { background-color: white; color: blue; }
  100% { background-color: white; color: blue; }
}
.tw-white-blue {
  animation: tw-white-blue 1s linear infinite;
}

@keyframes tw-white-green {
  0% { background-color: white; color: green; }
  100% { background-color: white; color: green; }
}
.tw-white-green {
  animation: tw-white-green 1s linear infinite;
}

@keyframes tw-white-purple {
  0% { background-color: white; color: purple; }
  100% { background-color: white; color: purple; }
}
.tw-white-purple {
  animation: tw-white-purple 1s linear infinite;
}

@keyframes tw-white-orange {
  0% { background-color: white; color: orange; }
  100% { background-color: white; color: orange; }
}
.tw-white-orange {
  animation: tw-white-orange 1s linear infinite;
}

@keyframes tw-white-yellow {
  0% { background-color: white; color: yellow; }
  100% { background-color: white; color: yellow; }
}
.tw-white-yellow {
  animation: tw-white-yellow 1s linear infinite;
}

@keyframes tw-white-brown {
  0% { background-color: white; color: brown; }
  100% { background-color: white; color: brown; }
}
.tw-white-brown {
  animation: tw-white-brown 1s linear infinite;
}

@keyframes tw-white-cyan {
  0% { background-color: white; color: cyan; }
  100% { background-color: white; color: cyan; }
}
.tw-white-cyan {
  animation: tw-white-cyan 1s linear infinite;
}

@keyframes tw-white-lime {
  0% { background-color: white; color: lime; }
  100% { background-color: white; color: lime; }
}
.tw-white-lime {
  animation: tw-white-lime 1s linear infinite;
}

@keyframes tw-white-gold {
  0% { background-color: white; color: gold; }
  100% { background-color: white; color: gold; }
}
.tw-white-gold {
  animation: tw-white-gold 1s linear infinite;
}

@keyframes tw-white-indigo {
  0% { background-color: white; color: indigo; }
  100% { background-color: white; color: indigo; }
}
.tw-white-indigo {
  animation: tw-white-indigo 1s linear infinite;
}

@keyframes tw-color-flux {
  0% {
    color: #ff4d4d;
    background-color: #4d79ff;
  }
  15% {
    color: #ffffff;
    background-color: #ff4d4d;
  }
  30% {
    color: #4dff4d;
    background-color: #ff4dff;
  }
  45% {
    color: #ffff4d;
    background-color: #4d4dff;
  }
  60% {
    color: #ff4dff;
    background-color: #4dff4d;
  }
  75% {
    color: #4d79ff;
    background-color: #ffff4d;
  }
  90% {
    color: #4dff4d;
    background-color: #ff4d4d;
  }
  100% {
    color: #ff4d4d;
    background-color: #4d79ff;
  }
}

.tw-color-flux {
  animation: tw-color-flux 12s ease infinite;
  padding: 1rem;
  display: inline-block;
  border-radius: 4px;
}

@keyframes tw-liquid-fill {
  0% { 
    background-position: 0% 100%;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% { 
    background-position: 100% 0%;
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  100% { 
    background-position: 0% 100%;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}
.tw-liquid-fill {
  animation: tw-liquid-fill 8s ease-in-out infinite;
  background: linear-gradient(45deg, #ff4d4d, #4d79ff, #4dff4d);
  background-size: 200% 200%;
}
@keyframes tw-text-scramble {
  0% { 
    content: "A";
    opacity: 0.3;
    transform: translateY(-10px);
  }
  10% { 
    content: "X"; 
    opacity: 0.6;
  }
  20% { 
    content: "5"; 
    opacity: 0.8;
  }
  30% { 
    content: "M"; 
    opacity: 1;
    transform: translateY(0);
  }
  100% { 
    opacity: 1;
    transform: translateY(0);
  }
}
.tw-text-scramble::before {
  content: "";
  animation: tw-text-scramble 0.8s steps(10) forwards;
}
@keyframes tw-matrix-rain {
  0% { 
    transform: translateY(-100%);
    opacity: 1;
  }
  80% { 
    opacity: 1;
  }
  100% { 
    transform: translateY(500%);
    opacity: 0;
  }
}
.tw-matrix-rain {
  position: relative;
  overflow: hidden;
}
.tw-matrix-rain::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(transparent, #0f0, transparent);
  animation: tw-matrix-rain 2s linear infinite;
}
@keyframes tw-particle-explosion {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(var(--tx), var(--ty)) scale(0);
    opacity: 0;
  }
}
.tw-particle-explosion {
  position: relative;
}
.tw-particle-explosion span {
  position: absolute;
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  animation: tw-particle-explosion 1s ease-out forwards;
}
@keyframes tw-tornado-twist {
  0% { 
    transform: rotate(0deg) translateY(0) scale(1);
    opacity: 1;
  }
  50% { 
    transform: rotate(180deg) translateY(-20px) scale(1.2);
    opacity: 0.8;
  }
  100% { 
    transform: rotate(360deg) translateY(0) scale(1);
    opacity: 1;
  }
}
.tw-tornado-twist {
  animation: tw-tornado-twist 3s ease-in-out infinite;
  transform-origin: center;
}
@keyframes tw-hyperspace-jump {
  0% {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
  25% {
    transform: translateX(-100%) scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: translateX(100%) scale(0.8);
    opacity: 0.5;
  }
  75% {
    transform: translateX(0) scale(1.2);
    opacity: 0.8;
  }
  100% {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
}
.tw-hyperspace-jump {
  animation: tw-hyperspace-jump 2s ease infinite;
}
@keyframes tw-vortex-spin {
  0% {
    transform: rotate(0deg) scale(1);
    border-radius: 50%;
  }
  50% {
    transform: rotate(180deg) scale(1.5);
    border-radius: 10%;
  }
  100% {
    transform: rotate(360deg) scale(1);
    border-radius: 50%;
  }
}
.tw-vortex-spin {
  animation: tw-vortex-spin 4s ease-in-out infinite;
}
@keyframes tw-prism-reflection {
  0% { 
    filter: hue-rotate(0deg) drop-shadow(0 0 5px rgba(255, 0, 0, 0.5));
  }
  33% { 
    filter: hue-rotate(120deg) drop-shadow(0 0 5px rgba(0, 255, 0, 0.5));
  }
  66% { 
    filter: hue-rotate(240deg) drop-shadow(0 0 5px rgba(0, 0, 255, 0.5));
  }
  100% { 
    filter: hue-rotate(360deg) drop-shadow(0 0 5px rgba(255, 0, 0, 0.5));
  }
}
.tw-prism-reflection {
  animation: tw-prism-reflection 6s linear infinite;
}

`;