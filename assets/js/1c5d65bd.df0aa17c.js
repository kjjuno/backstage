/*! For license information please see 1c5d65bd.df0aa17c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[41657],{919533:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var r=t(785893),s=t(511151);const c={id:"backend-test-utils.mockcredentials.service",title:"mockCredentials.service",description:"API reference for mockCredentials.service"},i=void 0,d={id:"reference/backend-test-utils.mockcredentials.service",title:"mockCredentials.service",description:"API reference for mockCredentials.service",source:"@site/../docs/reference/backend-test-utils.mockcredentials.service.md",sourceDirName:"reference",slug:"/reference/backend-test-utils.mockcredentials.service",permalink:"/docs/reference/backend-test-utils.mockcredentials.service",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-test-utils.mockcredentials.service.md",tags:[],version:"current",frontMatter:{id:"backend-test-utils.mockcredentials.service",title:"mockCredentials.service",description:"API reference for mockCredentials.service"}},o={},a=[{value:"Functions",id:"functions",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-test-utils",children:(0,r.jsx)(n.code,{children:"@backstage/backend-test-utils"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-test-utils.mockcredentials",children:(0,r.jsx)(n.code,{children:"mockCredentials"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-test-utils.mockcredentials.service",children:(0,r.jsx)(n.code,{children:"service"})})]}),"\n",(0,r.jsx)(n.p,{children:"Utilities related to service credentials."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"namespace service \n"})}),"\n",(0,r.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/backend-test-utils.mockcredentials.service.header",children:"header(options)"})}),(0,r.jsx)(n.td,{children:"Returns an authorization header with a mocked service token. The provided options will be encoded into the token and forwarded to the credentials object when authenticated by the mock auth service."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/backend-test-utils.mockcredentials.service.invalidheader",children:"invalidHeader()"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/backend-test-utils.mockcredentials.service.invalidtoken",children:"invalidToken()"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/backend-test-utils.mockcredentials.service.token",children:"token(options)"})}),(0,r.jsx)(n.td,{children:"Creates a mocked service token. The provided options will be encoded into the token and forwarded to the credentials object when authenticated by the mock auth service."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type Alias"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/backend-test-utils.mockcredentials.service.tokenoptions",children:"TokenOptions"})}),(0,r.jsx)(n.td,{children:"Options for the creation of mock service tokens."})]})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},675251:(e,n,t)=>{var r=t(667294),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var r,c={},a=null,l=null;for(r in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,r)&&!o.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:s,type:e,key:a,ref:l,props:c,_owner:d.current}}n.Fragment=c,n.jsx=a,n.jsxs=a},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>i});var r=t(667294);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);