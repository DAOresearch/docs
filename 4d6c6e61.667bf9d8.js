(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(6),a=(n(0),n(146)),i={title:"System Design"},s={id:"system-design",title:"System Design",description:"Once you're figured out what you want to do, why, and how/when then you can actually design your DAO. The important thing here is to know what you want to do, then use the tools required to get the job done. Don't start with the tools! Otherwise you'll become like a man with a hammer. Choose the tools based on your goals and design constraints.",source:"@site/docs/system-design.md",permalink:"/docs/docs/system-design",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/system-design.md",sidebar:"someSidebar",previous:{title:"Mechanisms",permalink:"/docs/docs/mechanisms"},next:{title:"Diagram",permalink:"/docs/docs/diagram"}},c=[{value:"Process",id:"process",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Once you're figured out what you want to do, why, and how/when then you can actually design your DAO. The important thing here is to know what you want to do, then use the tools required to get the job done. Don't start with the tools! Otherwise you'll become like a man with a hammer. Choose the tools based on your goals and design constraints."),Object(a.b)("p",null,"In the DAO space, at the time of writing, this can be tricky. Many tools are immature, design patterns are few and far between, and interdisciplinary collaborations are still emerging. Regardless, we can apply best practices from systems engineering to help us design a DAO. "),Object(a.b)("h2",{id:"process"},"Process"),Object(a.b)("p",null,"TBD what exactly goes here, but probably a high level overview of various DAO frameworks, mechanisms, and design patterns available. This section is going to rely heavily on the knowledge of the DAO architect to compose the right mechanisms into a DAO design. Due to the complexity of the space different architects might approach the same design goals in different ways. That's totally ok. We want a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=75769EjciVk"}),"diversity of DAOs"),"."),Object(a.b)("h2",{id:"next-steps"},"Next Steps"),Object(a.b)("p",null,"Once we have our DAO system designed we can ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"diagram.md"}),"diagram it so that it's easier to understand"),"."))}u.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||a;return n?o.a.createElement(m,s({ref:t},l,{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);