(self.webpackChunk=self.webpackChunk||[]).push([[63232],{3905:(e,r,n)=>{"use strict";n.r(r),n.d(r,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>s});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function d(){return d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},d.apply(this,arguments)}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},d=Object.keys(e);for(t=0;t<d.length;t++)n=d[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)n=d[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),s=function(e){return function(r){var n=m(r.components);return t.createElement(e,d({},r,{components:n}))}},m=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=m(e.components);return t.createElement(c.Provider,{value:r},e.children)},x={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,d=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=m(n),p=a,u=s["".concat(o,".").concat(p)]||s[p]||x[p]||d;return n?t.createElement(u,i(i({ref:r},c),{},{components:n})):t.createElement(u,i({ref:r},c))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var d=n.length,o=new Array(d);o[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<d;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70295:(e,r,n)=>{"use strict";n.r(r),n.d(r,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>c,toc:()=>s,default:()=>p});var t=n(74034),a=n(79973),d=(n(67294),n(3905)),o=["components"],i={id:"relay-store",title:"Relay Store",original_id:"relay-store"},l=void 0,c={unversionedId:"relay-store",id:"version-v9.1.0/relay-store",isDocsHomePage:!1,title:"Relay Store",description:"The Relay Store can be used to programmatically update client-side data inside updater functions. The following is a reference of the Relay Store interface.",source:"@site/versioned_docs/version-v9.1.0/Modern-RelayStore.md",sourceDirName:".",slug:"/relay-store",permalink:"/docs/v9.1.0/relay-store",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v9.1.0/Modern-RelayStore.md",tags:[],version:"v9.1.0",lastUpdatedBy:"Terence Bezman",lastUpdatedAt:1657152401,formattedLastUpdatedAt:"7/7/2022",frontMatter:{id:"relay-store",title:"Relay Store",original_id:"relay-store"},sidebar:"version-v9.1.0/docs",previous:{title:"Subscriptions",permalink:"/docs/v9.1.0/subscriptions"},next:{title:"fetchQuery",permalink:"/docs/v9.1.0/fetch-query"}},s=[{value:"RecordSourceSelectorProxy",id:"recordsourceselectorproxy",children:[{value:"<code>create(dataID: string, typeName: string): RecordProxy</code>",id:"createdataid-string-typename-string-recordproxy",children:[{value:"Example",id:"example",children:[],level:4}],level:3},{value:"<code>delete(dataID: string): void</code>",id:"deletedataid-string-void",children:[{value:"Example",id:"example-1",children:[],level:4}],level:3},{value:"<code>get(dataID: string): ?RecordProxy</code>",id:"getdataid-string-recordproxy",children:[{value:"Example",id:"example-2",children:[],level:4}],level:3},{value:"<code>getRoot(): RecordProxy</code>",id:"getroot-recordproxy",children:[{value:"Example",id:"example-3",children:[],level:4}],level:3},{value:"<code>getRootField(fieldName: string): ?RecordProxy</code>",id:"getrootfieldfieldname-string-recordproxy",children:[{value:"Example",id:"example-4",children:[],level:4}],level:3},{value:"<code>getPluralRootField(fieldName: string): ?Array&lt;?RecordProxy&gt;</code>",id:"getpluralrootfieldfieldname-string-arrayrecordproxy",children:[{value:"Example",id:"example-5",children:[],level:4}],level:3},{value:"<code>invalidateStore(): void</code>",id:"invalidatestore-void",children:[{value:"Example",id:"example-6",children:[],level:4}],level:3}],level:2},{value:"RecordProxy",id:"recordproxy",children:[{value:"<code>getDataID(): string</code>",id:"getdataid-string",children:[{value:"Example",id:"example-7",children:[],level:4}],level:3},{value:"<code>getType(): string</code>",id:"gettype-string",children:[{value:"Example",id:"example-8",children:[],level:4}],level:3},{value:"<code>getValue(name: string, arguments?: ?Object): mixed</code>",id:"getvaluename-string-arguments-object-mixed",children:[{value:"Example",id:"example-9",children:[],level:4},{value:"Example",id:"example-10",children:[],level:4}],level:3},{value:"<code>getLinkedRecord(name: string, arguments?: ?Object): ?RecordProxy</code>",id:"getlinkedrecordname-string-arguments-object-recordproxy",children:[{value:"Example",id:"example-11",children:[],level:4},{value:"Example",id:"example-12",children:[],level:4}],level:3},{value:"<code>getLinkedRecords(name: string, arguments?: ?Object): ?Array&lt;?RecordProxy&gt;</code>",id:"getlinkedrecordsname-string-arguments-object-arrayrecordproxy",children:[{value:"Example",id:"example-13",children:[],level:4},{value:"Example",id:"example-14",children:[],level:4}],level:3},{value:"<code>getOrCreateLinkedRecord(name: string, typeName: string, arguments?: ?Object)</code>",id:"getorcreatelinkedrecordname-string-typename-string-arguments-object",children:[{value:"Example",id:"example-15",children:[],level:4}],level:3},{value:"<code>setValue(value: mixed, name: string, arguments?: ?Object): RecordProxy</code>",id:"setvaluevalue-mixed-name-string-arguments-object-recordproxy",children:[],level:3},{value:"<code>copyFieldsFrom(sourceRecord: RecordProxy): void</code>",id:"copyfieldsfromsourcerecord-recordproxy-void",children:[{value:"Example",id:"example-16",children:[],level:4}],level:3},{value:"<code>setLinkedRecord(record: RecordProxy, name: string, arguments?: ?Object)</code>",id:"setlinkedrecordrecord-recordproxy-name-string-arguments-object",children:[{value:"Example",id:"example-17",children:[],level:4}],level:3},{value:"<code>setLinkedRecords(records: Array&lt;RecordProxy&gt;, name: string, variables?: ?Object)</code>",id:"setlinkedrecordsrecords-arrayrecordproxy-name-string-variables-object",children:[{value:"Example",id:"example-18",children:[],level:4}],level:3},{value:"<code>invalidateRecord(): void</code>",id:"invalidaterecord-void",children:[{value:"Example",id:"example-19",children:[],level:4}],level:3}],level:2},{value:"ConnectionHandler",id:"connectionhandler",children:[{value:"<code>getConnection(record: RecordProxy, key: string, filters?: ?Object)</code>",id:"getconnectionrecord-recordproxy-key-string-filters-object",children:[],level:3},{value:"Edge creation and insertion",id:"edge-creation-and-insertion",children:[{value:"<code>createEdge(store: RecordSourceProxy, connection: RecordProxy, node: RecordProxy, edgeType: string)</code>",id:"createedgestore-recordsourceproxy-connection-recordproxy-node-recordproxy-edgetype-string",children:[],level:4},{value:"<code>insertEdgeBefore(connection: RecordProxy, newEdge: RecordProxy, cursor?: ?string)</code>",id:"insertedgebeforeconnection-recordproxy-newedge-recordproxy-cursor-string",children:[],level:4},{value:"<code>insertEdgeAfter(connection: RecordProxy, newEdge: RecordProxy, cursor?: ?string)</code>",id:"insertedgeafterconnection-recordproxy-newedge-recordproxy-cursor-string",children:[],level:4},{value:"Example",id:"example-20",children:[],level:4}],level:3},{value:"<code>deleteNode(connection: RecordProxy, nodeID: string): void</code>",id:"deletenodeconnection-recordproxy-nodeid-string-void",children:[{value:"Example",id:"example-21",children:[],level:4}],level:3}],level:2}],m={toc:s};function p(e){var r=e.components,n=(0,a.Z)(e,o);return(0,d.mdx)("wrapper",(0,t.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,d.mdx)("p",null,"The Relay Store can be used to programmatically update client-side data inside ",(0,d.mdx)("a",{parentName:"p",href:"/docs/v9.1.0/mutations#using-updater-and-optimisticupdater"},(0,d.mdx)("inlineCode",{parentName:"a"},"updater")," functions"),". The following is a reference of the Relay Store interface."),(0,d.mdx)("p",null,"Table of Contents:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#recordsourceselectorproxy"},"RecordSourceSelectorProxy")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#recordproxy"},"RecordProxy")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#connectionhandler"},"ConnectionHandler"))),(0,d.mdx)("h2",{id:"recordsourceselectorproxy"},"RecordSourceSelectorProxy"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"RecordSourceSelectorProxy")," is the type of the ",(0,d.mdx)("inlineCode",{parentName:"p"},"store")," that ",(0,d.mdx)("a",{parentName:"p",href:"/docs/v9.1.0/mutations#using-updater-and-optimisticupdater"},(0,d.mdx)("inlineCode",{parentName:"a"},"updater")," functions")," receive as an argument. The following is the ",(0,d.mdx)("inlineCode",{parentName:"p"},"RecordSourceSelectorProxy")," interface:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"interface RecordSourceSelectorProxy {\n  create(dataID: string, typeName: string): RecordProxy;\n  delete(dataID: string): void;\n  get(dataID: string): ?RecordProxy;\n  getRoot(): RecordProxy;\n  getRootField(fieldName: string): ?RecordProxy;\n  getPluralRootField(fieldName: string): ?Array<?RecordProxy>;\n  invalidateStore(): void;\n}\n")),(0,d.mdx)("h3",{id:"createdataid-string-typename-string-recordproxy"},(0,d.mdx)("inlineCode",{parentName:"h3"},"create(dataID: string, typeName: string): RecordProxy")),(0,d.mdx)("p",null,"Creates a new record in the store given a ",(0,d.mdx)("inlineCode",{parentName:"p"},"dataID")," and the ",(0,d.mdx)("inlineCode",{parentName:"p"},"typeName")," as defined by the GraphQL schema. Returns a ",(0,d.mdx)("a",{parentName:"p",href:"#recordproxy"},(0,d.mdx)("inlineCode",{parentName:"a"},"RecordProxy"))," which serves as an interface to mutate the newly created record."),(0,d.mdx)("h4",{id:"example"},"Example"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"const record = store.create(dataID, 'Todo');\n")),(0,d.mdx)("h3",{id:"deletedataid-string-void"},(0,d.mdx)("inlineCode",{parentName:"h3"},"delete(dataID: string): void")),(0,d.mdx)("p",null,"Deletes a record from the store given its ",(0,d.mdx)("inlineCode",{parentName:"p"},"dataID"),"."),(0,d.mdx)("h4",{id:"example-1"},"Example"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"store.delete(dataID);\n")),(0,d.mdx)("h3",{id:"getdataid-string-recordproxy"},(0,d.mdx)("inlineCode",{parentName:"h3"},"get(dataID: string): ?RecordProxy")),(0,d.mdx)("p",null,"Retrieves a record from the store given its ",(0,d.mdx)("inlineCode",{parentName:"p"},"dataID"),". Returns a ",(0,d.mdx)("a",{parentName:"p",href:"#recordproxy"},(0,d.mdx)("inlineCode",{parentName:"a"},"RecordProxy"))," which serves as an interface to mutate the record."),(0,d.mdx)("h4",{id:"example-2"},"Example"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"const record = store.get(dataID);\n")),(0,d.mdx)("h3",{id:"getroot-recordproxy"},(0,d.mdx)("inlineCode",{parentName:"h3"},"getRoot(): RecordProxy")),(0,d.mdx)("p",null,"Returns the ",(0,d.mdx)("a",{parentName:"p",href:"#recordproxy"},(0,d.mdx)("inlineCode",{parentName:"a"},"RecordProxy"))," representing the root of the GraphQL document."),(0,d.mdx)("h4",{id:"example-3"},"Example"),(0,d.mdx)("p",null,"Given the GraphQL document:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},"viewer {\n  id\n}\n")),(0,d.mdx)("p",null,"Usage:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Represents root query\nconst root = store.getRoot();\n")),(0,d.mdx)("h3",{id:"getrootfieldfieldname-string-recordproxy"},(0,d.mdx)("inlineCode",{parentName:"h3"},"getRootField(fieldName: string): ?RecordProxy")),(0,d.mdx)("p",null,"Retrieves a root field from the store given the ",(0,d.mdx)("inlineCode",{parentName:"p"},"fieldName"),", as defined by the GraphQL document. Returns a ",(0,d.mdx)("a",{parentName:"p",href:"#recordproxy"},(0,d.mdx)("inlineCode",{parentName:"a"},"RecordProxy"))," which serves as an interface to mutate the record."),(0,d.mdx)("h4",{id:"example-4"},"Example"),(0,d.mdx)("p",null,"Given the GraphQL document:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},"viewer {\n  id\n}\n")),(0,d.mdx)("p",null,"Usage:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"const viewer = store.getRootField('viewer');\n")),(0,d.mdx)("h3",{id:"getpluralrootfieldfieldname-string-arrayrecordproxy"},(0,d.mdx)("inlineCode",{parentName:"h3"},"getPluralRootField(fieldName: string): ?Array<?RecordProxy>")),(0,d.mdx)("p",null,"Retrieves a root field that represents a collection from the store given the ",(0,d.mdx)("inlineCode",{parentName:"p"},"fieldName"),", as defined by the GraphQL document. Returns an array of ",(0,d.mdx)("a",{parentName:"p",href:"#recordproxy"},(0,d.mdx)("inlineCode",{parentName:"a"},"RecordProxies")),"."),(0,d.mdx)("h4",{id:"example-5"},"Example"),(0,d.mdx)("p",null,"Given the GraphQL document:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},"nodes(first: 10) {\n  # ...\n}\n")),(0,d.mdx)("p",null,"Usage:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"const nodes = store.getPluralRootField('nodes');\n")),(0,d.mdx)("h3",{id:"invalidatestore-void"},(0,d.mdx)("inlineCode",{parentName:"h3"},"invalidateStore(): void")),(0,d.mdx)("p",null,"Globally invalidates the Relay store. This will cause any data that was written to the store before invalidation occurred to be considered stale, and will be considered to require refetch the next time a query is checked with ",(0,d.mdx)("inlineCode",{parentName:"p"},"environment.check()"),"."),(0,d.mdx)("h4",{id:"example-6"},"Example"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"store.invalidateStore();\n")),(0,d.mdx)("p",null,"After global invalidation, any query that is checked before refetching it will be considered stale:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"environment.check(query) === 'stale'\n\n")),(0,d.mdx)("h2",{id:"recordproxy"},"RecordProxy"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"RecordProxy")," serves as an interface to mutate records:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"interface RecordProxy {\n  copyFieldsFrom(sourceRecord: RecordProxy): void;\n  getDataID(): string;\n  getLinkedRecord(name: string, arguments?: ?Object): ?RecordProxy;\n  getLinkedRecords(name: string, arguments?: ?Object): ?Array<?RecordProxy>;\n  getOrCreateLinkedRecord(\n    name: string,\n    typeName: string,\n    arguments?: ?Object,\n  ): RecordProxy;\n  getType(): string;\n  getValue(name: string, arguments?: ?Object): mixed;\n  setLinkedRecord(\n    record: RecordProxy,\n    name: string,\n    arguments?: ?Object,\n  ): RecordProxy;\n  setLinkedRecords(\n    records: Array<?RecordProxy>,\n    name: string,\n    arguments?: ?Object,\n  ): RecordProxy;\n  setValue(value: mixed, name: string, arguments?: ?Object): RecordProxy;\n  invalidateRecord(): void;\n}\n")),(0,d.mdx)("h3",{id:"getdataid-string"},(0,d.mdx)("inlineCode",{parentName:"h3"},"getDataID(): string")),(0,d.mdx)("p",null,"Returns the dataID of the current record."),(0,d.mdx)("h4",{id:"example-7"},"Example"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"const id = record.getDataID();\n")),(0,d.mdx)("h3",{id:"gettype-string"},(0,d.mdx)("inlineCode",{parentName:"h3"},"getType(): string")),(0,d.mdx)("p",null,"Gets the type of the current record, as defined by the GraphQL schema."),(0,d.mdx)("h4",{id:"example-8"},"Example"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"const type = user.getType();  // User\n\n")),(0,d.mdx)("h3",{id:"getvaluename-string-arguments-object-mixed"},(0,d.mdx)("inlineCode",{parentName:"h3"},"getValue(name: string, arguments?: ?Object): mixed")),(0,d.mdx)("p",null,"Gets the value of a field in the current record given the field name."),(0,d.mdx)("h4",{id:"example-9"},"Example"),(0,d.mdx)("p",null,"Given the GraphQL document:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},"viewer {\n  id\n  name\n}\n")),(0,d.mdx)("p",null,"Usage:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"const name = viewer.getValue('name');\n")),(0,d.mdx)("p",null,"Optionally, if the field takes arguments, you can pass a bag of ",(0,d.mdx)("inlineCode",{parentName:"p"},"variables"),"."),(0,d.mdx)("h4",{id:"example-10"},"Example"),(0,d.mdx)("p",null,"Given the GraphQL document:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},"viewer {\n  id\n  name(arg: $arg)\n}\n")),(0,d.mdx)("p",null,"Usage:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"const name = viewer.getValue('name', {arg: 'value'});\n")),(0,d.mdx)("h3",{id:"getlinkedrecordname-string-arguments-object-recordproxy"},(0,d.mdx)("inlineCode",{parentName:"h3"},"getLinkedRecord(name: string, arguments?: ?Object): ?RecordProxy")),(0,d.mdx)("p",null,"Retrieves a record associated with the current record given the field name, as defined by the GraphQL document. Returns a ",(0,d.mdx)("inlineCode",{parentName:"p"},"RecordProxy"),"."),(0,d.mdx)("h4",{id:"example-11"},"Example"),(0,d.mdx)("p",null,"Given the GraphQL document:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  viewer {\n    id\n    name\n  }\n}\n")),(0,d.mdx)("p",null,"Usage:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst viewer = rootField.getLinkedRecord('viewer');\n")),(0,d.mdx)("p",null,"Optionally, if the linked record takes arguments, you can pass a bag of ",(0,d.mdx)("inlineCode",{parentName:"p"},"variables")," as well."),(0,d.mdx)("h4",{id:"example-12"},"Example"),(0,d.mdx)("p",null,"Given the GraphQL document:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  viewer(arg: $arg) {\n    id\n  }\n}\n")),(0,d.mdx)("p",null,"Usage:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst viewer = rootField.getLinkedRecord('viewer', {arg: 'value'});\n")),(0,d.mdx)("h3",{id:"getlinkedrecordsname-string-arguments-object-arrayrecordproxy"},(0,d.mdx)("inlineCode",{parentName:"h3"},"getLinkedRecords(name: string, arguments?: ?Object): ?Array<?RecordProxy>")),(0,d.mdx)("p",null,"Retrieves the set of records associated with the current record given the field name, as defined by the GraphQL document. Returns an array of ",(0,d.mdx)("inlineCode",{parentName:"p"},"RecordProxies"),"."),(0,d.mdx)("h4",{id:"example-13"},"Example"),(0,d.mdx)("p",null,"Given the GraphQL document:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  nodes {\n    # ...\n  }\n}\n")),(0,d.mdx)("p",null,"Usage:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst nodes = rootField.getLinkedRecords('nodes');\n")),(0,d.mdx)("p",null,"Optionally, if the linked record takes arguments, you can pass a bag of ",(0,d.mdx)("inlineCode",{parentName:"p"},"variables")," as well."),(0,d.mdx)("h4",{id:"example-14"},"Example"),(0,d.mdx)("p",null,"Given the GraphQL document:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  nodes(first: $count) {\n    # ...\n  }\n}\n")),(0,d.mdx)("p",null,"Usage:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst viewer = rootField.getLinkedRecord('viewer', {count: 10});\n")),(0,d.mdx)("h3",{id:"getorcreatelinkedrecordname-string-typename-string-arguments-object"},(0,d.mdx)("inlineCode",{parentName:"h3"},"getOrCreateLinkedRecord(name: string, typeName: string, arguments?: ?Object)")),(0,d.mdx)("p",null,"Retrieves the a record associated with the current record given the field name, as defined by the GraphQL document. If the linked record does not exist, it will be created given the type name. Returns a ",(0,d.mdx)("inlineCode",{parentName:"p"},"RecordProxy"),"."),(0,d.mdx)("h4",{id:"example-15"},"Example"),(0,d.mdx)("p",null,"Given the GraphQL document:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  viewer {\n    id\n  }\n}\n")),(0,d.mdx)("p",null,"Usage:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst newViewer = rootField.getOrCreateLinkedRecord('viewer', 'User'); // Will create if it doesn't exist\n\n")),(0,d.mdx)("p",null,"Optionally, if the linked record takes arguments, you can pass a bag of ",(0,d.mdx)("inlineCode",{parentName:"p"},"variables")," as well."),(0,d.mdx)("h3",{id:"setvaluevalue-mixed-name-string-arguments-object-recordproxy"},(0,d.mdx)("inlineCode",{parentName:"h3"},"setValue(value: mixed, name: string, arguments?: ?Object): RecordProxy")),(0,d.mdx)("p",null,"Mutates the current record by setting a new value on the specified field. Returns the mutated record."),(0,d.mdx)("p",null,"Given the GraphQL document:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},"viewer {\n  id\n  name\n}\n")),(0,d.mdx)("p",null,"Usage:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"viewer.setValue('New Name', 'name');\n")),(0,d.mdx)("p",null,"Optionally, if the field takes arguments, you can pass a bag of ",(0,d.mdx)("inlineCode",{parentName:"p"},"variables"),"."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"viewer.setValue('New Name', 'name', {arg: 'value'});\n")),(0,d.mdx)("h3",{id:"copyfieldsfromsourcerecord-recordproxy-void"},(0,d.mdx)("inlineCode",{parentName:"h3"},"copyFieldsFrom(sourceRecord: RecordProxy): void")),(0,d.mdx)("p",null,"Mutates the current record by copying the fields over from the passed in record ",(0,d.mdx)("inlineCode",{parentName:"p"},"sourceRecord"),"."),(0,d.mdx)("h4",{id:"example-16"},"Example"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"const record = store.get(id1);\nconst otherRecord = store.get(id2);\nrecord.copyFieldsFrom(otherRecord); // Mutates `record`\n\n")),(0,d.mdx)("h3",{id:"setlinkedrecordrecord-recordproxy-name-string-arguments-object"},(0,d.mdx)("inlineCode",{parentName:"h3"},"setLinkedRecord(record: RecordProxy, name: string, arguments?: ?Object)")),(0,d.mdx)("p",null,"Mutates the current record by setting a new linked record on the given the field name."),(0,d.mdx)("h4",{id:"example-17"},"Example"),(0,d.mdx)("p",null,"Given the GraphQL document:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  viewer {\n    id\n  }\n}\n")),(0,d.mdx)("p",null,"Usage:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst newViewer = store.create(/* ... */)''\nrootField.setLinkedRecord(newViewer, 'viewer'); //\n\n")),(0,d.mdx)("p",null,"Optionally, if the linked record takes arguments, you can pass a bag of ",(0,d.mdx)("inlineCode",{parentName:"p"},"variables")," as well."),(0,d.mdx)("h3",{id:"setlinkedrecordsrecords-arrayrecordproxy-name-string-variables-object"},(0,d.mdx)("inlineCode",{parentName:"h3"},"setLinkedRecords(records: Array<RecordProxy>, name: string, variables?: ?Object)")),(0,d.mdx)("p",null,"Mutates the current record by setting a new set of linked records on the given the field name."),(0,d.mdx)("h4",{id:"example-18"},"Example"),(0,d.mdx)("p",null,"Given the GraphQL document:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  nodes {\n    # ...\n  }\n}\n")),(0,d.mdx)("p",null,"Usage:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst newNode = store.create(/* ... */);\nconst newNodes = [...rootField.getLinkedRecords('nodes'), newNode];\nrootField.setLinkedRecords(newNodes, 'nodes'); //\n\n")),(0,d.mdx)("p",null,"Optionally, if the linked record takes arguments, you can pass a bag of ",(0,d.mdx)("inlineCode",{parentName:"p"},"variables")," as well."),(0,d.mdx)("h3",{id:"invalidaterecord-void"},(0,d.mdx)("inlineCode",{parentName:"h3"},"invalidateRecord(): void")),(0,d.mdx)("p",null,"Invalidates the record. This will cause any query that references this record to be considered stale until the next time it is refetched, and will be considered to require a refetch the next time such a query is checked with ",(0,d.mdx)("inlineCode",{parentName:"p"},"environment.check()"),"."),(0,d.mdx)("h4",{id:"example-19"},"Example"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"const record = store.get('4');\nrecord.invalidateRecord();\n")),(0,d.mdx)("p",null,"After invalidating a record, any query that references the invalidated record and that is checked before refetching it will be considered stale:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"environment.check(query) === 'stale'\n\n")),(0,d.mdx)("h2",{id:"connectionhandler"},"ConnectionHandler"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"ConnectionHandler")," is a utility module exposed by ",(0,d.mdx)("inlineCode",{parentName:"p"},"relay-runtime")," that aids in the manipulation of connections. ",(0,d.mdx)("inlineCode",{parentName:"p"},"ConnectionHandler")," exposes the following interface:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"interface ConnectionHandler {\n  getConnection(\n    record: RecordProxy,\n    key: string,\n    filters?: ?Object,\n  ): ?RecordProxy,\n  createEdge(\n    store: RecordSourceProxy,\n    connection: RecordProxy,\n    node: RecordProxy,\n    edgeType: string,\n  ): RecordProxy,\n  insertEdgeBefore(\n    connection: RecordProxy,\n    newEdge: RecordProxy,\n    cursor?: ?string,\n  ): void,\n  insertEdgeAfter(\n    connection: RecordProxy,\n    newEdge: RecordProxy,\n    cursor?: ?string,\n  ): void,\n  deleteNode(connection: RecordProxy, nodeID: string): void\n}\n")),(0,d.mdx)("h3",{id:"getconnectionrecord-recordproxy-key-string-filters-object"},(0,d.mdx)("inlineCode",{parentName:"h3"},"getConnection(record: RecordProxy, key: string, filters?: ?Object)")),(0,d.mdx)("p",null,"Given a record and a connection key, and optionally a set of filters, ",(0,d.mdx)("inlineCode",{parentName:"p"},"getConnection")," retrieves a ",(0,d.mdx)("a",{parentName:"p",href:"#recordproxy"},(0,d.mdx)("inlineCode",{parentName:"a"},"RecordProxy"))," that represents a connection that was annotated with a ",(0,d.mdx)("inlineCode",{parentName:"p"},"@connection")," directive."),(0,d.mdx)("p",null,"First, let's take a look at a plain connection:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},"fragment FriendsFragment on User {\n  friends(first: 10) {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}\n")),(0,d.mdx)("p",null,"Accessing a plain connection field like this is the same as other regular field:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"// The `friends` connection record can be accessed with:\nconst user = store.get(userID);\nconst friends = user && user.getLinkedRecord(user, 'friends');\n\n// Access fields on the connection:\nconst edges = friends.getLinkedRecords('edges');\n")),(0,d.mdx)("p",null,"In a ",(0,d.mdx)("a",{parentName:"p",href:"/docs/v9.1.0/pagination-container"},"pagination container"),", we usually annotate the actual connection field with ",(0,d.mdx)("inlineCode",{parentName:"p"},"@connection")," to tell Relay which part needs to be paginated:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},'fragment FriendsFragment on User {\n  friends(first: 10, orderby: "firstname") @connection(\n    key: "FriendsFragment_friends",\n  ) {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}\n')),(0,d.mdx)("p",null,"For connections like the above, ",(0,d.mdx)("inlineCode",{parentName:"p"},"ConnectionHandler")," helps us find the record:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre"},"\nimport {ConnectionHandler} from 'relay-runtime';\n\n// The `friends` connection record can be accessed with:\nconst user = store.get(userID);\nconst friends = ConnectionHandler.getConnection(\n user,                        // parent record\n 'FriendsFragment_friends'    // connection key\n {orderby: 'firstname'}       // 'filters' that is used to identify the connection\n);\n// Access fields on the connection:\nconst edges = friends.getLinkedRecords('edges');\n")),(0,d.mdx)("h3",{id:"edge-creation-and-insertion"},"Edge creation and insertion"),(0,d.mdx)("h4",{id:"createedgestore-recordsourceproxy-connection-recordproxy-node-recordproxy-edgetype-string"},(0,d.mdx)("inlineCode",{parentName:"h4"},"createEdge(store: RecordSourceProxy, connection: RecordProxy, node: RecordProxy, edgeType: string)")),(0,d.mdx)("p",null,"Creates an edge given a ",(0,d.mdx)("a",{parentName:"p",href:"#recordsourceselectorproxy"},(0,d.mdx)("inlineCode",{parentName:"a"},"store")),", a connection, the edge type, and a record that holds that connection."),(0,d.mdx)("h4",{id:"insertedgebeforeconnection-recordproxy-newedge-recordproxy-cursor-string"},(0,d.mdx)("inlineCode",{parentName:"h4"},"insertEdgeBefore(connection: RecordProxy, newEdge: RecordProxy, cursor?: ?string)")),(0,d.mdx)("p",null,"Given a connection, inserts the edge at the beginning of the connection, or before the specified ",(0,d.mdx)("inlineCode",{parentName:"p"},"cursor"),"."),(0,d.mdx)("h4",{id:"insertedgeafterconnection-recordproxy-newedge-recordproxy-cursor-string"},(0,d.mdx)("inlineCode",{parentName:"h4"},"insertEdgeAfter(connection: RecordProxy, newEdge: RecordProxy, cursor?: ?string)")),(0,d.mdx)("p",null,"Given a connection, inserts the edge at the end of the connection, or after the specified ",(0,d.mdx)("inlineCode",{parentName:"p"},"cursor"),"."),(0,d.mdx)("h4",{id:"example-20"},"Example"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre"},"\nconst user = store.get(userID);\nconst friends = ConnectionHandler.getConnection(user, 'friends');\nconst edge = ConnectionHandler.createEdge(store, friends, user, 'UserEdge');\n\n// No cursor provided, append the edge at the end.\nConnectionHandler.insertEdgeAfter(friends, edge);\n\n// No cursor provided, Insert the edge at the front:\nConnectionHandler.insertEdgeBefore(friends, edge);\n")),(0,d.mdx)("h3",{id:"deletenodeconnection-recordproxy-nodeid-string-void"},(0,d.mdx)("inlineCode",{parentName:"h3"},"deleteNode(connection: RecordProxy, nodeID: string): void")),(0,d.mdx)("p",null,"Given a connection, deletes any edges whose id matches the given id."),(0,d.mdx)("h4",{id:"example-21"},"Example"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre"},"\nconst user = store.get(userID);\nconst friends = ConnectionHandler.getConnection(user, 'friends');\nConnectionHandler.deleteNode(friends, idToDelete);\n")))}p.isMDXComponent=!0}}]);