# Graph

Graphs are one of the unifying themes of computer science - an abstract representation that describes the organization of transportation systems, human interactions, and telecommunication network. That so many different structures can be modeled using a single formalism is a source of great power to the educated programmer.

More precisely, a graph $G = (V, E)$ consists of a set of _vertices V_ together with a set E of vertex pairs or edges. Graphs are important because they can be used to represent essentially any relationship. For example, graphs can model a network of roads, with cities as vertices and roads between cities as edges, as shown in Figure 5.1. Electronic circuits can also be modeled as graphs, with junctions as vertices and components as edges.

The key to solving many algorithmic problems is to think of them in terms of graphs. Graph theory provides a language for talking about the properties of relationships, and it is amazing how often messy applied problems have a simple description and solution in terms of classical graph properties.

Designing truly novel graph algorithms is a very difficult task. The key to using graph algorithms effectively in applications lies in correctly modeling your porblem so you can take advantage of existing algorithms. Becoming familiar with many different algorithmic graph _problems_ is more important than understanding the details of particular graph algorithms.

## Definition

A graph $G = (V, E)$ is defined on a set of _vertices V_, and contains a set of edges E of ordered or unordered paris of vertices from V. In modeling a road network, the vertices may represent the cities or juntions, certain paris of which are connected by roads/edges. In analyzing the source code of a computer program, the vertices may represent lines of code, with an edge connecting lines x and y if y is the next statement executed after x. In analyzing human interactions, the vertices typically represent people, with edges connecting paris of related souls.

The first step to implement any graph problem is determining its properties:
- _undirected_ vs _directed_ -- A graph $G = (V, E)$ is _undirected_ if edge $(x, y) \in E$ implies that (x, y) is also in E. If not, we say that the graph is _directed_. Road networks _between_ cities are typically undirected, since any large road has lanes going in both directions. Street networks _within_ cities are almost always directed, because there are at least a few one-way streets lurking somewhere. Program-flow graphs are typically directed, because the execution flows from one line into the next and changes direction only at branches. Most graphs of graph-theoretic interest are undirected.
- _weighted_ vs _unweighted_ -- Each edge (or vertex) in a _weighted_ graph G is assigned a numberical value, or weight. The edges of a road network graph might be weighted with their length, drive-time, or speed limit, depending upon the application. In _unweighted_ graphs, there is no cost distinction between various edges and vertices. The difference between weighted and unweighted graphs become particularly apparent in finding the shortest path between two vertices. For unweighted graphs, the shortest path must habe the fewest number of edges, and can be found using a breadth-first search. Shortest paths in weighted graphs requires more sophisticated algorithms.
- _simple_ vs _non-simple_ -- Certain types of edges complicate the task of working with graphs. A _self-loop_ is an edge (x, x) involving only one vertex. An edge (x, y) is a _multiedge_ if it occurs more than once in the graph. Both of these structures require special care in implementing graph algorithms. Hence any graph that avoids them is called simple.
- _sparse_ vs _dense_ -- Graphs are sparse when only a small fraction of the possible vertex pairs ($\binom{n}{2}$ for a simple, undirected graph on _n_ vertices) actually have edges defined between them. Graphs where a large fraction of the vertex pairs define edges are called _dense_. There is no official boundary between what is called sparse and what is called dense, but typically dense graphs have a quadratic number of edges, while sparse graphs are linear in size.
- _cyclic_ vs _acyclic_ -- An _acyclic_ graph does not contain any cycles. _Trees_ are connected, acyclic undirected graphs. Trees are the simplest interesting graphs, and are inherently recursive structures because cutting any edge leaves two smaller trees. Directed acyclic graphs are called DAGs. They arise naturally in scheduling problems, where a directed edge (x, y) indicates that activity x must occur before y. An operation called _topological sorting_ orders the vertices of a DAG to respect these precedence constraints. Topological sorting is typically the first step on any algorithm on a DAG.
- _embedded_ vs _topological_ -- A graph is _embedded_ if the vertices and edges are assigned geometric positions. Thus, any drawing of a graph is an _embedding_, which may or may not have algorithmic significance.
- _implicit_ vs _explicit_ -- Certain graphs are not explicitly constructed and then traversed, but built as we use them. A good example is in backtrack search. The vertices of this implicit search graph are the states of the search vector, while edges link pairs of states that can be directly generated from each other. Becuase you do not have to store the entire graph, it is often easier to work with an implicit graph than explicitly contruct it prior to analysis.
- _labeled_ vs _unlabeled_ -- Each vertex is assigned a unique name or identifier in a _labeled_ graph to distinguish it from all other vertices. In _unlabeled_ graphs, no such distinctions have been made. Graphs arising in applications are often naturally and meaningfully labeled, such as city names in a transportation network. A common problem is that of _isomorphism testing_ -- determining whether the topological structure of two graphs are identical if we ignore any labels. Such problems are typically solved using backtracking, by trying to assign each vertex in each graph a label such that the structures are identical.

