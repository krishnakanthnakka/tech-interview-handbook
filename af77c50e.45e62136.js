(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{148:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return b}));var a=r(1),n=r(6),i=(r(0),r(171)),o={id:"tree",title:"Tree"},l={id:"algorithms/tree",title:"Tree",description:"Study links",source:"@site/../contents/algorithms/tree.md",permalink:"/tech-interview-handbook/algorithms/tree",editUrl:"https://github.com/krishnakanthnakka/tech-interview-handbook/edit/master/contents/../contents/algorithms/tree.md",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1569463535,sidebar:"docs",previous:{title:"String",permalink:"/tech-interview-handbook/algorithms/string"},next:{title:"Trie",permalink:"/tech-interview-handbook/algorithms/trie"}},c=[{value:"Study links",id:"study-links",children:[]},{value:"Notes",id:"notes",children:[]},{value:"Corner cases",id:"corner-cases",children:[]},{value:"Special Trees",id:"special-trees",children:[{value:"Binary Tree",id:"binary-tree",children:[]},{value:"Binary Search Tree (BST)",id:"binary-search-tree-bst",children:[]}]}],s={rightToc:c};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"study-links"},"Study links"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://medium.com/basecs/leaf-it-up-to-binary-trees-11001aaf746d"}),"Leaf It Up To Binary Trees"))),Object(i.b)("h2",{id:"notes"},"Notes"),Object(i.b)("p",null,"A tree is an undirected and connected acyclic graph."),Object(i.b)("p",null,"Recursion is a common approach for trees. When you notice that the subtree problem can be used to solve the entire problem, try using recursion."),Object(i.b)("p",null,"When using recursion, always remember to check for the base case, usually where the node is ",Object(i.b)("inlineCode",{parentName:"p"},"null"),"."),Object(i.b)("p",null,"When you are asked to traverse a tree by level, use breadth-first search."),Object(i.b)("p",null,"Sometimes it is possible that your recursive function needs to return two values."),Object(i.b)("p",null,"If the question involves summation of nodes along the way, be sure to check whether nodes can be negative."),Object(i.b)("p",null,"You should be very familiar with writing pre-order, in-order, and post-order traversal recursively. As an extension, challenge yourself by writing them iteratively. Sometimes interviewers ask candidates for the iterative approach, especially if the candidate finishes writing the recursive approach too quickly."),Object(i.b)("p",null,"Do check out the section on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/tech-interview-handbook/algorithms/trie"}),"Trie"),", which is an advanced tree."),Object(i.b)("h2",{id:"corner-cases"},"Corner cases"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Empty tree"),Object(i.b)("li",{parentName:"ul"},"Single node"),Object(i.b)("li",{parentName:"ul"},"Two nodes"),Object(i.b)("li",{parentName:"ul"},"Very skewed tree (like a linked list)")),Object(i.b)("h2",{id:"special-trees"},"Special Trees"),Object(i.b)("h3",{id:"binary-tree"},"Binary Tree"),Object(i.b)("p",null,"In-order traversal of a binary tree is insufficient to uniquely serialize a tree. Pre-order or post-order traversal is also required."),Object(i.b)("h3",{id:"binary-search-tree-bst"},"Binary Search Tree (BST)"),Object(i.b)("p",null,"In-order traversal of a BST will give you all elements in order."),Object(i.b)("p",null,"Be very familiar with the properties of a BST and validating that a binary tree is a BST. This comes up more often than expected."),Object(i.b)("p",null,"When a question involves a BST, the interviewer is usually looking for a solution which runs faster than O(n)."),Object(i.b)("h4",{id:"recommended-leetcode-questions"},"Recommended LeetCode questions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://leetcode.com/problems/maximum-depth-of-binary-tree/"}),"Maximum Depth of Binary Tree")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://leetcode.com/problems/same-tree/"}),"Same Tree")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://leetcode.com/problems/invert-binary-tree/"}),"Invert/Flip Binary Tree")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://leetcode.com/problems/binary-tree-maximum-path-sum/"}),"Binary Tree Maximum Path Sum")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://leetcode.com/problems/binary-tree-level-order-traversal/"}),"Binary Tree Level Order Traversal")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"}),"Serialize and Deserialize Binary Tree")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://leetcode.com/problems/subtree-of-another-tree/"}),"Subtree of Another Tree")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"}),"Construct Binary Tree from Preorder and Inorder Traversal")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://leetcode.com/problems/validate-binary-search-tree/"}),"Validate Binary Search Tree")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://leetcode.com/problems/kth-smallest-element-in-a-bst/"}),"Kth Smallest Element in a BST")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"}),"Lowest Common Ancestor of BST"))))}b.isMDXComponent=!0},171:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},u=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(r),m=a,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return r?n.a.createElement(d,l({ref:t},s,{components:r})):n.a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);