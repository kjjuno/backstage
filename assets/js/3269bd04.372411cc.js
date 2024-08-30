/*! For license information please see 3269bd04.372411cc.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[32880],{862758:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var r=n(785893),s=n(511151);const c={id:"core-plugin-api.backstageidentityresponse",title:"BackstageIdentityResponse",description:"API reference for BackstageIdentityResponse"},i=void 0,o={id:"reference/core-plugin-api.backstageidentityresponse",title:"BackstageIdentityResponse",description:"API reference for BackstageIdentityResponse",source:"@site/../docs/reference/core-plugin-api.backstageidentityresponse.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.backstageidentityresponse",permalink:"/docs/reference/core-plugin-api.backstageidentityresponse",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-plugin-api.backstageidentityresponse.md",tags:[],version:"current",frontMatter:{id:"core-plugin-api.backstageidentityresponse",title:"BackstageIdentityResponse",description:"API reference for BackstageIdentityResponse"}},a={},p=[];function d(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/core-plugin-api",children:(0,r.jsx)(t.code,{children:"@backstage/core-plugin-api"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/core-plugin-api.backstageidentityresponse",children:(0,r.jsx)(t.code,{children:"BackstageIdentityResponse"})})]}),"\n",(0,r.jsx)(t.p,{children:"Token and Identity response, with the users claims in the Identity."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export type BackstageIdentityResponse = {\n    token: string;\n    expiresAt?: Date;\n    identity: BackstageUserIdentity;\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"References:"})," ",(0,r.jsx)(t.a,{href:"/docs/reference/core-plugin-api.backstageuseridentity",children:"BackstageUserIdentity"})]})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var r=n(667294),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var r,c={},p=null,d=null;for(r in void 0!==n&&(p=""+n),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,r)&&!a.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:s,type:e,key:p,ref:d,props:c,_owner:o.current}}t.Fragment=c,t.jsx=p,t.jsxs=p},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var r=n(667294);const s={},c=r.createContext(s);function i(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);