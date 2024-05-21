/*! For license information please see edf0ce42.a5f3fa5c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[776475],{414317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>s});var r=n(824246),o=n(511151);const c={id:"plugin-catalog-common.catalogentitydocument.namespace",title:"CatalogEntityDocument.namespace",description:"API reference for CatalogEntityDocument.namespace"},a=void 0,u={id:"reference/plugin-catalog-common.catalogentitydocument.namespace",title:"CatalogEntityDocument.namespace",description:"API reference for CatalogEntityDocument.namespace",source:"@site/../docs/reference/plugin-catalog-common.catalogentitydocument.namespace.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-common.catalogentitydocument.namespace",permalink:"/docs/reference/plugin-catalog-common.catalogentitydocument.namespace",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-common.catalogentitydocument.namespace.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-common.catalogentitydocument.namespace",title:"CatalogEntityDocument.namespace",description:"API reference for CatalogEntityDocument.namespace"}},i={},s=[];function l(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-common",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog-common"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-common.catalogentitydocument",children:(0,r.jsx)(t.code,{children:"CatalogEntityDocument"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-common.catalogentitydocument.namespace",children:(0,r.jsx)(t.code,{children:"namespace"})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"namespace: string;\n"})})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,c={},s=null,l=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,r)&&!i.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:l,props:c,_owner:u.current}}t.Fragment=c,t.jsx=s,t.jsxs=s},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),i=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,g={};function h(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}function _(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=h.prototype;var b=v.prototype=new _;b.constructor=v,y(b,h.prototype),b.isPureReactComponent=!0;var S=Array.isArray,E=Object.prototype.hasOwnProperty,k={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var o,c={},a=null,u=null;if(null!=t)for(o in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)E.call(t,o)&&!j.hasOwnProperty(o)&&(c[o]=t[o]);var i=arguments.length-2;if(1===i)c.children=r;else if(1<i){for(var s=Array(i),l=0;l<i;l++)s[l]=arguments[l+2];c.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===c[o]&&(c[o]=i[o]);return{$$typeof:n,type:e,key:a,ref:u,props:c,_owner:k.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var w=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,c,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var i=!1;if(null===e)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case r:i=!0}}if(i)return a=a(i=e),e=""===c?"."+R(i,0):c,S(a)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),$(a,t,o,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(w,"$&/")+"/")+e)),t.push(a)),1;if(i=0,c=""===c?".":c+":",S(e))for(var s=0;s<e.length;s++){var l=c+R(u=e[s],s);i+=$(u,t,o,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(u=e.next()).done;)i+=$(u=u.value,t,o,l=c+R(u,s++),a);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function O(e,t,n){if(null==e)return e;var r=[],o=0;return $(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},I={transition:null},T={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=h,t.Fragment=o,t.Profiler=a,t.PureComponent=v,t.StrictMode=c,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),c=e.key,a=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,u=k.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)E.call(t,s)&&!j.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==i?i[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){i=Array(s);for(var l=0;l<s;l++)i[l]=arguments[l+2];o.children=i}return{$$typeof:n,type:e.type,key:c,ref:a,props:o,_owner:u}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return D.current.useCallback(e,t)},t.useContext=function(e){return D.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return D.current.useDeferredValue(e)},t.useEffect=function(e,t){return D.current.useEffect(e,t)},t.useId=function(){return D.current.useId()},t.useImperativeHandle=function(e,t,n){return D.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return D.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return D.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return D.current.useMemo(e,t)},t.useReducer=function(e,t,n){return D.current.useReducer(e,t,n)},t.useRef=function(e){return D.current.useRef(e)},t.useState=function(e){return D.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return D.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return D.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>u,a:()=>a});var r=n(667294);const o={},c=r.createContext(o);function a(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);