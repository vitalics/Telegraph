"use strict";(self.webpackChunk_tlgr_docs=self.webpackChunk_tlgr_docs||[]).push([[4013],{4405:(e,t,a)=>{a.d(t,{Z:()=>k});var l=a(9901),n=a(4517),r=a(1010),s=a(8305),c=a(8591),i=a(6453);const m="sidebar_ATPE",o="sidebarItemTitle_g1vK",u="sidebarItemList_GFbf",g="sidebarItem_KPkC",d="sidebarItemLink_hjoM",E="sidebarItemLinkActive_ve_j";function b(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(u,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:g},l.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:E},e.title)))))))}var p=a(4391);function v(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function _(e){return l.createElement(p.Zo,{component:v,props:e})}function h(e){let{sidebar:t}=e;const a=(0,s.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(_,{sidebar:t}):l.createElement(b,{sidebar:t}):null}function k(e){const{sidebar:t,toc:a,children:s,...c}=e,i=t&&t.items.length>0;return l.createElement(r.Z,c,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(h,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},9757:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var l=a(9901),n=a(4517),r=a(6453);var s=a(2912),c=a(6596),i=a(4405),m=a(3609);const o="tag_S46W";function u(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:o},l.createElement(m.Z,e))))),l.createElement("hr",null))}function g(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(u,{key:e.letter,letterEntry:e}))))}var d=a(4948);function E(e){let{tags:t,sidebar:a}=e;const m=(0,r.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});return l.createElement(s.FG,{className:(0,n.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},l.createElement(s.d,{title:m}),l.createElement(d.Z,{tag:"blog_tags_list"}),l.createElement(i.Z,{sidebar:a},l.createElement("h1",null,m),l.createElement(g,{tags:t})))}},3609:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(9901),n=a(4517),r=a(8591);const s="tag_d9Un",c="tagRegular_Uxj9",i="tagWithCount_iJ4v";function m(e){let{permalink:t,label:a,count:m}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(s,m?i:c)},a,m&&l.createElement("span",null,m))}}}]);