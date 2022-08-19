"use strict";(self.webpackChunk_tlgr_docs=self.webpackChunk_tlgr_docs||[]).push([[8712],{7522:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(9901);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,b=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(2875),r=(n(9901),n(7522));const l={},o="Quiz",i={unversionedId:"api/button/quiz",id:"version-1.x/api/button/quiz",title:"Quiz",description:"Quiz button is a keyboard only button. After clicking - call internal telegram quiz builder.",source:"@site/versioned_docs/version-1.x/api/button/quiz.mdx",sourceDirName:"api/button",slug:"/api/button/quiz",permalink:"/Telegraph/docs/api/button/quiz",draft:!1,editUrl:"https://github.com/vitalics/telegraph/tree/main/packages/docs/versioned_docs/version-1.x/api/button/quiz.mdx",tags:[],version:"1.x",frontMatter:{},sidebar:"api",previous:{title:"Poll",permalink:"/Telegraph/docs/api/button/poll"},next:{title:"Day Picker",permalink:"/Telegraph/docs/api/date-picker/day"}},p={},s=[{value:"extends",id:"extends",level:2},{value:"Events",id:"events",level:2},{value:"Click",id:"click",level:3},{value:"name",id:"name",level:4},{value:"payload",id:"payload",level:4},{value:"Answer anonymous",id:"answer-anonymous",level:3},{value:"name",id:"name-1",level:4},{value:"payload",id:"payload-1",level:4},{value:"Answer user",id:"answer-user",level:3},{value:"name",id:"name-2",level:4},{value:"payload",id:"payload-2",level:4}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quiz"},"Quiz"),(0,r.kt)("p",null,"Quiz button is a keyboard only button. After clicking - call internal telegram quiz builder."),(0,r.kt)("p",null,"After submitting the quiz - fires ",(0,r.kt)("a",{parentName:"p",href:"#answer-anonymous"},(0,r.kt)("inlineCode",{parentName:"a"},"Answer anonymous"))," or ",(0,r.kt)("a",{parentName:"p",href:"#answer-user"},(0,r.kt)("inlineCode",{parentName:"a"},"Answer user"))," events."),(0,r.kt)("h2",{id:"extends"},"extends"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./keyboard"},"KeyboardButton")),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"click"},"Click"),(0,r.kt)("small",null,"added in 1.1.0"),(0,r.kt)("h4",{id:"name"},"name"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"click")),(0,r.kt)("h4",{id:"payload"},"payload"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ctx")," - <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. Telegraf update ",(0,r.kt)("a",{parentName:"li",href:"https://telegraf.js.org/classes/Context.html#addStickerToSet"},"Context"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"button")," - <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),"> - the ",(0,r.kt)("a",{parentName:"li",href:"./keyboard"},"Keyboard Button")," instance")),(0,r.kt)("h3",{id:"answer-anonymous"},"Answer anonymous"),(0,r.kt)("small",null,"added in 1.1.0"),(0,r.kt)("h4",{id:"name-1"},"name"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"answer_anonymous")),(0,r.kt)("h4",{id:"payload-1"},"payload"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"poll")," - <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),"> - the ",(0,r.kt)("a",{parentName:"li",href:"https://telegraf.js.org/classes/Context.html#poll"},"poll")," object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"instance")," - <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. ",(0,r.kt)("a",{parentName:"li",href:"#Poll"},"Button")," isntance.")),(0,r.kt)("h3",{id:"answer-user"},"Answer user"),(0,r.kt)("small",null,"added in 1.1.0"),(0,r.kt)("h4",{id:"name-2"},"name"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"answer_user")),(0,r.kt)("h4",{id:"payload-2"},"payload"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pollAnswer")," - <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),"> - the ",(0,r.kt)("a",{parentName:"li",href:"https://telegraf.js.org/classes/Context.html#pollAnswer"},"pollAnswer")," object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"instance")," - <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. ",(0,r.kt)("a",{parentName:"li",href:"#Poll"},"Button")," isntance.")))}u.isMDXComponent=!0}}]);