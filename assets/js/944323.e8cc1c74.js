"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[944323],{209911:(e,t,r)=>{r.d(t,{n4:()=>i,Ne:()=>M,ci:()=>Z,CS:()=>y,wj:()=>l,nO:()=>s,iZ:()=>O,cH:()=>k});var n=r(667294),a=r(337806),o=r(863629);function l(){var e;const t=(0,o.Z)(),r=null==t||null===(e=t.data)||void 0===e?void 0:e.blogMetadata;if(!r)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return r}const c=n.createContext(null);function i({children:e,content:t,isBlogPostPage:r=!1}){const a=function({content:e,isBlogPostPage:t}){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,toc:e.toc,isBlogPostPage:t})),[e,t])}({content:t,isBlogPostPage:r});return n.createElement(c.Provider,{value:a},e)}function s(){const e=(0,n.useContext)(c);if(null===e)throw new a.i6("BlogPostProvider");return e}var u=r(270676),m=r(208241);function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f(e,t,r[t])}))}return e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}const b=e=>new Date(e).toISOString();function d(e){const t=e.map(v);return{author:1===t.length?t[0]:t}}function h(e,t,r){return e?{image:w({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${r}`})}:{}}function y(e){const{siteConfig:t}=(0,m.Z)(),{withBaseUrl:r}=(0,u.Cg)(),{metadata:{blogDescription:n,blogTitle:a,permalink:o}}=e,l=`${t.url}${o}`;return{"@context":"https://schema.org","@type":"Blog","@id":l,mainEntityOfPage:l,headline:a,description:n,blogPost:e.items.map((e=>function(e,t,r){const{assets:n,frontMatter:a,metadata:o}=e,{date:l,title:c,description:i,lastUpdatedAt:s}=o;var u;const m=null!==(u=n.image)&&void 0!==u?u:a.image;var f;const p=null!==(f=a.keywords)&&void 0!==f?f:[],y=`${t.url}${o.permalink}`,O=s?b(s):void 0;return g({"@type":"BlogPosting","@id":y,mainEntityOfPage:y,url:y,headline:c,name:c,description:i,datePublished:l},O?{dateModified:O}:{},d(o.authors),h(m,r,c),p?{keywords:p}:{})}(e.content,t,r)))}}function O(){const e=l(),{assets:t,metadata:r}=s(),{siteConfig:n}=(0,m.Z)(),{withBaseUrl:a}=(0,u.Cg)(),{date:o,title:c,description:i,frontMatter:f,lastUpdatedAt:y}=r;var O;const v=null!==(O=t.image)&&void 0!==O?O:f.image;var w;const E=null!==(w=f.keywords)&&void 0!==w?w:[],P=y?b(y):void 0,j=`${n.url}${r.permalink}`;return p(g({"@context":"https://schema.org","@type":"BlogPosting","@id":j,mainEntityOfPage:j,url:j,headline:c,name:c,description:i,datePublished:o},P?{dateModified:P}:{},d(r.authors),h(v,a,c),E?{keywords:E}:{}),{isPartOf:{"@type":"Blog","@id":`${n.url}${e.blogBasePath}`,name:e.blogTitle}})}function v(e){return g({"@type":"Person"},e.name?{name:e.name}:{},e.title?{description:e.title}:{},e.url?{url:e.url}:{},e.email?{email:e.email}:{},e.imageURL?{image:e.imageURL}:{})}function w({imageUrl:e,caption:t}){return{"@type":"ImageObject","@id":e,url:e,contentUrl:e,caption:t}}var E=r(616550),P=r(377657),j=r(283928),N=r(287275);function k(e){const{pathname:t}=(0,E.TH)();return(0,n.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,N.Mg)(e.permalink,t))}(e,t)))),[e,t])}function Z(e){const t=(0,j.vM)(e,(e=>`${new Date(e.date).getFullYear()}`)),r=Object.entries(t);return r.reverse(),r}function M({items:e,ulClassName:t,liClassName:r,linkClassName:a,linkActiveClassName:o}){return n.createElement("ul",{className:t},e.map((e=>n.createElement("li",{key:e.permalink,className:r},n.createElement(P.Z,{isNavLink:!0,to:e.permalink,className:a,activeClassName:o},e.title)))))}},593244:(e,t,r)=>{r.d(t,{Z:()=>D});var n=r(667294),a=r(490512),o=r(692317),l=r(424683),c=r(592210),i=r(209911),s=r(986016),u=r(524999);function m({year:e,yearGroupHeadingClassName:t,children:r}){return n.createElement("div",{role:"group"},n.createElement(u.Z,{as:"h3",className:t},e),r)}function f({items:e,yearGroupHeadingClassName:t,ListComponent:r}){if((0,s.L)().blog.sidebar.groupByYear){const a=(0,i.ci)(e);return n.createElement(n.Fragment,null,a.map((([e,a])=>n.createElement(m,{key:e,year:e,yearGroupHeadingClassName:t},n.createElement(r,{items:a})))))}return n.createElement(r,{items:e})}const g=(0,n.memo)(f),p="sidebar_re4s",b="sidebarItemTitle_pO2u",d="sidebarItemList_Yudw",h="sidebarItem__DBe",y="sidebarItemLink_mo7H",O="sidebarItemLinkActive_I1ZP",v="yearGroupHeading_rMGB",w=({items:e})=>n.createElement(i.Ne,{items:e,ulClassName:(0,a.Z)(d,"clean-list"),liClassName:h,linkClassName:y,linkActiveClassName:O});function E({sidebar:e}){const t=(0,i.cH)(e.items);return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,a.Z)(p,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,a.Z)(b,"margin-bottom--md")},e.title),n.createElement(g,{items:t,ListComponent:w,yearGroupHeadingClassName:v})))}const P=(0,n.memo)(E);var j=r(636847);const N={yearGroupHeading:"yearGroupHeading_QT03"},k=({items:e})=>n.createElement(i.Ne,{items:e,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"});function Z({sidebar:e}){const t=(0,i.cH)(e.items);return n.createElement(g,{items:t,ListComponent:k,yearGroupHeadingClassName:N.yearGroupHeading})}function M(e){return n.createElement(j.Zo,{component:Z,props:e})}const C=(0,n.memo)(M);function _({sidebar:e}){const t=(0,l.i)();return(null==e?void 0:e.items.length)?"mobile"===t?n.createElement(C,{sidebar:e}):n.createElement(P,{sidebar:e}):null}function S(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function D(e){const{sidebar:t,toc:r,children:l}=e,c=S(e,["sidebar","toc","children"]),i=t&&t.items.length>0;return n.createElement(o.Z,c,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(_,{sidebar:t}),n.createElement("main",{className:(0,a.Z)("col",{"col--7":i,"col--9 col--offset-1":!i})},l),r&&n.createElement("div",{className:"col col--2"},r))))}},483235:(e,t,r)=>{r.d(t,{Z:()=>ie});var n=r(667294),a=r(490512),o=r(209911);function l({children:e,className:t}){return n.createElement("article",{className:t},e)}var c=r(377657);const i={title:"title_f1Hy"};function s({className:e}){const{metadata:t,isBlogPostPage:r}=(0,o.nO)(),{permalink:l,title:s}=t,u=r?"h1":"h2";return n.createElement(u,{className:(0,a.Z)(i.title,e)},r?s:n.createElement(c.Z,{to:l},s))}var u=r(592210),m=r(740060),f=r(173762);const g={container:"container_mt6G"};function p({readingTime:e}){const t=function(){const{selectMessage:e}=(0,m.c)();return t=>{const r=Math.ceil(t);return e(r,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:r}))}}();return n.createElement(n.Fragment,null,t(e))}function b({date:e,formattedDate:t}){return n.createElement("time",{dateTime:e},t)}function d(){return n.createElement(n.Fragment,null," \xb7 ")}function h({className:e}){const{metadata:t}=(0,o.nO)(),{date:r,readingTime:l}=t,c=(0,f.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return n.createElement("div",{className:(0,a.Z)(g.container,"margin-vert--md",e)},n.createElement(b,{date:r,formattedDate:(i=r,c.format(new Date(i)))}),void 0!==l&&n.createElement(n.Fragment,null,n.createElement(d,null),n.createElement(p,{readingTime:l})));var i}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const O=function(e){return React.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){y(e,t,r[t])}))}return e}({viewBox:"0 0 256 209",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},e),React.createElement("path",{d:"M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45",fill:"#55acee"}))},v="githubSvg_Uu4N";function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function E(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}const P=function(e){return React.createElement("svg",E(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){w(e,t,r[t])}))}return e}({viewBox:"0 0 256 250",width:"1em",height:"1em"},e),{className:(0,a.Z)(e.className,v),xmlns:"http://www.w3.org/2000/svg",style:{"--dark":"#000","--light":"#fff"},preserveAspectRatio:"xMidYMid"}),React.createElement("path",{d:"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"}))},j="xSvg_y3PF";function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}const Z=function(e){return React.createElement("svg",k(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){N(e,t,r[t])}))}return e}({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 1200 1227"},e),{className:(0,a.Z)(e.className,j),style:{"--dark":"#000","--light":"#fff"}}),React.createElement("path",{d:"M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"}))};function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const C=function(e){return React.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){M(e,t,r[t])}))}return e}({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 169.61 200",width:"1em",height:"1em"},e),React.createElement("path",{d:"M140.44 178.38v-48.65h21.61V200H0v-70.27h21.61v48.65z",fill:"#bcbbbb"}),React.createElement("path",{d:"M124.24 140.54l4.32-16.22-86.97-17.83-3.78 17.83zM49.7 82.16L130.72 120l7.56-16.22-81.02-37.83zm22.68-40l68.06 57.3 11.35-13.51-68.6-57.3-11.35 13.51zM116.14 0l-14.59 10.81 53.48 71.89 14.58-10.81zM37.81 162.16h86.43v-16.21H37.81z",fill:"#f48024"}))};function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const S=function(e){return React.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){_(e,t,r[t])}))}return e}({width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 256"},e),React.createElement("path",{d:"M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453",fill:"#0A66C2"}))};function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const R=function(e){return React.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){D(e,t,r[t])}))}return e}({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e),React.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),React.createElement("path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}),React.createElement("path",{d:"M3.6 9h16.8"}),React.createElement("path",{d:"M3.6 15h16.8"}),React.createElement("path",{d:"M11.5 3a17 17 0 0 0 0 18"}),React.createElement("path",{d:"M12.5 3a17 17 0 0 1 0 18"}))},x={authorSocials:"authorSocials_rSDt",authorSocialLink:"authorSocialLink_owbf",authorSocialIcon:"authorSocialIcon_XYv3"},B={twitter:{Icon:O,label:"Twitter"},github:{Icon:P,label:"GitHub"},stackoverflow:{Icon:C,label:"Stack Overflow"},linkedin:{Icon:S,label:"LinkedIn"},x:{Icon:Z,label:"X"}};function I({platform:e,link:t}){const{Icon:r,label:o}=null!==(i=B[l=e])&&void 0!==i?i:{Icon:R,label:l};var l,i;return n.createElement(c.Z,{className:x.authorSocialLink,href:t,title:o},n.createElement(r,{className:(0,a.Z)(x.authorSocialLink)}))}function L({author:e}){var t;const r=Object.entries(null!==(t=e.socials)&&void 0!==t?t:{});return n.createElement("div",{className:x.authorSocials},r.map((([e,t])=>n.createElement(I,{key:e,platform:e,link:t}))))}var A=r(524999);const H={authorImage:"authorImage_XqGP","author-as-h1":"author-as-h1_n9oJ","author-as-h2":"author-as-h2_gXvM",authorDetails:"authorDetails_lV9A",authorName:"authorName_yefp",authorTitle:"authorTitle_nd0D",authorBlogPostCount:"authorBlogPostCount_iiJ5"};function T(e){return e.href?n.createElement(c.Z,e):n.createElement(n.Fragment,null,e.children)}function U({title:e}){return n.createElement("small",{className:H.authorTitle,title:e},e)}function $({name:e,as:t}){return t?n.createElement(A.Z,{as:t,className:H.authorName},e):n.createElement("span",{className:H.authorName},e)}function F({count:e}){return n.createElement("span",{className:(0,a.Z)(H.authorBlogPostCount)},e)}function G({as:e,author:t,className:r,count:o}){const{name:l,title:c,url:i,imageURL:s,email:u,page:m}=t,f=(null==m?void 0:m.permalink)||i||u&&`mailto:${u}`||void 0;return n.createElement("div",{className:(0,a.Z)("avatar margin-bottom--sm",r,H[`author-as-${e}`])},s&&n.createElement(T,{href:f,className:"avatar__photo-link"},n.createElement("img",{className:(0,a.Z)("avatar__photo",H.authorImage),src:s,alt:l})),(l||c)&&n.createElement("div",{className:(0,a.Z)("avatar__intro",H.authorDetails)},n.createElement("div",{className:"avatar__name"},l&&n.createElement(T,{href:f},n.createElement($,{name:l,as:e})),o&&n.createElement(F,{count:o})),!!c&&n.createElement(U,{title:c}),n.createElement(L,{author:t})))}const z={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function Y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Y(e,t,r[t])}))}return e}function X(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function J({className:e}){const{metadata:{authors:t},assets:r}=(0,o.nO)();if(0===t.length)return null;const l=t.every((({name:e})=>!e)),c=1===t.length;return n.createElement("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",l?z.imageOnlyAuthorRow:"row",e)},t.map(((e,t)=>{var o;return n.createElement("div",{className:(0,a.Z)(!l&&(c?"col col--12":"col col--6"),l?z.imageOnlyAuthorCol:z.authorCol),key:t},n.createElement(G,{author:X(V({},e),{imageURL:null!==(o=r.authorsImageUrls[t])&&void 0!==o?o:e.imageURL})}))})))}function q(){return n.createElement("header",null,n.createElement(s,null),n.createElement(h,null),n.createElement(J,null))}var Q=r(325750),W=r(69933);function K({children:e,className:t}){const{isBlogPostPage:r}=(0,o.nO)();return n.createElement("div",{id:r?Q.uR:void 0,className:(0,a.Z)("markdown",t)},n.createElement(W.Z,null,e))}var ee=r(565319),te=r(566820),re=r(927114);function ne(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ae(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function oe(){return n.createElement("b",null,n.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read more"))}function le(e){const{blogPostTitle:t}=e,r=ae(e,["blogPostTitle"]);return n.createElement(c.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){ne(e,t,r[t])}))}return e}({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},r),n.createElement(oe,null))}function ce(){const{metadata:e,isBlogPostPage:t}=(0,o.nO)(),{tags:r,title:l,editUrl:c,hasTruncateMarker:i,lastUpdatedBy:s,lastUpdatedAt:u}=e,m=!t&&i,f=r.length>0;if(!(f||m||c))return null;if(t){const e=!!(c||u||s);return n.createElement("footer",{className:"docusaurus-mt-lg"},f&&n.createElement("div",{className:(0,a.Z)("row","margin-top--sm",ee.k.blog.blogFooterEditMetaRow)},n.createElement("div",{className:"col"},n.createElement(re.Z,{tags:r}))),e&&n.createElement(te.Z,{className:(0,a.Z)("margin-top--sm",ee.k.blog.blogFooterEditMetaRow),editUrl:c,lastUpdatedAt:u,lastUpdatedBy:s}))}return n.createElement("footer",{className:"row docusaurus-mt-lg"},f&&n.createElement("div",{className:(0,a.Z)("col",{"col--9":m})},n.createElement(re.Z,{tags:r})),m&&n.createElement("div",{className:(0,a.Z)("col text--right",{"col--3":f})},n.createElement(le,{blogPostTitle:l,to:e.permalink})))}function ie({children:e,className:t}){const r=function(){const{isBlogPostPage:e}=(0,o.nO)();return e?void 0:"margin-bottom--xl"}();return n.createElement(l,{className:(0,a.Z)(r,t)},n.createElement(q,null),n.createElement(K,null,e),n.createElement(ce,null))}},740060:(e,t,r)=>{r.d(t,{c:()=>s});var n=r(667294),a=r(208241);const o=["zero","one","two","few","many","other"];function l(e){return o.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function s(){const e=i();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const a=r.select(t),o=r.pluralForms.indexOf(a);return n[Math.min(o,n.length-1)]}(r,t,e)}}}}]);