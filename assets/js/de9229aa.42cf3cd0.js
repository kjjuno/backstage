/*! For license information please see de9229aa.42cf3cd0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[685802],{216063:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=i(785893),o=i(511151);const r={id:"concepts",title:"Concepts",description:"A list of important permission framework concepts"},t=void 0,a={id:"permissions/concepts",title:"Concepts",description:"A list of important permission framework concepts",source:"@site/../docs/permissions/concepts.md",sourceDirName:"permissions",slug:"/permissions/concepts",permalink:"/docs/permissions/concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/permissions/concepts.md",tags:[],version:"current",frontMatter:{id:"concepts",title:"Concepts",description:"A list of important permission framework concepts"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/permissions/overview"},next:{title:"Getting Started",permalink:"/docs/permissions/getting-started"}},c={},l=[{value:"Permission",id:"permission",level:3},{value:"Policy",id:"policy",level:3},{value:"Policy decision versus enforcement",id:"policy-decision-versus-enforcement",level:3},{value:"Resources and rules",id:"resources-and-rules",level:3},{value:"Conditional decisions",id:"conditional-decisions",level:3}];function d(e){const s={a:"a",h3:"h3",p:"p",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h3,{id:"permission",children:"Permission"}),"\n",(0,n.jsxs)(s.p,{children:["Any action that a user performs within Backstage may be represented as a permission. More complex actions, like executing a ",(0,n.jsx)(s.a,{href:"/docs/references/glossary#software-templates",children:"software template"}),", may require ",(0,n.jsx)(s.a,{href:"/docs/references/glossary#authorization",children:"authorization"})," for multiple permissions throughout the flow. Permissions are identified by a unique name and optionally include a set of attributes that describe the corresponding action. ",(0,n.jsx)(s.a,{href:"/docs/references/glossary#plugin",children:"Plugins"})," are responsible for defining and exposing the permissions they enforce as well as enforcing restrictions from the permission framework."]}),"\n",(0,n.jsx)(s.h3,{id:"policy",children:"Policy"}),"\n",(0,n.jsxs)(s.p,{children:["User ",(0,n.jsx)(s.a,{href:"/docs/references/glossary#permission-permission-plugin",children:"permissions"})," are authorized by a central, user-defined permission policy. At a high level, a policy is a function that receives a Backstage user and permission, and returns a decision to allow or deny. Policies are expressed as code, which decouples the framework from any particular ",(0,n.jsx)(s.a,{href:"/docs/references/glossary#authorization",children:"authorization"})," model, like role-based access control (RBAC) or attribute-based access control (ABAC)."]}),"\n",(0,n.jsx)(s.h3,{id:"policy-decision-versus-enforcement",children:"Policy decision versus enforcement"}),"\n",(0,n.jsx)(s.p,{children:"Two important responsibilities of any authorization system are to decide if a user can do something, and to enforce that decision. In the Backstage permission framework, policies are responsible for decisions and plugins (typically backends) are responsible for enforcing them."}),"\n",(0,n.jsx)(s.h3,{id:"resources-and-rules",children:"Resources and rules"}),"\n",(0,n.jsxs)(s.p,{children:["In many cases, a permission represents a user's interaction with another object. This object likely has information that policy authors can use to define more granular access. The permission framework introduces two abstractions to account for this: ",(0,n.jsx)(s.a,{href:"/docs/references/glossary#resource-permission-plugin",children:"resources"})," and ",(0,n.jsx)(s.a,{href:"/docs/references/glossary#rule-permission-plugin",children:"rules"}),". For example, the catalog plugin defines a resource for catalog entities and a rule to check if an entity has a given annotation."]}),"\n",(0,n.jsx)(s.h3,{id:"conditional-decisions",children:"Conditional decisions"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/references/glossary#rule-permission-plugin",children:"Rules"})," need additional data before they can be used in a decision. Once a ",(0,n.jsx)(s.a,{href:"/docs/references/glossary#rule-permission-plugin",children:"rule"})," is bound to relevant information it forms a ",(0,n.jsx)(s.a,{href:"/docs/references/glossary#condition-permission-plugin",children:"condition"}),". Conditional decisions tell the ",(0,n.jsx)(s.a,{href:"#permission",children:"permission framework"})," to delegate evaluation to the ",(0,n.jsx)(s.a,{href:"#plugin",children:"plugin"})," that owns the corresponding ",(0,n.jsx)(s.a,{href:"#resource-permission-plugin",children:"resource"}),". Permission requests that result in a conditional decision are allowed if all of the provided conditions evaluate to be true."]}),"\n",(0,n.jsx)(s.p,{children:'A good example would be the catalog plugin\'s "has annotation" rule which needs to know what annotation to look for on a given entity. The permission framework would respond to a request by the catalog plugin in this case with a condition decision. The catalog plugin would then need to correctly filter for entities matching the "has annotations" condition. This conditional behavior avoids coupling between policies and resource schemas, and allows plugins to evaluate complex rules in an efficient way. For example, a plugin may convert a conditional decision to a database query instead of loading and filtering objects in memory.'})]})}function p(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},675251:(e,s,i)=>{var n=i(667294),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,i){var n,r={},l=null,d=null;for(n in void 0!==i&&(l=""+i),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(d=s.ref),s)t.call(s,n)&&!c.hasOwnProperty(n)&&(r[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===r[n]&&(r[n]=s[n]);return{$$typeof:o,type:e,key:l,ref:d,props:r,_owner:a.current}}s.Fragment=r,s.jsx=l,s.jsxs=l},785893:(e,s,i)=>{e.exports=i(675251)},511151:(e,s,i)=>{i.d(s,{Z:()=>a,a:()=>t});var n=i(667294);const o={},r=n.createContext(o);function t(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);