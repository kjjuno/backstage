/*! For license information please see 35bc7f9c.5bed5631.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[670141],{237088:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>i});var a=n(785893),t=n(511151);const c={id:"backend-plugin-api.createbackendfeatureloaderoptions.loader",title:"CreateBackendFeatureLoaderOptions.loader()",description:"API reference for CreateBackendFeatureLoaderOptions.loader()"},d=void 0,o={id:"reference/backend-plugin-api.createbackendfeatureloaderoptions.loader",title:"CreateBackendFeatureLoaderOptions.loader()",description:"API reference for CreateBackendFeatureLoaderOptions.loader()",source:"@site/../docs/reference/backend-plugin-api.createbackendfeatureloaderoptions.loader.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.createbackendfeatureloaderoptions.loader",permalink:"/docs/reference/backend-plugin-api.createbackendfeatureloaderoptions.loader",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-api.createbackendfeatureloaderoptions.loader.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.createbackendfeatureloaderoptions.loader",title:"CreateBackendFeatureLoaderOptions.loader()",description:"API reference for CreateBackendFeatureLoaderOptions.loader()"}},s={},i=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,a.jsx)(r.a,{href:"/docs/reference/backend-plugin-api",children:(0,a.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,a.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.createbackendfeatureloaderoptions",children:(0,a.jsx)(r.code,{children:"CreateBackendFeatureLoaderOptions"})})," > ",(0,a.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.createbackendfeatureloaderoptions.loader",children:(0,a.jsx)(r.code,{children:"loader"})})]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-typescript",children:"loader(deps: TDeps): Iterable<BackendFeature | Promise<{\n        default: BackendFeature;\n    }>> | Promise<Iterable<BackendFeature | Promise<{\n        default: BackendFeature;\n    }>>> | AsyncIterable<BackendFeature | {\n        default: BackendFeature;\n    }>;\n"})}),"\n",(0,a.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Parameter"}),(0,a.jsx)(r.th,{children:"Type"}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsx)(r.tbody,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"deps"}),(0,a.jsx)(r.td,{children:"TDeps"}),(0,a.jsx)(r.td,{})]})})]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(r.p,{children:["Iterable<",(0,a.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.backendfeature",children:"BackendFeature"})," | Promise<{ default: ",(0,a.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.backendfeature",children:"BackendFeature"}),"; }>> | Promise<Iterable<",(0,a.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.backendfeature",children:"BackendFeature"})," | Promise<{ default: ",(0,a.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.backendfeature",children:"BackendFeature"}),"; }>>> | AsyncIterable<",(0,a.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.backendfeature",children:"BackendFeature"})," | { default: ",(0,a.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.backendfeature",children:"BackendFeature"}),"; }>"]})]})}function p(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},675251:(e,r,n)=>{var a=n(667294),t=Symbol.for("react.element"),c=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,n){var a,c={},i=null,l=null;for(a in void 0!==n&&(i=""+n),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(l=r.ref),r)d.call(r,a)&&!s.hasOwnProperty(a)&&(c[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps)void 0===c[a]&&(c[a]=r[a]);return{$$typeof:t,type:e,key:i,ref:l,props:c,_owner:o.current}}r.Fragment=c,r.jsx=i,r.jsxs=i},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>d});var a=n(667294);const t={},c=a.createContext(t);function d(e){const r=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),a.createElement(c.Provider,{value:r},e.children)}}}]);