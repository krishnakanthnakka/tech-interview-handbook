(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),o=(n(0),n(172));const a={id:"math",title:"Math"},i={id:"algorithms/math",title:"Math",description:"Notes",source:"@site/../contents/algorithms/math.md",permalink:"/tech-interview-handbook/algorithms/math",editUrl:"https://github.com/krishnakanthnakka/tech-interview-handbook/edit/master/contents/../contents/algorithms/math.md",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1569463535,sidebar:"docs",previous:{title:"Linked List",permalink:"/tech-interview-handbook/algorithms/linked-list"},next:{title:"Matrix",permalink:"/tech-interview-handbook/algorithms/matrix"}},l=[{value:"Notes",id:"notes",children:[]},{value:"Recommended LeetCode questions",id:"recommended-leetcode-questions",children:[]}],c={rightToc:l};function u({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"notes"},"Notes"),Object(o.b)("p",null,"If code involves division or modulo, remember to check for division or modulo by 0 case."),Object(o.b)("p",null,'When a question involves "a multiple of a number", perhaps modulo might be useful.'),Object(o.b)("p",null,"Check for and handle overflow/underflow if you are using a typed language like Java and C++. At the very least, mention that overflow/underflow is possible and ask whether you need to handle it."),Object(o.b)("p",null,"Consider negative numbers and floating point numbers. This may sound obvious, but under interview pressure, many obvious cases go unnoticed."),Object(o.b)("p",null,"If the question asks to implement an operator such as power, squareroot or division and want it to be faster than O(n), binary search is usually the approach to go."),Object(o.b)("h4",{id:"some-common-formulas"},"Some common formulas:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Sum of 1 to N = (n+1) ","*"," n/2"),Object(o.b)("li",{parentName:"ul"},"Sum of GP = 2",Object(o.b)("sup",null,"0")," + 2",Object(o.b)("sup",null,"1")," + 2",Object(o.b)("sup",null,"2")," + 2",Object(o.b)("sup",null,"3")," + ... 2",Object(o.b)("sup",null,"n")," = 2",Object(o.b)("sup",null,"n+1")," - 1"),Object(o.b)("li",{parentName:"ul"},"Permutations of N = N! / (N-K)!"),Object(o.b)("li",{parentName:"ul"},"Combinations of N = N! / (K! ","*"," (N-K)!)")),Object(o.b)("h2",{id:"recommended-leetcode-questions"},"Recommended LeetCode questions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/powx-n/"}),"Pow(x, n)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/sqrtx/"}),"Sqrt(x)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/integer-to-english-words/"}),"Integer to English Words"))))}u.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||a;return n?o.a.createElement(d,l({ref:t},u,{components:n})):o.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);