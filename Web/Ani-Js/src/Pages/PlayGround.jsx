import { useEffect, useRef,useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiPlay, FiSettings, FiBook,FiCode, FiMonitor   } from 'react-icons/fi';
import Background from '../assets/Background.png';

export default function PlayGroundPage() {
  const iframeRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const defaultCode = `<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ani-js@latest/ani-js.css">
    <style>
      body {
        background-color: black;
        color: white;
        font-family: sans-serif;
        text-align: center;
        padding-top: 100px;
      }
    </style>
  </head>
  <body>
    <h1 class="tw-fade-in">Hello from Ani-Js!</h1>
    <p class="tw-bounce">Edit the code to try different animations.</p>
    <script type="module">
      import { fadeIn } from "https://cdn.jsdelivr.net/npm/ani-js@latest/index.js";
      const el = document.querySelector("h1");
      fadeIn(el, 1000);
    </script>
  </body>
</html>`;

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      doc.open();
      doc.write(defaultCode);
      doc.close();
    }
  }, []);

  const handleCodeChange = (e) => {
    const code = e.target.value;
    const iframe = iframeRef.current;
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write(code);
    doc.close();
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
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 p-6 pt-15">
        <div className="p-4">
         <h2 className="text-xl font-bold mb-4 text-blue-300 flex items-center gap-2">
          <FiCode size={20} /> Code Editor
         </h2>
          <textarea
            className="w-full h-[70vh] bg-blue-900/40 text-blue-100 p-4 rounded-lg border border-blue-800 resize-none font-mono text-sm"
            defaultValue={defaultCode}
            onChange={handleCodeChange}
          ></textarea>
        </div>

        <div className="p-4">
          <h2 className="text-xl font-bold mb-4 text-blue-300 flex items-center gap-2">
           <FiMonitor size={20} /> Output Preview
          </h2>
          <iframe
            ref={iframeRef}
            title="preview"
            className="w-full h-[70vh] bg-white rounded-lg border border-blue-800"
          ></iframe>
        </div>
      </div>
    </div>
  );
}