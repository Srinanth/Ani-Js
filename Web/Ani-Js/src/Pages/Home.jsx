import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  FiPlay,
  FiZap,
  FiBox,
  FiTool,
  FiFeather,
  FiTarget,
  FiCode,
  FiGlobe,
  FiHelpCircle,
  FiGitBranch,
  FiLayers,
  FiCodesandbox
} from 'react-icons/fi';
import { FaGithub, FaNpm } from 'react-icons/fa';
import Background from '../assets/Background.svg';

export default function HomePage() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
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
      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="w-full min-h-screen flex items-center justify-center text-center px-6 py-24">
          <div className="max-w-4xl mx-auto p-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-400">Ani-Js</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-blue-200">
              A lightweight, zero-dependency JavaScript animation library that adds life to your UI with 100+ beautiful animations.
            </p>
            <a
              href="#what"
              className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg tw-hoverenlarge"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* What is Section */}
        <div id="what" className="py-16 px-6 text-center">
          <div className=" ani-scroll max-w-4xl mx-auto p-8">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">What is Ani-Js?</h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Ani-Js is a flexible animation library offering both class-based and programmatic animations for web developers.
              Whether you're working with vanilla JavaScript or React, Ani-Js helps you animate with ease—no setup bloat, no dependencies.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="p-8 ani-scroll">
              <h2 className="text-3xl font-bold text-center mb-12 text-blue-400 flex items-center justify-center gap-2">
                <FiZap size={28} /> Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-blue-900/50 p-6 rounded-xl border border-blue-800 tw-hoverenlarge">
                  <h3 className="text-xl font-semibold mb-3 flex items-center text-blue-300">
                    <FiCode className="mr-2" /> Easy-to-use API
                  </h3>
                  <p>Ani-Js provides both class-based and JavaScript function APIs to animate elements quickly without setup. You can use it out of the box with just one import.</p>
                </div>
                <div className="bg-blue-900/50 p-6 rounded-xl border border-blue-800 tw-hoverenlarge">
                  <h3 className="text-xl font-semibold mb-3 flex items-center text-blue-300">
                    <FiGitBranch className="mr-2" /> Works with Vanilla JS & React
                  </h3>
                  <p>Supports usage in plain HTML/JS as well as in React apps.</p>
                </div>
                <div className="bg-blue-900/50 p-6 rounded-xl border border-blue-800 tw-hoverenlarge">
                  <h3 className="text-xl font-semibold mb-3 flex items-center text-blue-300">
                    <FiTool className="mr-2" /> Zero Dependencies
                  </h3>
                  <p>Ani-Js doesn't rely on external libraries. No need to install GSAP, anime.js, or jQuery. It keeps your bundle clean and fast.</p>
                </div>
                <div className="bg-blue-900/50 p-6 rounded-xl border border-blue-800 tw-hoverenlarge">
                  <h3 className="text-xl font-semibold mb-3 flex items-center text-blue-300">
                    <FiFeather className="mr-2" /> Lightweight
                  </h3>
                  <p>Ultra-small bundle size (~3.6KB gzipped). Ideal for performance-sensitive applications.</p>
                </div>
                <div className="bg-blue-900/50 p-6 rounded-xl border border-blue-800 tw-hoverenlarge">
                  <h3 className="text-xl font-semibold mb-3 flex items-center text-blue-300">
                    <FiLayers className="mr-2" /> 100+ Animations
                  </h3>
                  <p>Includes entrance/exit, hover effects, transitions, color changes, utility animations, and more — all modular.</p>
                </div>
                <div className="bg-blue-900/50 p-6 rounded-xl border border-blue-800 tw-hoverenlarge">
                  <h3 className="text-xl font-semibold mb-3 flex items-center text-blue-300">
                    <FiCodesandbox className="mr-2" /> Class + Function-based
                  </h3>
                  <p>Use CSS classes in your HTML or trigger animations programmatically via JavaScript functions — your choice!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Comparison Section */}
        <div className="py-16 px-6 ani-scroll">
          <div className="max-w-6xl mx-auto">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-blue-400 flex items-center justify-center gap-2">
                <FiTarget size={28} /> Why Choose Ani-Js?
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-blue-800">
                      <th className="p-4 text-left text-blue-300">Feature</th>
                      <th className="p-4 text-left text-blue-300">Ani-Js</th>
                      <th className="p-4 text-left text-blue-300">anime.js / GSAP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-blue-800/50">
                      <td className="p-4">No dependencies</td>
                      <td className="p-4">✅</td>
                      <td className="p-4">❌ (adds extra size)</td>
                    </tr>
                    <tr className="border-b border-blue-800/50">
                      <td className="p-4">Works with React</td>
                      <td className="p-4">✅</td>
                      <td className="p-4">✅</td>
                    </tr>
                    <tr className="border-b border-blue-800/50">
                      <td className="p-4">Class + JS support</td>
                      <td className="p-4">✅</td>
                      <td className="p-4">Partial</td>
                    </tr>
                    <tr className="border-b border-blue-800/50">
                      <td className="p-4">Bundle size</td>
                      <td className="p-4">Tiny (~3.6KB)</td>
                      <td className="p-4">Medium to Large</td>
                    </tr>
                    <tr>
                      <td className="p-4">Ease of use</td>
                      <td className="p-4">Plug and play</td>
                      <td className="p-4">Steeper learning</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16 px-6 ani-scroll">
          <div className="max-w-4xl mx-auto p-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-400 flex items-center justify-center gap-2">
              <FiHelpCircle size={28} /> Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <details className="bg-blue-900/50 rounded-lg p-4 border border-blue-800">
                <summary className="font-semibold text-blue-200 cursor-pointer">How is Ani-Js different from anime.js or GSAP?</summary>
                <p className="mt-2 text-blue-100">Ani-Js is much lighter, dependency-free, and simpler. Ideal for quick UI animations without configuration.</p>
              </details>

              <details className="bg-blue-900/50 rounded-lg p-4 border border-blue-800">
                <summary className="font-semibold text-blue-200 cursor-pointer">Can I use Ani-Js with React?</summary>
                <p className="mt-2 text-blue-100">Yes! You can import and use fadeIn(el) inside useEffect, or use class names with JSX.</p>
              </details>

              <details className="bg-blue-900/50 rounded-lg p-4 border border-blue-800">
                <summary className="font-semibold text-blue-200 cursor-pointer">Does it support custom animations?</summary>
                <p className="mt-2 text-blue-100">Yes, you can extend Ani-Js animations or create your own with similar structure.</p>
              </details>

              <details className="bg-blue-900/50 rounded-lg p-4 border border-blue-800">
                <summary className="font-semibold text-blue-200 cursor-pointer">How many animations are included?</summary>
                <p className="mt-2 text-blue-100">100+ and growing — entrance, hover, transition, utility, and more.</p>
              </details>

              <details className="bg-blue-900/50 rounded-lg p-4 border border-blue-800">
                <summary className="font-semibold text-blue-200 cursor-pointer">Can I animate on scroll or hover?</summary>
                <p className="mt-2 text-blue-100">Yes. You can trigger animations on any DOM event, including scroll, hover, click, etc.</p>
              </details>
            </div>
          </div>
        </div>

        {/* Built With Ani-Js Section */}
        <div className="py-16 px-6 ani-scroll">
          <div className="max-w-4xl mx-auto p-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-blue-400 flex items-center justify-center gap-2">
              <FiBox size={28} /> Built with ani-js
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-blue-100">
              This very website uses <strong>Ani-Js</strong> animations for its components — scroll reveals, hover effects, entrances, and more.
              You're not just reading about it — you're experiencing it live in action! 🎉
            </p>
          </div>
        </div>
        {/* Community Section */}
        <div className="py-16 px-6 text-center ani-scroll">
          <h2 className="text-3xl font-bold mb-6 text-blue-400 flex items-center justify-center gap-2">
            <FiGlobe size={28} /> Community & Support
          </h2>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="https://github.com/Srinanth/Ani-Js"
              className="flex items-center gap-2 text-blue-200 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} /> GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/ani-js?activeTab=readme"
              className="flex items-center gap-2 text-blue-200 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaNpm size={24} /> NPM
            </a>
            <Link
              to="/playground"
              className="text-blue-200 hover:text-white transition flex items-center gap-2"
            >
              <FiPlay size={24} /> Playground
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}