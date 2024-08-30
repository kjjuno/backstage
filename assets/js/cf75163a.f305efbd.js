/*! For license information please see cf75163a.f305efbd.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[317182],{596486:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>i});var t=r(785893),o=r(511151);const s={id:"backend-common.servertokenmanager",title:"ServerTokenManager",description:"API reference for ServerTokenManager"},c=void 0,a={id:"reference/backend-common.servertokenmanager",title:"ServerTokenManager",description:"API reference for ServerTokenManager",source:"@site/../docs/reference/backend-common.servertokenmanager.md",sourceDirName:"reference",slug:"/reference/backend-common.servertokenmanager",permalink:"/docs/reference/backend-common.servertokenmanager",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-common.servertokenmanager.md",tags:[],version:"current",frontMatter:{id:"backend-common.servertokenmanager",title:"ServerTokenManager",description:"API reference for ServerTokenManager"}},d={},i=[{value:"Methods",id:"methods",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-common",children:(0,t.jsx)(n.code,{children:"@backstage/backend-common"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-common.servertokenmanager",children:(0,t.jsx)(n.code,{children:"ServerTokenManager"})})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Warning: This API is now obsolete."}),"\n",(0,t.jsxs)(n.p,{children:["Please ",(0,t.jsx)(n.a,{href:"https://backstage.io/docs/tutorials/auth-service-migration",children:"migrate"})," to the new ",(0,t.jsx)(n.code,{children:"coreServices.auth"}),", ",(0,t.jsx)(n.code,{children:"coreServices.httpAuth"}),", and ",(0,t.jsx)(n.code,{children:"coreServices.userInfo"})," services as needed instead."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Creates and validates tokens for use during service-to-service authentication."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class ServerTokenManager implements TokenManager \n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Implements:"})," ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-common.tokenmanager",children:"TokenManager"})]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Method"}),(0,t.jsx)(n.th,{children:"Modifiers"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/backend-common.servertokenmanager.authenticate",children:"authenticate(token)"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/backend-common.servertokenmanager.fromconfig",children:"fromConfig(config, options)"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"static"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/backend-common.servertokenmanager.gettoken",children:"getToken()"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/backend-common.servertokenmanager.noop",children:"noop()"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"static"})}),(0,t.jsx)(n.td,{children:"Creates a token manager that issues static fake tokens and never fails authentication. This can be useful for testing."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},675251:(e,n,r)=>{var t=r(667294),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,r){var t,s={},i=null,l=null;for(t in void 0!==r&&(i=""+r),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,t)&&!d.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:o,type:e,key:i,ref:l,props:s,_owner:a.current}}n.Fragment=s,n.jsx=i,n.jsxs=i},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>c});var t=r(667294);const o={},s=t.createContext(o);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);