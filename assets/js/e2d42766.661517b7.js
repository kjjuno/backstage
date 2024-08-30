/*! For license information please see e2d42766.661517b7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[441190],{56935:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var o=n(785893),t=n(511151);const c={id:"plugin-catalog-backend-module-azure.azuredevopsentityprovider.fromconfig",title:"AzureDevOpsEntityProvider.fromConfig()",description:"API reference for AzureDevOpsEntityProvider.fromConfig()"},i=void 0,d={id:"reference/plugin-catalog-backend-module-azure.azuredevopsentityprovider.fromconfig",title:"AzureDevOpsEntityProvider.fromConfig()",description:"API reference for AzureDevOpsEntityProvider.fromConfig()",source:"@site/../docs/reference/plugin-catalog-backend-module-azure.azuredevopsentityprovider.fromconfig.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-azure.azuredevopsentityprovider.fromconfig",permalink:"/docs/reference/plugin-catalog-backend-module-azure.azuredevopsentityprovider.fromconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-azure.azuredevopsentityprovider.fromconfig.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-azure.azuredevopsentityprovider.fromconfig",title:"AzureDevOpsEntityProvider.fromConfig()",description:"API reference for AzureDevOpsEntityProvider.fromConfig()"}},s={},a=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-azure",children:(0,o.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-azure"})})," > ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-azure.azuredevopsentityprovider",children:(0,o.jsx)(r.code,{children:"AzureDevOpsEntityProvider"})})," > ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-azure.azuredevopsentityprovider.fromconfig",children:(0,o.jsx)(r.code,{children:"fromConfig"})})]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"static fromConfig(configRoot: Config, options: {\n        logger: LoggerService;\n        schedule?: SchedulerServiceTaskRunner;\n        scheduler?: SchedulerService;\n    }): AzureDevOpsEntityProvider[];\n"})}),"\n",(0,o.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Parameter"}),(0,o.jsx)(r.th,{children:"Type"}),(0,o.jsx)(r.th,{children:"Description"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"configRoot"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.a,{href:"/docs/reference/config.config",children:"Config"})}),(0,o.jsx)(r.td,{})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"options"}),(0,o.jsxs)(r.td,{children:["{ logger: ",(0,o.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.loggerservice",children:"LoggerService"}),"; schedule?: ",(0,o.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.schedulerservicetaskrunner",children:"SchedulerServiceTaskRunner"}),"; scheduler?: ",(0,o.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.schedulerservice",children:"SchedulerService"}),"; }"]}),(0,o.jsx)(r.td,{})]})]})]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-azure.azuredevopsentityprovider",children:"AzureDevOpsEntityProvider"}),"[]"]})]})}function u(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},675251:(e,r,n)=>{var o=n(667294),t=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var o,c={},a=null,l=null;for(o in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,o)&&!s.hasOwnProperty(o)&&(c[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===c[o]&&(c[o]=r[o]);return{$$typeof:t,type:e,key:a,ref:l,props:c,_owner:d.current}}r.Fragment=c,r.jsx=a,r.jsxs=a},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>i});var o=n(667294);const t={},c=o.createContext(t);function i(e){const r=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(c.Provider,{value:r},e.children)}}}]);