"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[44671],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>m,MDXProvider:()=>d,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),u=function(e){return function(t){var n=c(t.components);return r.createElement(e,i({},t,{components:n}))}},c=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},68629:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(39960),a=n(86341),i=n(67294);function l(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var t=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),t)}var s=function(){var e=i.useState(!1),t=e[0],n=e[1],r=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},m=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:l},"Filing a task"))},u=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},c=function(){return i.createElement(o,null,i.createElement(m,null),i.createElement(s,null),i.createElement(u,null))},d=function(){return i.createElement(o,null,i.createElement(s,null),i.createElement(u,null))};const p=function(){return(0,a.fbContent)({internal:i.createElement(c,null),external:i.createElement(d,null)})}},72106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>m,metadata:()=>c,toc:()=>p});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=n(68629),o=n(86341),s=["components"],m={id:"fetch-query",title:"fetchQuery",slug:"/api-reference/fetch-query/",description:"API reference for fetchQuery, which imperatively fetches data for a query and returns an observable",keywords:["observable","query","fetch"]},u=void 0,c={unversionedId:"api-reference/relay-runtime/fetch-query",id:"version-v12.0.0/api-reference/relay-runtime/fetch-query",title:"fetchQuery",description:"API reference for fetchQuery, which imperatively fetches data for a query and returns an observable",source:"@site/versioned_docs/version-v12.0.0/api-reference/relay-runtime/fetch-query.md",sourceDirName:"api-reference/relay-runtime",slug:"/api-reference/fetch-query/",permalink:"/docs/v12.0.0/api-reference/fetch-query/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v12.0.0/api-reference/relay-runtime/fetch-query.md",tags:[],version:"v12.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1693255413,formattedLastUpdatedAt:"Aug 28, 2023",frontMatter:{id:"fetch-query",title:"fetchQuery",slug:"/api-reference/fetch-query/",description:"API reference for fetchQuery, which imperatively fetches data for a query and returns an observable",keywords:["observable","query","fetch"]},sidebar:"version-v12.0.0/docs",previous:{title:"EntryPointContainer",permalink:"/docs/v12.0.0/api-reference/entrypoint-container/"},next:{title:"Store",permalink:"/docs/v12.0.0/api-reference/store/"}},d={},p=[{value:"<code>fetchQuery</code>",id:"fetchquery",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Flow Type Parameters",id:"flow-type-parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Behavior",id:"behavior",level:3},{value:"Behavior with <code>.toPromise()</code>",id:"behavior-with-topromise",level:3}],h={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.mdx)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"fetchquery"},(0,i.mdx)("inlineCode",{parentName:"h2"},"fetchQuery")),(0,i.mdx)("p",null,"If you want to fetch a query outside of React, you can use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"fetchQuery")," function from ",(0,i.mdx)("inlineCode",{parentName:"p"},"react-relay"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import type {AppQuery} from 'AppQuery.graphql';\n\n// You should prefer passing an environment that was returned from useRelayEnvironment()\nconst MyEnvironment = require('MyEnvironment');\nconst {fetchQuery} = require('react-relay');\n\nfetchQuery<AppQuery>(\n  environment,\n  graphql`\n    query AppQuery($id: ID!) {\n      user(id: $id) {\n        name\n      }\n    }\n  `,\n  {id: 4},\n)\n.subscribe({\n  start: () => {...},\n  complete: () => {...},\n  error: (error) => {...},\n  next: (data) => {...}\n});\n")),(0,i.mdx)("h3",{id:"arguments"},"Arguments"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"environment"),": A Relay Environment instance to execute the request on. If you're starting this request somewhere within a React component, you probably want to use the environment you obtain from using ",(0,i.mdx)("a",{parentName:"li",href:"../use-relay-environment/"},(0,i.mdx)("inlineCode",{parentName:"a"},"useRelayEnvironment")),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"query"),": GraphQL query to fetch, specified using a ",(0,i.mdx)("inlineCode",{parentName:"li"},"graphql")," template literal."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"variables"),": Object containing the variable values to fetch the query. These variables need to match GraphQL variables declared inside the query."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"options"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," options object",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"networkCacheConfig"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]")," "),"Object containing cache config options",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"force"),": Boolean value. If true, will bypass the network response cache. Defaults to true.")))))),(0,i.mdx)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"TQuery"),": Type parameter that should correspond to the Flow type for the specified query. This type is available to import from the the auto-generated file: ",(0,i.mdx)("inlineCode",{parentName:"li"},"<query_name>.graphql.js"),". It will ensure that the type of the data provided by the observable matches the shape of the query, and enforces that the ",(0,i.mdx)("inlineCode",{parentName:"li"},"variables")," passed as input to ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchQuery")," match the type of the variables expected by the query.")),(0,i.mdx)("h3",{id:"return-value"},"Return Value"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"observable"),": Returns an observable instance. To start the request, ",(0,i.mdx)("inlineCode",{parentName:"li"},"subscribe")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"toPromise")," must be called on the observable. Exposes the following methods:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"susbcribe"),": Function that can be called to subscribe to the observable for the network request",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Arguments:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"observer"),": Object that specifies observer functions for different events occurring on the network request observable. May specify the following event handlers as keys in the observer object:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"start"),": Function that will be called when the network requests starts. It will receive a single ",(0,i.mdx)("inlineCode",{parentName:"li"},"subscription")," argument, which represents the subscription on the network observable."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"complete"),": Function that will be called if and when the network request completes successfully."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"next"),": Function that will be called every time a payload is received from the network. It will receive a single ",(0,i.mdx)("inlineCode",{parentName:"li"},"data")," argument, which represents a snapshot of the query data read from the Relay store at the moment a payload was received from the server."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"error"),":  Function that will be called if an error occurs during the network request. It will receive a single ",(0,i.mdx)("inlineCode",{parentName:"li"},"error")," argument, containing the error that occurred."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"unsubscribe"),": Function that will be called whenever the subscription is unsubscribed. It will receive a single ",(0,i.mdx)("inlineCode",{parentName:"li"},"subscription")," argument, which represents the subscription on the network observable."))))),(0,i.mdx)("li",{parentName:"ul"},"Return Value:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"subscription"),": Object representing a subscription to the observable. Calling ",(0,i.mdx)("inlineCode",{parentName:"li"},"subscription.unsubscribe()")," will cancel the network request."))))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"toPromise"),":",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Return Value:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"promise"),": Returns a promise that will resolve when the first network response is received from the server. If the request fails, the promise will reject. Cannot be cancelled.")))))))),(0,i.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"next")," function may be called multiple times when using Relay's ",(0,i.mdx)("a",{parentName:"p",href:"../../guides/incremental-data-delivery/"},"Incremental Data Delivery")," capabilities to receive multiple payloads from the server."))),(0,i.mdx)("h3",{id:"behavior"},"Behavior"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"fetchQuery")," will automatically save the fetched data to the in-memory Relay store, and notify any components subscribed to the relevant data."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"fetchQuery")," will ",(0,i.mdx)("strong",{parentName:"li"},"NOT")," retain the data for the query, meaning that it is not guaranteed that the data will remain saved in the Relay store at any point after the request completes. If you wish to make sure that the data is retained outside of the scope of the request, you need to call ",(0,i.mdx)("inlineCode",{parentName:"li"},"environment.retain()")," directly on the query to ensure it doesn't get deleted. See our section on ",(0,i.mdx)("a",{parentName:"li",href:"../../guided-tour/reusing-cached-data/availability-of-data"},"Controlling Relay's GC Policy")," for more details."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"fetchQuery")," will automatically de-dupe identical network requests (same query and variables) that are in flight at the same time, and that were initiated with ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchQuery"),".")),(0,i.mdx)("h3",{id:"behavior-with-topromise"},"Behavior with ",(0,i.mdx)("inlineCode",{parentName:"h3"},".toPromise()")),(0,i.mdx)("p",null,"If desired, you can convert the request into a Promise using ",(0,i.mdx)("inlineCode",{parentName:"p"},"**.toPromise()**"),". Note that toPromise will start the query and return a Promise that will resolve when the ",(0,i.mdx)("em",{parentName:"p"},"first")," piece of data returns from the server and ",(0,i.mdx)("em",{parentName:"p"},"cancel further processing"),". That means any deferred or 3D data in the query may not be processed. ",(0,i.mdx)("strong",{parentName:"p"},"We generally recommend against using toPromise() for this reason.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import type {AppQuery} from 'AppQuery.graphql';\n\nconst {fetchQuery} = require('react-relay');\n\nfetchQuery<AppQuery>(\n  environment,\n  graphql`\n    query AppQuery($id: ID!) {\n      user(id: $id) {\n        name\n      }\n    }\n  `,\n  {id: 4},\n)\n.toPromise() // NOTE: don't use, this can cause data to be missing!\n.then(data => {...})\n.catch(error => {...};\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"toPromise")," Returns a promise that will resolve when the first network response is received from the server. If the request fails, the promise will reject. Cannot be cancelled.")),(0,i.mdx)(l.Z,{mdxType:"DocsRating"}))}f.isMDXComponent=!0}}]);