/*! For license information please see c04dbe70.60a301f8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[202929],{910326:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=t(785893),i=t(511151);const a={id:"creating-and-publishing",title:"Creating and publishing your docs",sidebar_label:"Creating and Publishing Documentation",description:"Guidance on how to create and publish documentation"},s=void 0,r={id:"features/techdocs/creating-and-publishing",title:"Creating and publishing your docs",description:"Guidance on how to create and publish documentation",source:"@site/../docs/features/techdocs/creating-and-publishing.md",sourceDirName:"features/techdocs",slug:"/features/techdocs/creating-and-publishing",permalink:"/docs/features/techdocs/creating-and-publishing",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/techdocs/creating-and-publishing.md",tags:[],version:"current",frontMatter:{id:"creating-and-publishing",title:"Creating and publishing your docs",sidebar_label:"Creating and Publishing Documentation",description:"Guidance on how to create and publish documentation"},sidebar:"docs",previous:{title:"TechDocs Architecture",permalink:"/docs/features/techdocs/architecture"},next:{title:"TechDocs Configuration Options",permalink:"/docs/features/techdocs/configuration"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a basic documentation setup",id:"create-a-basic-documentation-setup",level:2},{value:"Use any software template",id:"use-any-software-template",level:3},{value:"Enable documentation for an already existing entity",id:"enable-documentation-for-an-already-existing-entity",level:3},{value:"Create a standalone documentation",id:"create-a-standalone-documentation",level:3},{value:"Writing and previewing your documentation",id:"writing-and-previewing-your-documentation",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"This section will guide you through how to:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#create-a-basic-documentation-setup",children:"Create a basic documentation setup"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#use-any-software-template",children:"Use any software template"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#enable-documentation-for-an-already-existing-entity",children:"Enable documentation for an already existing entity"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#create-a-standalone-documentation",children:"Create a standalone documentation"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#writing-and-previewing-your-documentation",children:"Writing and previewing your documentation"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["A working Backstage instance with TechDocs installed (see\n",(0,o.jsx)(n.a,{href:"/docs/features/techdocs/getting-started",children:"TechDocs getting started"}),")"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"create-a-basic-documentation-setup",children:"Create a basic documentation setup"}),"\n",(0,o.jsxs)(n.p,{children:["If you have an existing repository that you'd like to add documentation to, skip\nto the\n",(0,o.jsx)(n.a,{href:"#enable-documentation-for-an-already-existing-entity",children:"Enable documentation for an already existing entity setup"}),"\nsection below. Otherwise, continue reading to create a new software entity\nincluding documentation from scratch."]}),"\n",(0,o.jsx)(n.h3,{id:"use-any-software-template",children:"Use any software template"}),"\n",(0,o.jsxs)(n.p,{children:["TechDocs is built on top of the\n",(0,o.jsx)(n.a,{href:"https://www.docslikecode.com/about/",children:"docs like code approach"}),". This, in short,\nmeans that you should keep documentation close to the code."]}),"\n",(0,o.jsx)(n.p,{children:"Your Backstage app has a set of software templates added by default. All of\nthese software templates include everything you need to get your TechDocs site\nup and running and to start writing your documentation."}),"\n",(0,o.jsxs)(n.p,{children:["If you have created software templates that do not include documentation by\ndefault, we highly recommend you to set that up. Follow our how-to guide\n",(0,o.jsx)(n.a,{href:"/docs/features/techdocs/how-to-guides#how-to-add-the-documentation-setup-to-your-software-templates",children:"How to add documentation setup to your software templates"}),"\nto get started."]}),"\n",(0,o.jsx)(n.h3,{id:"enable-documentation-for-an-already-existing-entity",children:"Enable documentation for an already existing entity"}),"\n",(0,o.jsx)(n.p,{children:"Prerequisites:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["An existing entity\n",(0,o.jsx)(n.a,{href:"/docs/features/software-catalog/#adding-components-to-the-catalog",children:"registered in backstage"}),"\n(e.g. via a ",(0,o.jsx)(n.code,{children:"catalog-info.yaml"})," file)."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Create an ",(0,o.jsx)(n.code,{children:"mkdocs.yml"})," file in the root of your repository with the following\ncontent:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"site_name: 'example-docs'\n\nnav:\n  - Home: index.md\n\nplugins:\n  - techdocs-core\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Note - The plugins section above is optional. Backstage automatically adds the ",(0,o.jsx)(n.code,{children:"techdocs-core"})," plugin to the\nmkdocs file if it is missing. This functionality can be turned off with a ",(0,o.jsx)(n.a,{href:"/docs/features/techdocs/configuration",children:"configuration option"})," in Backstage."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Update your component's entity description by adding the following lines to its\n",(0,o.jsx)(n.code,{children:"catalog-info.yaml"})," in the root of its repository:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"metadata:\n  annotations:\n    backstage.io/techdocs-ref: dir:.\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The\n",(0,o.jsxs)(n.a,{href:"/docs/features/software-catalog/well-known-annotations#backstageiotechdocs-ref",children:[(0,o.jsx)(n.code,{children:"backstage.io/techdocs-ref"})," annotation"]}),"\nis used by TechDocs to download the documentation source files for generating an\nentity's TechDocs site."]}),"\n",(0,o.jsxs)(n.p,{children:["Create a ",(0,o.jsx)(n.code,{children:"/docs"})," folder in the root of your repository with at least an\n",(0,o.jsx)(n.code,{children:"index.md"})," file in it. ",(0,o.jsx)(n.em,{children:"(If you add more markdown files, make sure to update the\nnav in the mkdocs.yml file to get a proper navigation for your documentation.)"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Note - Although ",(0,o.jsx)(n.code,{children:"docs"})," is a popular directory name for storing documentation,\nit can be renamed to something else and can be configured by ",(0,o.jsx)(n.code,{children:"mkdocs.yml"}),". See\n",(0,o.jsx)(n.a,{href:"https://www.mkdocs.org/user-guide/configuration/#docs_dir",children:"https://www.mkdocs.org/user-guide/configuration/#docs_dir"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"docs/index.md"})," can for example have the following content:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"# example docs\n\nThis is a basic example of documentation.\n"})}),"\n",(0,o.jsx)(n.p,{children:"Commit your changes, open a pull request and merge. You will now get your\nupdated documentation next time you run Backstage!"}),"\n",(0,o.jsx)(n.h3,{id:"create-a-standalone-documentation",children:"Create a standalone documentation"}),"\n",(0,o.jsxs)(n.p,{children:["There could be ",(0,o.jsx)(n.em,{children:"some"})," situations where you don't want to keep your docs close to\nyour code, but still want to publish documentation - for example, an onboarding\ntutorial. For this case, you can create a documentation component, which will be\npublished as a standalone part of TechDocs."]}),"\n",(0,o.jsx)(n.p,{children:"First, create an entity for your documentation. A minimal example could look like\nthis:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="catalog-info.yaml"',children:"apiVersion: backstage.io/v1alpha1\nkind: Component\nmetadata:\n  name: a-unique-name-for-your-docs\n  annotations:\n    # this could also be `url:<url>` if the documentation isn't in the same location\n    backstage.io/techdocs-ref: dir:.\nspec:\n  type: documentation\n  lifecycle: experimental\n  owner: user-or-team-name\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Next, create the config file for ",(0,o.jsx)(n.a,{href:"https://www.mkdocs.org/",children:"mkdocs"}),", which will be\nused to parse your docs:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="mkdocs.yml"',children:"site_name: a-unique-name-for-your-docs\nsite_description: An informative description\nplugins:\n  - techdocs-core\nnav:\n  - Getting Started: index.md\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Finally, add your index.md Markdown file, in a folder named ",(0,o.jsx)(n.code,{children:"docs/"})," with your desired\ndocumentation in Markdown. Your file structure should now look like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"your-great-documentation/\n  docs/\n    index.md\n  catalog-info.yaml\n  mkdocs.yml\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Last but not least, register your component in the software catalog using\n",(0,o.jsx)(n.a,{href:"/docs/features/software-catalog/#adding-components-to-the-catalog",children:"one of several options"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"writing-and-previewing-your-documentation",children:"Writing and previewing your documentation"}),"\n",(0,o.jsxs)(n.p,{children:["Using the ",(0,o.jsx)(n.a,{href:"https://github.com/backstage/backstage/tree/master/packages/techdocs-cli",children:"techdocs-cli"})," you can\npreview your docs inside a local Backstage instance and get live reload on\nchanges. This is useful when you want to preview your documentation while\nwriting."]}),"\n",(0,o.jsx)(n.p,{children:"To do this you can run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd /path/to/docs-repository/\nnpx @techdocs/cli serve\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},675251:(e,n,t)=>{var o=t(667294),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var o,a={},d=null,l=null;for(o in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,o)&&!c.hasOwnProperty(o)&&(a[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===a[o]&&(a[o]=n[o]);return{$$typeof:i,type:e,key:d,ref:l,props:a,_owner:r.current}}n.Fragment=a,n.jsx=d,n.jsxs=d},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var o=t(667294);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);