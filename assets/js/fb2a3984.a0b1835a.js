"use strict";(self.webpackChunk_tlgr_docs=self.webpackChunk_tlgr_docs||[]).push([[8955],{7522:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9901);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(2875),o=(n(9901),n(7522));const a={},i="Quiz",l={unversionedId:"tutorial/quiz",id:"tutorial/quiz",title:"Quiz",description:"Quiz component is a component which have a correct answer.",source:"@site/docs/tutorial/quiz.mdx",sourceDirName:"tutorial",slug:"/tutorial/quiz",permalink:"/Telegraph/docs/next/tutorial/quiz",draft:!1,editUrl:"https://github.com/vitalics/telegraph/tree/main/packages/docs/docs/tutorial/quiz.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorial",previous:{title:"Poll",permalink:"/Telegraph/docs/next/tutorial/poll"},next:{title:"Intro",permalink:"/Telegraph/docs/next/tutorial/fmt/base"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"PNPm",id:"pnpm",level:3},{value:"yarn",id:"yarn",level:3},{value:"npm",id:"npm",level:3},{value:"Example",id:"example",level:2},{value:"Demo",id:"demo",level:2}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quiz"},"Quiz"),(0,o.kt)("p",null,"Quiz component is a component which have a correct answer."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("h3",{id:"pnpm"},"PNPm"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm add @tlgr/quiz")),(0,o.kt)("h3",{id:"yarn"},"yarn"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"yarn add @tlgr/quiz")),(0,o.kt)("h3",{id:"npm"},"npm"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm install @tlgr/quiz")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=example.ts",title:"example.ts"},'import { Telegraf } from "telegraf";\nimport { Quiz } from "@tlgr/quiz";\n\nconst TOKEN = "<API TOKEN>";\nconst bot = new Telegraf(TOKEN);\n\nconst quiz = new Quiz(bot, {\n  name: "QWE Quiz",\n  options: ["answer 1", "answer 2"],\n  correct_option_id: 0, // required\n  open_period: 600,\n  is_anonymous: true,\n  explanation: "first is correct",\n});\n\nquiz.on("answer_user", (ctx, instance) => {\n  console.log(`User with name ${ctx.user.first_name} is answered`);\n});\n\nquiz.on("answer_anonymous", (ctx, instance) => {\n  console.log("anonymous is answered");\n});\n\nbot.start((ctx) => {\n  quiz.send(ctx);\n});\n\nbot.launch();\n')),(0,o.kt)("h2",{id:"demo"},"Demo"),(0,o.kt)("img",{alt:"pquizoll demo",src:"/Telegraph/img/quiz.png",width:"500"}))}s.isMDXComponent=!0}}]);