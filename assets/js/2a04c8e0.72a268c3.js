"use strict";(self.webpackChunk_tlgr_docs=self.webpackChunk_tlgr_docs||[]).push([[843],{7522:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(9901);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(a),h=l,g=m["".concat(p,".").concat(h)]||m[h]||c[h]||r;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2488:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(2875),l=(a(9901),a(7522));const r={slug:"release 1.1.0",title:"1.1.0 is here!",authors:["vitalics"],tags:["release","telegraph","carousel","poll","quiz"]},o=void 0,i={permalink:"/Telegraph/blog/release 1.1.0",editUrl:"https://github.com/vitalics/telegraph/tree/main/packages/docs/blog/2022-08-14/index.mdx",source:"@site/blog/2022-08-14/index.mdx",title:"1.1.0 is here!",description:"The new telegraph components are landed and available on npm.js site.",date:"2022-08-14T00:00:00.000Z",formattedDate:"August 14, 2022",tags:[{label:"release",permalink:"/Telegraph/blog/tags/release"},{label:"telegraph",permalink:"/Telegraph/blog/tags/telegraph"},{label:"carousel",permalink:"/Telegraph/blog/tags/carousel"},{label:"poll",permalink:"/Telegraph/blog/tags/poll"},{label:"quiz",permalink:"/Telegraph/blog/tags/quiz"}],readingTime:.535,hasTruncateMarker:!1,authors:[{name:"Vitali Haradkou",title:"Maintainer of Telegraph",url:"https://github.com/vitalics",imageURL:"https://github.com/vitalics.png",key:"vitalics"}],frontMatter:{slug:"release 1.1.0",title:"1.1.0 is here!",authors:["vitalics"],tags:["release","telegraph","carousel","poll","quiz"]},nextItem:{title:"1.0.0 is here!",permalink:"/Telegraph/blog/release 1.0.0"}},p={authorsImageUrls:[void 0]},s=[{value:"New Components:",id:"new-components",level:2},{value:"Carousel",id:"carousel",level:3},{value:"Poll",id:"poll",level:3},{value:"Quiz",id:"quiz",level:3},{value:"Changes",id:"changes",level:2},{value:"Button",id:"button",level:3},{value:"Component",id:"component",level:3}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The new telegraph components are landed and available on ",(0,l.kt)("a",{parentName:"p",href:"https://npmjs.com"},(0,l.kt)("inlineCode",{parentName:"a"},"npm.js"))," site."),(0,l.kt)("h2",{id:"new-components"},"New Components:"),(0,l.kt)("h3",{id:"carousel"},(0,l.kt)("a",{parentName:"h3",href:"https://github.com/vitalics/telegraph/packages/carousel/"},"Carousel")),(0,l.kt)("p",null,"render item and navigation (",(0,l.kt)("inlineCode",{parentName:"p"},"<")," and ",(0,l.kt)("inlineCode",{parentName:"p"},">"),") symbols."),(0,l.kt)("p",null,"Can render ",(0,l.kt)("inlineCode",{parentName:"p"},"text")," , ",(0,l.kt)("inlineCode",{parentName:"p"},"video"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"audio"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"animation")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"photo")," messages."),(0,l.kt)("p",null,"Installation:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"npm i @tlgr/carousel")),(0,l.kt)("h3",{id:"poll"},(0,l.kt)("a",{parentName:"h3",href:"https://github.com/vitalics/telegraph/packages/poll/"},"Poll")),(0,l.kt)("p",null,"Poll ask user to answer a question."),(0,l.kt)("p",null,"Installation:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"npm i @tlgr/poll")),(0,l.kt)("h3",{id:"quiz"},(0,l.kt)("a",{parentName:"h3",href:"https://github.com/vitalics/telegraph/packages/poll/"},"Quiz")),(0,l.kt)("p",null,"Quiz is similar to poll but have ",(0,l.kt)("inlineCode",{parentName:"p"},"correct_option_id")," which marks correct answer id."),(0,l.kt)("p",null,"Installation:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"npm i @tlgr/quiz")),(0,l.kt)("h2",{id:"changes"},"Changes"),(0,l.kt)("h3",{id:"button"},(0,l.kt)("a",{parentName:"h3",href:"https://github.com/vitalics/telegraph/packages/button"},"Button")),(0,l.kt)("p",null,"Introduce button keyboard component."),(0,l.kt)("p",null,"New Keyboard buttons. See ",(0,l.kt)("a",{parentName:"p",href:"https://vitalics.github.io/Telegraph/docs/tutorial/button/types"},"types"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"location"),(0,l.kt)("li",{parentName:"ul"},"phone"),(0,l.kt)("li",{parentName:"ul"},"poll"),(0,l.kt)("li",{parentName:"ul"},"quiz")),(0,l.kt)("h3",{id:"component"},(0,l.kt)("a",{parentName:"h3",href:"https://github.com/vitalics/telegraph/packages/component"},"Component")),(0,l.kt)("p",null,"New Component: Keyboard"),(0,l.kt)("p",null,"Full Changelog available at link: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/vitalics/Telegraph/blob/main/releases/v1.1.0.md"},"https://github.com/vitalics/Telegraph/blob/main/releases/v1.1.0.md")),(0,l.kt)("p",null,"Made with \u2764\ufe0f from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/vitalics"},"vitalics")))}c.isMDXComponent=!0}}]);