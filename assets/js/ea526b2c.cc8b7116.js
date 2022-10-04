"use strict";(self.webpackChunk_tlgr_docs=self.webpackChunk_tlgr_docs||[]).push([[7027],{7522:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var l=a(9901);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=l.createContext({}),d=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return l.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(a),k=n,u=c["".concat(p,".").concat(k)]||c[k]||m[k]||r;return a?l.createElement(u,i(i({ref:t},s),{},{components:a})):l.createElement(u,i({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9911:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var l=a(2875),n=(a(9901),a(7522));const r={},i="Day Picker",o={unversionedId:"api/date-picker/day",id:"api/date-picker/day",title:"Day Picker",description:"Provides api for a day picker with simple API.",source:"@site/docs/api/date-picker/day.mdx",sourceDirName:"api/date-picker",slug:"/api/date-picker/day",permalink:"/Telegraph/docs/api/date-picker/day",draft:!1,editUrl:"https://github.com/vitalics/telegraph/tree/main/packages/docs/docs/api/date-picker/day.mdx",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Quiz",permalink:"/Telegraph/docs/api/button/quiz"},next:{title:"Month Picker",permalink:"/Telegraph/docs/api/date-picker/month"}},p={},d=[{value:"extends",id:"extends",level:2},{value:"<code>constructor(bot, [options])</code>",id:"constructorbot-options",level:2},{value:"methods",id:"methods",level:2},{value:"<code>render()</code>",id:"render",level:3},{value:"properties",id:"properties",level:2},{value:"<code>date</code>",id:"date",level:3},{value:"modifiers",id:"modifiers",level:4},{value:"description",id:"description",level:4},{value:"Events",id:"events",level:2},{value:"Click",id:"click",level:3},{value:"name",id:"name",level:4},{value:"payload",id:"payload",level:4},{value:"Next",id:"next",level:3},{value:"name",id:"name-1",level:4},{value:"payload",id:"payload-1",level:4},{value:"Previous",id:"previous",level:3},{value:"name",id:"name-2",level:4},{value:"payload",id:"payload-2",level:4},{value:"Day",id:"day",level:3},{value:"name",id:"name-3",level:4},{value:"payload",id:"payload-3",level:4},{value:"Weekday",id:"weekday",level:3},{value:"name",id:"name-4",level:4},{value:"payload",id:"payload-4",level:4},{value:"MonthYear",id:"monthyear",level:3},{value:"name",id:"name-5",level:4},{value:"payload",id:"payload-5",level:4}],s={toc:d};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"day-picker"},"Day Picker"),(0,n.kt)("p",null,"Provides api for a day picker with simple API."),(0,n.kt)("p",null,"Day Picker API is similar as for Node.js ",(0,n.kt)("a",{parentName:"p",href:"https://nodejs.org/dist/latest-v16.x/docs/api/events.html#class-eventemitter"},"EventEmitter")," class, but provides only ",(0,n.kt)("inlineCode",{parentName:"p"},"on"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"once"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"emit")," functions."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},'import { DayPicker } from "@tlgr/date-picker";\nconst dayPicker = new DayPicker(options);\n')),(0,n.kt)("h2",{id:"extends"},"extends"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../component/inline"},"Component"))),(0,n.kt)("h2",{id:"constructorbot-options"},(0,n.kt)("inlineCode",{parentName:"h2"},"constructor(bot, [options])")),(0,n.kt)("small",null," added in 1.0.0 "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bot")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. ",(0,n.kt)("a",{parentName:"li",href:"https://telegraf.js.org/classes/Telegraf.html"},"Telegraf")," instance."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options?")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mode")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},(0,n.kt)("inlineCode",{parentName:"a"},"'edit' | 'new' | undefined")),">. Reply mode. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"edit"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"date")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"},"Date"),">. Started date. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"Date.now()"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"showPast")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type"},"boolean"),">. Show past dates. If ",(0,n.kt)("inlineCode",{parentName:"li"},"false")," - will render dates before Today as buttons with empty string. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"false")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"locale")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. date locale. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"en-US"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"controls"),"- <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. Controls options.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"prev")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. Previous control options.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"symbol")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Render symol. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"' '"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"alert")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. Alert options.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"text")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Alert text. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mode")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Alert mode. Possible values: ",(0,n.kt)("inlineCode",{parentName:"li"},"text")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"modal"),". Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"text")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"show")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type"},"boolean"),">. Show modal or not. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"next")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. Previous control options.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"symbol")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Render symol. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"' '"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"alert")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. Alert options.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"text")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Alert text. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mode")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Alert mode. Possible values: ",(0,n.kt)("inlineCode",{parentName:"li"},"text")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"modal"),". Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"text")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"show")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type"},"boolean"),">. Show modal or not. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"empty")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. Previous control options.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"symbol")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Render symol. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"' '"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"alert")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. Alert options.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"text")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Alert text. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mode")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),">. Alert mode. Possible values: ",(0,n.kt)("inlineCode",{parentName:"li"},"text")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"modal"),". Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"text")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"show")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type"},"boolean"),">. Show modal or not. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),".")))))))))),(0,n.kt)("h2",{id:"methods"},"methods"),(0,n.kt)("h3",{id:"render"},(0,n.kt)("inlineCode",{parentName:"h3"},"render()")),(0,n.kt)("small",null," added in 1.0.0 "),(0,n.kt)("p",null,"Returns Day picker grid."),(0,n.kt)("h2",{id:"properties"},"properties"),(0,n.kt)("h3",{id:"date"},(0,n.kt)("inlineCode",{parentName:"h3"},"date")),(0,n.kt)("small",null,"added in 1.0.0"),(0,n.kt)("h4",{id:"modifiers"},"modifiers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"readonly"),(0,n.kt)("li",{parentName:"ul"},"getter")),(0,n.kt)("h4",{id:"description"},"description"),(0,n.kt)("p",null,"returns current ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"},"Date")," instance."),(0,n.kt)("h2",{id:"events"},"Events"),(0,n.kt)("p",null,"Events are not exported, but you can subscribe to events by it's name"),(0,n.kt)("h3",{id:"click"},"Click"),(0,n.kt)("small",null,"added in 1.0.0"),(0,n.kt)("h4",{id:"name"},"name"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"click")),(0,n.kt)("h4",{id:"payload"},"payload"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ctx")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. Telegraf update ",(0,n.kt)("a",{parentName:"li",href:"https://telegraf.js.org/classes/Context.html#addStickerToSet"},"Context"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"date")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"},"Date"),"> - choosen date.")),(0,n.kt)("h3",{id:"next"},"Next"),(0,n.kt)("small",null,"added in 1.0.0"),(0,n.kt)("p",null,"Fires when ",(0,n.kt)("inlineCode",{parentName:"p"},"next")," month is clicked"),(0,n.kt)("h4",{id:"name-1"},"name"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"next")),(0,n.kt)("h4",{id:"payload-1"},"payload"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ctx")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. Telegraf update ",(0,n.kt)("a",{parentName:"li",href:"https://telegraf.js.org/classes/Context.html#addStickerToSet"},"Context"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"date")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"},"Date"),"> - next date.")),(0,n.kt)("h3",{id:"previous"},"Previous"),(0,n.kt)("small",null,"added in 1.0.0"),(0,n.kt)("p",null,"Fires when ",(0,n.kt)("inlineCode",{parentName:"p"},"previous")," month is clicked"),(0,n.kt)("h4",{id:"name-2"},"name"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"prev")),(0,n.kt)("h4",{id:"payload-2"},"payload"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ctx")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. Telegraf update ",(0,n.kt)("a",{parentName:"li",href:"https://telegraf.js.org/classes/Context.html#addStickerToSet"},"Context"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"date")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"},"Date"),"> - previous date.")),(0,n.kt)("h3",{id:"day"},"Day"),(0,n.kt)("small",null,"added in 1.0.0"),(0,n.kt)("p",null,"Fires when subscribed on ",(0,n.kt)("inlineCode",{parentName:"p"},"day")," event."),(0,n.kt)("h4",{id:"name-3"},"name"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"day")),(0,n.kt)("h4",{id:"payload-3"},"payload"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ctx")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. Telegraf update ",(0,n.kt)("a",{parentName:"li",href:"https://telegraf.js.org/classes/Context.html#addStickerToSet"},"Context"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"date")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#numeric_types"},"number"),"> - returns day of month.")),(0,n.kt)("h3",{id:"weekday"},"Weekday"),(0,n.kt)("small",null,"added in 1.0.0"),(0,n.kt)("h4",{id:"name-4"},"name"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"weekday")),(0,n.kt)("h4",{id:"payload-4"},"payload"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ctx")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. Telegraf update ",(0,n.kt)("a",{parentName:"li",href:"https://telegraf.js.org/classes/Context.html#addStickerToSet"},"Context"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"weekday")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),"> - returns weekday based on your locale.")),(0,n.kt)("h3",{id:"monthyear"},"MonthYear"),(0,n.kt)("small",null,"added in 1.0.0"),(0,n.kt)("p",null,"Fires when Click on ",(0,n.kt)("inlineCode",{parentName:"p"},"MM/YYYY")," button at the header of controls."),(0,n.kt)("h4",{id:"name-5"},"name"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"monthyear")),(0,n.kt)("h4",{id:"payload-5"},"payload"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ctx")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. Telegraf update ",(0,n.kt)("a",{parentName:"li",href:"https://telegraf.js.org/classes/Context.html#addStickerToSet"},"Context"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"monthYear")," - <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"},"string"),"> - returns ",(0,n.kt)("inlineCode",{parentName:"li"},"MM/YYYY")," pattern.")))}m.isMDXComponent=!0}}]);