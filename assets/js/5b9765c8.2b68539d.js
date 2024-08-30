/*! For license information please see 5b9765c8.2b68539d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[380897],{405058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(785893),i=n(511151);const a={id:"v1.15.0",title:"v1.15.0",description:"Backstage Release v1.15.0"},r=void 0,o={id:"releases/v1.15.0",title:"v1.15.0",description:"Backstage Release v1.15.0",source:"@site/../docs/releases/v1.15.0.md",sourceDirName:"releases",slug:"/releases/v1.15.0",permalink:"/docs/releases/v1.15.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.15.0.md",tags:[],version:"current",frontMatter:{id:"v1.15.0",title:"v1.15.0",description:"Backstage Release v1.15.0"},sidebar:"releases",previous:{title:"v1.16.0",permalink:"/docs/releases/v1.16.0"},next:{title:"v1.14.0",permalink:"/docs/releases/v1.14.0"}},c={},l=[{value:"Highlights",id:"highlights",level:2},{value:"<strong>BREAKING</strong>: Scaffolder build requirements",id:"breaking-scaffolder-build-requirements",level:3},{value:"<strong>BREAKING</strong>: <code>@backstage/plugin-linguist-backend</code>",id:"breaking-backstageplugin-linguist-backend",level:3},{value:"<strong>BREAKING</strong>: <code>@backstage/plugin-github-actions</code>",id:"breaking-backstageplugin-github-actions",level:3},{value:"New module: Unprocessed Entities",id:"new-module-unprocessed-entities",level:3},{value:"More movement toward Material UI v5 and React v18 compatibility",id:"more-movement-toward-material-ui-v5-and-react-v18-compatibility",level:3},{value:"New Backend System lifecycle changes",id:"new-backend-system-lifecycle-changes",level:3},{value:"Azure identity improvements",id:"azure-identity-improvements",level:3},{value:"Resource utilization and error display for k8s pods",id:"resource-utilization-and-error-display-for-k8s-pods",level:3},{value:"Printable TechDocs",id:"printable-techdocs",level:3},{value:"OpenAPI linting",id:"openapi-linting",level:3},{value:"Catalog conflict events (experimental)",id:"catalog-conflict-events-experimental",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["These are the release notes for the v1.15.0 release of\n",(0,s.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the\namazing Backstage Community for their hard work in getting this release\ndeveloped and done."}),"\n",(0,s.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,s.jsx)(t.p,{children:"This release has a few important security fixes, along with a lot of squashed\nbugs and exciting additions as usual! Enjoy."}),"\n",(0,s.jsxs)(t.h3,{id:"breaking-scaffolder-build-requirements",children:[(0,s.jsx)(t.strong,{children:"BREAKING"}),": Scaffolder build requirements"]}),"\n",(0,s.jsxs)(t.p,{children:["The Scaffolder backend uses a sandboxing environment to run its ",(0,s.jsx)(t.code,{children:"nunjucks"}),"\ntemplating in, for security reasons. This used to leverage the ",(0,s.jsx)(t.code,{children:"vm2"})," library,\nbut in this release it has been replaced by ",(0,s.jsx)(t.code,{children:"isolated-vm"}),". This significantly\nimproves the confidence level in the sandbox implementation since it builds upon\n",(0,s.jsx)(t.code,{children:"v8"})," isolates directly. However, it comes with a cost to implementers: it is a\nnative dependency, and as such needs to be built during ",(0,s.jsx)(t.code,{children:"yarn"})," installation, on\nthe exact architecture that it then executes on. For those who compile and run\nBackstage on stripped-down environments, you will want to ensure that you have\nthe build basics present, e.g. ",(0,s.jsx)(t.code,{children:"build-essential"})," or similar corresponding to\nyour operating system of choice. The ",(0,s.jsx)(t.code,{children:"isolated-vm"})," repo has ",(0,s.jsx)(t.a,{href:"https://github.com/laverdet/isolated-vm#requirements",children:"some further information"})," about the\nbuild environment requirements."]}),"\n",(0,s.jsxs)(t.p,{children:["There is a ",(0,s.jsx)(t.a,{href:"https://www.cve.org/CVERecord?id=CVE-2022-39266",children:"CVE-2022-39266"}),"\nthat has been reported for ",(0,s.jsx)(t.code,{children:"isolated-vm"}),", which applies only when using\n",(0,s.jsx)(t.code,{children:"CachedDataOptions"}),". We do not use that feature at all, since it is recommended\nagainst in the ",(0,s.jsx)(t.a,{href:"https://github.com/laverdet/isolated-vm#shared-options",children:"README"}),";\ndoing so can lead to breakouts and calling back to the main process. Some\nsecurity tools may report that this is a vulnerability but it is safe to ignore\nthis through your ",(0,s.jsx)(t.code,{children:".snyk"})," policy file or similar."]}),"\n",(0,s.jsxs)(t.h3,{id:"breaking-backstageplugin-linguist-backend",children:[(0,s.jsx)(t.strong,{children:"BREAKING"}),": ",(0,s.jsx)(t.code,{children:"@backstage/plugin-linguist-backend"})]}),"\n",(0,s.jsxs)(t.p,{children:["There have been some significant updates to the Linguist plugin, in particular\nthe backend and its API. One breaking change is that ",(0,s.jsx)(t.code,{children:"LinguistBackendApi"})," is now\nan interface rather than a class, and you should create its implementation\n",(0,s.jsx)(t.code,{children:"LinguistBackendClient"})," instead."]}),"\n",(0,s.jsxs)(t.p,{children:["Contributed by ",(0,s.jsx)(t.a,{href:"https://github.com/ahhhndre",children:"@ahhhndre"})," in\n",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/16954",children:"#16954"})]}),"\n",(0,s.jsxs)(t.h3,{id:"breaking-backstageplugin-github-actions",children:[(0,s.jsx)(t.strong,{children:"BREAKING"}),": ",(0,s.jsx)(t.code,{children:"@backstage/plugin-github-actions"})]}),"\n",(0,s.jsxs)(t.p,{children:["In order to make this plugin support GitHub enterprise as well as cloud, its\n",(0,s.jsx)(t.code,{children:"GithubActionsClient"})," is updated to take an ",(0,s.jsx)(t.code,{children:"scmAuthApi"})," instead of the previous\n",(0,s.jsx)(t.code,{children:"githubAuthApi"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Contributed by ",(0,s.jsx)(t.a,{href:"https://github.com/koalaty-code",children:"@koalaty-code"})," in\n",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/17781",children:"#17781"})]}),"\n",(0,s.jsx)(t.h3,{id:"new-module-unprocessed-entities",children:"New module: Unprocessed Entities"}),"\n",(0,s.jsx)(t.p,{children:"This frontend plugin and accompanying backend module lets you peek under the\ncovers of your catalog instance, finding those pesky unprocessed entities that\nmay be stuck in limbo because of an otherwise tricky-to-debug validation issue\nor similar."}),"\n",(0,s.jsxs)(t.p,{children:["Check out ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/catalog-unprocessed-entities/README.md",children:"the plugin\u2019s README"}),"\nfor details and installation instructions."]}),"\n",(0,s.jsxs)(t.p,{children:["Contributed by ",(0,s.jsx)(t.a,{href:"https://github.com/alde",children:"@alde"})," in\n",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/17828",children:"#17828"})]}),"\n",(0,s.jsx)(t.h3,{id:"more-movement-toward-material-ui-v5-and-react-v18-compatibility",children:"More movement toward Material UI v5 and React v18 compatibility"}),"\n",(0,s.jsx)(t.p,{children:"There have been some tweaks here or there to types and the theme system to\nensure a smooth future migration toward Material UI version 5. This should be\nmostly transparent to adopters, but please let us know if you encounter any\noddities around the theme system after upgrading to this release."}),"\n",(0,s.jsx)(t.p,{children:"To ensure your future compatibility with v5 plugins, you may want to upgrade\nyour theme provider to use the new unified one:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-diff",children:"     Provider: ({ children }) => (\n-    <ThemeProvider theme={lightTheme}>\n-      <CssBaseline>{children}</CssBaseline>\n-    </ThemeProvider>\n+    <UnifiedThemeProvider theme={builtinThemes.light} children={children} />\n     ),\n"})}),"\n",(0,s.jsxs)(t.p,{children:["We\u2019ve also ensured to be more thorough with how we use ",(0,s.jsx)(t.code,{children:"PropsWithChildren"})," to\nensure that there\u2019s a smooth transition to the non-implicit children in the\nReact v18 types."]}),"\n",(0,s.jsx)(t.h3,{id:"new-backend-system-lifecycle-changes",children:"New Backend System lifecycle changes"}),"\n",(0,s.jsxs)(t.p,{children:["When using ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/backend-system/",children:"the new Backend system"}),",\nplugins are now started up concurrently instead of serially. This improves\nstartup times significantly in some cases."]}),"\n",(0,s.jsxs)(t.p,{children:["If you were relying on feature registration order to make sure that one plugin\nwas completely initialized before being consumed by other plugins, we at the\nsame time introduced a new ",(0,s.jsx)(t.code,{children:"addStartupHook"})," method to the\n",(0,s.jsx)(t.code,{children:"coreServices.lifecycle"})," that you can use instead to act after all plugin\ninitializations have completed."]}),"\n",(0,s.jsxs)(t.p,{children:["At the same time, the default HTTP server implementation adds a middleware to\nthe top of the chain, which stalls incoming requests for a short period of time\nwhile waiting for service startup. If it takes longer than that predefined time,\nit responds with a ",(0,s.jsx)(t.code,{children:"503 Service Unavailable"})," error. The end result is that as\nlong as startup is typically fast, callers should only see slightly higher\nturnaround times for requests to services that are starting up, instead of\ngetting 404 errors or similar which was often the case in the past."]}),"\n",(0,s.jsx)(t.h3,{id:"azure-identity-improvements",children:"Azure identity improvements"}),"\n",(0,s.jsx)(t.p,{children:"On the Azure front, there\u2019s been work toward ensuring support for service\nprincipals, managed identities, and workload identities."}),"\n",(0,s.jsxs)(t.p,{children:["Contributed by ",(0,s.jsx)(t.a,{href:"https://github.com/sanderaernouts",children:"@sanderaernouts"})," in\n",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/17780",children:"#17780"})," and\n",(0,s.jsx)(t.a,{href:"https://github.com/afscrome",children:"@afscrome"})," in\n",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/18324",children:"#18324"})]}),"\n",(0,s.jsx)(t.h3,{id:"resource-utilization-and-error-display-for-k8s-pods",children:"Resource utilization and error display for k8s pods"}),"\n",(0,s.jsx)(t.p,{children:"You can now see some resource utilization statistics and errors, where present,\nfor your Kubernetes pods."}),"\n",(0,s.jsxs)(t.p,{children:["Contributed by ",(0,s.jsx)(t.a,{href:"https://github.com/mclarke47",children:"@mclarke47"})," in\n",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/17563",children:"#17563"})," and\n",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/18169",children:"#18169"})]}),"\n",(0,s.jsx)(t.h3,{id:"printable-techdocs",children:"Printable TechDocs"}),"\n",(0,s.jsxs)(t.p,{children:["There have been some changes to the TechDocs styles, to properly handle ",(0,s.jsx)(t.code,{children:"print"}),"\nmedia. This should make PDF exports and printing of documentation work better.\nLet us know how it goes!"]}),"\n",(0,s.jsxs)(t.p,{children:["Contributed by ",(0,s.jsx)(t.a,{href:"https://github.com/maapteh",children:"@maapteh"})," in\n",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/18007",children:"#18007"})]}),"\n",(0,s.jsx)(t.h3,{id:"openapi-linting",children:"OpenAPI linting"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"backstage-repo-tools"})," CLI\u2019s OpenAPI features now have a new ",(0,s.jsx)(t.code,{children:"lint"}),"\nsubcommand. This lets you automatically lint the OpenAPI schemas of plugins for\ncorrectness and best practices."]}),"\n",(0,s.jsxs)(t.p,{children:["Contributed by ",(0,s.jsx)(t.a,{href:"https://github.com/sennyeya",children:"@sennyeya"})," in\n",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/18185",children:"#18185"})]}),"\n",(0,s.jsx)(t.h3,{id:"catalog-conflict-events-experimental",children:"Catalog conflict events (experimental)"}),"\n",(0,s.jsx)(t.p,{children:"If you pass in an event broker to the catalog backend, it now has the\nexperimental ability to emit events onto the event bus describing entity\nconflicts as they happen internally. This can then be observed and acted upon by\nexternal consumers."}),"\n",(0,s.jsxs)(t.p,{children:["Contributed by ",(0,s.jsx)(t.a,{href:"https://github.com/sblausten",children:"@sblausten"})," in\n",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/16977",children:"#16977"})]}),"\n",(0,s.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["See the note above about the Scaffolder replacing ",(0,s.jsx)(t.code,{children:"vm2"})," with ",(0,s.jsx)(t.code,{children:"isolated-vm"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"There were some cases where sensitive configuration settings could be seen by\nthe browser. The configuration schemas have been tightened up accordingly in a\nfew places to counter this."}),"\n",(0,s.jsx)(t.li,{children:"The TechDocs base Docker image has been upgraded to include a few security\nfixes. This will get picked up automatically for future Docker based TechDocs\nruns, after upgrading Backstage."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,s.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest\nrelease. For more guidance on how to upgrade, check out the documentation for\n",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,s.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and\nstart using this new release."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),",\n",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,s.jsxs)(t.li,{children:["Backstage's ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for\ndiscussions and support"]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.15.0-changelog.md",children:"Changelog"})}),"\n",(0,s.jsxs)(t.li,{children:["Backstage ",(0,s.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),",\n",(0,s.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),",\n",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and\n",(0,s.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Sign up for our ",(0,s.jsx)(t.a,{href:"https://mailchi.mp/spotify/backstage-community",children:"newsletter"})," if\nyou want to be informed about what is happening in the world of Backstage."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var s=n(667294),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,a={},l=null,d=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,s)&&!c.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:i,type:e,key:l,ref:d,props:a,_owner:o.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var s=n(667294);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);