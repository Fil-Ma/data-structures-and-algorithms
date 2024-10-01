# Data Structures

Data structures can be classified as either:

- **Linear**
- **Non-Linear**: data elements are randomly arranged. The elements are non-arranged sequentially and they can have multiple relationships. Examples include: trees, graphs, hash table, set. 

## Linear Structures

Linear data structures present data elements linked to one another in a particular order.

### Array

An array is one of the fundamental data structures in programming. They allow storing multiple elements of the same type in a single variable, providing a way to organize and access data efficiently.

> [!IMPORTANT]
> An array is a collection of elements, each identified by at least one index or key. The size of the array is defined at the time of its creation and usually remains fixed in size.

Characteristics:
- _Fixed size_: the size fo the array must be declared during initialization
- _Same data type_: all elements in the array must be of the same data type (e.g. all integers)
- _Indexed Access_: elements can be accessed directly using their index

Static arrays present certain limitations that make them less flexible and efficient for many applications.

| **Downside of Static Arrays**        | **Limitation**                                                | 
|:-------------------------------------|:--------------------------------------------------------------|
| **Fixed Size**                       | Size must be defined at creation and cannot be changed.       |
| **Memory Inefficiency**              | Can waste memory if too large or be insufficient if too small.|
| **Difficulty in Insertion/Deletion** | Inserting/deleting elements requires shifting elements (O(n)).|
| **No Built-in Resizing**             | Requires manual resizing and copying elements.                |

How Dynamic Arrays Solve These Issues

Dynamic arrays address the downsides of static arrays through a more flexible design. Here are some key features:
- _resizable capacity_: dynamic arrays can grow or shrink in size during runtime. When the current capacity is reached, the dynamic array can allocate a new, larger array and copu the existing elements into it.
- _efficient memory usage_: dynamic arrays often allocate extra space beyond the current needs to minimize the number of times they need to resize.
- _simplified insertion and deletion_: when adding elements, if the dynamic array reaches its limit, it can resize and continue to add elements without the need for manual shifting.
- _automatic memory management_: many languages provide built-in implementations of dynamic arrays which handle the resizing and memory allocation automatically.

### Linked List

Linked lists are a fundamental data structure that consist of a collection of nodes, where each node contains data and a reference (or pointer) to the next node in the sequence. This structure allows for efficient insertion and deletion of elements.

Characteristics:
- _dynamic size_: unlike static arrays, linked lists can grow and shrink in size dynamicaaly as elements are added or removed. This makes them more memory efficient when dealing with unknown or changing amounts of data.
- _non-contiguous memory allocation_: linked lists do not require their elements to be stored in contiguous memory locations. Each node can be allocated anywhere in memory, which allows for better usage of memory resources.
- _node structure_: each node typically contains two components:
    - data - the actual value or data stored in the node
    - pointer - a reference to the next node in the sequence (in singly linked lists) or references to both the next and previous nodes (in doubly linked lists)

Types of Linked Lists
- __singly linked__: each node points to the next node, with the last node pointing to `null` or `None`
- __doubly linked__: each node has pointers to both the next and previous nodes, allowing for traversal in both directions
- __circular linked__: the last node points back to the first node, forming a circle. This can be implemented in both the previous types

| **Downside of Linked Lists** | **Limitation**                                                                                                                     | 
|:-----------------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
| **Memory Overhead**          | Each node requires additional memory for storing the pointer, which can lead to increased memory usage compared to arrays.         |
| **Sequential Access**        | Accessing an element by index requires traversing the list from the head, leading to an average time complexity of O(n) for access.|
| **Cache Locality**           | They may not exhibit good cache performance because nodes are not store contiguously in memory.                                    |   