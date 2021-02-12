(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{199:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(9),o=(n(0),n(206)),i={id:"basics",title:"Basics"},c={id:"coding/basics",title:"Basics",description:"In this section, we revise few important declarations that are typically used for coding interviews.",source:"@site/../contents/coding/basics.md",permalink:"/tech-interview-handbook/coding/basics",editUrl:"https://github.com/krishnakanthnakka/tech-interview-handbook/edit/master/contents/../contents/coding/basics.md",lastUpdatedBy:"krishnakanth732",lastUpdatedAt:1613164154,sidebar:"docs",previous:{title:"Trie",permalink:"/tech-interview-handbook/algorithms/trie"}},l=[],s={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this section, we revise few important declarations that are typically used for coding interviews."),Object(o.b)("h4",{id:"declarations"},"Declarations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Declare a dynamic 1D and 2D vector")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"vector<bool> count(26, false);\nvector<vector<bool> visited(M, vector<bool>(N, false)) # MxN matrix with initialized to false\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"vector operations")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"vector<vector<int>> result;\n# first argument is iterator to the target position\nresult.erase(result.begin() + i);  # remove element at position i\nresult.insert(result.begin() + n, x);  # insert x at nth position\nv.insert(v.end(), vals.begin(), vals.end());    # insert vector vals at the end of vector v\n\n\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Declare a ",Object(o.b)("strong",{parentName:"li"},"min heap")," that has minimum element at the root")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"std::priority_queue<int, std::vector<int>, std::greater<int>> min_heap;\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Declare a stack of data type - pair of elements")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"int a, b;\nstack<pair<int, int>> st;\nst.push({a,b});\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Do not return pointer to local array. Instead use malloc to create memory for the variable.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"#  Fails\nint V;\nbool toposort[V] = {false};\nreturn toposort;\n#Works\nbool *toposort = (int*)malloc(sizeof(bool)*V);\nreturn toposort;\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Common operations for Pair datatype")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"list <pair<int, int>> *adj;\nadj = new list <iPair>[V];\nadj[u].push_back(make_pair(v, w));\nlist<iPair>::iterator i;\nfor (auto i: adj[src]){\n    int v = (*i).first;\n    int w = (*i).second;\n}\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Sort a vector of vectors by custom rules")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"\n#Input:  [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]\n#Sort by value in second column in descending order and arrange by acescening if values are equal\n\nbool (const vector<int>& a, const vector<int>& b){\n    return (a[0] > b[0] || (a[0] == b[0] && a[1] < b[1]));\n}\n\nsort(people.begin(),people.end(),sortbyheight);\n#Output: [[7,0], [7,1], [6,1], [5,0], [5,2], [4,4]]\n\n#Can also be written in more commonly used form\nsort(people.begin(),people.end(), [](const vector<int>& a, const vector<int>& b){\n    return (a[0] > b[0] || (a[0] == b[0] && a[1] < b[1]));\n});\n\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Generate a random number in range [0,sum)")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"int p = rand() % sum;\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Check the index at which is value is greater than previous and lower than current")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"auto it=lower_bound(v.begin(),v.end(),n);\nreturn it-v.begin();\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"return a sliced vector, say first K elements")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"vector<vector<int>> points;\nvector<vector<int>> result(points.begin(),points.begin()+K);\n# more precisely\nreturn vector<vector<int>>(points.begin(),points.begin()+K);\n# Even better (inplace resize to first K elements)\npoints.resize(K);\nreturn points\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"make sure index pointer do not crosss bounds")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"vector<int> history;\n# move pos back by amount steps\npos = max(0, pos - steps);\n#move foward by amount steps\npos = min(history.size() - 1, pos + steps);\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Hash Map common operations")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"map<int, int> map;\n\n#iterator to map\nauto p = mp.find(key);\n\n#access value by iterator\nif (p != mp.end())\n    return {p->second, i};\n\n#check if key exists\nif(map.find(key)==map.end())\n    return false;\n\n# erase key\nmap.erase(key);\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"get a random element from vector")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"vector<int> nums;\nnums[rand()%nums.size()];\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"\n# 2D hash map, with each 2D key poisition contains set of elements. Multiset to repeat elements\nmap<int, map<int, multiset<int>>> Hmap;\n\n\nHmap[column][row].insert(root->val);\n\n# to access such hash map with each key by keys\nfor (auto keyvals: Hmap){\n    vector<int> v;\n    for (auto vals : keyvals.second){\n        v.insert(v.end(), vals.second.begin(), vals.second.end());\n    }\n    pruned.push_back(v);\n}\n")))}b.isMDXComponent=!0},206:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?r.a.createElement(d,c({ref:t},s,{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);