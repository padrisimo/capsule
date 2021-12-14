import React, { useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "build/capsulecorp.loader.js",
  dataUrl: "build/capsulecorp.data.unityweb",
  frameworkUrl: "build/capsulecorp.framework.js.unityweb",
  codeUrl: "build/capsulecorp.wasm.unityweb",
});

function App() {
  useEffect(function () {
    unityContext.on("Jump", function (crounch) {
      console.log('saltando', crounch )
    });
  }, []);
  return <Unity style={{maxWidth:'100vw'}} unityContext={unityContext} />;
}
export default App;
