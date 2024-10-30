# Sorting and Searching

Why sorting needs attention:
- sorting is the basic building block that manu other algorithms are built around. By understanding sorting, we obtain an amazing amount of power to solve other problems
- most of the interesting ideas used in the design of algorithms appear in the context of sorting, such as divide-and-conque, data structures, and randomized algorithms
- computers have historically spent more time sorting than doing anything else. A quarter of all mainframe cycles were spent sorting data. Sorting remains the most ubiquitous combinatorial algorithm problem in practice
- sorting is the most thoroughly studied problem in computer science. Literally dozens of different algorithms are known, most of which possess some particular advantage over all other algorithms in certain situations

## Applications of Sorting

Many important problems can be reduced to sorting, so we can use our clever _O_(n log n) algorithms to do work that might otherwise seem to require a quadratic algorithm. An important algorithm design technique is to use sorting as a basic building block, because many other problems become easy one a set of items is sorted.

Consider the following applications:
- searching - binary search tests whether an item is in a dictionary in _O_(log n) time, provided the keys are all sorted. Search preprocessing is perhaps the single most important application of sorting
- closest pair - given a set of n numbers, how do you find the pair of numbers that have the smallest difference between them? Once the numbers are sorted, the closest pair of numbers must lie next to each other somewhere in sorted order. Thus, a linear-time scan through them completes the job, for a total of _O_(n log n) time including the sorting
- element uniqueness - are there any duplicates in a given set of n items? This is a special case of the closest-pair problem above, where we ask if there is a pair separated by a gap of zero. The most efficient algorithm sorts the numbers and then does a linear scan though checking all adjacent pairs
- frequency distribution - given a set of n items, which element occurs the largest number of times in the set? If the items are sorted, we can sweep from left to right and count them, since all identical items will be lumped together during sorting
- selection - what is the kth largest item in an array? If the keys are placed in sorted order, the kth largest can be found in constant time by simply looking at the kth position of the array
- convex hulls - what is the polygon of smallest area that contains a given set of n points in two dimensions? The convex hull is like a rubber band stretched over the points in the plane and then released. It compresses to just cover the points. The convex hull gives a nice representation of the shape of the points and is an important building block for some sophisticated geometric algorightms

## Pragmatics of Sorting

One issue stands between them: in what order do we want our items sorted? The answer to this basic question are application-specific. Consider the following considerations:
- increasing or decreasing order? - A set of keys S are sorted in ascending order when $S_i \le S_{i + 1}$ for all $1 \le i \lt n$. Different applications call for different orders
- sorting just the key or an entire record? - sorting a data set involves maintaining the integrity of complex data records. A mailing list of names, addresses, and phone numbers may be sorted by names as the key field, but it had better retain the linkage between names and addresses. Thus, we need to specify which field is the key field in any complex record, and understand the full extent of each record
- what should we do with equal keys? - elements with equal key values will all bunch together in any total order, but sometimes the relative order among these keys matters. Sometimes it is required to leave the items in the same relative order as in the original permutation. Sorting algorithms that automatically enforce this requirement are called stable. Unfortunately few fast algorithms are stable. Stability can be achieved for any sorting algorithm by adding the initial position as a secondary key
- what about non-numerical data? - Alphabetizing is the sorting of text strings. Libraries have very complete and complicated rules concerning the relative collating sequence of characters and punctuation

The right way to specify such matters to your sorting algorithm is with an application-specific pairwise-element comparison function. Such a comparison function takes pointers to record items _a_ and _b_ and return "<" if $a \lt b$, ">" if $a \gt b$, or "=" if $a = b$.
By abstracting the pairwise ordering decision to such a comparison function, we can implement sorting algorithms independently of such criteria. We simply pass the comparison function in as an argument to the sort procedure. Any reasonable programming language has a built-in sort routine as a library function.

## Heapsort

We start with data structure design, because one of the most dramatic algorithmic improvements via appropriate data structures occurs in sorting.

### Selection sort

Selection sort is a simple-to- code algorithm that repeatedly extracts the smallest remaining element from the unsorted part of the set:

```
SelectionSort(A)
  For i = 1 to n do
    Sort[i] = Find-Minimum from A
    Delete-Minimum from A
  Return(Sort)
```

To find the smallest item, we performed a linear sweep through the unsorted portion of the array. The smallest item is then swapped with the *i*th item in the array before moving on to the next iteration.
Selection sort performs n iterations, where the average iteration takes n/2 steps, for a total of _O_(n^2) time.

But what if we improve the data structure? It takes _O_(1) time to remove a particular item from an unsorted array once it has been located, but _O_(n) time to find the smallest item. These are exactly the operations supported by priority queues. So what happens if we replace the data structure with a better priority queue implementation, either a heap or a balanced binary tree? Operations within the loop now take _O_(log n) time each, instead of _O_(n). Using such a priority queue implementation speeds up selection sort from _O_(n^2) to _O_(n log n).

### Heaps

Heaps are a simple and elegant data structure for efficiently supporting the priority queue operations insert and extract-min. They work by maintaining a partial order on the set of elements which is weaker than the sorted order (so it can be efficient to maintain) yet stronger than random order (so the minimum element can be quickly identified).
A heap-labeled tree is defined to be a binary tree such that the key labeling of each node dominates the key labeling of each of its children. In a min-heap, a node dominates its children by containing a smaller key than they do, while in a max-heap parent nodes dominate by being bigger.

The most natural implementation of this binary tree would store each key in a node with pointers to its two children. As with binary search trees, the memory used by the pointers can easily outweigh the size of keys, which is the data we are really interested in.

The heap is a slick data structure that enables us to represent binary trees without using any pointers. We will store data as an array of keys, and use the position of the keys to implicitly satisfy the role of the pointers.
We will store the root of the tree in the first position of the array, and its left and right children in the second and third position, respectively. In general, we will store the $2^{l - 1}$ keys of the *l*th level of a complete binary tree from left-to-right in positions $2^{l - 1}$ to $2^l -1$. We assume that the array starts with index 1 to simplify matters.

```c
typedef struct {
  item_type q[PQ_SIZE + 1];
  int n; // number of queue elements
} priority_queue;
```

What is especially nice about this representation is that the positions of the parent and children of the key at position k are readily determined. The left child of k sits in position 2k and the right child in 2k + 1, while the parent of k holds court in position k/2. Thus we can move around the tree without any pointers.

```c
pq_parent(int n){
  if (n == 1) return(-1);
  else return((int) n/2);
}

pq_young_child(int n) {
  return(2 * n);
}
```

So, we can store any binary tree in an array without pointers. What is the catch? Suppose our height h tree was sparse, meaning that the number of nodes $n \lt 2^h$. All missing internal nodes still take up space in our structure, since we must represent a full binary tree to maintain the positional mapping between parents and children.

Space efficiency thus demands that we not allow holes in our tree -- i.e., that each level be packed as much as it can be. If so, only the last level may be incomplete. By packing the elements of the last level as far to the left as possible, we can represent an n-key tree using exactly n elements of the array. If we did not enforce these structural constraints, we might need an array of size 2^n to store the same elements. Since all but the last level is always filled, the height h of an n element heap is logarithmic because:

$\sum_{i=0}^{h 2^i = 2^{h + 1} - 1 \ge n}$

so h = lg n

This implicit representation of binary trees saves memory, but is less flexible than using pointers. We cannot store arbitrary tree topologies without wasting large amounts of space. We cannot move subtrees around by just changing a single pointer, only by explicitly moving each of the elements in the subtree. This loss of flexibility explains why we cannot use this idea to represent binary search trees, but it works just fine for heaps.