(this["webpackJsonpunity-react-test"]=this["webpackJsonpunity-react-test"]||[]).push([[0],{11:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(6),o=n.n(a),r=(n(11),n(4)),i=n(3),u=n.n(i),l=n(0),d=new i.UnityContext({loaderUrl:"build/capsulecorp.loader.js",dataUrl:"build/capsulecorp.data.unityweb",frameworkUrl:"build/capsulecorp.framework.js.unityweb",codeUrl:"build/capsulecorp.wasm.unityweb"});var b=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!1),o=Object(r.a)(a,2),i=o[0],b=o[1];return Object(c.useEffect)((function(){d.on("Jump",(function(e){console.log("saltando",e),s(n+1)}))}),[n]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"topbar",children:[Object(l.jsxs)("span",{children:["jumps:",n]}),Object(l.jsxs)("span",{children:["sand mode: ",Object(l.jsx)("input",{type:"checkbox",onClick:function(){return b(!i),void d.send("Capsule","ToggleSandMode",i?0:1)}})]})]}),Object(l.jsx)(u.a,{style:{maxWidth:"100vw"},unityContext:d})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),a(e),o(e)}))};o.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),j()}},[[18,1,2]]]);
//# sourceMappingURL=main.4d134b4d.chunk.js.map