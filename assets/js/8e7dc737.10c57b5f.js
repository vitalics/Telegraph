"use strict";(self.webpackChunk_tlgr_docs=self.webpackChunk_tlgr_docs||[]).push([[5716],{7522:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9901);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(2875),o=(n(9901),n(7522));const a={},l="Events",i={unversionedId:"tutorial/button/events",id:"version-1.x/tutorial/button/events",title:"Events",description:"Button component has several events and lifecycle hooks",source:"@site/versioned_docs/version-1.x/tutorial/button/events.md",sourceDirName:"tutorial/button",slug:"/tutorial/button/events",permalink:"/Telegraph/docs/tutorial/button/events",draft:!1,editUrl:"https://github.com/vitalics/telegraph/tree/main/packages/docs/versioned_docs/version-1.x/tutorial/button/events.md",tags:[],version:"1.x",frontMatter:{},sidebar:"tutorial",previous:{title:"Installation",permalink:"/Telegraph/docs/tutorial/button/installation"}},c={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"events"},"Events"),(0,o.kt)("p",null,"Button component has several events and lifecycle hooks"),(0,o.kt)("p",null,"The lifecycle hooks are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"constructor"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"render")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"cleanup"))),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.ts"',title:'"index.ts"'},"import {Telegraf} from 'telegraf';\n\nconst bot = new Telegraf('<TOKEN>');\n// constructor lifecycle\nconst button = new Button(bot, 'button name', options);\n\nbutton.on('click', (ctx, button) => {\n    ctx.reply(`Congrats! You clicked with payload: ${button.payload}`)\n});\n\nbot.command('start', ctx => {\n    ctx.sendMessage('Hello from button example', {\n    reply_markup: {\n      inline_keyboard: [\n        // render lifecycle with custom payload\n        [button.render('DATA')],\n      ],\n    }\n  });\n});\n\n// after 5 seconds, \"click\" event is never been called anymore.\nsetTimeout(() => {\n  button.cleanup();\n}, 5000);\n\nbot.launch();\n")))}p.isMDXComponent=!0}}]);