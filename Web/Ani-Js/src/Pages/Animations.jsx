import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { FiHome, FiPlay, FiSettings, FiBook,FiFilm } from 'react-icons/fi';

import Background from '../assets/Background.png';

export default function AnimationsPage() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAnimation, setActiveAnimation] = useState('tw-fade-in');
  const [activeSection, setActiveSection] = useState('entrance');
  const [shouldPlayAnimation, setShouldPlayAnimation] = useState(false);
  const demoBoxRef = useRef(null);
   const demoBoxContentRef = useRef(null);

const animationCategories = {
    entrance: ['fadeIn', 'slideUp', 'slideDown', 'slideLeft', 'slideRight', 'zoomIn', 'bounceIn', 'flipInX', 'flipInY', 'rotateIn', 'rollIn', 'lightSpeedIn', 'jackInTheBox', 'revealUp', 'revealDown', 'expand', 'fadeSlide', 'scaleReveal', 'Curtain'],
    exit: ['fadeOut', 'slideUp', 'slideDown', 'slideLeft', 'slideRight', 'zoomOut', 'bounceOut', 'flipOutX', 'flipOutY', 'rotateOut', 'rollOut', 'lightSpeedOut', 'collapse', 'fadeSlide', 'Curtain'],
    attention: ['bounce', 'shake', 'pulse', 'flash', 'wobble', 'swing', 'tada', 'jello', 'heartbeat', 'blink', 'wave', 'sway'],
    effects: ['Glow', 'Shadow', 'neonGlow', 'shimmer', 'glitch', 'GlowPulse', 'Sparkle', 'Mirror', 'Aura', 'Dust', 'Snap', 'typingEffect'],
    transforms: ['scaleUp', 'scaleDown', 'enlarge', 'shrink', 'rotate', 'floating', 'zigzag', 'orbit', 'popUpSpin', 'Teleport', 'ZigZag', 'Orbit', 'PopUpSpin', 'rotateYFlipCard', 'UpsideDown'],
    hovers: ['HoverPop', 'HoverShrink', 'HoverEnlarge', 'HoverShake', 'HoverFade', 'HoverGlow', 'HoverShadow', 'hoverBlur', 'hoverRotate', 'hoverUnderlineLeft', 'hoverUnderlineRight', 'hoverBorderGlow', 'hoverScaleBounce', 'hoverTilt', 'HoverUpsideDown', 'HoverTeleport'],
    color: ['ColorCycle', 'BlackRed', 'BlackBlue', 'BlackGreen', 'BlackPurple', 'BlackYellow', 'BlackWhite', 'BlackOrange', 'BlackPink', 'BlackGray', 'BlackCyan', 'BlackBrown', 'BlackGold', 'BlackSilver', 'BlackMagenta', 'BlueYellow', 'DarkGreenLime', 'PurpleOrange', 'IndigoPink', 'GrayCyan', 'DarkBlueWhite', 'TealSalmon', 'OliveViolet', 'BrownSkyBlue', 'MidnightGreenMint', 'CrimsonLemon', 'SlatePeach', 'CharcoalLavender', 'MaroonMint', 'DarkCyanGold', 'DeepPurpleIvory', 'ForestPink', 'SteelRose', 'EggplantSun']
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
    typingEffect: "tw-typing-effect",
    revealUp: "tw-reveal-up",
    revealDown: "tw-reveal-down",
    collapse: "tw-collapse",
    expand: "tw-expand",
    fadeSlide: "tw-fade-slide-left",
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
    EggplantSun: "tw-eggplant-sun"
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

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

 const handleAnimationClick = (animationClass) => {
    setShouldPlayAnimation(false);
    if (demoBoxContentRef.current) {
    Object.values(animationMap).forEach(animClass => {
      demoBoxContentRef.current.classList.remove(animClass);
    });
  }

    if (demoBoxRef.current) {
      demoBoxRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      setTimeout(() => {
        setActiveAnimation(animationClass);
        setShouldPlayAnimation(true);
      }, 1000);
    } else {
      setActiveAnimation(animationClass);
      setShouldPlayAnimation(true);
    }
  };

  useEffect(() => {
    if (shouldPlayAnimation && demoBoxContentRef.current) {
      void demoBoxContentRef.current.offsetWidth;
      demoBoxContentRef.current.classList.add(activeAnimation);
    }
  }, [shouldPlayAnimation, activeAnimation]);

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
      
      {/* Mobile Sidebar */}
      <div className="md:hidden fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
        <div
          className={`bg-black/80 backdrop-blur-md rounded-l-lg p-2 transition-all duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-[calc(100%-40px)]'} tw-slide-left`}
          onMouseEnter={() => setMobileMenuOpen(true)}
          onMouseLeave={() => setMobileMenuOpen(false)}
        >
          <div className="flex flex-col space-y-4">
            <Link to="/" className="p-2 text-blue-200 hover:text-blue-400 transition flex items-center tw-hoverenlarge" title="Home">
              <FiHome size={24} />
              {mobileMenuOpen && <span className="ml-2">Home</span>}
            </Link>
            <Link to="/usage" className="p-2 text-blue-200 hover:text-blue-400 transition flex items-center tw-hoverenlarge" title="Usage">
              <FiBook size={24} />
              {mobileMenuOpen && <span className="ml-2">Usage</span>}
            </Link>
            <Link to="/animations" className="p-2 text-blue-200 hover:text-blue-400 transition flex items-center tw-hoverenlarge" title="Animations">
              <FiSettings size={24} />
              {mobileMenuOpen && <span className="ml-2">Animations</span>}
            </Link>
            <Link to="/playground" className="p-2 text-blue-200 hover:text-blue-400 transition flex items-center tw-hoverenlarge" title="Playground">
              <FiPlay size={24} />
              {mobileMenuOpen && <span className="ml-2">Playground</span>}
            </Link>
          </div>
        </div>
      </div>

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

          {/* Demo Box */}
         <div ref={demoBoxRef} className="ani-scroll mb-12">
            <div 
              ref={demoBoxContentRef}
              className={`w-full h-40 bg-blue-900/50 rounded-lg flex items-center justify-center text-xl mb-4 ${shouldPlayAnimation ? activeAnimation : ''}`}
            >
              Animation Preview
            </div>
            <div className="text-center text-blue-300 mb-6">
              Current Animation: <span className="font-mono bg-blue-900/50 px-2 py-1 rounded">{activeAnimation}</span>
            </div>
          </div>

          {/* Animation Sections */}
          <div className="space-y-16">
            {/* Entrance Animations */}
            <div id="entrance" className="ani-scroll">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300 border-b border-blue-800 pb-2">Entrance Animations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {animationCategories.entrance.map(anim => (
                  <div key={anim} className="bg-blue-900/30 p-4 rounded-lg">
                    <button 
                      onClick={() => handleAnimationClick(animationMap[anim])}
                      className="w-full bg-blue-800 hover:bg-blue-700 text-blue-100 py-2 px-4 rounded mb-2 transition tw-hoverenlarge"
                    >
                      {anim}
                    </button>
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
                    <button 
                      onClick={() => handleAnimationClick(animationMap[anim])}
                      className="w-full bg-blue-800 hover:bg-blue-700 text-blue-100 py-2 px-4 rounded mb-2 transition tw-hoverenlarge"
                    >
                      {anim}
                    </button>
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
                    <button 
                      onClick={() => handleAnimationClick(animationMap[anim])}
                      className="w-full bg-blue-800 hover:bg-blue-700 text-blue-100 py-2 px-4 rounded mb-2 transition tw-hoverenlarge"
                    >
                      {anim}
                    </button>
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
                    <button 
                      onClick={() => handleAnimationClick(animationMap[anim])}
                      className="w-full bg-blue-800 hover:bg-blue-700 text-blue-100 py-2 px-4 rounded mb-2 transition tw-hoverenlarge"
                    >
                      {anim}
                    </button>
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
                    <button 
                      onClick={() => handleAnimationClick(animationMap[anim])}
                      className="w-full bg-blue-800 hover:bg-blue-700 text-blue-100 py-2 px-4 rounded mb-2 transition tw-hoverenlarge"
                    >
                      {anim}
                    </button>
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
                        <button 
                        onMouseEnter={() => {
                            if (!shouldPlayAnimation) {
                            demoBoxContentRef.current.classList.remove(activeAnimation);
                            demoBoxContentRef.current.classList.add(animationMap[anim]);
                            }
                        }}
                        onMouseLeave={() => {
                            if (!shouldPlayAnimation) {
                            demoBoxContentRef.current.classList.remove(animationMap[anim]);
                            demoBoxContentRef.current.classList.add('tw-fade-in');
                            }
                        }}
                        onClick={() => handleAnimationClick(animationMap[anim])}
                        className="w-full bg-blue-800 hover:bg-blue-700 text-blue-100 py-2 px-4 rounded mb-2 transition tw-hoverenlarge"
                        >
                        {anim}
                        </button>
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
                    <button 
                      onClick={() => handleAnimationClick(animationMap[anim])}
                      className="w-full bg-blue-800 hover:bg-blue-700 text-blue-100 py-2 px-4 rounded mb-2 transition tw-hoverenlarge"
                    >
                      {anim}
                    </button>
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