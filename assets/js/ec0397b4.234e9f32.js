/*! For license information please see ec0397b4.234e9f32.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[382884],{871912:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var t=n(785893),o=n(511151);const i={id:"package-role-migration",title:"Package Role Migration",description:"Guide for how to migrate packages to use the new role utility"},s=void 0,r={id:"tutorials/package-role-migration",title:"Package Role Migration",description:"Guide for how to migrate packages to use the new role utility",source:"@site/../docs/tutorials/package-role-migration.md",sourceDirName:"tutorials",slug:"/tutorials/package-role-migration",permalink:"/docs/tutorials/package-role-migration",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/tutorials/package-role-migration.md",tags:[],version:"current",frontMatter:{id:"package-role-migration",title:"Package Role Migration",description:"Guide for how to migrate packages to use the new role utility"},sidebar:"docs",previous:{title:"Migrating to React 18",permalink:"/docs/tutorials/react18-migration"},next:{title:"Migrating away from @backstage/core",permalink:"/docs/tutorials/migrating-away-from-core"}},l={},c=[{value:"Migration",id:"migration",level:2},{value:"TL;DR, Step 1-4:",id:"tldr-step-1-4",level:3},{value:"Step 1 - Add package roles",id:"step-1---add-package-roles",level:3},{value:"Step 2 - Migrate package scripts",id:"step-2---migrate-package-scripts",level:3},{value:"Step 3 - Migrate package ESLint configurations",id:"step-3---migrate-package-eslint-configurations",level:3},{value:"Step 4 - Use <code>backstage-cli repo</code>",id:"step-4---use-backstage-cli-repo",level:3},{value:"FAQ",id:"faq",level:2},{value:"Why were package roles introduced?",id:"why-were-package-roles-introduced",level:3},{value:"Do I have to migrate to using package roles?",id:"do-i-have-to-migrate-to-using-package-roles",level:3},{value:"I have a package where none of the existing roles apply",id:"i-have-a-package-where-none-of-the-existing-roles-apply",level:3},{value:"Should I include the role in published packages?",id:"should-i-include-the-role-in-published-packages",level:3}];function d(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["The Backstage CLI has introduced the concept of package roles, whose purpose is to\nenable more powerful tooling, optimizations, and leaner package configuration. More background and\ninformation about the change can be found in the ",(0,t.jsx)(a.a,{href:"https://github.com/backstage/backstage/issues/8729",children:"original RFC"})," and the ",(0,t.jsx)(a.a,{href:"#faq",children:"FAQ"})," on this page."]}),"\n",(0,t.jsxs)(a.p,{children:["Package roles are implemented through a well-known ",(0,t.jsx)(a.code,{children:'"backstage"."role"'})," field in the\n",(0,t.jsx)(a.code,{children:"package.json"})," of each package. There are a handful of roles defined so far, and it\nis not possible to use values outside the ",(0,t.jsx)(a.a,{href:"/docs/tooling/cli/build-system#package-roles",children:"set of predefined roles"}),"."]}),"\n",(0,t.jsxs)(a.p,{children:["With roles in place in all packages, the Backstage CLI is able to automatically\ndetermine how to handle each package. For example, the different build commands\nhave been replaced by a single one that instead knows how to build each role.\nThe test and lint configurations are also selected automatically based on the role, and\na new category of ",(0,t.jsx)(a.code,{children:"repo"})," commands have been introduced in the CLI, which are able\nto operate across all packages simultaneously."]}),"\n",(0,t.jsx)(a.p,{children:"Package roles have been used in the Backstage main repository for a while, and\nwe now recommend that all Backstage projects are migrated to use package roles."}),"\n",(0,t.jsx)(a.h2,{id:"migration",children:"Migration"}),"\n",(0,t.jsxs)(a.p,{children:["In order to make the migration as smooth as possible ",(0,t.jsx)(a.code,{children:"@backstage/cli"})," provides\na number of migration utilities. Using these in combination with some manual review\nand optional steps should be all you need to migrate to package roles in most projects."]}),"\n",(0,t.jsxs)(a.p,{children:["Before you begin the migration, make sure you have updated to the most recent version of\nthe ",(0,t.jsx)(a.code,{children:"@backstage/cli"}),"."]}),"\n",(0,t.jsx)(a.h3,{id:"tldr-step-1-4",children:"TL;DR, Step 1-4:"}),"\n",(0,t.jsx)(a.p,{children:"This is a shorter version of all of the steps below, in case you're in a hurry."}),"\n",(0,t.jsx)(a.p,{children:"Run the following commands:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sh",children:"yarn backstage-cli migrate package-roles\nyarn backstage-cli migrate package-scripts\nyarn backstage-cli migrate package-lint-configs\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Have a look at the new commands under ",(0,t.jsx)(a.code,{children:"yarn backstage-cli repo"}),", and switch to them wherever you can. They tend to be much faster compared to their ",(0,t.jsx)(a.code,{children:"lerna"})," equivalents."]}),"\n",(0,t.jsx)(a.h3,{id:"step-1---add-package-roles",children:"Step 1 - Add package roles"}),"\n",(0,t.jsxs)(a.p,{children:["The first step is to add the ",(0,t.jsx)(a.code,{children:'"backstage"."role"'})," field to each package. This can of course be done manually, but the following command will attempt to automatically detect the role of each package in your project:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sh",children:"yarn backstage-cli migrate package-roles\n"})}),"\n",(0,t.jsxs)(a.p,{children:["The automatic detection is not perfect, so it is recommended to manually review the\nroles that were assigned to each package.\nYou can use the ",(0,t.jsx)(a.a,{href:"/docs/tooling/cli/build-system#package-roles",children:"package role definitions"})," as a reference."]}),"\n",(0,t.jsx)(a.h3,{id:"step-2---migrate-package-scripts",children:"Step 2 - Migrate package scripts"}),"\n",(0,t.jsxs)(a.p,{children:["The migration to package roles also introduces a new ",(0,t.jsx)(a.code,{children:"package"})," command category to the CLI.\nEach command under the ",(0,t.jsx)(a.code,{children:"package"})," category is designed to be mapped directly to an entry in ",(0,t.jsx)(a.code,{children:'"scripts"'})," in ",(0,t.jsx)(a.code,{children:"package.json"}),". These commands replace the existing commands like ",(0,t.jsx)(a.code,{children:"build"}),", ",(0,t.jsx)(a.code,{children:"app:build"}),", ",(0,t.jsx)(a.code,{children:"lint"}),", and ",(0,t.jsx)(a.code,{children:"test"}),". They look something like this:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n  "scripts": {\n    "start": "backstage-cli package start",\n    "build": "backstage-cli package build",\n    "lint": "backstage-cli package lint",\n    ...\n  }\n}\n'})}),"\n",(0,t.jsx)(a.p,{children:"Every package role has a fixed set of recommended scripts. It is strongly recommended that you use these scripts, as it allows for optimizations in other parts of the CLI. You can migrate to using all of these scripts by running the following command:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sh",children:"yarn backstage-cli migrate package-scripts\n"})}),"\n",(0,t.jsx)(a.p,{children:"The migration command also carries over any existing flags that were being passed in the old scripts."}),"\n",(0,t.jsxs)(a.p,{children:["If you in the end do not want to use this exact script setup, it is still recommended to migrate to using the ",(0,t.jsx)(a.code,{children:"package"})," commands, as the top-level commands will be deprecated and removed. If you don't want to use package roles either, you can pass an explicit role to some of the package commands, for example ",(0,t.jsx)(a.code,{children:"yarn backstage-cli package build --role web-library"}),"."]}),"\n",(0,t.jsx)(a.h3,{id:"step-3---migrate-package-eslint-configurations",children:"Step 3 - Migrate package ESLint configurations"}),"\n",(0,t.jsxs)(a.p,{children:["An area that has been simplified as part of the move to package roles is the ESLint configuration. Rather than having each package select which configuration they want (and getting it wrong), they now use a shared configuration factory that utilizes the package role. You can read more about the new configuration setup in the ",(0,t.jsx)(a.a,{href:"/docs/tooling/cli/build-system#linting",children:"build system documentation"}),"."]}),"\n",(0,t.jsx)(a.p,{children:"To migrate the ESLint configuration of all packages in your project, run the following command:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sh",children:"yarn backstage-cli migrate package-lint-configs\n"})}),"\n",(0,t.jsxs)(a.p,{children:["This will migrate all existing ",(0,t.jsx)(a.code,{children:".eslintrc.js"})," that extend the old configuration from ",(0,t.jsx)(a.code,{children:"@backstage/cli"}),", as well as carry over any additional configuration."]}),"\n",(0,t.jsxs)(a.h3,{id:"step-4---use-backstage-cli-repo",children:["Step 4 - Use ",(0,t.jsx)(a.code,{children:"backstage-cli repo"})]}),"\n",(0,t.jsxs)(a.p,{children:["The Backstage CLI recently introduced a new ",(0,t.jsx)(a.code,{children:"repo"})," command category, which houses commands that operate on an entire monorepo at once. These commands work particularly well once packages have been migrated to use roles, as that allows for some very effective optimizations. It is typically much faster to use these commands compared to using tools like ",(0,t.jsx)(a.code,{children:"lerna"}),", as they're able to avoid the overhead of calling package scripts through ",(0,t.jsx)(a.code,{children:"yarn"})," and can operate on multiple packages at once. You can read more about the ",(0,t.jsx)(a.code,{children:"repo"})," command in the ",(0,t.jsx)(a.a,{href:"/docs/tooling/cli/commands#repo-build",children:"CLI command documentation"}),"."]}),"\n",(0,t.jsxs)(a.p,{children:["The way to execute this step of the migration is not as well defined as the previous steps, as it depends on what your development and CI/CD setup looks like. Look for the following patterns to replace in your root ",(0,t.jsx)(a.code,{children:"package.json"})," as well as CI/CD setup:"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Commands that lint the entire repo should be replaced with ",(0,t.jsx)(a.code,{children:"yarn backstage-cli repo lint"})," along with a ",(0,t.jsx)(a.code,{children:"--since"})," flag if needed. For example this:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sh",children:"lerna run lint --since origin/master --\n"})}),"\n",(0,t.jsx)(a.p,{children:"would be replaced by the following:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sh",children:"backstage-cli repo lint --since origin/master\n"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["In places where the entire repo is being built, use ",(0,t.jsx)(a.code,{children:"yarn backstage-cli repo build"}),", which also supports the ",(0,t.jsx)(a.code,{children:"--since"})," flag. The migration here is a bit more nuanced as it depends on why you are building all packages."]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["If you are building all packages to ",(0,t.jsx)(a.strong,{children:"verify"})," that you are able to build them, you most likely want ",(0,t.jsx)(a.code,{children:"backstage-cli repo build --all"}),". The ",(0,t.jsx)(a.code,{children:"--all"})," flag signals that bundled packages like ",(0,t.jsx)(a.code,{children:"packages/app"})," and ",(0,t.jsx)(a.code,{children:"packages/backend"})," should be built as well. Pair this up with a ",(0,t.jsx)(a.code,{children:"--since"})," flag in CI to avoid needing to build all packages."]}),"\n",(0,t.jsxs)(a.li,{children:["If you are building all packages to ",(0,t.jsx)(a.strong,{children:"publish"})," them, then ",(0,t.jsx)(a.code,{children:"backstage-cli repo build"})," is enough, as it builds all published packages."]}),"\n",(0,t.jsxs)(a.li,{children:["If you are building all packages to ",(0,t.jsx)(a.strong,{children:"deploy"})," them, you likely don't want to use the ",(0,t.jsx)(a.code,{children:"repo"})," command at all, simply call ",(0,t.jsx)(a.code,{children:"yarn build"})," in the packages you want to deploy instead. For example, if you are deploying the backend with a docker host build, it's enough to call ",(0,t.jsx)(a.code,{children:"yarn build"})," inside ",(0,t.jsx)(a.code,{children:"packages/backend"}),". In a standard ",(0,t.jsx)(a.code,{children:"@backstage/create-app"})," there is also a shorthand for building the backend from the root, ",(0,t.jsx)(a.code,{children:"yarn build:backend"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"faq",children:"FAQ"}),"\n",(0,t.jsx)(a.h3,{id:"why-were-package-roles-introduced",children:"Why were package roles introduced?"}),"\n",(0,t.jsxs)(a.p,{children:["To keep configuration lean, allow for more utilities and tooling, and to enable optimizations in the build system. You can read more about the reasoning in the ",(0,t.jsx)(a.a,{href:"https://github.com/backstage/backstage/issues/8729",children:"original RFC"}),"."]}),"\n",(0,t.jsx)(a.h3,{id:"do-i-have-to-migrate-to-using-package-roles",children:"Do I have to migrate to using package roles?"}),"\n",(0,t.jsx)(a.p,{children:"Short answer - yes."}),"\n",(0,t.jsxs)(a.p,{children:["Longer answer - mostly, you can get around having to declare the role of your packages by instead explicitly declaring the role in the command invocation or configuration. For example, the ",(0,t.jsx)(a.code,{children:"app:build"})," command will go away, but you can replace it with ",(0,t.jsx)(a.code,{children:"package build --role frontend"})," if you don't want to declare the role in ",(0,t.jsx)(a.code,{children:"package.json"})," . It is however strongly recommended to declare the package roles."]}),"\n",(0,t.jsx)(a.h3,{id:"i-have-a-package-where-none-of-the-existing-roles-apply",children:"I have a package where none of the existing roles apply"}),"\n",(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"web-library"}),", ",(0,t.jsx)(a.code,{children:"node-library"})," and ",(0,t.jsx)(a.code,{children:"common-library"})," roles are general purpose roles that should cover most use cases. If you feel like none of those roles work for you, then please open an issue in the ",(0,t.jsx)(a.a,{href:"https://github.com/backstage/backstage",children:"Backstage repo"})," and suggest the addition of a new role."]}),"\n",(0,t.jsx)(a.h3,{id:"should-i-include-the-role-in-published-packages",children:"Should I include the role in published packages?"}),"\n",(0,t.jsx)(a.p,{children:"Yes. While there is nothing that will consume the role at the moment, it is likely that future tooling will be able to provide a better experience for users when published packages include the role."})]})}function h(e={}){const{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},675251:(e,a,n)=>{var t=n(667294),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,n){var t,i={},c=null,d=null;for(t in void 0!==n&&(c=""+n),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(d=a.ref),a)s.call(a,t)&&!l.hasOwnProperty(t)&&(i[t]=a[t]);if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===i[t]&&(i[t]=a[t]);return{$$typeof:o,type:e,key:c,ref:d,props:i,_owner:r.current}}a.Fragment=i,a.jsx=c,a.jsxs=c},785893:(e,a,n)=>{e.exports=n(675251)},511151:(e,a,n)=>{n.d(a,{Z:()=>r,a:()=>s});var t=n(667294);const o={},i=t.createContext(o);function s(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);