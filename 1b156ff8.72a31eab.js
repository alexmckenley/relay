(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{1171:function(t,e,r){"use strict";r.d(e,"a",(function(){return f})),r.d(e,"b",(function(){return b}));var n=r(0),o=r.n(n);function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},u=Object.keys(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var d=o.a.createContext({}),s=function(t){var e=o.a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},f=function(t){var e=s(t.components);return o.a.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},l=o.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,u=t.originalType,i=t.parentName,d=a(t,["components","mdxType","originalType","parentName"]),f=s(r),l=n,b=f["".concat(i,".").concat(l)]||f[l]||p[l]||u;return r?o.a.createElement(b,c(c({ref:e},d),{},{components:r})):o.a.createElement(b,c({ref:e},d))}));function b(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var u=r.length,i=new Array(u);i[0]=l;var c={};for(var a in e)hasOwnProperty.call(e,a)&&(c[a]=e[a]);c.originalType=t,c.mdxType="string"==typeof t?t:n,i[1]=c;for(var d=2;d<u;d++)i[d]=r[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},1178:function(t,e,r){"use strict";r.d(e,"b",(function(){return u})),r.d(e,"a",(function(){return i}));var n=r(22),o=r(1179);function u(){var t=Object(n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,r=void 0===e?"/":e,u=t.url;return{withBaseUrl:function(t,e){return function(t,e,r,n){var u=void 0===n?{}:n,i=u.forcePrependBaseUrl,c=void 0!==i&&i,a=u.absolute,d=void 0!==a&&a;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(c)return e+r;var s=r.startsWith(e)?r:e+r.replace(/^\//,"");return d?t+s:s}(u,r,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,u().withBaseUrl)(t,e)}},1179:function(t,e,r){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!n(t)}r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return o}))},1185:function(t,e,r){"use strict";r.r(e);var n=r(11);r.d(e,"MemoryRouter",(function(){return n.d})),r.d(e,"Prompt",(function(){return n.f})),r.d(e,"Redirect",(function(){return n.g})),r.d(e,"Route",(function(){return n.h})),r.d(e,"Router",(function(){return n.i})),r.d(e,"StaticRouter",(function(){return n.j})),r.d(e,"Switch",(function(){return n.k})),r.d(e,"generatePath",(function(){return n.l})),r.d(e,"matchPath",(function(){return n.m})),r.d(e,"useHistory",(function(){return n.n})),r.d(e,"useLocation",(function(){return n.o})),r.d(e,"useParams",(function(){return n.p})),r.d(e,"useRouteMatch",(function(){return n.q})),r.d(e,"withRouter",(function(){return n.r})),r.d(e,"BrowserRouter",(function(){return n.a})),r.d(e,"HashRouter",(function(){return n.b})),r.d(e,"Link",(function(){return n.c})),r.d(e,"NavLink",(function(){return n.e}))},216:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return a})),r.d(e,"metadata",(function(){return d})),r.d(e,"toc",(function(){return s})),r.d(e,"default",(function(){return p}));var n=r(3),o=r(7),u=(r(0),r(1171)),i=r(1185),c=r(1178),a={id:"step-by-step-guide-redirect",slug:"/introduction/step-by-step-guide/"},d={unversionedId:"introduction/step-by-step-guide-redirect",id:"introduction/step-by-step-guide-redirect",isDocsHomePage:!1,title:"step-by-step-guide-redirect",source:"@site/docs/current/introduction/step-by-step-guide.md",slug:"/introduction/step-by-step-guide/",permalink:"/docs/next/introduction/step-by-step-guide/",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/current/introduction/step-by-step-guide.md",version:"current",lastUpdatedBy:"Howard Huang",lastUpdatedAt:1615342921},s=[],f={toc:s};function p(t){var e=t.components,r=Object(o.a)(t,["components"]);return Object(u.b)("wrapper",Object(n.a)({},f,r,{components:e,mdxType:"MDXLayout"}),Object(u.b)(i.Redirect,{to:Object(c.a)("/docs/getting-started/step-by-step-guide/"),mdxType:"Redirect"}))}p.isMDXComponent=!0}}]);