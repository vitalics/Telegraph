"use strict";(self.webpackChunk_tlgr_docs=self.webpackChunk_tlgr_docs||[]).push([[9238],{7522:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(9901);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(a),u=l,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6677:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(2875),l=(a(9901),a(7522));const r={},i="Button",o={unversionedId:"api/button",id:"api/button",title:"Button",description:"Provides api for a new button with custom name.",source:"@site/docs/api/button.mdx",sourceDirName:"api",slug:"/api/button",permalink:"/Telegraph/docs/next/api/button",draft:!1,editUrl:"https://github.com/vitalics/telegraph/tree/main/packages/docs/docs/api/button.mdx",tags:[],version:"current",frontMatter:{},sidebar:"api",next:{title:"day",permalink:"/Telegraph/docs/next/api/date-picker/day"}},p={},c=[{value:"<code>constructor(bot, name, [options])</code>",id:"constructorbot-name-options",level:2},{value:"methods",id:"methods",level:2},{value:"<code>render([payload])</code>",id:"renderpayload",level:3},{value:"<code>on(event, callback)</code>",id:"onevent-callback",level:3},{value:"<code>once(event, callback)</code>",id:"onceevent-callback",level:3},{value:"<code>emit(event, callback)</code>",id:"emitevent-callback",level:3},{value:"properties",id:"properties",level:2},{value:"<code>uuid</code>",id:"uuid",level:3},{value:"modifiers",id:"modifiers",level:4},{value:"description",id:"description",level:4},{value:"<code>name</code>",id:"name",level:3},{value:"modifiers",id:"modifiers-1",level:4},{value:"description",id:"description-1",level:4}],s={toc:c};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"button"},"Button"),(0,l.kt)("p",null,"Provides api for a new button with custom name."),(0,l.kt)("p",null,"Button API is similar as for Node.js ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/dist/latest-v16.x/docs/api/events.html#class-eventemitter"},"EventEmitter")," class, but provides only ",(0,l.kt)("inlineCode",{parentName:"p"},"on"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"once"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"emit")," functions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Button } from "@tlgr/button";\nconst button = new Button(options);\n')),(0,l.kt)("h2",{id:"constructorbot-name-options"},(0,l.kt)("inlineCode",{parentName:"h2"},"constructor(bot, name, [options])")),(0,l.kt)("small",null," added in 1.0.0 "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bot")," - <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. ",(0,l.kt)("a",{parentName:"li",href:"https://telegraf.js.org/classes/Telegraf.html"},"Telegraf")," instance."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," - <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Button name, or text which user will see."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options?")," - <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prefix")," - <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Name of the control. Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"@tlgr/button")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"disableUUID")," - <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type"},"boolean"),">. Enable/Disable uuid generation for button control. It guarantee about button has be unique name. Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"payloadDivider")," -<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Payload divider between name and payload. Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"-")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"alert")," - <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. Alert options. Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"text"),"- <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Alert text."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mode")," - <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Alert mode. Possible values: ",(0,l.kt)("inlineCode",{parentName:"li"},"text")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"modal"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"text")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"show")," - <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type"},"boolean"),">. Show modal or not. Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),".")))))),(0,l.kt)("h2",{id:"methods"},"methods"),(0,l.kt)("h3",{id:"renderpayload"},(0,l.kt)("inlineCode",{parentName:"h3"},"render([payload])")),(0,l.kt)("small",null," added in 1.0.0 "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"payload")," - <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),"> - payload name. Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined"),". Accepts ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#numeric_types"},(0,l.kt)("inlineCode",{parentName:"a"},"number")),", ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},(0,l.kt)("inlineCode",{parentName:"a"},"string")),", ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type"},(0,l.kt)("inlineCode",{parentName:"a"},"boolean"))," or ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#symbol_type"},(0,l.kt)("inlineCode",{parentName:"a"},"symbol"))," types.")),(0,l.kt)("h3",{id:"onevent-callback"},(0,l.kt)("inlineCode",{parentName:"h3"},"on(event, callback)")),(0,l.kt)("small",null," added in 1.0.0 "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"event")," - <",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Event name. Only can be ",(0,l.kt)("inlineCode",{parentName:"p"},"click")," value. Other events will be ignored.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"callback")," - <",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions"},"Function"),">. Callback function"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ctx")," - <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. ",(0,l.kt)("a",{parentName:"li",href:"https://telegraf.js.org/classes/Context.html#addStickerToSet"},"Telegraf Context"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"button")," - <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/button"},"Button")," instance.")))),(0,l.kt)("h3",{id:"onceevent-callback"},(0,l.kt)("inlineCode",{parentName:"h3"},"once(event, callback)")),(0,l.kt)("small",null,"added in 1.0.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"event")," - <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Event name. Only can be ",(0,l.kt)("inlineCode",{parentName:"li"},"click")," value. Other events will be ignored."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"callback")," - <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions"},"Function"),">. Callback function",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ctx")," - <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. ",(0,l.kt)("a",{parentName:"li",href:"https://telegraf.js.org/classes/Context.html#addStickerToSet"},"Telegraf Context"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"button")," - <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/button"},"Button")," instance.")))),(0,l.kt)("h3",{id:"emitevent-callback"},(0,l.kt)("inlineCode",{parentName:"h3"},"emit(event, callback)")),(0,l.kt)("small",null,"added in 1.0.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"event")," - <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Event name. Only can be ",(0,l.kt)("inlineCode",{parentName:"li"},"click")," value. Other events will be ignored."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ctx")," - <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. ",(0,l.kt)("a",{parentName:"li",href:"https://telegraf.js.org/classes/Context.html#addStickerToSet"},"Telegraf Context"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"button")," - <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/button"},"Button")," instance.")),(0,l.kt)("h2",{id:"properties"},"properties"),(0,l.kt)("h3",{id:"uuid"},(0,l.kt)("inlineCode",{parentName:"h3"},"uuid")),(0,l.kt)("small",null,"added in 1.0.0"),(0,l.kt)("h4",{id:"modifiers"},"modifiers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"readonly")),(0,l.kt)("h4",{id:"description"},"description"),(0,l.kt)("p",null,"Random generated hash. Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," in case if ",(0,l.kt)("inlineCode",{parentName:"p"},"options.disableUUID=true")),(0,l.kt)("h3",{id:"name"},(0,l.kt)("inlineCode",{parentName:"h3"},"name")),(0,l.kt)("small",null,"added in 1.0.0"),(0,l.kt)("h4",{id:"modifiers-1"},"modifiers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"readonly"),(0,l.kt)("li",{parentName:"ul"},"getter")),(0,l.kt)("h4",{id:"description-1"},"description"),(0,l.kt)("p",null,"Resolved button name. This property consist of ",(0,l.kt)("inlineCode",{parentName:"p"},"options.prefix")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"options.disableUUID"),"."))}d.isMDXComponent=!0}}]);