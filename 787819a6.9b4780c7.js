(window.webpackJsonp=window.webpackJsonp||[]).push([[483],{1069:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||r;return n?i.a.createElement(d,o(o({ref:t},s),{},{components:n})):i.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<r;s++)c[s]=n[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},560:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(1069)),c={id:"classic-api-reference-relay-graphql-mutation",title:"Relay.GraphQLMutation",original_id:"classic-api-reference-relay-graphql-mutation"},o={unversionedId:"classic-api-reference-relay-graphql-mutation",id:"version-classic/classic-api-reference-relay-graphql-mutation",isDocsHomePage:!1,title:"Relay.GraphQLMutation",description:"Relay.GraphQLMutation is a low-level API for modeling a GraphQL mutation.",source:"@site/versioned_docs/version-classic/Classic-APIReference-GraphQLMutation.md",slug:"/classic-api-reference-relay-graphql-mutation",permalink:"/docs/classic/classic-api-reference-relay-graphql-mutation",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-classic/Classic-APIReference-GraphQLMutation.md",version:"classic",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1614893623,sidebar:"version-classic/docs",previous:{title:"Relay.Mutation",permalink:"/docs/classic/classic-api-reference-relay-mutation"},next:{title:"Relay.PropTypes",permalink:"/docs/classic/classic-api-reference-relay-proptypes"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Properties",id:"properties",children:[{value:"create (static method)",id:"create-static-method",children:[]},{value:"createWithFiles (static method)",id:"createwithfiles-static-method",children:[]}]},{value:"Methods",id:"methods",children:[{value:"constructor",id:"constructor",children:[]},{value:"applyOptimistic",id:"applyoptimistic",children:[]},{value:"commit",id:"commit",children:[]},{value:"rollback",id:"rollback",children:[]}]},{value:"See also",id:"see-also",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Relay.GraphQLMutation")," is a low-level API for modeling a GraphQL mutation."),Object(r.b)("p",null,'This is the lowest level of abstraction at which product code may deal with mutations in Relay, and it corresponds to the mutation operation ("a write followed by a fetch") described in ',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://spec.graphql.org/June2018/#sec-Language.Operations"}),"the GraphQL Specification"),". You specify the mutation, the inputs, and the query."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Relay.GraphQLMutation")," doesn't provide any bells and whistles such as fat queries or tracked queries (that is, automatic synthesis at runtime of the mutation query to be sent to the server), instead having the user define a static and explicit query. Restricting yourself to the low-level API is a useful preparatory step that will help you ready your codebase for migration to the new static Relay core. In the meantime, if you want those dynamic features, you can opt in to the higher-level ",Object(r.b)("inlineCode",{parentName:"p"},"Relay.Mutation")," API."),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Properties")),Object(r.b)("ul",{className:"apiIndex"},Object(r.b)("li",null,Object(r.b)("a",{href:"#create-static-method"},Object(r.b)("pre",null,"static create(mutation, variables, environment)"),"Create a static mutation")),Object(r.b)("li",null,Object(r.b)("a",{href:"#createwithfiles-static-method"},Object(r.b)("pre",null,"static createWithFiles(mutation, variables, files, environment)"),'Create a static mutation that accepts a "files" object'))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Methods")),Object(r.b)("ul",{className:"apiIndex"},Object(r.b)("li",null,Object(r.b)("a",{href:"#constructor"},Object(r.b)("pre",null,"constructor(query, variables, files, environment, callbacks, collisionKey)"))),Object(r.b)("li",null,Object(r.b)("a",{href:"#applyoptimistic"},Object(r.b)("pre",null,"applyOptimistic(optimisticQuery, optimisticResponse, configs)"))),Object(r.b)("li",null,Object(r.b)("a",{href:"#commit"},Object(r.b)("pre",null,"commit(configs)"))),Object(r.b)("li",null,Object(r.b)("a",{href:"#rollback"},Object(r.b)("pre",null,"rollback()")))),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"create-static-method"},"create (static method)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"\nstatic create(\n  mutation: RelayConcreteNode,\n  variables: Object,\n  environment: RelayEnvironmentInterface\n): RelayGraphQLMutation;\n\n")),Object(r.b)("p",null,"Convenience method that wraps the constructor, passing some default parameters and returning an instance."),Object(r.b)("h4",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:'language-{"{"}16-20{"}"}'}),"\nconst environment = new Relay.Environment();\nconst query = Relay.QL`mutation FeedbackLikeMutation {\n  feedbackLike(input: $input) {\n    clientMutationId\n    feedback {\n      doesViewerLike\n    }\n  }\n}`;\nconst variables = {\n  input: {\n    feedbackId: 'aFeedbackId',\n  },\n};\n\nconst mutation = Relay.GraphQLMutation.create(\n  query,\n  variables,\n  environment\n);\n\n")),Object(r.b)("p",null,"Note: In most cases, it is possible to rely on the default singleton instance of the environment, which is exposed as ",Object(r.b)("inlineCode",{parentName:"p"},"Relay.Store"),"."),Object(r.b)("p",null,"See also: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#constructor"}),"GraphQLMutation ",">"," Constructor")),Object(r.b)("h3",{id:"createwithfiles-static-method"},"createWithFiles (static method)"),Object(r.b)("p",null,"Convenience method that wraps the constructor, passing some default parameters and returning an instance."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"\nstatic createWithFiles(\n  mutation: RelayConcreteNode,\n  variables: Variables,\n  files: FileMap,\n  environment: RelayEnvironmentInterface\n): RelayGraphQLMutation;\n\n")),Object(r.b)("h4",{id:"example-1"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:'language-{"{"}7-11{"}"}'}),"\n// Given a `files` object of:\n//\n//   type FileMap = {[key: string]: File};\n//\n// and `query`, `variables` and `environment` arguments\n// as in the previous example:\nconst mutation = Relay.GraphQLMutation.createWithFiles(\n  query,\n  variables,\n  files,\n  environment\n);\n\n")),Object(r.b)("p",null,"See also: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#constructor"}),"GraphQLMutation ",">"," Constructor")),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"constructor"},"constructor"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"\nconstructor(\n  query: RelayConcreteNode,\n  variables: Variables,\n  files: ?FileMap,\n  environment: RelayEnvironmentInterface,\n  callbacks: ?RelayMutationTransactionCommitCallbacks,\n  collisionKey: ?string\n);\n\n")),Object(r.b)("p",null,"This is the general constructor for creating ",Object(r.b)("inlineCode",{parentName:"p"},"Relay.GraphQLMutation")," instances with optional ",Object(r.b)("inlineCode",{parentName:"p"},"files"),", ",Object(r.b)("inlineCode",{parentName:"p"},"callbacks")," and ",Object(r.b)("inlineCode",{parentName:"p"},"collisionKey")," arguments."),Object(r.b)("p",null,"Callers must provide an appropriate ",Object(r.b)("inlineCode",{parentName:"p"},"query")," and ",Object(r.b)("inlineCode",{parentName:"p"},"variables"),". As per the GraphQL Server Relay Specification:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'The mutation should take a single argument named "input".'),Object(r.b)("li",{parentName:"ul"},'That input argument should contain a (string) "clientMutationId" property for the purposes of reconciling requests and responses (automatically added by the ',Object(r.b)("inlineCode",{parentName:"li"},"Relay.GraphQLMutation")," API)."),Object(r.b)("li",{parentName:"ul"},'The query should request "clientMutationId" as a subselection.')),Object(r.b)("p",null,"If not supplied, a unique collision key is derived (meaning that the created mutation will be independent and not collide with any other)."),Object(r.b)("h4",{id:"example-2"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"\nconst collisionKey = 'feedback-like: ' + variables.input.feedbackId;\nconst mutation = new Relay.GraphQLMutation(\n  query,\n  variables,\n  null, // No files.\n  environment,\n  {\n    onFailure: err => console.warn(err),\n    onSuccess: () => console.log('Success!'),\n  },\n  collisionKey\n);\n\n")),Object(r.b)("p",null,"See also: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./classic-api-reference-relay-mutation#getcollisionkey"}),"Relay.Mutation::getCollisionKey()")),Object(r.b)("h3",{id:"applyoptimistic"},"applyOptimistic"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"\napplyOptimistic(\n  optimisticQuery: RelayConcreteNode,\n  optimisticResponse: Object,\n  configs: ?Array<RelayMutationConfig>\n): RelayMutationTransaction;\n\n")),Object(r.b)("p",null,"Call this to optimistically apply an update to the store."),Object(r.b)("p",null,"The optional ",Object(r.b)("inlineCode",{parentName:"p"},"config")," parameter can be used to configure a ",Object(r.b)("inlineCode",{parentName:"p"},"RANGE_ADD")," or other type of mutation, as per the ",Object(r.b)("inlineCode",{parentName:"p"},"Relay.Mutation")," API. This tells Relay how to process the response."),Object(r.b)("p",null,"Optionally, follow up with a call to ",Object(r.b)("inlineCode",{parentName:"p"},"commit()")," to send the mutation to the server."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," An optimistic update may only be applied once."),Object(r.b)("h4",{id:"example-3"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:'language-{"{"}18-21{"}"}'}),"\nconst optimisticQuery = Relay.QL`mutation FeedbackLikeOptimisticUpdate {\n  feedbackLike(input: $input) {\n    clientMutationId\n    feedback {\n      doesViewerLike\n      id\n    }\n  }\n}`;\nconst optimisticResponse = {\n  feedback: {\n    doesViewerLike: true,\n    id: 'aFeedbackId',\n    __typename: 'Feedback',\n  },\n};\n\nconst transaction = mutation.applyOptimistic(\n  optimisticQuery,\n  optimisticResponse,\n);\n\n")),Object(r.b)("p",null,"See also: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./classic-api-reference-relay-mutation#getconfigs-abstract-method"}),"Relay.Mutation::getConfigs()")),Object(r.b)("h3",{id:"commit"},"commit"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"\ncommit(configs: ?Array<RelayMutationConfig>): RelayMutationTransaction;\n\n")),Object(r.b)("p",null,"Call this to send the mutation to the server."),Object(r.b)("p",null,"The optional ",Object(r.b)("inlineCode",{parentName:"p"},"config")," parameter can be used to configure a ",Object(r.b)("inlineCode",{parentName:"p"},"RANGE_ADD")," or other type of mutation, similar to the ",Object(r.b)("inlineCode",{parentName:"p"},"Relay.Mutation")," API."),Object(r.b)("p",null,"Optionally, precede with a call to ",Object(r.b)("inlineCode",{parentName:"p"},"applyOptimistic()")," to apply an update optimistically to the store."),Object(r.b)("p",null,"Note: This method may only be called once per instance."),Object(r.b)("h4",{id:"example-4"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:'language-{"{"}11{"}"}'}),"\nconst configs = [{\n  type: 'RANGE_ADD',\n  connectionName: 'topLevelComments',\n  edgeName: 'feedbackCommentEdge',\n  parentID: 'aFeedbackId',\n  parentName: 'feedback',\n  rangeBehaviors: {\n    '': GraphQLMutatorConstants.PREPEND,\n  },\n}];\nconst transaction = mutation.commit(configs);\n\n")),Object(r.b)("p",null,"See also: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./classic-api-reference-relay-mutation#getconfigs-abstract-method"}),"Relay.Mutation::getConfigs()")),Object(r.b)("h3",{id:"rollback"},"rollback"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"\nrollback(): void;\n\n")),Object(r.b)("p",null,"Rolls back an optimistic mutation."),Object(r.b)("h2",{id:"see-also"},"See also"),Object(r.b)("p",null,"A number of more detailed usage examples can be found ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/relay/blob/master/packages/react-relay/classic/mutation/__tests__/RelayGraphQLMutation-test.js"}),"in the test suite"),"."))}p.isMDXComponent=!0}}]);