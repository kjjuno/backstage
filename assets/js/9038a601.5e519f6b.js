/*! For license information please see 9038a601.5e519f6b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[507269],{761857:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>m,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>t,toc:()=>d});var n=r(785893),i=r(511151);const o={id:"plugin-permission-common.isresourcepermission",title:"isResourcePermission()",description:"API reference for isResourcePermission()"},c=void 0,t={id:"reference/plugin-permission-common.isresourcepermission",title:"isResourcePermission()",description:"API reference for isResourcePermission()",source:"@site/../docs/reference/plugin-permission-common.isresourcepermission.md",sourceDirName:"reference",slug:"/reference/plugin-permission-common.isresourcepermission",permalink:"/docs/reference/plugin-permission-common.isresourcepermission",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-common.isresourcepermission.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-common.isresourcepermission",title:"isResourcePermission()",description:"API reference for isResourcePermission()"}},m={},d=[{value:"Parameters",id:"parameters",level:2}];function p(e){const s={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(s.a,{href:"/docs/reference/plugin-permission-common",children:(0,n.jsx)(s.code,{children:"@backstage/plugin-permission-common"})})," > ",(0,n.jsx)(s.a,{href:"/docs/reference/plugin-permission-common.isresourcepermission",children:(0,n.jsx)(s.code,{children:"isResourcePermission"})})]}),"\n",(0,n.jsxs)(s.p,{children:["Check if a given permission is a ",(0,n.jsx)(s.a,{href:"/docs/reference/plugin-permission-common.resourcepermission",children:"ResourcePermission"}),". When ",(0,n.jsx)(s.code,{children:"resourceType"})," is supplied as the second parameter, also checks if the permission has the specified resource type."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"function isResourcePermission<T extends string = string>(permission: Permission, resourceType?: T): permission is ResourcePermission<T>;\n"})}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"permission"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/reference/plugin-permission-common.permission",children:"Permission"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"resourceType"}),(0,n.jsx)(s.td,{children:"T"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.em,{children:"(Optional)"})})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(s.p,{children:["permission is ",(0,n.jsx)(s.a,{href:"/docs/reference/plugin-permission-common.resourcepermission",children:"ResourcePermission"}),"<T>"]})]})}function l(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},675251:(e,s,r)=>{var n=r(667294),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,t=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,r){var n,o={},d=null,p=null;for(n in void 0!==r&&(d=""+r),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(p=s.ref),s)c.call(s,n)&&!m.hasOwnProperty(n)&&(o[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===o[n]&&(o[n]=s[n]);return{$$typeof:i,type:e,key:d,ref:p,props:o,_owner:t.current}}s.Fragment=o,s.jsx=d,s.jsxs=d},785893:(e,s,r)=>{e.exports=r(675251)},511151:(e,s,r)=>{r.d(s,{Z:()=>t,a:()=>c});var n=r(667294);const i={},o=n.createContext(i);function c(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);