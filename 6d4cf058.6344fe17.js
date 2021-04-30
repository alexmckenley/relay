(window.webpackJsonp=window.webpackJsonp||[]).push([[471],{1142:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,b=d["".concat(i,".").concat(m)]||d[m]||h[m]||o;return n?r.a.createElement(b,c(c({ref:t},p),{},{components:n})):r.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},558:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(8),o=(n(0),n(1142)),i={id:"thinking-in-relay",title:"Thinking In Relay",original_id:"thinking-in-relay"},c={unversionedId:"thinking-in-relay",id:"version-v10.1.3/thinking-in-relay",isDocsHomePage:!1,title:"Thinking In Relay",description:"Relay's approach to data-fetching is heavily inspired by our experience with React. In particular, React breaks complex interfaces into reusable components, allowing developers to reason about discrete units of an application in isolation, and reducing the coupling between disparate parts of an application. Even more important is that these components are declarative: they allow developers to specify what the UI should look like for a given state, and not have to worry about how to show that UI. Unlike previous approaches that used imperative commands to manipulate native views (e.g. the DOM), React uses a UI description to automatically determine the necessary commands.",source:"@site/versioned_docs/version-v10.1.3/PrinciplesAndArchitecture-ThinkingInRelay.md",slug:"/thinking-in-relay",permalink:"/docs/v10.1.3/thinking-in-relay",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v10.1.3/PrinciplesAndArchitecture-ThinkingInRelay.md",version:"v10.1.3",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1619789254,sidebar:"version-v10.1.3/docs",previous:{title:"Thinking in GraphQL",permalink:"/docs/v10.1.3/thinking-in-graphql"},next:{title:"Architecture Overview",permalink:"/docs/v10.1.3/architecture-overview"}},s=[{value:"Fetching Data For a View",id:"fetching-data-for-a-view",children:[]},{value:"Data Components aka Containers",id:"data-components-aka-containers",children:[]},{value:"Rendering",id:"rendering",children:[]},{value:"Data Masking",id:"data-masking",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Relay's approach to data-fetching is heavily inspired by our experience with React. In particular, React breaks complex interfaces into reusable ",Object(o.b)("strong",{parentName:"p"},"components"),", allowing developers to reason about discrete units of an application in isolation, and reducing the coupling between disparate parts of an application. Even more important is that these components are ",Object(o.b)("strong",{parentName:"p"},"declarative"),": they allow developers to specify ",Object(o.b)("em",{parentName:"p"},"what")," the UI should look like for a given state, and not have to worry about ",Object(o.b)("em",{parentName:"p"},"how")," to show that UI. Unlike previous approaches that used imperative commands to manipulate native views (e.g. the DOM), React uses a UI description to automatically determine the necessary commands."),Object(o.b)("p",null,"Let's look at some product use-cases to understand how we incorporated these ideas into Relay. We'll assume a basic familiarity with React."),Object(o.b)("h2",{id:"fetching-data-for-a-view"},"Fetching Data For a View"),Object(o.b)("p",null,"In our experience, the overwhelming majority of products want one specific behavior: fetch ",Object(o.b)("em",{parentName:"p"},"all")," the data for a view hierarchy while displaying a loading indicator, and then render the ",Object(o.b)("em",{parentName:"p"},"entire")," view once the data is ready."),Object(o.b)("p",null,"One solution is to have a root component fetch the data for all its children. However, this would introduce coupling: every change to a component would require changing ",Object(o.b)("em",{parentName:"p"},"any")," root component that might render it, and often some components between it and the root. This coupling could mean a greater chance for bugs and slow the pace of development. Ultimately, this approach doesn't take advantage of React's component model. The natural place for specifying data-dependencies was in ",Object(o.b)("em",{parentName:"p"},"components"),"."),Object(o.b)("p",null,"The next logical approach is to use ",Object(o.b)("inlineCode",{parentName:"p"},"render()")," as the means of initiating data-fetching. We could simply render the application once, see what data it needed, fetch that data, and render again. This sounds great, but the problem is that ",Object(o.b)("em",{parentName:"p"},"components use data to figure out what to render!")," In other words, this would force data-fetching to be staged: first render the root and see what data it needs, then render its children and see what they need, all the way down the tree. If each stage incurs network request, rendering would require slow, serial roundtrips. We needed a way to determine all the data needs up-front or ",Object(o.b)("em",{parentName:"p"},"statically"),"."),Object(o.b)("p",null,"This is where GraphQL comes into play. Components specify one or multiple GraphQL fragments for some of their props describing their data requirements. Each GraphQL fragment has a unique name within an application which allows us to determine the query needed to fetch the full query tree in a build step and load all the required data in a single network request efficiently at runtime."),Object(o.b)("h2",{id:"data-components-aka-containers"},"Data Components aka Containers"),Object(o.b)("p",null,"Relay allows developers to annotate their React components with data dependencies by creating ",Object(o.b)("strong",{parentName:"p"},"containers"),". These are regular React components that wrap the originals. A key design constraint is that React components are meant to be reusable, so Relay containers must be too. For example, a ",Object(o.b)("inlineCode",{parentName:"p"},"<Story />")," component might implement a view for rendering any ",Object(o.b)("inlineCode",{parentName:"p"},"Story")," item. The actual story to render would be determined by the data passed to the component: ",Object(o.b)("inlineCode",{parentName:"p"},"<Story story={ ... } />"),". The equivalent in GraphQL are ",Object(o.b)("strong",{parentName:"p"},"fragments"),": named query snippets that specify what data to fetch ",Object(o.b)("em",{parentName:"p"},"for an object of a given type"),". We might describe the data needed by ",Object(o.b)("inlineCode",{parentName:"p"},"<Story>")," as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"\nfragment Story_story on Story {\n  text\n  author {\n    name\n    photo\n  }\n}\n")),Object(o.b)("p",null,"And this fragment can then be used to define the Story container:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const {createFragmentContainer, graphql} = require('react-relay');\n\n// Plain React component.\n// Usage: `<Story story={ ... } />`\nclass Story extends React.Component { ... }\n\n// Higher-order component that wraps `<Story />`\nconst StoryContainer = createFragmentContainer(Story, {\n  // Define a fragment with a name matching the `story` prop expected above\n  story: graphql`\n    fragment Story_story on Story {\n      text\n      author {\n        name\n        photo\n      }\n    }\n  `\n})\n\n")),Object(o.b)("h2",{id:"rendering"},"Rendering"),Object(o.b)("p",null,"In React, rendering a view requires two inputs: the ",Object(o.b)("em",{parentName:"p"},"component")," to render, and a ",Object(o.b)("em",{parentName:"p"},"root")," DOM (UI) node to render into. Rendering Relay containers is similar: we need a ",Object(o.b)("em",{parentName:"p"},"container")," to render, and a ",Object(o.b)("em",{parentName:"p"},"root")," in the graph from which to start our query. We also must ensure that the queries for the container are executed and may want to show a loading indicator while data is being fetched. Similar to ",Object(o.b)("inlineCode",{parentName:"p"},"ReactDOM.render(component, domNode)"),", Relay provides ",Object(o.b)("inlineCode",{parentName:"p"},"<QueryRenderer query={...} variables={...} render={...}>")," for this purpose. The ",Object(o.b)("inlineCode",{parentName:"p"},"query")," and ",Object(o.b)("inlineCode",{parentName:"p"},"variables")," define what data to fetch and ",Object(o.b)("inlineCode",{parentName:"p"},"render")," defines what to render. Here's how we might render ",Object(o.b)("inlineCode",{parentName:"p"},"<StoryContainer>"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"ReactDOM.render(\n  <QueryRenderer\n    environment={\n      // defined or imported above...\n    }\n    query={graphql`\n      query StoryQuery($storyID: ID!) {\n        node(id: $storyID) {\n          ...Story_story\n        }\n      }\n    `}\n    variables={{\n      storyID: '123',\n    }}\n    render={(props, error) => {\n      if (error) {\n        return <ErrorView />;\n      } else if (props) {\n        return <StoryContainer story={props.story} />;\n      } else {\n        return <LoadingIndicator />;\n      }\n    }}\n  />,\n  rootElement\n)\n\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"QueryRenderer")," will then fetch the data and render ",Object(o.b)("inlineCode",{parentName:"p"},"StoryContainer")," once the data is available. Just as React allows developers to render views without directly manipulating the underlying view, Relay removes the need to directly communicate with the network."),Object(o.b)("h2",{id:"data-masking"},"Data Masking"),Object(o.b)("p",null,"With typical approaches to data-fetching we found that it was common for two components to have ",Object(o.b)("em",{parentName:"p"},"implicit dependencies"),". For example ",Object(o.b)("inlineCode",{parentName:"p"},"<StoryHeader />")," might use some data without directly ensuring that the data was fetched. This data would often be fetched by some other part of the system, such as ",Object(o.b)("inlineCode",{parentName:"p"},"<Story />"),". Then when we changed ",Object(o.b)("inlineCode",{parentName:"p"},"<Story />")," and removed that data-fetching logic, ",Object(o.b)("inlineCode",{parentName:"p"},"<StoryHeader />")," would suddenly and inexplicably break. These types of bugs are not always immediately apparent, especially in larger applications developed by larger teams. Manual and automated testing can only help so much: this is exactly the type of systematic problem that is better solved by a framework."),Object(o.b)("p",null,"We've seen that Relay containers ensure that GraphQL fragments are fetched ",Object(o.b)("em",{parentName:"p"},"before")," the component is rendered. But containers also provide another benefit that isn't immediately obvious: ",Object(o.b)("strong",{parentName:"p"},"data masking"),". Relay only allows components to access data they specifically ask for in GraphQL fragments \u2014 nothing more. So if one component queries for a Story's ",Object(o.b)("inlineCode",{parentName:"p"},"text"),", and another for its ",Object(o.b)("inlineCode",{parentName:"p"},"author"),", each can see ",Object(o.b)("em",{parentName:"p"},"only")," the field that they asked for. In fact, components can't even see the data requested by their ",Object(o.b)("em",{parentName:"p"},"children"),": that would also break encapsulation."),Object(o.b)("p",null,"Relay also goes further: it uses opaque identifiers on ",Object(o.b)("inlineCode",{parentName:"p"},"props")," to validate that we've explicitly fetched the data for a component before rendering it. If ",Object(o.b)("inlineCode",{parentName:"p"},"<Story />")," renders ",Object(o.b)("inlineCode",{parentName:"p"},"<StoryHeader />")," but forgets to include its fragment, Relay will warn that the data for ",Object(o.b)("inlineCode",{parentName:"p"},"<StoryHeader />")," is missing. In fact, Relay will warn ",Object(o.b)("em",{parentName:"p"},"even if")," some other component happened to fetch the same data required by ",Object(o.b)("inlineCode",{parentName:"p"},"<StoryHeader />"),". This warning tells us that although things ",Object(o.b)("em",{parentName:"p"},"might")," work now they're highly likely to break later."),Object(o.b)("h1",{id:"conclusion"},"Conclusion"),Object(o.b)("p",null,"GraphQL provides a powerful tool for building efficient, decoupled client applications. Relay builds on this functionality to provide a framework for ",Object(o.b)("strong",{parentName:"p"},"declarative data-fetching"),". By separating ",Object(o.b)("em",{parentName:"p"},"what")," data to fetch from ",Object(o.b)("em",{parentName:"p"},"how")," it is fetched, Relay helps developers build applications that are robust, transparent, and performant by default. It's a great complement to the component-centric way of thinking championed by React. While each of these technologies \u2014 React, Relay, and GraphQL \u2014 are powerful on their own, the combination is a ",Object(o.b)("strong",{parentName:"p"},"UI platform")," that allows us to ",Object(o.b)("em",{parentName:"p"},"move fast")," and ",Object(o.b)("em",{parentName:"p"},"ship high-quality apps at scale"),"."))}l.isMDXComponent=!0}}]);