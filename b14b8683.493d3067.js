(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{254:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),o=(n(0),n(323)),i={id:"quick-start-guide",title:"Quick Start Guide",original_id:"quick-start-guide"},s={unversionedId:"quick-start-guide",id:"version-v10.1.3/quick-start-guide",isDocsHomePage:!1,title:"Quick Start Guide",description:"In this guide we are going to give a brief overview of how Relay works and how to use it, using as reference an example todo list app. For more thorough documentation, check out our Guides and API sections.",source:"@site/versioned_docs/version-v10.1.3/Introduction-QuickStartGuide.md",slug:"/quick-start-guide",permalink:"/docs/v10.1.3/quick-start-guide",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v10.1.3/Introduction-QuickStartGuide.md",version:"v10.1.3",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1615904550,sidebar:"version-v10.1.3/docs",previous:{title:"Installation and Setup",permalink:"/docs/v10.1.3/installation-and-setup"},next:{title:"GraphQL in Relay",permalink:"/docs/v10.1.3/graphql-in-relay"}},l=[{value:"Setup",id:"setup",children:[]},{value:"Relay Environment",id:"relay-environment",children:[]},{value:"Rendering GraphQL Queries",id:"rendering-graphql-queries",children:[]},{value:"Using Query Variables",id:"using-query-variables",children:[]},{value:"Using Fragments",id:"using-fragments",children:[]},{value:"Composing Fragments",id:"composing-fragments",children:[]},{value:"Rendering Fragments",id:"rendering-fragments",children:[]},{value:"Mutating Data",id:"mutating-data",children:[{value:"Optimistic Updates",id:"optimistic-updates",children:[]},{value:"Updating local data from mutation responses",id:"updating-local-data-from-mutation-responses",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this guide we are going to give a brief overview of how Relay works and how to use it, using as reference an example todo list app. For more thorough documentation, check out our Guides and API sections."),Object(o.b)("p",null,"Table of Contents:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#setup"}),"Setup")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#relay-environment"}),"Relay Environment")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#rendering-graphql-queries"}),"Rendering GraphQL Queries")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#using-query-variables"}),"Using Query Variables")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#using-fragments"}),"Using Fragments")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#composing-fragments"}),"Composing Fragments")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#rendering-fragments"}),"Rendering Fragments")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#mutating-data"}),"Mutating Data")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#next-steps"}),"Next Steps"))),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("p",null,"Before starting, make sure to check out our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./prerequisites"}),"Prerequisites")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./installation-and-setup"}),"Installation and Setup")," guides. As mentioned in the prerequisites, we need to make sure that we've set up a GraphQL server and schema."),Object(o.b)("p",null,"Fortunately, we are going to be using this ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/relayjs/relay-examples/tree/master/todo"}),"example todo list app"),", which already has a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/relayjs/relay-examples/blob/master/todo/server.js"}),"server")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/relayjs/relay-examples/blob/master/todo/data/schema.graphql"}),"schema")," available for us to use:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"\n# From schema.graphql\n# https://github.com/relayjs/relay-examples/blob/master/todo/data/schema.graphql\n\ntype Query {\n  viewer: User\n\n  # Fetches an object given its ID\n  node(\n    # The ID of an object\n    id: ID!\n  ): Node\n}\n\n")),Object(o.b)("p",null,"Additionally, we will be using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://flow.org/"}),"Flow")," inside our JavaScript code examples. Flow is optional to set up in your project, but we will include it in our examples for completeness."),Object(o.b)("h2",{id:"relay-environment"},"Relay Environment"),Object(o.b)("p",null,"Before we can start rendering pixels on the screen, we need to configure Relay via a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./relay-environment"}),"Relay Environment"),". The environment bundles together the configuration, cache storage, and network-handling that Relay needs in order to operate."),Object(o.b)("p",null,"For the purposes of our example, we are simply going to configure our environment to communicate with our existing GraphQL server:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\nimport {\n  Environment,\n  Network,\n  RecordSource,\n  Store,\n} from 'relay-runtime';\n\nfunction fetchQuery(\n  operation,\n  variables,\n) {\n  return fetch('/graphql', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      query: operation.text,\n      variables,\n    }),\n  }).then(response => {\n    return response.json();\n  });\n}\n\nconst environment = new Environment({\n  network: Network.create(fetchQuery),\n  store: new Store(new RecordSource()),\n});\n\nexport default environment;\n\n")),Object(o.b)("p",null,"A Relay Environment requires at least a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./relay-store"}),"Store")," and a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./network-layer"}),"Network Layer"),". The above code uses the default implementation for ",Object(o.b)("inlineCode",{parentName:"p"},"Store"),", and creates a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./network-layer"}),"Network Layer")," using a simple ",Object(o.b)("inlineCode",{parentName:"p"},"fetchQuery")," function to fetch a GraphQL query from our server."),Object(o.b)("p",null,"Usually we'd want a single environment in our app, so you could export this environment as a singleton instance from a module to make it accessible across your app."),Object(o.b)("h2",{id:"rendering-graphql-queries"},"Rendering GraphQL Queries"),Object(o.b)("p",null,"Now that we've configured our Relay Environment, we can start fetching queries and rendering data on the screen. The entry point to render data from a GraphQL query is the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./query-renderer"}),Object(o.b)("inlineCode",{parentName:"a"},"QueryRenderer"))," component provided by ",Object(o.b)("inlineCode",{parentName:"p"},"react-relay"),"."),Object(o.b)("p",null,"To start, let's assume we just want to render the user id on the screen. From our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/relayjs/relay-examples/blob/master/todo/data/schema.graphql#L66"}),"schema"),", we know that we can get the current ",Object(o.b)("inlineCode",{parentName:"p"},"User")," via the ",Object(o.b)("inlineCode",{parentName:"p"},"viewer")," field, so let's write a sample query to fetch the current user id:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"\nquery UserQuery {\n  viewer {\n    id\n  }\n}\n\n")),Object(o.b)("p",null,"Now, let's see what it would take to create a component that fetches and renders the above query:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n// App.js\nimport React from 'react';\nimport {graphql, QueryRenderer} from 'react-relay';\n\nconst environment = // defined or imported above...\n\nexport default class App extends React.Component {\n  render() {\n    return (\n      <QueryRenderer\n        environment={environment}\n        query={graphql`\n          query UserQuery {\n            viewer {\n              id\n            }\n          }\n        `}\n        variables={{}}\n        render={({error, props}) => {\n          if (error) {\n            return <div>Error!</div>;\n          }\n          if (!props) {\n            return <div>Loading...</div>;\n          }\n          return <div>User ID: {props.viewer.id}</div>;\n        }}\n      />\n    );\n  }\n}\n\n")),Object(o.b)("p",null,"Our app is rendering a ",Object(o.b)("inlineCode",{parentName:"p"},"QueryRenderer")," in the above code, like any other React Component, but let's see what's going on in the props that we are passing to it:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"We're passing the ",Object(o.b)("inlineCode",{parentName:"li"},"environment")," we defined earlier."),Object(o.b)("li",{parentName:"ul"},"We're using the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"./graphql-in-relay"}),Object(o.b)("inlineCode",{parentName:"a"},"graphql"))," function to define our GraphQL query. ",Object(o.b)("inlineCode",{parentName:"li"},"graphql")," is a template tag that is never executed at runtime, but rather used by the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"./graphql-in-relay#relay-compiler"}),"Relay Compiler")," to generate the runtime artifacts that Relay requires to operate. We don't need to worry about this right now; for more details check out our ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"./graphql-in-relay"}),"GraphQL in Relay")," docs."),Object(o.b)("li",{parentName:"ul"},"We're passing an empty set of ",Object(o.b)("inlineCode",{parentName:"li"},"variables"),". We'll look into how to use variables in the next section."),Object(o.b)("li",{parentName:"ul"},"We're passing a ",Object(o.b)("inlineCode",{parentName:"li"},"render")," function; as you can tell from the code, Relay gives us some information about whether an error occurred, or if we're still fetching the query. If everything succeeds, the data we requested will be available inside ",Object(o.b)("inlineCode",{parentName:"li"},"props"),", with the same shape as the one specified in the query.")),Object(o.b)("p",null,"In order to run this app, we need to first compile our query using the Relay Compiler. Assuming the setup from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./installation-and-setup"}),"Installation and Setup"),", we can just run ",Object(o.b)("inlineCode",{parentName:"p"},"yarn relay"),"."),Object(o.b)("p",null,"For more details on ",Object(o.b)("inlineCode",{parentName:"p"},"QueryRenderer"),", check out the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./query-renderer"}),"docs"),"."),Object(o.b)("h2",{id:"using-query-variables"},"Using Query Variables"),Object(o.b)("p",null,"Let's assume for a moment that in our app we want to be able to view data for different users, so we're going to somehow need to query users by id. From our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/relayjs/relay-examples/blob/master/todo/data/schema.graphql#L69"}),"schema"),", we know we can query nodes given an id, so let's write a parameterized query to get a user by id:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"\nquery UserQuery($userID: ID!) {\n  node(id: $userID) {\n    id\n  }\n}\n\n")),Object(o.b)("p",null,"Now, let's see how we would fetch the above query using a ",Object(o.b)("inlineCode",{parentName:"p"},"QueryRenderer"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n// UserTodoList.js\n// @flow\nimport React from 'react';\nimport {graphql, QueryRenderer} from 'react-relay';\n\nconst environment = // defined or imported above...\n\ntype Props = {\n  userID: string,\n};\n\nexport default class UserTodoList extends React.Component<Props> {\n  render() {\n    const {userID} = this.props;\n\n    return (\n      <QueryRenderer\n        environment={environment}\n        query={graphql`\n          query UserQuery($userID: ID!) {\n            node(id: $userID) {\n              id\n            }\n          }\n        `}\n        variables={{userID}}\n        render={({error, props}) => {\n          if (error) {\n            return <div>Error!</div>;\n          }\n          if (!props) {\n            return <div>Loading...</div>;\n          }\n          return <div>User ID: {props.node.id}</div>;\n        }}\n      />\n    );\n  }\n}\n\n")),Object(o.b)("p",null,"The above code is doing something very similar to our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#rendering-graphql-queries"}),"previous example"),". However, we are now passing a ",Object(o.b)("inlineCode",{parentName:"p"},"$userID")," variable to the GraphQL query via the ",Object(o.b)("inlineCode",{parentName:"p"},"variables")," prop. This has a couple of important implications:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Given that ",Object(o.b)("inlineCode",{parentName:"li"},"userID")," is also a prop that our component takes, it could receive a new ",Object(o.b)("inlineCode",{parentName:"li"},"userID")," from its parent component at any moment. When this happens, new ",Object(o.b)("inlineCode",{parentName:"li"},"variables")," will be passed down to our ",Object(o.b)("inlineCode",{parentName:"li"},"QueryRenderer"),", which will automatically cause it to re-fetch the query with the new value for ",Object(o.b)("inlineCode",{parentName:"li"},"$userID"),"."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"$userID")," variable will now be available anywhere inside that query. This will become important to keep in mind when using fragments.")),Object(o.b)("p",null,"Now that we've updated the query, don't forget to run ",Object(o.b)("inlineCode",{parentName:"p"},"yarn relay"),"."),Object(o.b)("h2",{id:"using-fragments"},"Using Fragments"),Object(o.b)("p",null,"Now that we know how to define and fetch queries, let's actually start building a todo list."),Object(o.b)("p",null,"First, let's start at the bottom. Suppose that we want to render a component that simply displays a given todo item's text and completed state:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n// Todo.js\nimport React from 'react';\n\ntype Props = {\n  todo: {\n    complete: boolean,\n    text: string,\n  },\n};\n\nexport default class Todo extends React.Component<Props> {\n  render() {\n    const {complete, text} = this.props.todo;\n\n    return (\n      <li>\n        <div>\n          <input\n            checked={complete}\n            type=\"checkbox\"\n          />\n          <label>\n            {text}\n          </label>\n        </div>\n      </li>\n    );\n  }\n}\n\n")),Object(o.b)("p",null,"From our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/relayjs/relay-examples/blob/master/todo/data/schema.graphql#L112"}),"schema"),", we know that we can query this data on the ",Object(o.b)("inlineCode",{parentName:"p"},"Todo")," type. However, we don't want to have to send a separate query for each todo item; that would defeat the purpose of using GraphQL over a traditional REST API. We could manually query for these fields directly in our ",Object(o.b)("inlineCode",{parentName:"p"},"QueryRenderer")," query, but that would hurt re-usability: what if we want to query the same set of fields as part of a different query? Additionally, we wouldn't know which component needs the data we're querying, which is a problem Relay directly tries to address."),Object(o.b)("p",null,"Instead, we can define a reusable ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://graphql.org/learn/queries/#fragments"}),"Fragment"),", which allows us to define a set of fields on a type and reuse them within our queries wherever we need to:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"\nfragment TodoItemFragment on Todo {\n  complete\n  text\n}\n\n")),Object(o.b)("p",null,"Our component can then use this fragment to declare its data dependency on the ",Object(o.b)("inlineCode",{parentName:"p"},"Todo")," GraphQL type:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n// Todo.js\n\n// OPTIONAL: Flow type generated after running `yarn relay`, defining an Object type with shape of the fragment:\nimport type {Todo_todo} from './__generated__/Todo_todo.graphql';\n\nimport React from 'react';\nimport {graphql, createFragmentContainer} from 'react-relay'\n\ntype Props = {\n  todo: Todo_todo\n}\n\nclass Todo extends React.Component<Props> {\n  render() {\n    const {complete, text} = this.props.todo;\n\n    return (\n      <li>\n        <div>\n          <input\n            checked={complete}\n            type=\"checkbox\"\n          />\n          <label>\n            {text}\n          </label>\n        </div>\n      </li>\n    );\n  }\n}\n\nexport default createFragmentContainer(\n  Todo,\n  // Each key specified in this object will correspond to a prop available to the component\n  {\n    todo: graphql`\n      # As a convention, we name the fragment as '<ComponentFileName>_<propName>'\n      fragment Todo_todo on Todo {\n        complete\n        text\n      }\n    `\n  },\n)\n\n")),Object(o.b)("p",null,"The above code highlights one of Relay's most important principles which is colocation of components with their data dependencies. This is beneficial for a few reasons:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It becomes obvious at a glance what data is required to render a given component, without having to search which query in our app is fetching the required data."),Object(o.b)("li",{parentName:"ul"},"As a corollary, the component is de-coupled from the query that renders it. We can change the data dependencies for the component without having to update the queries that render them or worrying about breaking other components.")),Object(o.b)("p",null,"Check out our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./thinking-in-relay"}),"Thinking in Relay")," guide for more details behind Relay's principles."),Object(o.b)("p",null,"Before proceeding, don't forget to run the Relay Compiler with ",Object(o.b)("inlineCode",{parentName:"p"},"yarn relay"),"."),Object(o.b)("h2",{id:"composing-fragments"},"Composing Fragments"),Object(o.b)("p",null,"Given that ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./fragment-container"}),"Fragment Containers")," are just React components, we can compose them as such. We can even re-use fragment containers within other fragment containers. As an example, let's see how we would define a ",Object(o.b)("inlineCode",{parentName:"p"},"TodoList")," component that just renders a list of todo items, and whether all have been completed or not:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n// TodoList.js\n\n// OPTIONAL: Flow type generated after running `yarn relay`, defining an Object type with shape of the fragment:\nimport type {TodoList_userTodoData} from './__generated__/TodoList_userTodoData.graphql';\n\nimport React from 'react';\nimport {graphql, createFragmentContainer} from 'react-relay';\n\ntype Props = {\n  userTodoData: TodoList_userTodoData,\n}\n\nclass TodoList extends React.Component<Props> {\n  render() {\n    const {userTodoData: {totalCount, completedCount, todos}} = this.props;\n\n    return (\n      <section>\n        <input\n          checked={totalCount === completedCount}\n          type=\"checkbox\"\n        />\n        <ul>\n          {todos.edges.map(edge =>\n            <Todo\n              key={edge.node.id}\n              // We pass the data required by Todo here\n              todo={edge.node}\n            />\n          )}\n        </ul>\n      </section>\n    );\n  }\n}\n\nexport default createFragmentContainer(\n  TodoList,\n  {\n    userTodoData: graphql`\n      # As a convention, we name the fragment as '<ComponentFileName>_<PropName>'\n      fragment TodoList_userTodoData on User {\n        todos(\n          first: 2147483647  # max GraphQLInt, to fetch all todos\n        ) {\n          edges {\n            node {\n              id,\n              # We use the fragment defined by the child Todo component here\n              ...Todo_todo,\n            },\n          },\n        },\n        id,\n        totalCount,\n        completedCount,\n      }\n    `,\n  },\n);\n\n")),Object(o.b)("p",null,"As with the first fragment container we defined, ",Object(o.b)("inlineCode",{parentName:"p"},"TodoList")," declares its data dependencies via a fragment. However, this component additionally re-uses the fragment previously defined by the ",Object(o.b)("inlineCode",{parentName:"p"},"Todo")," component, and passes the appropriate data when rendering the child ",Object(o.b)("inlineCode",{parentName:"p"},"Todo")," components (a.k.a. fragment containers)."),Object(o.b)("p",null,"One final thing to note when composing fragment containers is that the parent will not have access to the data defined by the child container. Relay only allows components to access data they specifically ask for in GraphQL fragments \u2014 nothing more. This is called ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./thinking-in-relay#data-masking"}),"Data Masking"),", and it's intentional to prevent components from depending on data they didn't declare as a dependency."),Object(o.b)("h2",{id:"rendering-fragments"},"Rendering Fragments"),Object(o.b)("p",null,"Now that we have some components (a.k.a fragment containers) that declare their data dependencies, we need to hook them up to a ",Object(o.b)("inlineCode",{parentName:"p"},"QueryRenderer")," so that the data is actually fetched and rendered. Remember,\nfragment containers do not directly fetch data. Instead, containers declare a specification of the data needed to render, and Relay guarantees that this data is available before rendering."),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"QueryRenderer")," rendering these fragment containers could look like the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n// ViewerTodoList.js\nimport React from 'react';\nimport {graphql, QueryRenderer} from 'react-relay';\nimport TodoList from './TodoList'\n\nconst environment = // defined or imported above...\n\nexport default class ViewerTodoList extends React.Component {\n  render() {\n    return (\n      <QueryRenderer\n        environment={environment}\n        query={graphql`\n          query ViewerQuery {\n            viewer {\n              id\n              # Re-use the fragment here\n              ...TodoList_userTodoData\n            }\n          }\n        `}\n        variables={{}}\n        render={({error, props}) => {\n          if (error) {\n            return <div>Error!</div>;\n          }\n          if (!props) {\n            return <div>Loading...</div>;\n          }\n          return (\n            <div>\n              <div>Todo list for User {props.viewer.id}:</div>\n              <TodoList userTodoData={props.viewer} />\n            </div>\n          );\n        }}\n      />\n    );\n  }\n}\n\n")),Object(o.b)("p",null,"Check out our docs for ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./fragment-container"}),"Fragment Containers")," for more details, and our guides on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./refetch-container"}),"Refetch")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./pagination-container"}),"Pagination")," for more advanced usage of containers."),Object(o.b)("h2",{id:"mutating-data"},"Mutating Data"),Object(o.b)("p",null,"Now that we know how to query for and render data, let's move on to changing our data. We know that to change any data in our server, we need to use GraphQL ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://graphql.org/learn/queries/#mutations"}),"Mutations"),"."),Object(o.b)("p",null,"From our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/relayjs/relay-examples/blob/master/todo/data/schema.graphql#L35"}),"schema"),", we know that we have some mutations available to us, so let's start by writing a mutation to change the ",Object(o.b)("inlineCode",{parentName:"p"},"complete")," status of a given todo item (i.e. mark or unmark it as done):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"\nmutation ChangeTodoStatusMutation($input: ChangeTodoStatusInput!) {\n  changeTodoStatus(input: $input) {\n    todo {\n      id\n      complete\n    }\n  }\n}\n\n")),Object(o.b)("p",null,"This mutation allows us to query back some data as a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/relayjs/relay-examples/blob/master/todo/data/schema.graphql#L18"}),"result of the mutation"),", so we're going to query for the updated ",Object(o.b)("inlineCode",{parentName:"p"},"complete")," status on the todo item."),Object(o.b)("p",null,"In order to execute this mutation in Relay, we're going to write a new mutation using Relay's ",Object(o.b)("inlineCode",{parentName:"p"},"commitMutation")," api:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n// ChangeTodoStatusMutation.js\nimport {graphql, commitMutation} from 'react-relay';\n\n// We start by defining our mutation from above using `graphql`\nconst mutation = graphql`\n  mutation ChangeTodoStatusMutation($input: ChangeTodoStatusInput!) {\n    changeTodoStatus(input: $input) {\n      todo {\n        id\n        complete\n      }\n    }\n  }\n`;\n\nfunction commit(\n  environment,\n  complete,\n  todo,\n) {\n  // Now we just call commitMutation with the appropriate parameters\n  return commitMutation(\n    environment,\n    {\n      mutation,\n      variables: {\n        input: {complete, id: todo.id},\n      },\n    }\n  );\n}\n\nexport default {commit};\n\n")),Object(o.b)("p",null,"Whenever we call ",Object(o.b)("inlineCode",{parentName:"p"},"ChangeTodoStatusMutation.commit(...)"),", Relay will send the mutation to the server and, in our case, upon receiving a response it will automatically update the local data store with the latest data from the server. This also means that upon receiving the response, Relay will ensure that any components (i.e. containers) that depend on the updated data are re-rendered."),Object(o.b)("p",null,"In order to actually use this mutation in our component, we could update our ",Object(o.b)("inlineCode",{parentName:"p"},"Todo")," component in the following way:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n// Todo.js\n\n// ...\n\nclass Todo extends React.Component<Props> {\n  // Add a new event handler that fires off the mutation\n  _handleOnCheckboxChange = (e) => {\n    const complete = e.target.checked;\n    ChangeTodoStatusMutation.commit(\n      this.props.relay.environment,\n      complete,\n      this.props.todo,\n    );\n  };\n\n  render() {\n    // ...\n  }\n}\n\n// ...\n\n")),Object(o.b)("h3",{id:"optimistic-updates"},"Optimistic Updates"),Object(o.b)("p",null,"In our example above, the ",Object(o.b)("inlineCode",{parentName:"p"},"complete")," status in our component won't be updated and re-rendered until we get a response back from the server, which won't make for a great user experience."),Object(o.b)("p",null,"In order to make the experience better, we can configure our mutation to do an optimistic update. An optimistic update means immediately updating our local data with what we expect it to be if we get a successful response from the server, i.e. updating the data immediately assuming that the mutation request will succeed. If the request doesn't succeed, we can roll-back our update."),Object(o.b)("p",null,"In Relay, there's a couple of options we can pass to ",Object(o.b)("inlineCode",{parentName:"p"},"commitMutation")," to enable optimistic updates. Let's see what that would look like in our ",Object(o.b)("inlineCode",{parentName:"p"},"ChangeTodoStatusMutation"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n// ChangeTodoStatusMutation.js\n\n// ...\n\nfunction getOptimisticResponse(complete, todo) {\n  return {\n    changeTodoStatus: {\n      todo: {\n        complete: complete,\n        id: todo.id,\n      },\n    },\n  };\n}\n\nfunction commit(\n  environment,\n  complete,\n  todo\n) {\n  // Now we just call commitMutation with the appropriate parameters\n  return commitMutation(\n    environment,\n    {\n      mutation,\n      variables: {\n        input: {complete, id: todo.id},\n      },\n      optimisticResponse: getOptimisticResponse(complete, todo),\n    }\n  );\n}\n\nexport default {commit};\n\n")),Object(o.b)("p",null,"In the simplest case above, we just need to pass an ",Object(o.b)("inlineCode",{parentName:"p"},"optimisticResponse")," option, which should refer to an object having the same shape as the mutation response payload. When we pass this option, Relay will know to immediately update our local data with the optimistic response, and then update it with the actual server response or roll it back if an error occurs."),Object(o.b)("p",null,"Please note that the actual query and response payload may not have the exact same shape as the selection in your code, because sometimes Relay will add extra fields for you during the compilation step, and you need to add these fields to your optimistic response. For example:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Relay will add an ",Object(o.b)("inlineCode",{parentName:"p"},"id")," field if it exists on the type for caching purpose.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Relay will add a ",Object(o.b)("inlineCode",{parentName:"p"},"__typename")," field if the type is an union or an interface."))),Object(o.b)("p",null,"You can inspect the network request or response to see the exact shape."),Object(o.b)("h3",{id:"updating-local-data-from-mutation-responses"},"Updating local data from mutation responses"),Object(o.b)("p",null,"By default, Relay will know to update the fields on the records referenced by the mutation payload, (i.e. the ",Object(o.b)("inlineCode",{parentName:"p"},"todo")," in our example). However, this is only the simplest case. In some cases updating the local data isn't as simple as just updating the fields in a record."),Object(o.b)("p",null,"For instance, we might be updating a collection of items, or we might be deleting a record entirely. For these more advanced scenarios Relay allows us to pass a set of options for us to control how we update the local data from a server response, including a set of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./mutations#configs"}),Object(o.b)("inlineCode",{parentName:"a"},"configs"))," and an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./mutations#using-updater-and-optimisticupdater"}),Object(o.b)("inlineCode",{parentName:"a"},"updater"))," function for full control over the update."),Object(o.b)("p",null,"For more details and advanced use cases on mutations and updates, check out our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./mutations"}),"Mutations")," docs."),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)("p",null,"This guide just scratches the surface of Relay's API. For more detailed docs and guides, check out our API Reference and Guides sections."))}p.isMDXComponent=!0},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);