## Data Structures

Selecting the right graph data structure can have an enormous impact on performance. The two basic choices are adjacency matrices and adjacency lists. We assume the graph $G = (V, E)$ contains n vertices and m edges.

### Adjacency Matrix

We can represent G using an n x n matrix M, where element $M[i, j] = 1$ if (i, j) is an edge of G, and 0 if it isn't. This allows fast answers to the question "is (i, j) in G?", and rapid updates for edges insertion and deletion. It may use excessive space for graphs with many vertices and relatively few edges, however.

### Adjacency Lists

We can more efficiently represent sparse graphs by usign linked lists to store the neighbors adjacent to each vertex. Adjacency lists make it harder to verify whether a given edge (i, j) is in G, since we must search through the appropriate list to find the edge. However, it is surprisingly easy to design graph algorithms that avoid any need for such queries. Typically, we sweep through all the edges of the graph in one pass via a breadth-first or depth-first traversal, and update the implications of the current edge as we visit it.

## Breadth-First Search

At some point during the course of a traversal, every node in the graph changes state from _undiscovered_ to _discovered_. In a breadth-first search of an undirected graph, we assign a direction to each edge, from the discoverer _u_ to the discovered _v_. We thus denote _u_ to be the parent of _v_. Since each node has exactly one parent, except for the root, this defines a tree on the vertices of the graph. This property makes breadth-first search very useful in shortest path problems.

```pse
BFS(G, s)
  for each vertex $u \in V[G]$ - {s} do
      state[u] = "undiscovered"
      p[u] = nil, i.e. no parent is in the BFS tree
  state[s] = "discovered"
  p[s] = nil
  Q = { s }
  while != 0 do
      u = dequeue[Q]
      process vertex u as desired
      for each $v \in Adj[u]$ do
          process edge (u, v) as desired
          if state[v] = "undiscovered" then
              state[v] = "discovered"
              p[v] = u
              enqueue[Q, v]
      state[u] = "processed"
```

The graph edges that do not appear in the breadth-first search tree also have special properties. For undirected graphs, nontree edges can point only to vertices on the same levle as the parent vertex, or to vertices on the level directly below the parent. These properties follow easily from the fact that each path in the tree must be the shortest path in the graph. For a directed graph, a back-pointing edge (u, v) can exist whenever v lies closer to the root than u does.

```c
bool processed[MAXV + 1]; /* which vertices have been processed */
bool discovered[MAXV + 1]; /* which vertices have been found */
int parent[MAXV + 1]; /* discovery relation */

/* each vertex is initialized as undiscovered */
iniitalize_search(graph *g){
  int i; /* counter */

  for (i = j; i <= g->nvertices; i++) {
    processed[i] = discovered[i] = FALSE;
    parent[i] = -1;
  }
}
```

Once a vertex is discovered, it is placed on a queue. Since we process these vertices in first-in, first-out order, the oldest vertices are expanded first, which are exactly thos closest to the root.

