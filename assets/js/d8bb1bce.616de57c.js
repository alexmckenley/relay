"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[15151],{3905:(e,n,a)=>{a.r(n),a.d(n,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>y,useMDXComponents:()=>m,withMDXComponents:()=>d});var r=a(67294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=r.createContext({}),d=function(e){return function(n){var a=m(n.components);return r.createElement(e,l({},n,{components:a}))}},m=function(e){var n=r.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=m(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=m(a),c=t,g=d["".concat(i,".").concat(c)]||d[c]||u[c]||l;return a?r.createElement(g,o(o({ref:n},s),{},{components:a})):r.createElement(g,o({ref:n},s))}));function y(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},31930:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=a(83117),t=a(80102),l=(a(67294),a(3905)),i=["components"],o={id:"installation-and-setup",title:"Installation and Setup",original_id:"installation-and-setup"},p=void 0,s={unversionedId:"installation-and-setup",id:"version-v7.0.0/installation-and-setup",title:"Installation and Setup",description:"Installation",source:"@site/versioned_docs/version-v7.0.0/Introduction-InstallationAndSetup.md",sourceDirName:".",slug:"/installation-and-setup",permalink:"/docs/v7.0.0/installation-and-setup",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v7.0.0/Introduction-InstallationAndSetup.md",tags:[],version:"v7.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1693255413,formattedLastUpdatedAt:"Aug 28, 2023",frontMatter:{id:"installation-and-setup",title:"Installation and Setup",original_id:"installation-and-setup"},sidebar:"version-v7.0.0/docs",previous:{title:"Prerequisites",permalink:"/docs/v7.0.0/prerequisites"},next:{title:"Quick Start Guide",permalink:"/docs/v7.0.0/quick-start-guide"}},d={},m=[{value:"Installation",id:"installation",level:2},{value:"Set up Relay with a single config file",id:"set-up-relay-with-a-single-config-file",level:2},{value:"Set up babel-plugin-relay",id:"set-up-babel-plugin-relay",level:2},{value:"Set up relay-compiler",id:"set-up-relay-compiler",level:2},{value:"JavaScript environment requirements",id:"javascript-environment-requirements",level:2}],c={toc:m};function u(e){var n=e.components,a=(0,t.Z)(e,i);return(0,l.mdx)("wrapper",(0,r.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h2",{id:"installation"},"Installation"),(0,l.mdx)("p",null,"Install React and Relay using ",(0,l.mdx)("inlineCode",{parentName:"p"},"yarn")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"npm"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"\nyarn add react react-dom react-relay\n\n")),(0,l.mdx)("h2",{id:"set-up-relay-with-a-single-config-file"},"Set up Relay with a single config file"),(0,l.mdx)("p",null,"The below configuration of ",(0,l.mdx)("inlineCode",{parentName:"p"},"babel-plugin-relay")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"relay-compiler")," can be applied using a single configuration file by\nusing the ",(0,l.mdx)("inlineCode",{parentName:"p"},"relay-config")," package. Besides unifying all Relay configuration in a single place, other tooling can leverage\nthis to provide zero-config setup (e.g. ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/relay-tools/vscode-apollo-relay"},"vscode-apollo-relay"),")."),(0,l.mdx)("p",null,"Install the package:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"\nyarn add --dev relay-config\n\n")),(0,l.mdx)("p",null,"And create the configuration file:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},'// relay.config.js\nmodule.exports = {\n  // ...\n  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.\n  src: "./src",\n  schema: "./data/schema.graphql",\n  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],\n}\n')),(0,l.mdx)("h2",{id:"set-up-babel-plugin-relay"},"Set up babel-plugin-relay"),(0,l.mdx)("p",null,"Relay Modern requires a Babel plugin to convert GraphQL to runtime artifacts:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"\nyarn add --dev babel-plugin-relay graphql\n\n")),(0,l.mdx)("p",null,"Add ",(0,l.mdx)("inlineCode",{parentName:"p"},'"relay"')," to the list of plugins your ",(0,l.mdx)("inlineCode",{parentName:"p"},".babelrc")," file:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},'{\n  "plugins": [\n    "relay"\n  ]\n}\n')),(0,l.mdx)("p",null,"Please note that the ",(0,l.mdx)("inlineCode",{parentName:"p"},'"relay"')," plugin should run before other plugins or\npresets to ensure the ",(0,l.mdx)("inlineCode",{parentName:"p"},"graphql")," template literals are correctly transformed. See\nBabel's ",(0,l.mdx)("a",{parentName:"p",href:"https://babeljs.io/docs/plugins/#pluginpreset-ordering"},"documentation on this topic"),"."),(0,l.mdx)("p",null,"Alternatively, instead of using ",(0,l.mdx)("inlineCode",{parentName:"p"},"babel-plugin-relay"),", you can use Relay with ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/kentcdodds/babel-plugin-macros"},"babel-plugin-macros"),". After installing ",(0,l.mdx)("inlineCode",{parentName:"p"},"babel-plugin-macros")," and adding it to your Babel config:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"const graphql = require('babel-plugin-relay/macro');\n")),(0,l.mdx)("p",null,"If you need to configure ",(0,l.mdx)("inlineCode",{parentName:"p"},"babel-plugin-relay")," further (e.g. to enable ",(0,l.mdx)("inlineCode",{parentName:"p"},"compat")," mode), you can do so by ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/kentcdodds/babel-plugin-macros/blob/main/other/docs/user.md#config-experimental"},"specifying the options in a number of ways"),"."),(0,l.mdx)("p",null,"For example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"// babel-plugin-macros.config.js\nmodule.exports = {\n  // ...\n  // Other macros config\n  relay: {\n    compat: true,\n  },\n}\n")),(0,l.mdx)("h2",{id:"set-up-relay-compiler"},"Set up relay-compiler"),(0,l.mdx)("p",null,"Relay's ahead-of-time compilation requires the ",(0,l.mdx)("a",{parentName:"p",href:"/docs/v7.0.0/graphql-in-relay#relay-compiler"},"Relay Compiler"),", which you can install via ",(0,l.mdx)("inlineCode",{parentName:"p"},"yarn")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"npm"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"\nyarn add --dev relay-compiler\n\n")),(0,l.mdx)("p",null,"This installs the bin script ",(0,l.mdx)("inlineCode",{parentName:"p"},"relay-compiler")," in your node_modules folder. It's recommended to run this from a ",(0,l.mdx)("inlineCode",{parentName:"p"},"yarn"),"/",(0,l.mdx)("inlineCode",{parentName:"p"},"npm")," script by adding a script to your ",(0,l.mdx)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},'"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql"\n}\n')),(0,l.mdx)("p",null,"or if you are using jsx:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},'"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql --extensions js jsx"\n}\n')),(0,l.mdx)("p",null,"Then, after making edits to your application files, just run the ",(0,l.mdx)("inlineCode",{parentName:"p"},"relay")," script to generate new compiled artifacts:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"\nyarn run relay\n\n")),(0,l.mdx)("p",null,"Alternatively, you can pass the ",(0,l.mdx)("inlineCode",{parentName:"p"},"--watch")," option to watch for file changes in your source code and automatically re-generate the compiled artifacts (",(0,l.mdx)("strong",{parentName:"p"},"Note:")," Requires ",(0,l.mdx)("a",{parentName:"p",href:"https://facebook.github.io/watchman"},"watchman")," to be installed):"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"\nyarn run relay --watch\n\n")),(0,l.mdx)("p",null,"For more details, check out our ",(0,l.mdx)("a",{parentName:"p",href:"/docs/v7.0.0/graphql-in-relay#relay-compiler"},"Relay Compiler docs"),"."),(0,l.mdx)("h2",{id:"javascript-environment-requirements"},"JavaScript environment requirements"),(0,l.mdx)("p",null,"The Relay Modern packages distributed on NPM use the widely-supported ES5\nversion of JavaScript to support as many browser environments as possible."),(0,l.mdx)("p",null,"However, Relay Modern expects modern JavaScript global types (",(0,l.mdx)("inlineCode",{parentName:"p"},"Map"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"Set"),",\n",(0,l.mdx)("inlineCode",{parentName:"p"},"Promise"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"Object.assign"),") to be defined. If you support older browsers and\ndevices which may not yet provide these natively, consider including a global\npolyfill in your bundled application, such as ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/zloirock/core-js"},"core-js")," or\n",(0,l.mdx)("a",{parentName:"p",href:"https://babeljs.io/docs/usage/polyfill/"},"@babel/polyfill"),"."),(0,l.mdx)("p",null,"A polyfilled environment for Relay using ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/zloirock/core-js"},"core-js")," to support older browsers\nmight look like:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"require('core-js/es6/map');\nrequire('core-js/es6/set');\nrequire('core-js/es6/promise');\nrequire('core-js/es6/object');\n\nrequire('./myRelayApplication');\n")))}u.isMDXComponent=!0}}]);