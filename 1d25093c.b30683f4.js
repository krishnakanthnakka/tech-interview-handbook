(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var o=n(1),a=n(7),r=(n(0),n(172)),i={id:"summing-root-to-leaf-numbers",title:"Summing Root To Leaf Numbers",author:"Raivat Shah",author_title:"Student at NUS Computing",author_url:"https://github.com/raivatshah",author_image_url:"https://github.com/raivatshah.png",tags:["leetcode","trees","problem-solving"]},l={permalink:"/tech-interview-handbook/blog/summing-root-to-leaf-numbers",source:"@site/blog/2020-05-28-summing-root-to-leaf-numbers.md",description:"Sum Root to Leaf Numbers is an interesting problem from LeetCode. The problem is of medium difficulty and is about binary trees. This post is an explained solution to the problem.",date:"2020-05-28T00:00:00.000Z",tags:[{label:"leetcode",permalink:"/tech-interview-handbook/blog/tags/leetcode"},{label:"trees",permalink:"/tech-interview-handbook/blog/tags/trees"},{label:"problem-solving",permalink:"/tech-interview-handbook/blog/tags/problem-solving"}],title:"Summing Root To Leaf Numbers",readingTime:5.585,truncated:!0},s=[{value:"The Problem",id:"the-problem",children:[]},{value:"The Observations and Insights",id:"the-observations-and-insights",children:[]},{value:"The Solution",id:"the-solution",children:[]},{value:"The Algorithmic Complexity",id:"the-algorithmic-complexity",children:[]},{value:"The Conclusion",id:"the-conclusion",children:[]},{value:"Acknowledgements",id:"acknowledgements",children:[]}],c={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Sum Root to Leaf Numbers is an ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://leetcode.com/problems/sum-root-to-leaf-numbers/"}),"interesting problem from LeetCode"),". The problem is of medium difficulty and is about binary trees. This post is an explained solution to the problem."),Object(r.b)("p",null,"I assume that you\u2019re familiar with Python and the concept of binary trees. If you\u2019re not, you can read ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.tutorialspoint.com/python_data_structure/python_binary_tree.htm"}),"this article")," to get started."),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/29497717/82636662-b01b4b80-9c35-11ea-9ffa-e84b1e13c599.jpeg",alt:"leetcode1"}))),Object(r.b)("h2",{id:"the-problem"},"The Problem"),Object(r.b)("p",null,"Given a binary tree whose nodes contain values ",Object(r.b)("inlineCode",{parentName:"p"},"0-9"),", we have to find the sum of all numbers formed by root-to-leaf paths. A leaf is a node that doesn\u2019t have any child nodes. ",Object(r.b)("strong",{parentName:"p"},"In a binary tree, a root-to-leaf path is always unique"),". Here below is the expected behavior of the solution required:"),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/29497717/82636816-0be5d480-9c36-11ea-8b2d-78bb36c865ee.jpeg",alt:"leetcode2"}))),Object(r.b)("p",null,"In the tree on the left, the output is ",Object(r.b)("inlineCode",{parentName:"p"},"25"),". ",Object(r.b)("inlineCode",{parentName:"p"},"25")," is the sum of ",Object(r.b)("inlineCode",{parentName:"p"},"12")," and ",Object(r.b)("inlineCode",{parentName:"p"},"13"),", which are the two numbers formed when starting from ",Object(r.b)("inlineCode",{parentName:"p"},"1")," and visiting every leaf. In the tree on the right, the output is ",Object(r.b)("inlineCode",{parentName:"p"},"1026")," as it is the sum of the three numbers ",Object(r.b)("inlineCode",{parentName:"p"},"495"),", ",Object(r.b)("inlineCode",{parentName:"p"},"491")," and ",Object(r.b)("inlineCode",{parentName:"p"},"40"),"."),Object(r.b)("h2",{id:"the-observations-and-insights"},"The Observations and Insights"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"To construct a number, we traverse the tree from the root to the leaf, appending digits where the most significant digit is at the root, and the least significant digit is at the leaf. We visit some leaves before other nodes that are closer to the root. This suggests that a depth-first search will be useful.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("em",{parentName:"p"},"construction")," of numbers is incremental and similar of sorts: the only difference between ",Object(r.b)("inlineCode",{parentName:"p"},"495")," and ",Object(r.b)("inlineCode",{parentName:"p"},"491")," (from the tree on the right) is the last digit. If we remove the ",Object(r.b)("inlineCode",{parentName:"p"},"5")," and insert a ",Object(r.b)("inlineCode",{parentName:"p"},"1")," in its place, we have the next required number. A number essentially comprises of the leaf's digit appended to all the digits in ancestor nodes. Thus, numbers within the same subtree have common digits.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Finally, notice that this problem involves a tree, so a recursive solution is helpful."))),Object(r.b)("h2",{id:"the-solution"},"The Solution"),Object(r.b)("p",null,"We can do a ",Object(r.b)("inlineCode",{parentName:"p"},"pre-order")," traversal of the tree where we incrementally construct a number and exploit the fact that numbers formed by nodes in the same sub-tree have common digits. When we\u2019re done forming numbers in a sub-tree, we can backtrack and go to another sub-tree."),Object(r.b)("p",null,"Let\u2019s create a ",Object(r.b)("inlineCode",{parentName:"p"},"Solution")," class to encompass our solution."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-py"}),"class Solution:\n  def sum_numbers(self, root: TreeNode) -> int:\n")),Object(r.b)("p",null,"The method signature given to us in the problem has one argument: root, which is of the type ",Object(r.b)("inlineCode",{parentName:"p"},"TreeNode")," . A ",Object(r.b)("inlineCode",{parentName:"p"},"TreeNode")," class is as follows (from LeetCode):"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-py"}),"class TreeNode:\n  def __init__(self, val=0, left=None, right=None):\n    self.val = val\n    self.left = left\n    self.right = right\n")),Object(r.b)("p",null,"From observation #2, notice that appending a node's digit to its ancestors can be achieved by ",Object(r.b)("em",{parentName:"p"},"moving")," all the digits of the number formed by ancestors to the right by 1 place and adding the current node's digit. The digits can be ",Object(r.b)("em",{parentName:"p"},"moved")," by multiplying the number formed by ancestors by 10 (since we're in base-10). For example:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"495 = 49 x 10 + 5")),Object(r.b)("p",null,"Thus, we can keep track of the ",Object(r.b)("em",{parentName:"p"},"current")," digits in an integer. This is important because we won't incur extra storage space for higher input sizes. We can pass around this value in the function parameter itself. Since the method signature given can only have one parameter, let's create a ",Object(r.b)("inlineCode",{parentName:"p"},"sum_root_to_leaf_helper")," method."),Object(r.b)("p",null,"We can think of the ",Object(r.b)("inlineCode",{parentName:"p"},"sum_root_to_leaf_helper")," method recursively and process each node differently based on whether or not it is a leaf."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If the node is a leaf, we want to add its digit to our current digits by moving all the other digits to the right. We also want to return this value (since we'll backtrack from here).")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If it is not a leaf, we want to add the digit to our current digits by moving all the other digits to the right. We also want to continue constructing the number by traversing down this node's left and right subtrees."))),Object(r.b)("p",null,"If the current node is a ",Object(r.b)("inlineCode",{parentName:"p"},"None"),", we can simply return 0 because it doesn't count."),Object(r.b)("p",null,"Thus, our ",Object(r.b)("inlineCode",{parentName:"p"},"sum_root_to_leaf_helper")," method will be as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-py"}),"def sum_root_to_leaf_helper(node, partial_sum=0):\n  if not node:\n    return 0\n  partial_sum = partial_sum * 10 + node.val\n  # Leaf\n  if not node.left and not node.right:\n    return partial_sum\n  # Non Leaf\n  return (sum_root_to_leaf_helper(node.left, partial_sum) + \\\n    sum_root_to_leaf_helper(node.right, partial_sum))\n")),Object(r.b)("p",null,"We use a default value for the partial sum to be 0."),Object(r.b)("p",null,"In our main method, we want to include the ",Object(r.b)("inlineCode",{parentName:"p"},"sum_root_to_leaf_helper")," method as a nested method and simply pass on the node parameter. Finally, this is how our solution looks:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-py"}),"class Solution:\n  def sumNumbers(self, root: TreeNode) -> int:\n    def sum_root_to_leaf_helper(node, partial_sum=0):\n      if not node:\n        return 0\n      partial_sum = partial_sum * 10 + node.val\n      # Leaf\n      if not node.left and not node.right:\n        return partial_sum\n      # Non Leaf\n      return (sum_root_to_leaf_helper(node.left, partial_sum) + \\\n        sum_root_to_leaf_helper(node.right, partial_sum))\n\n    return sum_root_to_leaf_helper(root)\n")),Object(r.b)("h2",{id:"the-algorithmic-complexity"},"The Algorithmic Complexity"),Object(r.b)("p",null,"When we come up with a solution, it is important to analyze its algorithmic complexity not only to estimate its performance but also to identify areas for improvement and reflect on our problem-solving skills. We should always ask the question: ",Object(r.b)("em",{parentName:"p"},"can we do better than X?")," Where X is the current complexity of our solution."),Object(r.b)("p",null,"Time:"),Object(r.b)("p",null,"Our solution is a modification of the depth-first-search pre-order traversal where we visit all nodes exactly once and perform a trivial computation (moving digits by integer multiplication). Thus, our runtime is simply ",Object(r.b)("inlineCode",{parentName:"p"},"O(N)")," where ",Object(r.b)("inlineCode",{parentName:"p"},"N")," represents the number of nodes in the given tree. A solution better than ",Object(r.b)("inlineCode",{parentName:"p"},"O(N)")," doesn't seem possible because to construct a number from digits, we need to know all the digits (and thus visit all nodes)."),Object(r.b)("p",null,"Space:"),Object(r.b)("p",null,"In terms of storage, we incur a high cost in the recursion call stack that builds up as our ",Object(r.b)("inlineCode",{parentName:"p"},"sum_root_to_leaf_helper")," calls itself. These calls ",Object(r.b)("em",{parentName:"p"},"build-up")," as one waits for another to finish."),Object(r.b)("p",null,"The maximum call stack is dependent upon the height of the binary tree (since we start backtracking after we visit a leaf), giving a complexity of ",Object(r.b)("inlineCode",{parentName:"p"},"O(H)")," where ",Object(r.b)("inlineCode",{parentName:"p"},"H")," is the height of the binary tree. In the worst case, the binary tree is skewed in either direction and thus ",Object(r.b)("inlineCode",{parentName:"p"},"H = N"),". Therefore, the worst-case space complexity is ",Object(r.b)("inlineCode",{parentName:"p"},"O(N)"),"."),Object(r.b)("p",null,"You can read ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.freecodecamp.org/news/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9/"}),"this article")," to know more about recursion call stacks."),Object(r.b)("p",null,"It is possible to do better than ",Object(r.b)("inlineCode",{parentName:"p"},"O(N)")," by using a Morris Preorder Traversal. The basic idea is to link a node and its predecessor temporarily. You can read more about it ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.sciencedirect.com/science/article/abs/pii/0020019079900681"}),"here"),"."),Object(r.b)("h2",{id:"the-conclusion"},"The Conclusion"),Object(r.b)("p",null,"I hope this post helped! Please do let me know if you have any feedback, comments or suggestions by responding to this post."),Object(r.b)("h2",{id:"acknowledgements"},"Acknowledgements"),Object(r.b)("p",null,"Advay, Kevin, Louie for reviewing this post and Yangshun for the idea of adding it as a blog post."))}b.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),m=o,h=p["".concat(i,".").concat(m)]||p[m]||u[m]||r;return n?a.a.createElement(h,l({ref:t},c,{components:n})):a.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);