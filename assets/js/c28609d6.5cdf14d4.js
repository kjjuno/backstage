/*! For license information please see c28609d6.5cdf14d4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[98135],{59579:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>c,metadata:()=>o,toc:()=>s});var t=n(785893),i=n(511151);const c={id:"plugin-scaffolder-backend-module-gitlab.createtriggergitlabpipelineaction",title:"createTriggerGitlabPipelineAction",description:"API reference for createTriggerGitlabPipelineAction"},a=void 0,o={id:"reference/plugin-scaffolder-backend-module-gitlab.createtriggergitlabpipelineaction",title:"createTriggerGitlabPipelineAction",description:"API reference for createTriggerGitlabPipelineAction",source:"@site/../docs/reference/plugin-scaffolder-backend-module-gitlab.createtriggergitlabpipelineaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-gitlab.createtriggergitlabpipelineaction",permalink:"/docs/reference/plugin-scaffolder-backend-module-gitlab.createtriggergitlabpipelineaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend-module-gitlab.createtriggergitlabpipelineaction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend-module-gitlab.createtriggergitlabpipelineaction",title:"createTriggerGitlabPipelineAction",description:"API reference for createTriggerGitlabPipelineAction"}},l={},s=[];function d(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend-module-gitlab",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-scaffolder-backend-module-gitlab"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend-module-gitlab.createtriggergitlabpipelineaction",children:(0,t.jsx)(r.code,{children:"createTriggerGitlabPipelineAction"})})]}),"\n",(0,t.jsxs)(r.p,{children:["Creates a ",(0,t.jsx)(r.code,{children:"gitlab:pipeline:trigger"})," Scaffolder action."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:'createTriggerGitlabPipelineAction: (options: {\n    integrations: ScmIntegrationRegistry;\n}) => import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    branch: string;\n    repoUrl: string;\n    projectId: number;\n    tokenDescription: string;\n    token?: string | undefined;\n    variables?: Record<string, string> | undefined;\n}, {\n    pipelineUrl: string;\n}>\n'})})]})}function g(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},675251:(e,r,n)=>{var t=n(667294),i=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,n){var t,c={},s=null,d=null;for(t in void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(d=r.ref),r)a.call(r,t)&&!l.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:i,type:e,key:s,ref:d,props:c,_owner:o.current}}r.Fragment=c,r.jsx=s,r.jsxs=s},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>a});var t=n(667294);const i={},c=t.createContext(i);function a(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);