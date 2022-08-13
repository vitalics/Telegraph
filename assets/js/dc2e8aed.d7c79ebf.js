"use strict";(self.webpackChunk_tlgr_docs=self.webpackChunk_tlgr_docs||[]).push([[9953],{7522:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(9901);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,b=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(b,l(l({ref:t},s),{},{components:n})):r.createElement(b,l({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(2875),o=(n(9901),n(7522));const a={},l="Keyboard Component",i={unversionedId:"api/component/keyboard",id:"api/component/keyboard",title:"Keyboard Component",description:"Abstract class which extends Component instance.",source:"@site/docs/api/component/keyboard.mdx",sourceDirName:"api/component",slug:"/api/component/keyboard",permalink:"/Telegraph/docs/next/api/component/keyboard",draft:!1,editUrl:"https://github.com/vitalics/telegraph/tree/main/packages/docs/docs/api/component/keyboard.mdx",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Inline Component",permalink:"/Telegraph/docs/next/api/component/inline"},next:{title:"Button",permalink:"/Telegraph/docs/next/api/button/inline"}},c={},p=[{value:"extends",id:"extends",level:2},{value:"<code>constructor(bot)</code>",id:"constructorbot",level:2},{value:"methods",id:"methods",level:2},{value:"render()",id:"render",level:3}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"keyboard-component"},"Keyboard Component"),(0,o.kt)("p",null,"Abstract class which extends ",(0,o.kt)("a",{parentName:"p",href:"./base"},(0,o.kt)("inlineCode",{parentName:"a"},"Component"))," instance."),(0,o.kt)("p",null,"Each class should implement ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="example.ts"',title:'"example.ts"'},"import { KeyboardComponent } from \"@tlgr/component\";\nclass MyComponent extends KeyboardComponent {\n  render() {\n    // returns KeyboardButton from telegram API\n    // e.g. Markup.button.callback('my button');\n  }\n}\n")),(0,o.kt)("h2",{id:"extends"},"extends"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./base"},(0,o.kt)("inlineCode",{parentName:"a"},"Component")))),(0,o.kt)("h2",{id:"constructorbot"},(0,o.kt)("inlineCode",{parentName:"h2"},"constructor(bot)")),(0,o.kt)("small",null," added in 1.1.0 "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bot")," - <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),">. ",(0,o.kt)("a",{parentName:"li",href:"https://telegraf.js.org/classes/Telegraf.html"},"Telegraf")," instance.")),(0,o.kt)("h2",{id:"methods"},"methods"),(0,o.kt)("h3",{id:"render"},"render()"),(0,o.kt)("small",null," added in 1.1.0 "),(0,o.kt)("p",null,"Returns Telegram keyboard button isntance."))}d.isMDXComponent=!0}}]);