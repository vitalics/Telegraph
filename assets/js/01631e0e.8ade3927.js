"use strict";(self.webpackChunk_tlgr_docs=self.webpackChunk_tlgr_docs||[]).push([[2251],{7522:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(9901);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5982:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(2875),a=(r(9901),r(7522));const o={},i="Quiz",l={unversionedId:"api/quiz/base",id:"version-1.x/api/quiz/base",title:"Quiz",description:"Poll is an object which ask user to choose an correct option.",source:"@site/versioned_docs/version-1.x/api/quiz/base.mdx",sourceDirName:"api/quiz",slug:"/api/quiz/base",permalink:"/Telegraph/docs/api/quiz/base",draft:!1,editUrl:"https://github.com/vitalics/telegraph/tree/main/packages/docs/versioned_docs/version-1.x/api/quiz/base.mdx",tags:[],version:"1.x",frontMatter:{},sidebar:"api",previous:{title:"Events",permalink:"/Telegraph/docs/api/poll/events"},next:{title:"Events",permalink:"/Telegraph/docs/api/quiz/events"}},s={},p=[{value:"extends",id:"extends",level:2},{value:"<code>constructor(bot, options)</code>",id:"constructorbot-options",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quiz"},"Quiz"),(0,a.kt)("p",null,"Poll is an object which ask user to choose an correct option."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Quiz } from "@tlgr/quiz";\nconst quiz = new Quiz(bot, options);\n\nbot.start(ctx => {\n  await quiz.send(ctx);\n})\n\n// some time after\nawait quiz.stop();\n')),(0,a.kt)("p",null,"Events described at ",(0,a.kt)("a",{parentName:"p",href:"./events"},"events")," page"),(0,a.kt)("h2",{id:"extends"},"extends"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../component/base"},"Component"))),(0,a.kt)("h2",{id:"constructorbot-options"},(0,a.kt)("inlineCode",{parentName:"h2"},"constructor(bot, options)")),(0,a.kt)("small",null," added in 1.0.0 "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bot")," - <",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. ",(0,a.kt)("a",{parentName:"li",href:"https://telegraf.js.org/classes/Telegraf.html"},"Telegraf")," instance."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," - <",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. Quiz options",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," - <",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Quiz name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," - <",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"},"string[]"),">. possible options as an array."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"open_period")," - <",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#numeric_types"},"number"),">. Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"is_anonymous")," - <",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type"},"boolean"),">. True, if the poll needs to be anonymous, defaults to True."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"correct_option_id")," - <",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#numeric_types"},"number"),">. Correct answer id where ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," - the first of options.")))))}u.isMDXComponent=!0}}]);