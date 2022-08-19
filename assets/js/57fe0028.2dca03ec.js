"use strict";(self.webpackChunk_tlgr_docs=self.webpackChunk_tlgr_docs||[]).push([[8094],{7522:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var l=n(9901);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return n?l.createElement(f,a(a({ref:t},c),{},{components:n})):l.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<r;s++)a[s]=n[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var l=n(2875),o=(n(9901),n(7522));const r={},a="Poll",i={unversionedId:"tutorial/poll",id:"version-1.x/tutorial/poll",title:"Poll",description:"Component which send Poll to selected user.",source:"@site/versioned_docs/version-1.x/tutorial/poll.mdx",sourceDirName:"tutorial",slug:"/tutorial/poll",permalink:"/Telegraph/docs/tutorial/poll",draft:!1,editUrl:"https://github.com/vitalics/telegraph/tree/main/packages/docs/versioned_docs/version-1.x/tutorial/poll.mdx",tags:[],version:"1.x",frontMatter:{},sidebar:"tutorial",previous:{title:"Carousel",permalink:"/Telegraph/docs/tutorial/carousel"},next:{title:"Quiz",permalink:"/Telegraph/docs/tutorial/quiz"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"PNPm",id:"pnpm",level:3},{value:"yarn",id:"yarn",level:3},{value:"npm",id:"npm",level:3},{value:"Example",id:"example",level:2},{value:"Demo",id:"demo",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"poll"},"Poll"),(0,o.kt)("p",null,"Component which send Poll to selected user."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("h3",{id:"pnpm"},"PNPm"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm add @tlgr/poll")),(0,o.kt)("h3",{id:"yarn"},"yarn"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"yarn add @tlgr/poll")),(0,o.kt)("h3",{id:"npm"},"npm"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm install @tlgr/poll")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=example.ts",title:"example.ts"},'import { Telegraf } from "telegraf";\nimport { Poll } from "@tlgr/poll";\n\nconst TOKEN = "<API TOKEN>";\nconst bot = new Telegraf(TOKEN);\n\nconst poll = new Poll(bot, {\n  name: "QWE Poll",\n  options: ["option 1", "option 2"],\n  open_period: 600, // 10 minutes\n  is_anonymous: true,\n});\n\npoll.on("sent", (ctx, instance) => {\n  ctx.reply(`Please reply the poll ${instance.options.name}!`);\n});\n\npoll.on("answer_user", (poll, instance) => {\n  // fires event when is_anonymous:false\n  console.log("user answer context:", poll);\n  console.log(`Got Update votes Count: ${poll.user.first_name}`);\n});\n\npoll.on("answer_anonymous", (poll, instance) => {\n  // fires event when is_anonymous:true\n  console.log(`Got Update votes Count: ${poll.total_voter_count}`);\n});\n\nbot.start(async (ctx) => {\n  await poll.send(ctx);\n  console.log("started?", poll.opened);\n});\n\nbot.launch();\n')),(0,o.kt)("h2",{id:"demo"},"Demo"),(0,o.kt)("img",{alt:"poll demo",src:"/Telegraph/img/poll.png",width:"500"}))}u.isMDXComponent=!0}}]);