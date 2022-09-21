"use strict";(self.webpackChunk_tlgr_docs=self.webpackChunk_tlgr_docs||[]).push([[9667],{7522:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(9901);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(2875),r=(n(9901),n(7522));const i={},l="Button",o={unversionedId:"api/button/inline",id:"api/button/inline",title:"Button",description:"Provides api for a new button with custom name.",source:"@site/docs/api/button/inline.mdx",sourceDirName:"api/button",slug:"/api/button/inline",permalink:"/Telegraph/docs/api/button/inline",draft:!1,editUrl:"https://github.com/vitalics/telegraph/tree/main/packages/docs/docs/api/button/inline.mdx",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Keyboard Component",permalink:"/Telegraph/docs/api/component/keyboard"},next:{title:"Keyboard",permalink:"/Telegraph/docs/api/button/keyboard"}},p={},d=[{value:"extends",id:"extends",level:2},{value:"<code>constructor(bot, name, [options])</code>",id:"constructorbot-name-options",level:2},{value:"methods",id:"methods",level:2},{value:"<code>render([payload])</code>",id:"renderpayload",level:3},{value:"properties",id:"properties",level:2},{value:"<code>uuid</code>",id:"uuid",level:3},{value:"modifiers",id:"modifiers",level:4},{value:"description",id:"description",level:4},{value:"<code>name</code>",id:"name",level:3},{value:"modifiers",id:"modifiers-1",level:4},{value:"description",id:"description-1",level:4},{value:"<code>payload</code>",id:"payload",level:3},{value:"modifiers",id:"modifiers-2",level:4},{value:"description",id:"description-2",level:4}],s={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"button"},"Button"),(0,r.kt)("p",null,"Provides api for a new button with custom name."),(0,r.kt)("p",null,"Button API is similar as for Node.js ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/dist/latest-v16.x/docs/api/events.html#class-eventemitter"},"EventEmitter")," class, but provides only ",(0,r.kt)("inlineCode",{parentName:"p"},"on"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"once"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"emit")," functions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Button } from "@tlgr/button";\nconst button = new Button(options);\n')),(0,r.kt)("h2",{id:"extends"},"extends"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../component/inline"},"InlineComponent"))),(0,r.kt)("h2",{id:"constructorbot-name-options"},(0,r.kt)("inlineCode",{parentName:"h2"},"constructor(bot, name, [options])")),(0,r.kt)("small",null," added in 1.0.0 "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bot")," - <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. ",(0,r.kt)("a",{parentName:"li",href:"https://telegraf.js.org/classes/Telegraf.html"},"Telegraf")," instance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," - <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Button name, or text which user will see."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options?")," - <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prefix")," - <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Name of the control. Default is ",(0,r.kt)("inlineCode",{parentName:"li"},"@tlgr/button")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"disableUUID")," - <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type"},"boolean"),">. Enable/Disable uuid generation for button control. It guarantee about button has be unique name. Default is ",(0,r.kt)("inlineCode",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"payloadDivider")," -<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Payload divider between name and payload. Default is ",(0,r.kt)("inlineCode",{parentName:"li"},"-")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"alert")," - <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. Alert options. Default is ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"text"),"- <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Alert text."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mode")," - <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Alert mode. Possible values: ",(0,r.kt)("inlineCode",{parentName:"li"},"text")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"modal"),". Default is ",(0,r.kt)("inlineCode",{parentName:"li"},"text")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"show")," - <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type"},"boolean"),">. Show modal or not. Default is ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")))))),(0,r.kt)("h2",{id:"methods"},"methods"),(0,r.kt)("h3",{id:"renderpayload"},(0,r.kt)("inlineCode",{parentName:"h3"},"render([payload])")),(0,r.kt)("small",null," added in 1.0.0 "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"payload")," - <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),"> - payload name. Default is ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),". Accepts ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#numeric_types"},(0,r.kt)("inlineCode",{parentName:"a"},"number")),", ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},(0,r.kt)("inlineCode",{parentName:"a"},"string")),", ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type"},(0,r.kt)("inlineCode",{parentName:"a"},"boolean"))," or ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#symbol_type"},(0,r.kt)("inlineCode",{parentName:"a"},"symbol"))," types.")),(0,r.kt)("h2",{id:"properties"},"properties"),(0,r.kt)("h3",{id:"uuid"},(0,r.kt)("inlineCode",{parentName:"h3"},"uuid")),(0,r.kt)("small",null,"added in 1.0.0"),(0,r.kt)("h4",{id:"modifiers"},"modifiers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"readonly")),(0,r.kt)("h4",{id:"description"},"description"),(0,r.kt)("p",null,"Random generated hash. Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," in case if ",(0,r.kt)("inlineCode",{parentName:"p"},"options.disableUUID=true")),(0,r.kt)("h3",{id:"name"},(0,r.kt)("inlineCode",{parentName:"h3"},"name")),(0,r.kt)("small",null,"added in 1.0.0"),(0,r.kt)("h4",{id:"modifiers-1"},"modifiers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"readonly"),(0,r.kt)("li",{parentName:"ul"},"getter")),(0,r.kt)("h4",{id:"description-1"},"description"),(0,r.kt)("p",null,"Resolved button name. This property consist of ",(0,r.kt)("inlineCode",{parentName:"p"},"options.prefix")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"options.disableUUID"),"."),(0,r.kt)("h3",{id:"payload"},(0,r.kt)("inlineCode",{parentName:"h3"},"payload")),(0,r.kt)("small",null,"added in 1.0.0"),(0,r.kt)("h4",{id:"modifiers-2"},"modifiers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"readonly"),(0,r.kt)("li",{parentName:"ul"},"getter")),(0,r.kt)("h4",{id:"description-2"},"description"),(0,r.kt)("p",null,"Called payload. Payload sets after ",(0,r.kt)("a",{parentName:"p",href:"'./button#renderpayload'"},(0,r.kt)("inlineCode",{parentName:"a"},"render([payload])"))," function"))}u.isMDXComponent=!0}}]);