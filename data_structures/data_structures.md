# Data Structures

Data structures can be classified as either:

- **Linear**
- **Non-Linear** 

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

### Stack

A stack is a __LIFO (Last In, First Out)__ data structure, meaning that the most recently added item is the first to be removed. Typical operations associated with a stack are:
- _push_: add an element to the top of the stack
- _pop_: remove and return the top element of the stack
- _peek_: return the top element without removing it
- _isEmtpy_: check if the stack is empty
- _size_: return the number of elements in the stack

### Queue

A queue is a __FIFO (First In, First Out)__ data structure, meaning the first element added to the queue is the first one to be removed. Common operations include:
- _enqueue_: add an element to the end of the queue
- _dequeue_: remove and return the element from the front of the queue
- _peek_: return the element at the front without removing it
- _isEmtpy_: check if the queue is empty
- _size_: return the number of elements in the queue

## Non-Linear Structures

Non-linear data structures are types of data structures in which the elements are not arranged in a sequential or linear order. Unlike linear data structures, in non-linear data structures, each element can be connected to multiple elements forming a hierarchical or networked relationship.

### Dictionary

A dictionary is a data structure that stores key-value pairs. Each key is unique, and it can be used to retrieve the corresponding value. The common operations for a dictionary include:
- _Search(D,k)_ - Given a search key _k_, return a pointer to the element in dictionary _D_ whose key value is _k_, if one exists.
- _Insert(D,x)_ - Given a data item _x_, add it to the set in the dictionary _D_.
- _Delete(D,x)_ - Given a pointer to a given data item _x_ in the dictionary _D_, remove it from _D_.

### Tree

A tree is a non-linear, hierarchical data structure made up of nodes, where each node contains a value (or data) and references to other nodes (its children). Trees are used to represent relationships where elements are organized in a hierarchy, with one central "root" and multiple levels of nodes branching off from it.

Key concepts:
- node: the basic building block of a tree. A node contains data and references to its child nodes. Each node may also have a parent.
- edge: a connection between two nodes. It represents the relationship between a parent and a child node
- parent node: a node that has one or more children
- child node: a node that has a parent
- siblings: nodes that share the same parent
- subtree: a portion of tree that is itself a tree, consisting of a node and all its descendants
- height of tree: the number of edges on the longest path from the root to a leaf node
- depth of node: the number of edges from the root node to the node in question
- level of node: the depth of a node plus one
- binary tree: a special type of tree where each node has at most two children, usually referred to as the left child and the right child

|**Types of Trees** | **Definition** | **Use cases** |
|:-----------------------------|:-------|:-------|
| Binary Tree | A tree where each node has at most two children | Binary trees are used in searching, sorting and hierarchical data storage |
| Binary Search Tree (BST) | A binary tree in which every node follows this property: the value of all nodes in the left subtree of a node is smaller, and the value of all nodes in the right subtree is larger | Efficient searching and sorting |
| AVL Tree | A self-balancing binary search tree. For every node, the difference in height between the left and right subtree is at most one | Balanced searching and insertion to avoid skewed trees, making the time complexity logarithmic |
| Red-Black Tree | Another type of self-balancing binary search tree where each node is assigned a color (red or black) and follows certain balancing properties | used in associative containers, databases and memory management |
| Heap (Binary Heap) | A complete binary tree where the value of each node is either greater (max heap) or smaller (min heap) than its children | Implementing priority queues, scheduling algorithms and heapsort |
| B-Tree | A balanced tree where each node can have more than two children and is used for efficiently storing and retrieving large blocks of data | Used in databases and file systems, where data is read in blocks |
| Trie | A tree where each node represents a single character, and strings are stored by branching from the root node | Implementing dictionaries, auto-complete functionality and IP routing |
| N-ary Tree | A tree where each node can have at most N children | Representation of hierarchical data, such as organizational structures or file systems |

Advantages:
- _Efficient searching_: trees like Binary Search Trees (BSTs) allow efficient searching, insertion, and deletion, usually O(log n) time complexity
- _Flexible data representation_: trees can represent hierarchical data like folder structures, organizational charts, and family trees
- _Balanced structures_: trees like AVL and Red-Black trees automatically balance themeselves, ensuring efficient operations

Disadvantages:
- _Complexity in operations_: operations like insertion and deletion can be complex in trees like AVL or Red-Black trees due to the need for rebalancing
- _Storage overhead_:trees require more storage due to pointers to child nodes, especially in binary trees and self-balancing trees

Trees operations:
1. Insertion: adding a new node to the tree, typically at a leaf node
2. Deletion: removing a node from the tree while maintaining its structure
3. Traversal: visiting all the nodes in the tree in a specific order

In-Order Traversal (for BST)

```
function inOrderTraversal(node):
    if node is not null:
        inOrderTraversal(node.left)
        print(node.data)
        inOrderTraversal(node.right)
```

Pre-Order Traversal

```
function preOrderTraversal(node):
    if node is not null:
        print(node.data)
        preOrderTraversal(node.left)
        preOrderTraversal(node.right)
```

Post-Order Traversal

```
function preOrderTraversal(node):
    if node is not null:
        postOrderTraversal(node.left)
        postOrderTraversal(node.right)
        print(node.data)
```

Level-order Traversal (Breadth-First Search)

```
function BFS(tree, root):
    # Create a queue and enqueue the root node
    create an empty queue Q
    enqueue root onto Q

    # while the queue is not empty
    while Q is not empty:
        # Dequeue a node form the front of the queue
        currentNode = dequeue from Q

        # Process the current node (print or store the node)
        print currentNode

        # Enqueue all the children of the current node
        for each child in currentNode.children:
            enqueue child onto Q
```
