import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { FiHome, FiPlay, FiSettings, FiBook,FiFilm } from 'react-icons/fi';

import Background from '../assets/Background.svg';

export default function AnimationsPage() {
  const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('entrance');
  const [Animation, setAnimation] = useState(0);

const animationCategories = {
    entrance: ['fadeIn', 'slideUp','hinge','stretchIn','fadeInUp', 'slideDown', 'slideLeft', 'slideRight', 'zoomIn', 'bounceIn', 'flipInX', 'flipInY', 'rotateIn', 'rollIn', 'lightSpeedIn', 'jackInTheBox', 'revealUp', 'revealDown', 'expand', 'fadeSlide', 'scaleReveal', 'Curtain'],
    exit: ['fadeOut', 'slideUp', 'slideDown', 'slideLeft', 'slideRight', 'zoomOut', 'bounceOut', 'flipOutX', 'flipOutY', 'rotateOut', 'rollOut', 'lightSpeedOut', 'collapse', 'fadeSlide', 'Curtain','fadeOutUp','puffOut','vanishOut'],
    attention: ['bounce', 'shake', 'pulse', 'flash', 'wobble', 'swing', 'tada', 'jello', 'heartbeat', 'blink', 'wave', 'sway','rubberBand','wiggle','spin','liquidDrip','MagneticPull','PaperFold','PixelGlitch','Smoke','Flare','InkSpread'],
    effects: ['Glow', 'Shadow', 'neonGlow', 'shimmer', 'glitch', 'GlowPulse', 'Sparkle', 'Mirror', 'Aura', 'Dust', 'Snap','frostedGlass','ripple','hologram','loadComplete','scrollReveal','typewriter', 'letterSpace','shapeShift'],
    transforms: ['scaleUp', 'scaleDown', 'enlarge', 'shrink', 'rotate', 'floating', 'Teleport', 'ZigZag', 'Orbit', 'PopUpSpin', 'UpsideDown','skew','warp'],
    hovers: ['HoverPop', 'HoverShrink', 'HoverEnlarge', 'HoverShake', 'HoverFade', 'HoverGlow', 'HoverShadow', 'hoverBlur', 'hoverRotate', 'hoverUnderlineLeft', 'hoverUnderlineRight', 'hoverBorderGlow', 'hoverScaleBounce', 'hoverTilt', 'HoverUpsideDown', 'HoverTeleport','hoverSkew','hoverJitter'],
    color: ['ColorCycle', 'BlackRed', 'BlackBlue', 'BlackGreen', 'BlackPurple', 'BlackYellow', 'BlackWhite', 'BlackOrange', 'BlackPink', 'BlackGray', 'BlackCyan', 'BlackBrown', 'BlackGold', 'BlackSilver', 'BlackMagenta', 'BlueYellow', 'DarkGreenLime', 'PurpleOrange', 'IndigoPink', 'GrayCyan', 'DarkBlueWhite', 'TealSalmon', 'OliveViolet', 'BrownSkyBlue', 'MidnightGreenMint', 'CrimsonLemon', 'SlatePeach', 'CharcoalLavender', 'MaroonMint', 'DarkCyanGold', 'DeepPurpleIvory', 'ForestPink', 'SteelRose', 'EggplantSun','rainbowFlow','heatmap','textGradientShift','ColorPulse','Neonflicker','PulseMorph','GradientWave','ColorExpand','RotateHue','ColorBounceBalls','ColorPop','LiquidMetal','WhitePink','WhiteRed','WhiteBlue','WhiteGreen','WhitePurple','WhiteOrange','WhiteYellow','WhiteBrown','WhiteCyan','WhiteLime','WhiteGold','WhiteIndigo',],
};
  const animationMap = {
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
    revealUp: "tw-reveal-up",
    revealDown: "tw-reveal-down",
    collapse: "tw-collapse",
    expand: "tw-expand",
    fadeSlide: "tw-fade-slide-left",
    bounceIn: "tw-bounce-in",
    bounceOut: "tw-bounce-out",
    scaleReveal: "tw-scale-reveal",
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
    Snap: "tw-thanos-snap",
    UpsideDown: "tw-upside-down",
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
    HoverUpsideDown: "tw-hover-upsidedown",
    HoverTeleport: "tw-hover-teleport",
    ColorCycle: "tw-color-cycle",
    BlackRed: "tw-black-red",
    BlackBlue: "tw-black-blue",
    BlackGreen: "tw-black-green",
    BlackPurple: "tw-black-purple",
    BlackYellow: "tw-black-yellow",
    BlackWhite: "tw-black-white",
    BlackOrange: "tw-black-orange",
    BlackPink: "tw-black-pink",
    BlackGray: "tw-black-gray",
    BlackCyan: "tw-black-cyan",
    BlackBrown: "tw-black-brown",
    BlackGold: "tw-black-gold",
    BlackSilver: "tw-black-silver",
    BlackMagenta: "tw-black-magenta",
    BlueYellow: "tw-blue-yellow",
    DarkGreenLime: "tw-dark-green-lime",
    PurpleOrange: "tw-purple-orange",
    IndigoPink: "tw-indigo-pink",
    GrayCyan: "tw-gray-cyan",
    DarkBlueWhite: "tw-dark-blue-white",
    TealSalmon: "tw-teal-salmon",
    OliveViolet: "tw-olive-violet",
    BrownSkyBlue: "tw-brown-sky-blue",
    MidnightGreenMint: "tw-midnight-green-mint",
    CrimsonLemon: "tw-crimson-lemon",
    SlatePeach: "tw-slate-peach",
    CharcoalLavender: "tw-charcoal-lavender",
    MaroonMint: "tw-maroon-mint",
    DarkCyanGold: "tw-dark-cyan-gold",
    DeepPurpleIvory: "tw-deep-purple-ivory",
    ForestPink: "tw-forest-pink",
    SteelRose: "tw-steel-rose",
    EggplantSun: "tw-eggplant-sun",
    fadeInUp: "tw-fade-in-up",
    hinge: "tw-hinge",
    stretchIn: "tw-stretch-in",
    fadeOutUp: "tw-fade-out-up",
    puffOut: "tw-puff-out",
    vanishOut: "tw-vanish-out",
    rubberBand: "tw-rubber-band",
    wiggle: "tw-wiggle",
    spin: "tw-spin",
    frostedGlass: "tw-frosted-glass",
    ripple: "tw-ripple",
    hologram: "tw-hologram",
    skew: "tw-skew",
    warp: "tw-warp",
    hoverSkew: "tw-hover-skew",
    hoverJitter: "tw-hover-jitter",
    rainbowFlow: "tw-rainbow-flow",
    heatmap: "tw-heatmap",
    loadComplete: "tw-load-complete",
    scrollReveal: "tw-scroll-reveal",
    typewriter: "tw-typewriter",
    letterSpace:"tw-letter-space",
    textGradientShift: "tw-text-gradient-shift",
    ColorPulse:"tw-color-pulse",
    Neonflicker:"tw-neon-flicker",
    liquidDrip:"tw-liquid-drip",
    MagneticPull:"tw-magnetic",
    PaperFold:"tw-paper-fold",
    PixelGlitch:"tw-glitch-pixel",
    Smoke:"tw-smoke-out",
    Flare:"tw-lens-flare",
    InkSpread:"tw-ink-reveal",
    PulseMorph:"tw-pulse-morph",
    GradientWave:"tw-gradient-wave",
    ColorExpand:"tw-color-expand",
    RotateHue:"tw-hue-scale",
    ColorBounceBalls:"tw-bounce-color",
    ColorPop:"tw-color-pop",
    LiquidMetal:"tw-liquid-metal",
    WhitePink:"tw-white-pink",
    WhiteRed:"tw-white-red",
    WhiteBlue: "tw-white-blue",
    WhiteGreen: "tw-white-green",
    WhitePurple: "tw-white-purple",
    WhiteOrange: "tw-white-orange",
    WhiteYellow: "tw-white-yellow",
    WhiteBrown: "tw-white-brown",
    WhiteCyan: "tw-white-cyan",
    WhiteLime: "tw-white-lime",
    WhiteGold: "tw-white-gold",
    WhiteIndigo: "tw-white-indigo",
    shapeShift: "tw-shapeshift",
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScroll > currentScrollPos || currentScrollPos < 10);
      setPrevScroll(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScroll]);

  useEffect(() => {
    const elements = document.querySelectorAll('.ani-scroll');

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('tw-fade-in');
          entry.target.style.opacity = 1;
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => {
      el.style.opacity = 0;
      observer.observe(el);
    });
  }, []);

  const handleAnimationClick = ( animName) => {
    const newActiveAnimations = {};
    Object.keys(animationMap).forEach(key => {
      newActiveAnimations[key] = false;
    });
    newActiveAnimations[animName] = true;
    setAnimation(newActiveAnimations);
    setTimeout(() => {
      setAnimation(prev => ({...prev, [animName]: false}));
    }, 3500);
  };


  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="min-h-screen text-blue-100 relative"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Desktop Navbar */}
      <nav className={`fixed w-full bg-black/80 backdrop-blur-md z-50 transition-all duration-300 ${visible ? 'top-0' : '-top-20'} hidden md:block tw-slide-down`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-blue-400 text-2xl font-bold tw-pulse">Ani-Js</Link>
          <div className="flex space-x-8">
            <Link to="/" className="text-blue-200 hover:text-blue-400 transition tw-hoverenlarge">Home</Link>
            <Link to="/usage" className="text-blue-200 hover:text-blue-400 transition tw-hoverenlarge">Usage</Link>
            <Link to="/animations" className="text-blue-200 hover:text-blue-400 transition tw-hoverenlarge">Animations</Link>
            <Link to="/playground" className="text-blue-200 hover:text-blue-400 transition tw-hoverenlarge">Playground</Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 py-16 px-6">
        <div className="max-w-5xl mx-auto p-10">
          <h1 className="text-4xl font-bold text-blue-400 mb-10 text-center flex items-center justify-center gap-2">
            <FiFilm size={32} /> Available Animations
          </h1>
          
          {/* Navigation Links */}
          <div className="ani-scroll mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">Animation Categories</h2>
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => scrollToSection('entrance')} 
                className={`px-4 py-2 rounded-lg ${activeSection === 'entrance' ? 'bg-blue-600 text-white' : 'bg-blue-900/50 text-blue-200'} hover:bg-blue-700 transition`}
              >
                Entrance
              </button>
              <button 
                onClick={() => scrollToSection('exit')} 
                className={`px-4 py-2 rounded-lg ${activeSection === 'exit' ? 'bg-blue-600 text-white' : 'bg-blue-900/50 text-blue-200'} hover:bg-blue-700 transition`}
              >
                Exit
              </button>
              <button 
                onClick={() => scrollToSection('attention')} 
                className={`px-4 py-2 rounded-lg ${activeSection === 'attention' ? 'bg-blue-600 text-white' : 'bg-blue-900/50 text-blue-200'} hover:bg-blue-700 transition`}
              >
                Attention
              </button>
              <button 
                onClick={() => scrollToSection('effects')} 
                className={`px-4 py-2 rounded-lg ${activeSection === 'effects' ? 'bg-blue-600 text-white' : 'bg-blue-900/50 text-blue-200'} hover:bg-blue-700 transition`}
              >
                Effects
              </button>
              <button 
                onClick={() => scrollToSection('transforms')} 
                className={`px-4 py-2 rounded-lg ${activeSection === 'transforms' ? 'bg-blue-600 text-white' : 'bg-blue-900/50 text-blue-200'} hover:bg-blue-700 transition`}
              >
                Transforms
              </button>
              <button 
                onClick={() => scrollToSection('hovers')} 
                className={`px-4 py-2 rounded-lg ${activeSection === 'hovers' ? 'bg-blue-600 text-white' : 'bg-blue-900/50 text-blue-200'} hover:bg-blue-700 transition`}
              >
                Hovers
              </button>
              <button 
                onClick={() => scrollToSection('color')} 
                className={`px-4 py-2 rounded-lg ${activeSection === 'color' ? 'bg-blue-600 text-white' : 'bg-blue-900/50 text-blue-200'} hover:bg-blue-700 transition`}
              >
                Color Effects
              </button>
            </div>
          </div>

          {/* Animation Sections */}
          <div className="space-y-16">
            <p className="text-blue-200 text-center mt-2 italic text-sm ani-scroll">
              *All animations are designed with a 4-second demo loop here for preview purposes, but in actual usage, most of them run infinitely unless you customize the duration.
            </p>
            {/* Entrance Animations */}
            <div id="entrance" className="ani-scroll">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300 border-b border-blue-800 pb-2">Entrance Animations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {animationCategories.entrance.map(anim => (
                  <div key={anim} className="bg-blue-900/30 p-4 rounded-lg">
                    <div 
                      className={`w-full h-20 bg-blue-800 rounded mb-2 flex items-center justify-center cursor-pointer ${Animation[anim] ? animationMap[anim] : ''}`}
                      onClick={() => handleAnimationClick( anim)}
                    >
                      {anim}
                    </div>
                    <div className="text-sm text-blue-300 font-mono">{animationMap[anim]}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Exit Animations */}
            <div id="exit" className="ani-scroll">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300 border-b border-blue-800 pb-2">Exit Animations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {animationCategories.exit.map(anim => (
                  <div key={anim} className="bg-blue-900/30 p-4 rounded-lg">
                    <div 
                      className={`w-full h-20 bg-blue-800 rounded mb-2 flex items-center justify-center cursor-pointer ${Animation[anim] ? animationMap[anim] : ''}`}
                      onClick={() => handleAnimationClick( anim)}
                    >
                      {anim}
                    </div>
                    <div className="text-sm text-blue-300 font-mono">{animationMap[anim]}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Attention Animations */}
            <div id="attention" className="ani-scroll">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300 border-b border-blue-800 pb-2">Attention Animations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {animationCategories.attention.map(anim => (
                  <div key={anim} className="bg-blue-900/30 p-4 rounded-lg">
                    <div 
                      className={`w-full h-20 bg-blue-800 rounded mb-2 flex items-center justify-center cursor-pointer ${Animation[anim] ? animationMap[anim] : ''}`}
                      onClick={() => handleAnimationClick( anim)}
                    >
                      {anim}
                    </div>
                    <div className="text-sm text-blue-300 font-mono">{animationMap[anim]}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Effects Animations */}
            <div id="effects" className="ani-scroll">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300 border-b border-blue-800 pb-2">Effects Animations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {animationCategories.effects.map(anim => (
                  <div key={anim} className="bg-blue-900/30 p-4 rounded-lg">
                    <div 
                      className={`w-full h-20 bg-blue-800 rounded mb-2 flex items-center justify-center cursor-pointer ${Animation[anim] ? animationMap[anim] : ''}`}
                      onClick={() => handleAnimationClick( anim)}
                    >
                      {anim}
                    </div>
                    <div className="text-sm text-blue-300 font-mono">{animationMap[anim]}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transform Animations */}
            <div id="transforms" className="ani-scroll">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300 border-b border-blue-800 pb-2">Transform Animations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {animationCategories.transforms.map(anim => (
                  <div key={anim} className="bg-blue-900/30 p-4 rounded-lg">
                    <div 
                      className={`w-full h-20 bg-blue-800 rounded mb-2 flex items-center justify-center cursor-pointer ${Animation[anim] ? animationMap[anim] : ''}`}
                      onClick={() => handleAnimationClick( anim)}
                    >
                      {anim}
                    </div>
                    <div className="text-sm text-blue-300 font-mono">{animationMap[anim]}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hover Animations */}
            <div id="hovers" className="ani-scroll">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300 border-b border-blue-800 pb-2">Hover Animations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {animationCategories.hovers.map(anim => (
                  <div key={anim} className="bg-blue-900/30 p-4 rounded-lg">
                    <div 
                      className={`w-full h-20 bg-blue-800 rounded mb-2 flex items-center justify-center cursor-pointer tw-hoverenlarge ${Animation[anim] ? animationMap[anim] : ''}`}
                      onClick={() => handleAnimationClick( anim)}
                      onMouseEnter={() => {
                        if (!Animation[anim]) {
                          handleAnimationClick( anim);
                        }
                      }}
                    >
                      {anim}
                    </div>
                    <div className="text-sm text-blue-300 font-mono">{animationMap[anim]}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Effects */}
            <div id="color" className="ani-scroll">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300 border-b border-blue-800 pb-2">Color Effects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {animationCategories.color.map(anim => (
                  <div key={anim} className="bg-blue-900/30 p-4 rounded-lg">
                    <div 
                      className={`w-full h-20 bg-blue-800 rounded mb-2 flex items-center justify-center cursor-pointer ${Animation[anim] ? animationMap[anim] : ''}`}
                      onClick={() => handleAnimationClick( anim)}
                    >
                      {anim}
                    </div>
                    <div className="text-sm text-blue-300 font-mono">{animationMap[anim]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}