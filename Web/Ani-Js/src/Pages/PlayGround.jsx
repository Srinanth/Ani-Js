import { useEffect, useRef } from 'react';
import { FiCode, FiMonitor   } from 'react-icons/fi';
import Background from '../assets/Background.svg';

export default function PlayGroundPage() {
  const iframeRef = useRef(null);
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