/*! For license information please see 39f8aae2.c4860ee9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[672554],{852836:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>l});var n=r(824246),o=r(511151);const s={id:"plugin-git-release-manager.internals.testhelpers.testhelpers.mock_release_version_tag_name_calver",title:"internals.testHelpers.testHelpers.MOCK_RELEASE_VERSION_TAG_NAME_CALVER",description:"API reference for internals.testHelpers.testHelpers.MOCK_RELEASE_VERSION_TAG_NAME_CALVER"},a=void 0,u={id:"reference/plugin-git-release-manager.internals.testhelpers.testhelpers.mock_release_version_tag_name_calver",title:"internals.testHelpers.testHelpers.MOCK_RELEASE_VERSION_TAG_NAME_CALVER",description:"API reference for internals.testHelpers.testHelpers.MOCK_RELEASE_VERSION_TAG_NAME_CALVER",source:"@site/../docs/reference/plugin-git-release-manager.internals.testhelpers.testhelpers.mock_release_version_tag_name_calver.md",sourceDirName:"reference",slug:"/reference/plugin-git-release-manager.internals.testhelpers.testhelpers.mock_release_version_tag_name_calver",permalink:"/docs/reference/plugin-git-release-manager.internals.testhelpers.testhelpers.mock_release_version_tag_name_calver",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-git-release-manager.internals.testhelpers.testhelpers.mock_release_version_tag_name_calver.md",tags:[],version:"current",frontMatter:{id:"plugin-git-release-manager.internals.testhelpers.testhelpers.mock_release_version_tag_name_calver",title:"internals.testHelpers.testHelpers.MOCK_RELEASE_VERSION_TAG_NAME_CALVER",description:"API reference for internals.testHelpers.testHelpers.MOCK_RELEASE_VERSION_TAG_NAME_CALVER"}},c={},l=[];function i(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-git-release-manager",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-git-release-manager"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-git-release-manager.internals",children:(0,n.jsx)(t.code,{children:"internals"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-git-release-manager.internals.testhelpers",children:(0,n.jsx)(t.code,{children:"testHelpers"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-git-release-manager.internals.testhelpers.testhelpers",children:(0,n.jsx)(t.code,{children:"testHelpers"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-git-release-manager.internals.testhelpers.testhelpers.mock_release_version_tag_name_calver",children:(0,n.jsx)(t.code,{children:"MOCK\\_RELEASE\\_VERSION\\_TAG\\_NAME\\_CALVER"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"MOCK_RELEASE_VERSION_TAG_NAME_CALVER: string\n"})})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(i,e)})):i(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,s={},l=null,i=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(i=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:i,props:s,_owner:u.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),i=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),_=Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,h={};function m(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||d}function g(){}function E(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var v=E.prototype=new g;v.constructor=E,y(v,m.prototype),v.isPureReactComponent=!0;var b=Array.isArray,S=Object.prototype.hasOwnProperty,R={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,n){var o,s={},a=null,u=null;if(null!=t)for(o in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,o)&&!k.hasOwnProperty(o)&&(s[o]=t[o]);var c=arguments.length-2;if(1===c)s.children=n;else if(1<c){for(var l=Array(c),i=0;i<c;i++)l[i]=arguments[i+2];s.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===s[o]&&(s[o]=c[o]);return{$$typeof:r,type:e,key:a,ref:u,props:s,_owner:R.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var j=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,o,s,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return a=a(c=e),e=""===s?"."+O(c,0):s,b(a)?(o="",null!=e&&(o=e.replace(j,"$&/")+"/"),x(a,t,o,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(j,"$&/")+"/")+e)),t.push(a)),1;if(c=0,s=""===s?".":s+":",b(e))for(var l=0;l<e.length;l++){var i=s+O(u=e[l],l);c+=x(u,t,o,i,a)}else if(i=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=_&&e[_]||e["@@iterator"])?e:null}(e),"function"==typeof i)for(e=i.call(e),l=0;!(u=e.next()).done;)c+=x(u=u.value,t,o,i=s+O(u,l++),a);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function w(e,t,r){if(null==e)return e;var n=[],o=0;return x(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function N(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},I={transition:null},L={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:I,ReactCurrentOwner:R};t.Children={map:w,forEach:function(e,t,r){w(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return w(e,(function(){t++})),t},toArray:function(e){return w(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=a,t.PureComponent=E,t.StrictMode=s,t.Suspense=i,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),s=e.key,a=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,u=R.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)S.call(t,l)&&!k.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){c=Array(l);for(var i=0;i<l;i++)c[i]=arguments[i+2];o.children=c}return{$$typeof:r,type:e.type,key:s,ref:a,props:o,_owner:u}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=A,t.createFactory=function(e){var t=A.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,r){return $.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,r){return $.current.useReducer(e,t,r)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return $.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>u,ah:()=>s});var n=r(667294);const o=n.createContext({});function s(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function u({components:e,children:t,disableParentContext:r}){let u;return u=r?"function"==typeof e?e({}):e||a:s(e),n.createElement(o.Provider,{value:u},t)}}}]);