(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>a});const r=require("k6/http");var o=e.n(r);function a(){const e=o().get("https://reqres.in/api/users?page=2");console.log("status code: "+e.status)}var n=exports;for(var s in t)n[s]=t[s];t.__esModule&&Object.defineProperty(n,"__esModule",{value:!0})})();