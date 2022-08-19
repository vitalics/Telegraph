"use strict";(self.webpackChunk_tlgr_docs=self.webpackChunk_tlgr_docs||[]).push([[1698],{7522:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(9901);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(b,l(l({ref:t},s),{},{components:n})):a.createElement(b,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(2875),r=(n(9901),n(7522));const o={},l="Location",i={unversionedId:"api/button/location",id:"api/button/location",title:"Location",description:"Location button is a keyboard only button. After clicking - ask app to share location with bot.",source:"@site/docs/api/button/location.mdx",sourceDirName:"api/button",slug:"/api/button/location",permalink:"/Telegraph/docs/next/api/button/location",draft:!1,editUrl:"https://github.com/vitalics/telegraph/tree/main/packages/docs/docs/api/button/location.mdx",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Events",permalink:"/Telegraph/docs/next/api/button/events"},next:{title:"Phone",permalink:"/Telegraph/docs/next/api/button/phone"}},c={},p=[{value:"extends",id:"extends",level:2},{value:"Events",id:"events",level:2},{value:"Click",id:"click",level:3},{value:"name",id:"name",level:4},{value:"payload",id:"payload",level:4},{value:"Location",id:"location-1",level:3},{value:"name",id:"name-1",level:4},{value:"payload",id:"payload-1",level:4}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"location"},"Location"),(0,r.kt)("p",null,"Location button is a keyboard only button. After clicking - ask app to share location with bot."),(0,r.kt)("p",null,"After location recieved - fires ",(0,r.kt)("a",{parentName:"p",href:"#location-1"},(0,r.kt)("inlineCode",{parentName:"a"},"location"))," event."),(0,r.kt)("h2",{id:"extends"},"extends"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./keyboard"},"KeyboardButton")),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"click"},"Click"),(0,r.kt)("small",null,"added in 1.1.0"),(0,r.kt)("h4",{id:"name"},"name"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"click")),(0,r.kt)("h4",{id:"payload"},"payload"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ctx")," - <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. Telegraf update ",(0,r.kt)("a",{parentName:"li",href:"https://telegraf.js.org/classes/Context.html#addStickerToSet"},"Context"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"button")," - <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),"> - the ",(0,r.kt)("a",{parentName:"li",href:"./keyboard"},"Keyboard Button")," instance")),(0,r.kt)("h3",{id:"location-1"},"Location"),(0,r.kt)("small",null,"added in 1.1.0"),(0,r.kt)("h4",{id:"name-1"},"name"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"click")),(0,r.kt)("h4",{id:"payload-1"},"payload"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ctx")," - <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. Telegraf update ",(0,r.kt)("a",{parentName:"li",href:"https://telegraf.js.org/classes/Context.html#addStickerToSet"},"Context"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"location")," - <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),"> - the ",(0,r.kt)("a",{parentName:"li",href:"https://telegraf.js.org/modules/Types.html#ExtraLocation"},"location")," object")))}d.isMDXComponent=!0}}]);