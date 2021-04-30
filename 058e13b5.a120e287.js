(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),i=(n(0),n(1142)),o={id:"fetch-query",title:"fetchQuery",original_id:"fetch-query"},c={unversionedId:"fetch-query",id:"version-v10.1.3/fetch-query",isDocsHomePage:!1,title:"fetchQuery",description:"You can use the fetchQuery function to imperatively make GraphQL Requests. This is useful for cases where you want to make requests outside of React but still utilize the Relay store and network layer.",source:"@site/versioned_docs/version-v10.1.3/Modern-fetchQuery.md",slug:"/fetch-query",permalink:"/docs/v10.1.3/fetch-query",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v10.1.3/Modern-fetchQuery.md",version:"v10.1.3",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1619789254,sidebar:"version-v10.1.3/docs",previous:{title:"Relay Store",permalink:"/docs/v10.1.3/relay-store"},next:{title:"Routing",permalink:"/docs/v10.1.3/routing"}},l=[{value:"Arguments",id:"arguments",children:[]},{value:"Return Value",id:"return-value",children:[]}],u={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can use the ",Object(i.b)("inlineCode",{parentName:"p"},"fetchQuery")," function to imperatively make GraphQL Requests. This is useful for cases where you want to make requests outside of React but still utilize the Relay store and network layer."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import {fetchQuery, graphql} from 'relay-runtime';\n\nconst query = graphql`\n  query ExampleQuery($pageID: ID!) {\n    page(id: $pageID) {\n      name\n    }\n  }\n`;\n\nconst variables = {\n  pageID: '110798995619330',\n};\n\nfetchQuery(environment, query, variables)\n  .then(data => {\n    // access the graphql response\n  });\n")),Object(i.b)("h2",{id:"arguments"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"environment"),": The ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"./relay-environment"}),"Relay Environment")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"query"),": The ",Object(i.b)("inlineCode",{parentName:"li"},"graphql")," tagged query. ",Object(i.b)("strong",{parentName:"li"},"Note:")," ",Object(i.b)("inlineCode",{parentName:"li"},"relay-compiler")," enforces the query to be named as ",Object(i.b)("inlineCode",{parentName:"li"},"<FileName>Query"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"variables"),": Object containing set of variables to pass to the GraphQL query, i.e. a mapping from variable name to value."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cacheConfig?"),": Optional object containing a set of cache configuration options, i.e. ",Object(i.b)("inlineCode",{parentName:"li"},"force: true")," requires the fetch to be issued regardless of the state of any configured response cache. See ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/relay-runtime/lib/util/RelayRuntimeTypes.d.ts#L22-L35"}),"the types")," for more ",Object(i.b)("inlineCode",{parentName:"li"},"cacheConfig")," options.")),Object(i.b)("h2",{id:"return-value"},"Return Value"),Object(i.b)("p",null,"The function returns a ",Object(i.b)("inlineCode",{parentName:"p"},"Promise")," that resolves with an object containing data obtained from the query."))}s.isMDXComponent=!0},1142:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,m=p["".concat(o,".").concat(f)]||p[f]||b[f]||i;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);