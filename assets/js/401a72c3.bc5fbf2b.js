"use strict";(self.webpackChunk_tlgr_docs=self.webpackChunk_tlgr_docs||[]).push([[9369],{7522:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>u});var n=t(9901);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,f=m["".concat(c,".").concat(u)]||m[u]||s[u]||o;return t?n.createElement(f,l(l({ref:r},d),{},{components:t})):n.createElement(f,l({ref:r},d))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7794:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(2875),a=(t(9901),t(7522));const o={},l="render",i={unversionedId:"api/fmt/react/render",id:"api/fmt/react/render",title:"render",description:"Returns HTML raw texts",source:"@site/docs/api/fmt/react/render.mdx",sourceDirName:"api/fmt/react",slug:"/api/fmt/react/render",permalink:"/Telegraph/docs/api/fmt/react/render",draft:!1,editUrl:"https://github.com/vitalics/telegraph/tree/main/packages/docs/docs/api/fmt/react/render.mdx",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Underline",permalink:"/Telegraph/docs/api/fmt/string/underline"},next:{title:"Bold API",permalink:"/Telegraph/docs/api/fmt/react/bold"}},c={},p=[{value:"render(children, ...args)",id:"renderchildren-args",level:2},{value:"returns",id:"returns",level:2},{value:"Example",id:"example",level:3}],d={toc:p};function s(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"render"},"render"),(0,a.kt)("p",null,"Returns HTML raw texts"),(0,a.kt)("h2",{id:"renderchildren-args"},"render(children, ","[...args]",")"),(0,a.kt)("small",null,"added in 1.3.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"children")," - <",(0,a.kt)("a",{parentName:"li",href:"https://preactjs.com/guide/v10/api-reference/#h--createelement"},"JSX.Element"),">. Input string, accepts ",(0,a.kt)("inlineCode",{parentName:"li"},"TemplateStringArray")," instead of string."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"args")," - <",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object"),"> reply context object. Note: ",(0,a.kt)("inlineCode",{parentName:"li"},"render")," already uses ",(0,a.kt)("inlineCode",{parentName:"li"},"{parse_mode: 'HTML'}"),". Do not overwrite this property")),(0,a.kt)("h2",{id:"returns"},"returns"),(0,a.kt)("p",null,"Array of raw text without text modifiers and array of modifiers."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const formatteed = render(\n  <Fragment>\n    some <Bold>bold</Bold> text\n  </Fragment>\n);\nformatted[0]; // some <b>bold</b> text\nformatted[1]; // { parse_mode: 'HTML'}\n")))}s.isMDXComponent=!0}}]);