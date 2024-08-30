/*! For license information please see 15c508eb.18c92181.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[750073],{427258:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>i});var s=o(785893),n=o(511151);const c={id:"plugin-catalog-backend-module-azure.azuredevopsdiscoveryprocessor",title:"AzureDevOpsDiscoveryProcessor",description:"API reference for AzureDevOpsDiscoveryProcessor"},t=void 0,a={id:"reference/plugin-catalog-backend-module-azure.azuredevopsdiscoveryprocessor",title:"AzureDevOpsDiscoveryProcessor",description:"API reference for AzureDevOpsDiscoveryProcessor",source:"@site/../docs/reference/plugin-catalog-backend-module-azure.azuredevopsdiscoveryprocessor.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-azure.azuredevopsdiscoveryprocessor",permalink:"/docs/reference/plugin-catalog-backend-module-azure.azuredevopsdiscoveryprocessor",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-azure.azuredevopsdiscoveryprocessor.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-azure.azuredevopsdiscoveryprocessor",title:"AzureDevOpsDiscoveryProcessor",description:"API reference for AzureDevOpsDiscoveryProcessor"}},d={},i=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-azure",children:(0,s.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-azure"})})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-azure.azuredevopsdiscoveryprocessor",children:(0,s.jsx)(r.code,{children:"AzureDevOpsDiscoveryProcessor"})})]}),"\n",(0,s.jsx)(r.p,{children:"Extracts repositories out of an Azure DevOps org."}),"\n",(0,s.jsx)(r.p,{children:"The following will create locations for all projects which have a catalog-info.yaml on the default branch. The first is shorthand for the second."}),"\n",(0,s.jsxs)(r.p,{children:['target: "',(0,s.jsx)(r.a,{href:"https://dev.azure.com/org/project",children:"https://dev.azure.com/org/project"}),'" or target: ',(0,s.jsx)(r.a,{href:"https://dev.azure.com/org/project?path=/catalog-info.yaml",children:"https://dev.azure.com/org/project?path=/catalog-info.yaml"})]}),"\n",(0,s.jsx)(r.p,{children:"You may also explicitly specify a single repo:"}),"\n",(0,s.jsxs)(r.p,{children:["target: ",(0,s.jsx)(r.a,{href:"https://dev.azure.com/org/project/%5C_git/repo",children:"https://dev.azure.com/org/project/\\_git/repo"})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class AzureDevOpsDiscoveryProcessor implements CatalogProcessor \n"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Implements:"})," ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessor",children:"CatalogProcessor"})]}),"\n",(0,s.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Constructor"}),(0,s.jsx)(r.th,{children:"Modifiers"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-azure.azuredevopsdiscoveryprocessor._constructor_",children:"(constructor)(options)"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Constructs a new instance of the ",(0,s.jsx)(r.code,{children:"AzureDevOpsDiscoveryProcessor"})," class"]})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Method"}),(0,s.jsx)(r.th,{children:"Modifiers"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-azure.azuredevopsdiscoveryprocessor.fromconfig",children:"fromConfig(config, options)"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"static"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-azure.azuredevopsdiscoveryprocessor.getprocessorname",children:"getProcessorName()"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-azure.azuredevopsdiscoveryprocessor.readlocation",children:"readLocation(location, _optional, emit)"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},675251:(e,r,o)=>{var s=o(667294),n=Symbol.for("react.element"),c=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,o){var s,c={},i=null,l=null;for(s in void 0!==o&&(i=""+o),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(l=r.ref),r)t.call(r,s)&&!d.hasOwnProperty(s)&&(c[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===c[s]&&(c[s]=r[s]);return{$$typeof:n,type:e,key:i,ref:l,props:c,_owner:a.current}}r.Fragment=c,r.jsx=i,r.jsxs=i},785893:(e,r,o)=>{e.exports=o(675251)},511151:(e,r,o)=>{o.d(r,{Z:()=>a,a:()=>t});var s=o(667294);const n={},c=s.createContext(n);function t(e){const r=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(c.Provider,{value:r},e.children)}}}]);