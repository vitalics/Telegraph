"use strict";(self.webpackChunk_tlgr_docs=self.webpackChunk_tlgr_docs||[]).push([[8115],{7522:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(9901);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(p,".").concat(d)]||u[d]||s[d]||l;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3976:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(2875),a=(r(9901),r(7522));const l={},o="Intro",i={unversionedId:"tutorial/fmt/base",id:"tutorial/fmt/base",title:"Intro",description:"Provides functionality to easily build formatted messages.",source:"@site/docs/tutorial/fmt/base.mdx",sourceDirName:"tutorial/fmt",slug:"/tutorial/fmt/base",permalink:"/Telegraph/docs/next/tutorial/fmt/base",draft:!1,editUrl:"https://github.com/vitalics/telegraph/tree/main/packages/docs/docs/tutorial/fmt/base.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorial",previous:{title:"Quiz",permalink:"/Telegraph/docs/next/tutorial/quiz"},next:{title:"Advanced",permalink:"/Telegraph/docs/next/tutorial/fmt/advanced"}},p={},c=[{value:"Installation",id:"installation",level:2},{value:"PNPm",id:"pnpm",level:3},{value:"yarn",id:"yarn",level:3},{value:"npm",id:"npm",level:3},{value:"Example",id:"example",level:2},{value:"Demo",id:"demo",level:2}],m={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"intro"},"Intro"),(0,a.kt)("p",null,"Provides functionality to easily build formatted messages."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"pnpm"},"PNPm"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpm add @tlgr/fmt")),(0,a.kt)("h3",{id:"yarn"},"yarn"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"yarn add @tlgr/fmt")),(0,a.kt)("h3",{id:"npm"},"npm"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npm i @tlgr/fmt")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=formatter.example.ts",title:"formatter.example.ts"},'import { fmt, bold, italic, strikethrough } from "@tlgr/fmt";\nimport { Telegraf } from "telegraf";\n\nconst bot = new Telegraf("<API TOKEN>");\n\nbot.start((ctx) => {\n  ctx.reply(\n    ...fmt(\n      `this example shows ${bold("bold")}, ${italic(\n        "italic"\n      )} and ${strikethrough("strikethrough")} texts`\n    )\n  );\n});\n\nbot.launch();\n')),(0,a.kt)("h2",{id:"demo"},"Demo"),(0,a.kt)("img",{alt:"fmt demo",src:"/Telegraph/img/fmt_base.png",width:"500"}))}s.isMDXComponent=!0}}]);