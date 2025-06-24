import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiHome, FiPlay, FiSettings, FiBook } from 'react-icons/fi';
import Background from '../assets/Background.png';

export default function UsagePage() {
      const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div className="max-w-5xl mx-auto bg-black/70 backdrop-blur-sm p-10 rounded-xl">
          <h1 className="text-4xl font-bold text-blue-400 mb-10 text-center">📖 Ani-Js Installation & Usage</h1>
             <div className="ani-scroll">
                {/* Installation Section */}
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">🔧 Installation</h2>
                <pre className="bg-blue-900/50 p-4 rounded-lg text-blue-100 overflow-x-auto border border-blue-800 mb-6">
                    <code>npm install ani-js</code>
                </pre>
                <pre className="bg-blue-900/50 p-4 rounded-lg text-blue-100 overflow-x-auto border border-blue-800 mb-10">
                    <code>yarn add ani-js</code>
                </pre>
            </div>
            <div className="ani-scroll">
          {/* Vanilla JS Usage */}
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">📜 Usage - Vanilla JavaScript</h2>
          <h3 className="text-xl font-semibold text-blue-200 mb-2">Function-based</h3>
          <pre className="bg-blue-900/50 p-4 rounded-lg text-blue-100 overflow-x-auto border border-blue-800 mb-6">
            <code>{`<div id="box">Hello</div>
<button id="btn">Animate</button>
<script type="module">
  import { fadeIn } from 'ani-js';

  document.getElementById('btn').addEventListener('click', () => {
    const el = document.getElementById('box');
    fadeIn(el, 700);
  });
</script>`}</code>
          </pre>

          <h3 className="text-xl font-semibold text-blue-200 mb-2">Class-based</h3>
          <pre className="bg-blue-900/50 p-4 rounded-lg text-blue-100 overflow-x-auto border border-blue-800 mb-6">
            <code>{`<div class="tw-fade-in">Hello</div>`}</code>
          </pre>
            </div>
          {/* Plain HTML + CDN Usage */}
          <div className="ani-scroll">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">🌐 Plain HTML with CDN</h2>
          <pre className="bg-blue-900/50 p-4 rounded-lg text-blue-100 overflow-x-auto border border-blue-800 mb-6">
            <code>{`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ani-js@latest/ani-js.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/ani-js@latest/index.js"></script>`}</code>
          </pre>
          <p className="mb-6 text-blue-200">Now you can use class names like <code>tw-fade-in</code> directly in your HTML to animate elements.</p>
            </div>

          {/* React Usage */}
            <div className="ani-scroll">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">⚛️ Usage - React</h2>
          <h3 className="text-xl font-semibold text-blue-200 mb-2">Function-based</h3>
          <pre className="bg-blue-900/50 p-4 rounded-lg text-blue-100 overflow-x-auto border border-blue-800 mb-6">
            <code>{`import { useEffect } from 'react';
import { fadeIn } from 'ani-js';

useEffect(() => {
  const el = document.getElementById('box');
  fadeIn(el, 700);
}, []);`}</code>
          </pre>

          <h3 className="text-xl font-semibold text-blue-200 mb-2">Class-based</h3>
          <pre className="bg-blue-900/50 p-4 rounded-lg text-blue-100 overflow-x-auto border border-blue-800 mb-6">
            <code>{`<div className="tw-fade-in">Hello</div>`}</code>
          </pre>
          </div>

          {/* Important Note */}
          <div className="bg-yellow-900/40 border border-yellow-700 text-yellow-200 p-4 rounded-lg mb-10 ani-scroll">
            ⚠️ <strong>Important:</strong> This example uses ES Module syntax (import) and will not work by directly opening the HTML file in a browser.<br /><br />
            To run this successfully, you must:
            <ul className="list-disc list-inside mt-2">
              <li>Use a module-aware bundler or dev server such as Vite, Webpack, or Parcel</li>
              <li>OR load ani-js from a CDN:<br />
                <a href="https://cdn.jsdelivr.net/npm/ani-js@latest/index.js" className="underline text-blue-300">jsDelivr (JS)</a> | 
                <a href="https://cdn.jsdelivr.net/npm/ani-js@latest/ani-js.css" className="underline text-blue-300">jsDelivr (CSS)</a>
              </li>
            </ul>
            <br />
            For React, also import the CSS globally in your <code>App.jsx</code> or <code>Main.jsx</code>:
            <pre className="bg-blue-900/50 text-blue-100 p-2 rounded mt-2 overflow-x-auto border border-blue-800">
              <code>import '../node_modules/ani-js/ani-js.css';</code>
            </pre>
            Set it as global so you can use it anywhere.<br /><br />
            Without one of these setups, your browser will throw a module resolution error and the animation will fail to load.
          </div>
        </div>
      </div>
    </div>
  );
}