```c
bfs(graph *g, int start){
  queue q;
  int v;
  int y;
  edgenode *p;

  init_queue(&q);
  enqueue(&q, start);
  discovered[start] = TRUE;

  while (empty_queue(&q) == FALSE) {
    v = dequeue(&q);
    process_vertex_early(v);
    processed[v] = TRUE;
    p = g->edges[v];
    while (p != NULL) {
      y = p->y;
      if ((processed[y] == FALSE) || g->directed)
        process_edge(v,y);
      if (discovered[y] == FALSE) {
        enqueue(&q, y);
        discovered[y] = TRUE;
        parent[y] = v;
      }
      p = p->next;
    }
    process_vertex_late(v);
  }
}
```

The parent array set within bfs() is very useful for finding interesting paths through a graph. The vertex that discovered vertex _i_ is defined as parent[i]. Every vertex is discovered during the course of traversal, so except for hte root every node has a parent. The parent relation defines a tree of discovery with the initial search node as the root of the tree.

Because vertices are discovered in order of increasing distance form the root, this tree has a very important property. The unique tree path from the root to each node $x \in V$ uses the smallest number of edges (or equivalently, intermediate nodes) possible on any root-to-x path in the graph.

We can reconstruct this path by following the chain of ancestors from x to the root. Note that we have to work backward. We cannot find the path from the root to x, since that does not follow the direction of the parent pointers. Instead, we must find the path from x to the root. Since this is the reverse of how we normaly want the path, we can either (1) store it and then explicitly reverse it using a stack, or (2) let recursion reverse it for us, as follows:

```c
find_path(int start, int end, int parents[]) {
  if ((start == end) || (end == -1))
    printf("\n%d", start);
  else {
    find_path(start, parents[end], parents);
    printf(" %d", end);
  }
}
```

There are two points to remember when usign breath-first search to find the shortest path from x to y:
- the shortest path tree is only useful if BFS was performed with x as the root of the search
- BFS gives the shortest path only if the graph is unweighted

## Depth-First Search

The difference between BFS and DFS results is in the order in which they explore vertices. This order depends completely upon the container data structure used to store the _discovered_ but not _processed_ vertices.
- queue -- by storing the vertices in a first-in, first-out (FIFO) queue, we explore the oldest unexplored vertices first. Thus our explorations radiate out slowly from the starting vertex, defining a breadth-first search.
- stack -- by storing the vertices in a last-in, first-out (LIFO) stack, we explore the vertices by lurching along a path, visiting a new neighbor if one is available, and backing up only when we are surrounded by previously discovered vertices. Thus, our explorations quickly wander away form our starting point, defining a depth-first search.

Our implementation of dfs maintains a notiion of traversal time for each vertex. Our time clock ticks each time we enter or exit any vertex. We keep track of the entry and exit times for each vertex. Depth-first seach has a neat recursive implementation, which eliminates the need to explicitly use a stack:

```
DFS(G, u)
    state[u] = "discovered"
    process vertex u if desired

time = time + 1
entry[u] = time
for each $v \in Adj[u]$ do
    process edge (u, v) if desired
    if state[v] = "undiscovered" then
        p[v] = u
        DFS(G, V)
state[u] = "processed"
exit[u] = time
time = time + 1
```

The time intervals have interesting and useful properties with respect to depth-first search:
- who is an ancestor? - suppose that x is an ancestor of y in the DFS tree. This implies that we must enter x before y, since there is no way we can be born before our own father or grandfather. We also must exit y before we exit x, because the mechanics of DFS ensure we cannot exit x until after we have backed up from the search of all its descendants. This the time interval of y must be properly nested within ancestor x
- how many descendants? - the difference between the exit and entry times for v tells us how many descendents v has in the DFS tree. The clock gets incremented on each vertex entry and vertex exit, so half the time difference denotes the number of descendents of v

The other important proeprty of a depth-first search is that it partitions the edges of an undirected graph into exactly two classes: tree edges and back edges. The tree edges discover new vertices, and are those encoded in the parent relation. Back edges are those whose other enddpoint is an ancestor of the vertex being exapnded, so they point back into the tree.

An amazing property of depth-first search is that all edges fall into these two classes.