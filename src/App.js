import React, { useEffect, useState } from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';

const unityContext = new UnityContext({
  loaderUrl: 'build/capsulecorp.loader.js',
  dataUrl: 'build/capsulecorp.data.unityweb',
  frameworkUrl: 'build/capsulecorp.framework.js.unityweb',
  codeUrl: 'build/capsulecorp.wasm.unityweb',
});

function App() {
  const [jumpCount, setJumpCount] = useState(0);
  const [sandMode, setSandMode] = useState(false);
  useEffect(
    function () {
      unityContext.on('Jump', function (crounch) {
        console.log('saltando', crounch);
        setJumpCount(jumpCount + 1);
      });
    },
    [jumpCount]
  );

  const toggleSandMode = () => {
    setSandMode(!sandMode);
    unityContext.send("Capsule", "ToggleSandMode", !sandMode ? 1 : 0);
  };

  return (
    <>
      <div className="topbar">
        <span>jumps:{jumpCount}</span>
        <span>
          sand mode: <input type="checkbox" onClick={() => toggleSandMode()} />
        </span>
      </div>
      <Unity style={{ maxWidth: '100vw' }} unityContext={unityContext} />
    </>
  );
}
export default App;
