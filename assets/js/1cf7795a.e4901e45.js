/*! For license information please see 1cf7795a.e4901e45.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[708886],{919869:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=r(785893),i=r(511151);const s={id:"plugin-permission-common.permissionevaluator",title:"PermissionEvaluator",description:"API reference for PermissionEvaluator"},t=void 0,c={id:"reference/plugin-permission-common.permissionevaluator",title:"PermissionEvaluator",description:"API reference for PermissionEvaluator",source:"@site/../docs/reference/plugin-permission-common.permissionevaluator.md",sourceDirName:"reference",slug:"/reference/plugin-permission-common.permissionevaluator",permalink:"/docs/reference/plugin-permission-common.permissionevaluator",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-common.permissionevaluator.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-common.permissionevaluator",title:"PermissionEvaluator",description:"API reference for PermissionEvaluator"}},a={},l=[{value:"Methods",id:"methods",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,o.jsx)(n.a,{href:"/docs/reference/plugin-permission-common",children:(0,o.jsx)(n.code,{children:"@backstage/plugin-permission-common"})})," > ",(0,o.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissionevaluator",children:(0,o.jsx)(n.code,{children:"PermissionEvaluator"})})]}),"\n",(0,o.jsx)(n.p,{children:"A client interacting with the permission backend can implement this evaluator interface."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"export interface PermissionEvaluator \n"})}),"\n",(0,o.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Method"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissionevaluator.authorize",children:"authorize(requests, options)"})}),(0,o.jsxs)(n.td,{children:["Evaluates ",(0,o.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permission",children:"Permissions"})," and returns a definitive decision."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissionevaluator.authorizeconditional",children:"authorizeConditional(requests, options)"})}),(0,o.jsxs)(n.td,{children:["Evaluates ",(0,o.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.resourcepermission",children:"ResourcePermissions"})," and returns both definitive and conditional decisions, depending on the configured ",(0,o.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.permissionpolicy",children:"PermissionPolicy"}),". This method is useful when the caller needs more control over the processing of conditional decisions. For example, a plugin backend may want to use ",(0,o.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissioncriteria",children:"conditions"})," in a database query instead of evaluating each resource in memory."]})]})]})]})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},675251:(e,n,r)=>{var o=r(667294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var o,s={},l=null,d=null;for(o in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)t.call(n,o)&&!a.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:i,type:e,key:l,ref:d,props:s,_owner:c.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>t});var o=r(667294);const i={},s=o.createContext(i);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);