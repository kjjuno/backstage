/*! For license information please see 91d9a0d1.a71c997b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[416064],{666115:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var i=n(785893),s=n(511151);const t={id:"package-metadata",title:"Package Metadata",description:"An inventory of well known package metadata fields in the Backstage ecosystem."},c=void 0,o={id:"tooling/package-metadata",title:"Package Metadata",description:"An inventory of well known package metadata fields in the Backstage ecosystem.",source:"@site/../docs/tooling/package-metadata.md",sourceDirName:"tooling",slug:"/tooling/package-metadata",permalink:"/docs/tooling/package-metadata",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/tooling/package-metadata.md",tags:[],version:"current",frontMatter:{id:"package-metadata",title:"Package Metadata",description:"An inventory of well known package metadata fields in the Backstage ecosystem."},sidebar:"docs",previous:{title:"Profiling Backstage",permalink:"/docs/tooling/local-dev/profiling"},next:{title:"Overview",permalink:"/docs/deployment/"}},d={},l=[{value:"Known Metadata Fields",id:"known-metadata-fields",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>repository</code>",id:"repository",level:3},{value:"<code>main</code>",id:"main",level:3},{value:"<code>exports</code>",id:"exports",level:3},{value:"<code>typeVersions</code>",id:"typeversions",level:3},{value:"<code>sideEffects</code>",id:"sideeffects",level:3},{value:"<code>scripts</code>",id:"scripts",level:3},{value:"<code>configSchema</code>",id:"configschema",level:3},{value:"<code>backstage</code>",id:"backstage",level:3},{value:"<code>backstage.role</code>",id:"backstagerole",level:3},{value:"<code>backstage.pluginId</code>",id:"backstagepluginid",level:3},{value:"<code>backstage.pluginPackages</code>",id:"backstagepluginpackages",level:3},{value:"<code>backstage.pluginPackage</code>",id:"backstagepluginpackage",level:3},{value:"<code>backstage.moved</code>",id:"backstagemoved",level:3},{value:"Metadata for Published Packages",id:"metadata-for-published-packages",level:2}];function r(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.p,{children:["The ",(0,i.jsx)(a.code,{children:"package.json"})," file is a JSON file that contains metadata about a JavaScript package. It is a ",(0,i.jsx)(a.a,{href:"https://nodejs.org/api/packages.html",children:"Node.js standard"})," that is expanded upon in the ",(0,i.jsx)(a.a,{href:"https://docs.npmjs.com/cli/v10/configuring-npm/package-json",children:"NPM ecosystem"}),", and is required for all packages published to NPM or a similar package registry."]}),"\n",(0,i.jsx)(a.h2,{id:"known-metadata-fields",children:"Known Metadata Fields"}),"\n",(0,i.jsxs)(a.p,{children:["This section documents the known ",(0,i.jsx)(a.code,{children:"package.json"})," metadata fields that play a significant role in the Backstage ecosystem."]}),"\n",(0,i.jsxs)(a.p,{children:["All ",(0,i.jsx)(a.a,{href:"https://docs.npmjs.com/cli/v10/configuring-npm/package-json",children:"fields defined by NPM"})," are inherited by the Backstage ecosystem. The list below only includes those standard fields for which additional information is available."]}),"\n",(0,i.jsx)(a.h3,{id:"name",children:(0,i.jsx)(a.code,{children:"name"})}),"\n",(0,i.jsxs)(a.p,{children:["The name of the package, as defined by ",(0,i.jsx)(a.a,{href:"https://docs.npmjs.com/cli/v10/configuring-npm/package-json#name",children:"NPM"}),". In addition, the following naming scheme is strongly encouraged for packages published in the Backstage ecosystem:"]}),"\n",(0,i.jsxs)(a.p,{children:["First pick a package name prefix that is unique to your organization or collection of packages, but also places it within the Backstage ecosystem, for example: ",(0,i.jsx)(a.code,{children:"@example/backstage"}),", ",(0,i.jsx)(a.code,{children:"@example-backstage/"}),", or ",(0,i.jsx)(a.code,{children:"example-backstage"}),". This prefix should be used by all packages that you publish, regardless of whether they're part of a plugin or not."]}),"\n",(0,i.jsxs)(a.p,{children:["Any package that is not part of a plugin should use the prefix along with a descriptive name, for example: ",(0,i.jsx)(a.code,{children:"@example/backstage-components"})," or ",(0,i.jsx)(a.code,{children:"@example/backstage-foo-client"}),"."]}),"\n",(0,i.jsxs)(a.p,{children:["For plugin packages you should also pick a plugin ID and add ",(0,i.jsx)(a.code,{children:"plugin-<pluginId>"})," to the prefix, along with a suffix based on the package role:"]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"<prefix>-plugin-<pluginId>"}),": The main frontend code of the plugin."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"<prefix>-plugin-<pluginId>-module-<name>"}),": Optional modules related to the frontend plugin package."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"<prefix>-plugin-<pluginId>-backend"}),": The main backend code of the plugin."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"<prefix>-plugin-<pluginId>-backend-module-<name>"}),": Optional modules related to the backend plugin package."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"<prefix>-plugin-<pluginId>-react"}),": Shared widgets, hooks and similar that both the plugin itself and third-party frontend plugins or modules can depend on."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"<prefix>-plugin-<pluginId>-node"}),": Utilities for backends that both the plugin backend itself and third-party backend plugins or modules can depend on."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"<prefix>-plugin-<pluginId>-common"}),": An isomorphic package with platform agnostic models, clients, and utilities that all packages above or any third-party plugin or module can depend on."]}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:["For example, a frontend package for the ",(0,i.jsx)(a.code,{children:"poetry"})," plugin might be called ",(0,i.jsx)(a.code,{children:"@example/backstage-plugin-poetry"}),", and a backend package for the same plugin might be called ",(0,i.jsx)(a.code,{children:"@example/backstage-plugin-poetry-backend"}),"."]}),"\n",(0,i.jsxs)(a.p,{children:["If you are creating a module for an existing package that is not part of your project, you should use the same prefix along with the plugin ID of the package that the module is for. For example, if you are creating a poetry provider module for ",(0,i.jsx)(a.code,{children:"@backstage/plugin-catalog-backend"}),", you might call it ",(0,i.jsx)(a.code,{children:"@example/backstage-plugin-catalog-backend-module-poetry-provider"}),"."]}),"\n",(0,i.jsx)(a.h3,{id:"repository",children:(0,i.jsx)(a.code,{children:"repository"})}),"\n",(0,i.jsxs)(a.p,{children:["The location of the source code for the package, as defined by ",(0,i.jsx)(a.a,{href:"https://docs.npmjs.com/cli/v10/configuring-npm/package-json#repository",children:"NPM"}),"."]}),"\n",(0,i.jsxs)(a.p,{children:["This field can be generated by the ",(0,i.jsx)(a.code,{children:"backstage-cli repo fix --publish"})," command. The only requirement is that the ",(0,i.jsx)(a.code,{children:"package.json"})," in your workspace root has the ",(0,i.jsx)(a.code,{children:"repository"})," field documented."]}),"\n",(0,i.jsx)(a.h3,{id:"main",children:(0,i.jsx)(a.code,{children:"main"})}),"\n",(0,i.jsxs)(a.p,{children:["The main entry point of the package, as defined by ",(0,i.jsx)(a.a,{href:"https://docs.npmjs.com/cli/v10/configuring-npm/package-json#main",children:"NPM"}),". In a standard Backstage setup this should point to the entry point for local development, typically ",(0,i.jsx)(a.code,{children:"src/index.ts"}),". This field along with other entry point fields such as ",(0,i.jsx)(a.code,{children:"module"})," and ",(0,i.jsx)(a.code,{children:"types"})," are rewritten when packaging the package for distribution. You can read more about this process in the ",(0,i.jsx)(a.a,{href:"/docs/tooling/cli/build-system#publishing",children:"publishing"})," section, and it is also used for ",(0,i.jsx)(a.a,{href:"/docs/tooling/cli/build-system#backend-production",children:"backend production builds"}),"."]}),"\n",(0,i.jsx)(a.h3,{id:"exports",children:(0,i.jsx)(a.code,{children:"exports"})}),"\n",(0,i.jsxs)(a.p,{children:["The exports of the package, as defined by ",(0,i.jsx)(a.a,{href:"https://nodejs.org/api/packages.html#exports",children:"Node.js"}),". This field is used to define the entry points of the package. As with other entry point fields, the exports should point to entry points for local development. They will the be rewritten when packaging the package for distribution. You can read more about this in the ",(0,i.jsx)(a.a,{href:"/docs/tooling/cli/build-system#subpath-exports",children:"sub-path exports"})," section."]}),"\n",(0,i.jsx)(a.h3,{id:"typeversions",children:(0,i.jsx)(a.code,{children:"typeVersions"})}),"\n",(0,i.jsxs)(a.p,{children:["This field is used to specify versioned type entry points for the package, as defined by ",(0,i.jsx)(a.a,{href:"https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#version-selection-with-typesversions",children:"TypeScript"}),", and is used as the equivalent of the ",(0,i.jsx)(a.code,{children:"exports"})," field. TypeScript does support type declarations in the ",(0,i.jsx)(a.code,{children:"exports"})," field, but that requires that the ",(0,i.jsx)(a.code,{children:"moduleResolution"})," option in ",(0,i.jsx)(a.code,{children:"tsconfig.json"})," is set to ",(0,i.jsx)(a.code,{children:"node16"})," or ",(0,i.jsx)(a.code,{children:"bundler"}),", which the Backstage ecosystem currently does not support."]}),"\n",(0,i.jsxs)(a.p,{children:["This field can be generated by the ",(0,i.jsx)(a.code,{children:"backstage-cli repo fix"})," command. First fill out the ",(0,i.jsx)(a.code,{children:"exports"})," field to point to source fields, which will then be used to generate ",(0,i.jsx)(a.code,{children:"typeVersions"}),"."]}),"\n",(0,i.jsx)(a.h3,{id:"sideeffects",children:(0,i.jsx)(a.code,{children:"sideEffects"})}),"\n",(0,i.jsxs)(a.p,{children:["This field declares whether it is safe to remove unused code through tree shaking when bundling this package into a frontend build, and is defined for example by ",(0,i.jsx)(a.a,{href:"https://github.com/backstage/backstage/blob/8d5cdb5d536cc8eb444da4b57dca4e36716f4535/plugins/auth-backend-module-google-provider/config.d.ts#L22",children:"WebPack"}),"."]}),"\n",(0,i.jsxs)(a.p,{children:["This field can be generated by the ",(0,i.jsx)(a.code,{children:"backstage-cli repo fix"})," command. It will set to ",(0,i.jsx)(a.code,{children:"false"})," by default for all frontend packages, since Backstage frontend packages should generally never have any side effects. If your package does have side effects, you can set explicitly set this field to ",(0,i.jsx)(a.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(a.h3,{id:"scripts",children:(0,i.jsx)(a.code,{children:"scripts"})}),"\n",(0,i.jsxs)(a.p,{children:["The package scripts as defined by ",(0,i.jsx)(a.a,{href:"https://docs.npmjs.com/cli/v10/configuring-npm/package-json#scripts",children:"NPM"}),". The Backstage CLI provides a set of standard scripts, which you can read more about in the ",(0,i.jsx)(a.a,{href:"/docs/tooling/cli/build-system",children:"build system"})," section. The full list of scripts is as follows:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-js",children:'"scripts": {\n  "start": "backstage-cli package start",\n  "build": "backstage-cli package build",\n  "lint": "backstage-cli package lint",\n  "test": "backstage-cli package test",\n  "clean": "backstage-cli package clean",\n  "prepack": "backstage-cli package prepack",\n  "postpack": "backstage-cli package postpack"\n}\n'})}),"\n",(0,i.jsx)(a.h3,{id:"configschema",children:(0,i.jsx)(a.code,{children:"configSchema"})}),"\n",(0,i.jsxs)(a.p,{children:["The Backstage configuration schema for the package, as described in the ",(0,i.jsx)(a.a,{href:"/docs/conf/defining",children:"defining configuration"})," section."]}),"\n",(0,i.jsx)(a.h3,{id:"backstage",children:(0,i.jsx)(a.code,{children:"backstage"})}),"\n",(0,i.jsx)(a.p,{children:"This field is a collection of Backstage specific metadata fields. It is required for all Backstage packages, and any package that defines this field is considered to be part of the Backstage ecosystem. All sub-fields of this collection are defined below."}),"\n",(0,i.jsx)(a.h3,{id:"backstagerole",children:(0,i.jsx)(a.code,{children:"backstage.role"})}),"\n",(0,i.jsxs)(a.p,{children:["This field defines the role of the package in the Backstage ecosystem. It can affect both the build process and runtime behavior, and signals the intended usage of the package to consumers. You can read more about this field in the ",(0,i.jsx)(a.a,{href:"/docs/tooling/cli/build-system#package-roles",children:"package roles"})," section."]}),"\n",(0,i.jsx)(a.h3,{id:"backstagepluginid",children:(0,i.jsx)(a.code,{children:"backstage.pluginId"})}),"\n",(0,i.jsxs)(a.p,{children:["For any package that is part of a plugin, this field should be set to the plugin ID. This is the same ID as you would pass to the ",(0,i.jsx)(a.code,{children:"createPlugin"}),", ",(0,i.jsx)(a.code,{children:"createBackendPlugin"}),", or ",(0,i.jsx)(a.code,{children:"createBackendModule"})," functions in the implementation of the package. It is also the same ID as the one described in the ",(0,i.jsx)(a.a,{href:"#name",children:"name"})," section."]}),"\n",(0,i.jsxs)(a.p,{children:["This field can be generated by the ",(0,i.jsx)(a.code,{children:"backstage-cli repo fix --publish"})," command. The plugin ID will be inferred from the package ",(0,i.jsx)(a.a,{href:"#name",children:"name"})," and ",(0,i.jsx)(a.a,{href:"#backstagerole",children:"role"}),". If the package name is not actually part of a plugin but still has ",(0,i.jsx)(a.code,{children:"plugin-*"})," in its name, you can set this field to be explicitly ",(0,i.jsx)(a.code,{children:"null"}),"."]}),"\n",(0,i.jsxs)(a.p,{children:["The presence of this field is checked by the ",(0,i.jsx)(a.code,{children:"backstage-cli package prepack"})," command, which is used to prepare a package for publishing. You can read more about this requirement in the section on ",(0,i.jsx)(a.a,{href:"#metadata-for-published-packages",children:"metadata for published packages"}),"."]}),"\n",(0,i.jsx)(a.h3,{id:"backstagepluginpackages",children:(0,i.jsx)(a.code,{children:"backstage.pluginPackages"})}),"\n",(0,i.jsx)(a.p,{children:"For any package that is part of a plugin, this field should be set to a list of all packages that are directly part of the same plugin. This includes frontend and backend plugin packages as well as related libraries, but not modules."}),"\n",(0,i.jsxs)(a.p,{children:["This field can be generated by the ",(0,i.jsx)(a.code,{children:"backstage-cli repo fix --publish"})," command. It will list all packages with the same ",(0,i.jsx)(a.a,{href:"#backstagepluginid",children:"plugin ID"})," in the workspace."]}),"\n",(0,i.jsxs)(a.p,{children:["The presence of this field is checked by the ",(0,i.jsx)(a.code,{children:"backstage-cli package prepack"})," command, which is used to prepare a package for publishing. You can read more about this requirement in the section on ",(0,i.jsx)(a.a,{href:"#metadata-for-published-packages",children:"metadata for published packages"}),"."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-js",metastring:'title="Example usage of the backstage.pluginPackages field"',children:'{\n  "name": "@backstage/plugin-catalog",\n  "backstage": {\n    "role": "frontend-plugin",\n    "pluginId": "catalog",\n    "pluginPackages": [\n      "@backstage/plugin-catalog",\n      "@backstage/plugin-catalog-backend",\n      "@backstage/plugin-catalog-common",\n      "@backstage/plugin-catalog-node",\n      "@backstage/plugin-catalog-react"\n    ]\n  }\n  ...\n}\n'})}),"\n",(0,i.jsx)(a.h3,{id:"backstagepluginpackage",children:(0,i.jsx)(a.code,{children:"backstage.pluginPackage"})}),"\n",(0,i.jsxs)(a.p,{children:["For any module package of a plugin, this field should be set to the ",(0,i.jsx)(a.a,{href:"#name",children:"name"})," of the plugin package that this is a module for."]}),"\n",(0,i.jsxs)(a.p,{children:["This field can be generated by the ",(0,i.jsx)(a.code,{children:"backstage-cli repo fix --publish"})," command. It checks for packages with a matching ",(0,i.jsx)(a.a,{href:"#backstagepluginid",children:"plugin ID"})," in the same workspace, but also knows the package names of the core feature plugin IDs such as ",(0,i.jsx)(a.code,{children:"catalog"}),", ",(0,i.jsx)(a.code,{children:"auth"}),", ",(0,i.jsx)(a.code,{children:"scaffolder"}),", etc. If the package name can not be inferred, it has to be provided manually."]}),"\n",(0,i.jsxs)(a.p,{children:["The presence of this field is checked by the ",(0,i.jsx)(a.code,{children:"backstage-cli package prepack"})," command, which is used to prepare a package for publishing. You can read more about this requirement in the section on ",(0,i.jsx)(a.a,{href:"#metadata-for-published-packages",children:"metadata for published packages"}),"."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-js",metastring:'title="Example usage of the backstage.pluginPackage field"',children:'{\n  "name": "@backstage/plugin-catalog-backend-module-github",\n  "backstage": {\n    "role": "backend-plugin-module",\n    "pluginId": "catalog",\n    "pluginPackage": "@backstage/plugin-catalog-backend"\n  }\n  ...\n}\n'})}),"\n",(0,i.jsx)(a.h3,{id:"backstagemoved",children:(0,i.jsx)(a.code,{children:"backstage.moved"})}),"\n",(0,i.jsx)(a.p,{children:"This field indicates that a package has been renamed and moved to a new location. This field is recognized by the Backstage CLI, where the version bump command will automatically switch to using the new package instead. The value of this field should be the new package name."}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-js",metastring:'title="Example usage of the backstage.moved field"',children:'{\n  "name": "@backstage/plugin-azure-devops",\n  "backstage": {\n    "moved": "@backstage-community/plugin-azure-devops"\n  }\n  ...\n}\n'})}),"\n",(0,i.jsx)(a.h2,{id:"metadata-for-published-packages",children:"Metadata for Published Packages"}),"\n",(0,i.jsxs)(a.p,{children:["When publishing a package with the help of the Backstage CLI, there are a number of metadata checks that are performed to ensure that the package is correctly set up for the Backstage ecosystem. These checks are performed by the ",(0,i.jsx)(a.code,{children:"backstage-cli package prepack"})," command, which is used to prepare a package for publishing. These checks can all also be verified separately using the ",(0,i.jsx)(a.code,{children:"backstage-cli repo fix --publish"})," command, and in many cases the required metadata can be generated automatically. It is therefore important to make running the ",(0,i.jsx)(a.code,{children:"fix"})," command part of your workflow in any project that is publishing Backstage packages."]}),"\n",(0,i.jsxs)(a.p,{children:["To set this up, we recommend that you add the following script to the root ",(0,i.jsx)(a.code,{children:"package.json"})," of your workspace:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-js",children:'{\n  "scripts": {\n    "fix": "backstage-cli repo fix --publish"\n  }\n}\n'})}),"\n",(0,i.jsxs)(a.p,{children:["This allows anyone working in the repo to run ",(0,i.jsx)(a.code,{children:"yarn fix"})," to check and update all packages in the workspace."]}),"\n",(0,i.jsxs)(a.p,{children:["In addition, you should also add a check to your CI pipeline that ensures that there are no pending fixes. This is done by calling the command with the ",(0,i.jsx)(a.code,{children:"--check"})," flag, which in GitHub actions would look something like this:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-yaml",children:"- name: check for missing repo fixes\n  run: yarn fix --check\n"})}),"\n",(0,i.jsx)(a.p,{children:"Finally, if you are using Husky or any other pre-commit hook, you can also set up a hook to run the fix command before committing:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-js",children:'{\n  "lint-staged": {\n    "package.json": [\n      "yarn fix"\n    ]\n  }\n}\n'})})]})}function h(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},675251:(e,a,n)=>{var i=n(667294),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,a,n){var i,t={},l=null,r=null;for(i in void 0!==n&&(l=""+n),void 0!==a.key&&(l=""+a.key),void 0!==a.ref&&(r=a.ref),a)c.call(a,i)&&!d.hasOwnProperty(i)&&(t[i]=a[i]);if(e&&e.defaultProps)for(i in a=e.defaultProps)void 0===t[i]&&(t[i]=a[i]);return{$$typeof:s,type:e,key:l,ref:r,props:t,_owner:o.current}}a.Fragment=t,a.jsx=l,a.jsxs=l},785893:(e,a,n)=>{e.exports=n(675251)},511151:(e,a,n)=>{n.d(a,{Z:()=>o,a:()=>c});var i=n(667294);const s={},t=i.createContext(s);function c(e){const a=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(t.Provider,{value:a},e.children)}}}]);