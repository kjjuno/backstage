/*! For license information please see bf3bd019.9d88e3c9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[327246],{816117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(785893),r=n(511151);const s={id:"backend-openapi-utils.internal.pathtemplate",title:"internal.PathTemplate",description:"API reference for internal.PathTemplate"},i=void 0,c={id:"reference/backend-openapi-utils.internal.pathtemplate",title:"internal.PathTemplate",description:"API reference for internal.PathTemplate",source:"@site/../docs/reference/backend-openapi-utils.internal.pathtemplate.md",sourceDirName:"reference",slug:"/reference/backend-openapi-utils.internal.pathtemplate",permalink:"/docs/reference/backend-openapi-utils.internal.pathtemplate",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-openapi-utils.internal.pathtemplate.md",tags:[],version:"current",frontMatter:{id:"backend-openapi-utils.internal.pathtemplate",title:"internal.PathTemplate",description:"API reference for internal.PathTemplate"}},o={},p=[{value:"Example",id:"example",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,a.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils",children:(0,a.jsx)(t.code,{children:"@backstage/backend-openapi-utils"})})," > ",(0,a.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal",children:(0,a.jsx)(t.code,{children:"internal"})})," > ",(0,a.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal.pathtemplate",children:(0,a.jsx)(t.code,{children:"PathTemplate"})})]}),"\n",(0,a.jsxs)(t.p,{children:["Validate a string against OpenAPI path template, ",(0,a.jsx)(t.a,{href:"https://spec.openapis.org/oas/v3.1.0#path-templating-matching",children:"https://spec.openapis.org/oas/v3.1.0#path-templating-matching"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"export type PathTemplate<Path extends string> = Path extends `${infer Prefix}{${infer PathName}}${infer Suffix}` ? `${Prefix}:${PathName}${PathTemplate<Suffix>}` : Path;\n"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"References:"})," ",(0,a.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal.pathtemplate",children:"PathTemplate"})]}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:'const path: PathTemplate<"/posts/{postId}/comments/{commentId}"> = "/posts/:postId/comments/:commentId";\nconst pathWithoutParams: PathTemplate<"/posts/comments"> = "/posts/comments";\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},675251:(e,t,n)=>{var a=n(667294),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var a,s={},p=null,l=null;for(a in void 0!==n&&(p=""+n),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,a)&&!o.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:r,type:e,key:p,ref:l,props:s,_owner:c.current}}t.Fragment=s,t.jsx=p,t.jsxs=p},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var a=n(667294);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);