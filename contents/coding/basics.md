---
id: basics
title: Basics
---

In this section, we revise few important declarations that are typically used for coding interviews.


#### Declarations

- Declare a dynamic 1D and 2D vector
```py
vector<bool> count(26, false);
vector<vector<bool> visited(M, vector<bool>(N, false)) # MxN matrix with initialized to false
```

- Declare a **min heap** that has minimum element at the root
```py
std::priority_queue<int, std::vector<int>, std::greater<int>> min_heap;
```

- Declare a stack of data type - pair of elements
```py
int a, b;
stack<pair<int, int>> st;
st.push({a,b});
```

- Do not return Pointer to local array. Instead use malloc to create memory for variable
```py
#  Fails
int V;
bool toposort[V] = {false};
return toposort;
#Works
bool *toposort = (int*)malloc(sizeof(bool)*V);
return toposort;
```

- Common operations for Pair datatype
```py
list <pair<int, int>> *adj;
adj = new list <iPair>[V];
adj[u].push_back(make_pair(v, w));
list<iPair>::iterator i;
for (auto i: adj[src]){
    int v = (*i).first;
    int w = (*i).second;
}
```


