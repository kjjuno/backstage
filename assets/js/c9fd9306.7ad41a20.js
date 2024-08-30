/*! For license information please see c9fd9306.7ad41a20.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[143571],{572591:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var n=r(785893),i=r(511151);const c={id:"plugin-scaffolder-backend-module-bitbucket-server.createpublishbitbucketserveraction",title:"createPublishBitbucketServerAction()",description:"API reference for createPublishBitbucketServerAction()"},s=void 0,o={id:"reference/plugin-scaffolder-backend-module-bitbucket-server.createpublishbitbucketserveraction",title:"createPublishBitbucketServerAction()",description:"API reference for createPublishBitbucketServerAction()",source:"@site/../docs/reference/plugin-scaffolder-backend-module-bitbucket-server.createpublishbitbucketserveraction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-bitbucket-server.createpublishbitbucketserveraction",permalink:"/docs/reference/plugin-scaffolder-backend-module-bitbucket-server.createpublishbitbucketserveraction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend-module-bitbucket-server.createpublishbitbucketserveraction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend-module-bitbucket-server.createpublishbitbucketserveraction",title:"createPublishBitbucketServerAction()",description:"API reference for createPublishBitbucketServerAction()"}},a={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend-module-bitbucket-server",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-bitbucket-server"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend-module-bitbucket-server.createpublishbitbucketserveraction",children:(0,n.jsx)(t.code,{children:"createPublishBitbucketServerAction"})})]}),"\n",(0,n.jsx)(t.p,{children:"Creates a new action that initializes a git repository of the content in the workspace and publishes it to Bitbucket Server."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:'function createPublishBitbucketServerAction(options: {\n    integrations: ScmIntegrationRegistry;\n    config: Config;\n}): import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    repoUrl: string;\n    description?: string | undefined;\n    defaultBranch?: string | undefined;\n    repoVisibility?: "private" | "public" | undefined;\n    sourcePath?: string | undefined;\n    enableLFS?: boolean | undefined;\n    token?: string | undefined;\n    gitCommitMessage?: string | undefined;\n    gitAuthorName?: string | undefined;\n    gitAuthorEmail?: string | undefined;\n}, import("@backstage/types").JsonObject>;\n'})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"options"}),(0,n.jsxs)(t.td,{children:["{ integrations: ",(0,n.jsx)(t.a,{href:"/docs/reference/integration.scmintegrationregistry",children:"ScmIntegrationRegistry"}),"; config: ",(0,n.jsx)(t.a,{href:"/docs/reference/config.config",children:"Config"}),"; }"]}),(0,n.jsx)(t.td,{})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(t.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,n.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),'<{ repoUrl: string; description?: string | undefined; defaultBranch?: string | undefined; repoVisibility?: "private" | "public" | undefined; sourcePath?: string | undefined; enableLFS?: boolean | undefined; token?: string | undefined; gitCommitMessage?: string | undefined; gitAuthorName?: string | undefined; gitAuthorEmail?: string | undefined; }, import("@backstage/types").',(0,n.jsx)(t.a,{href:"/docs/reference/types.jsonobject",children:"JsonObject"}),">"]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},675251:(e,t,r)=>{var n=r(667294),i=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,c={},d=null,l=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,n)&&!a.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:i,type:e,key:d,ref:l,props:c,_owner:o.current}}t.Fragment=c,t.jsx=d,t.jsxs=d},785893:(e,t,r)=>{e.exports=r(675251)},511151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>s});var n=r(667294);const i={},c=n.createContext(i);function s(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);