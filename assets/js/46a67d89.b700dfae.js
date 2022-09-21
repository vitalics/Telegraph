"use strict";(self.webpackChunk_tlgr_docs=self.webpackChunk_tlgr_docs||[]).push([[790],{7522:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(9901);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||l;return a?r.createElement(k,i(i({ref:t},c),{},{components:a})):r.createElement(k,i({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8740:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(2875),n=(a(9901),a(7522));const l={},i="Carousel",o={unversionedId:"api/carousel/base",id:"api/carousel/base",title:"Carousel",description:"Carousel is a component which can scroll(re render) item",source:"@site/docs/api/carousel/base.mdx",sourceDirName:"api/carousel",slug:"/api/carousel/base",permalink:"/Telegraph/docs/api/carousel/base",draft:!1,editUrl:"https://github.com/vitalics/telegraph/tree/main/packages/docs/docs/api/carousel/base.mdx",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Month Picker",permalink:"/Telegraph/docs/api/date-picker/month"},next:{title:"Events",permalink:"/Telegraph/docs/api/carousel/events"}},p={},s=[{value:"extends",id:"extends",level:2},{value:"<code>constructor(bot, options)</code>",id:"constructorbot-options",level:2},{value:"methods",id:"methods",level:2},{value:"send(context)",id:"sendcontext",level:3},{value:"render()",id:"render",level:3},{value:"properties",id:"properties",level:2},{value:"item",id:"item",level:3},{value:"index",id:"index",level:3},{value:"length",id:"length",level:3}],c={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"carousel"},"Carousel"),(0,n.kt)("p",null,"Carousel is a component which can scroll(re render) item"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Carousel } from "@tlgr/carousel";\nconst carousel = new Carousel(options);\n')),(0,n.kt)("p",null,"Events described at ",(0,n.kt)("a",{parentName:"p",href:"./events"},"events")," page"),(0,n.kt)("h2",{id:"extends"},"extends"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../component/inline"},"InlineComponent"))),(0,n.kt)("h2",{id:"constructorbot-options"},(0,n.kt)("inlineCode",{parentName:"h2"},"constructor(bot, options)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"bot")," - <",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. ",(0,n.kt)("a",{parentName:"p",href:"https://telegraf.js.org/classes/Telegraf.html"},"Telegraf")," instance.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"options")," - <",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. Carousel options."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"type")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. can be the one of the next items: ",(0,n.kt)("inlineCode",{parentName:"li"},"'photo' | 'audio' | 'animation' | 'video' | 'document'")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"items")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"object")," | ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),"> - Carousel item. Usually it is a url to content. E.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"https://example.com/path/to/image")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mode")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Reply mode. ",(0,n.kt)("inlineCode",{parentName:"li"},"new")," - sends new message. ",(0,n.kt)("inlineCode",{parentName:"li"},"edit")," - edit first sended message. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"edit")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"loop")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type"},"boolean"),">. Loop mode. Starts over again when end item is reach out. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"false")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"startFrom")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#numeric_types"},"number"),"> - Index which carousel will start. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"controls")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"object"),">. Controls decoration object. Override prev and next button behavior.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"prev")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"object"),">. Previous button decoration.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"symbol")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Previous symbol. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"<"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"alert")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"object"),">. Alert options.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"text"),"- <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Alert text."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mode")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Alert mode. Possible values: ",(0,n.kt)("inlineCode",{parentName:"li"},"text")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"modal"),". Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"text")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"show")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type"},"boolean"),">. Show modal or not. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"next")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"object"),">. Next button decoration.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"symbol")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Previous symbol. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},">"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"alert")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"object"),">. Alert options.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"text"),"- <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Alert text."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mode")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Alert mode. Possible values: ",(0,n.kt)("inlineCode",{parentName:"li"},"text")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"modal"),". Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"text")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"show")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type"},"boolean"),">. Show modal or not. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),".")))))))))),(0,n.kt)("h2",{id:"methods"},"methods"),(0,n.kt)("h3",{id:"sendcontext"},"send(context)"),(0,n.kt)("small",null," added in 1.1.0"),(0,n.kt)("p",null,"Sends carousel from bot to user"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"context")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. Telegraf ",(0,n.kt)("a",{parentName:"li",href:"https://telegraf.js.org/classes/Context.html"},"context")," instance.")),(0,n.kt)("h3",{id:"render"},"render()"),(0,n.kt)("small",null," added in 1.1.0"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," this method are come from inheritance. This method returns ",(0,n.kt)("inlineCode",{parentName:"p"},"prev")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"next")," buttons. Use ",(0,n.kt)("inlineCode",{parentName:"p"},"send")," method instead."),(0,n.kt)("h2",{id:"properties"},"properties"),(0,n.kt)("h3",{id:"item"},"item"),(0,n.kt)("p",null,"Return current render item."),(0,n.kt)("h3",{id:"index"},"index"),(0,n.kt)("p",null,"return current render item index in array which starts from ",(0,n.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,n.kt)("h3",{id:"length"},"length"),(0,n.kt)("p",null,"Carousel items length."))}m.isMDXComponent=!0}}]);