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

- vector operations

```py
vector<vector<int>> result;
# first argument is iterator to the target position
result.erase(result.begin() + i);  # remove element at position i
result.insert(result.begin() + n, x);  # insert x at nth position
v.insert(v.end(), vals.begin(), vals.end());    # insert vector vals at the end of vector v
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

- Do not return pointer to local array. Instead use malloc to create memory for the variable.
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

- Sort a vector of vectors by custom rules
```py

#Input:  [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
#Sort by value in second column in descending order and arrange by acescening if values are equal

bool (const vector<int>& a, const vector<int>& b){
    return (a[0] > b[0] || (a[0] == b[0] && a[1] < b[1]));
}

sort(people.begin(),people.end(),sortbyheight);
#Output: [[7,0], [7,1], [6,1], [5,0], [5,2], [4,4]]

#Can also be written in more commonly used form
sort(people.begin(),people.end(), [](const vector<int>& a, const vector<int>& b){
    return (a[0] > b[0] || (a[0] == b[0] && a[1] < b[1]));
});

```

- Generate a random number in range [0,sum)
```py
int p = rand() % sum;
```

- Check the index at which is value is greater than previous and lower than current
```py
auto it=lower_bound(v.begin(),v.end(),n);
return it-v.begin();
```

-  return a sliced vector, say first K elements
```py
vector<vector<int>> points;
vector<vector<int>> result(points.begin(),points.begin()+K);
# more precisely
return vector<vector<int>>(points.begin(),points.begin()+K);
# Even better (inplace resize to first K elements)
points.resize(K);
return points
```

- make sure index pointer do not crosss bounds
```py
vector<int> history;
# move pos back by amount steps
pos = max(0, pos - steps);
#move foward by amount steps
pos = min(history.size() - 1, pos + steps);
```


- Hash Map common operations

```py
map<int, int> map;


#insert a key, value pair
map.insert(pair<int, int>(key, value));

# Iterate through a hash map
vector<pair<string, int> > A;
for (auto& it : map) {
        A.push_back(it);
}

#iterator to map
auto p = mp.find(key);

#access value by iterator
if (p != mp.end())
    return {p->second, i};

#check if key exists
if(map.find(key)==map.end())
    return false;

# erase key
map.erase(key);
```

- get a random element from vector
```py
vector<int> nums;
nums[rand()%nums.size()];
```

- 2D hash map, with each 2D key position contains set of elements. Multiset to repeat elements

```py

map<int, map<int, multiset<int>>> Hmap;


Hmap[column][row].insert(root->val);

# to access such hash map with each key by key
for (auto keyvals: Hmap){
    vector<int> v;
    for (auto vals : keyvals.second){
        v.insert(v.end(), vals.second.begin(), vals.second.end());
    }
    pruned.push_back(v);
}
```
- LONG_MIN, LONG_MAX for assigning to maximum and minimum numbers
- INT_MIN, INT_MAX for assigning to standard minimum and maximum



- Sorting a Map by value in C++ STL.

Always a vector of pairs and sort the vector by second value or first value.

https://www.geeksforgeeks.org/sorting-a-map-by-value-in-c-stl/

Method 1 – using the vector of pairs The idea is to copy all contents from the map to the corresponding vector of pairs and sort the vector of pairs according to second value using the lambda function given below:



- In BINARY SEARCH, Check the terminations conditions for while loop aand return condition of low+1;

- Chnaged

