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
