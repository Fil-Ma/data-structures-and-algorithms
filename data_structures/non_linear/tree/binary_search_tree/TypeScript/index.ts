class TreeNode<T> {
  data: T;
  leftNode: TreeNode<T> | null;
  rightNode: TreeNode<T> | null;

  constructor(data: T) {
    this.data = data;
  }
}

type TComparator<T> = (a: T, b: T) => number;

class BinarySearchTree<T> {
  root: TreeNode<T> | null;
  comparator: TComparator<T>;

  constructor(comparator: TComparator<T>) {
    this.comparator = comparator;
  }

  private insertNode(node: TreeNode<T> | null, data: T): TreeNode<T> {
    if (!node) {
      return new TreeNode(data);
    }

    const comparison = this.comparator(data, node.data);

    // if data > this.root.data
    if (comparison === 1) {
      node.rightNode = this.insertNode(node.rightNode, data);
    } else if (comparison === -1) {
      node.leftNode = this.insertNode(node.leftNode, data);
    }

    return node;
  }

  private searchNode(node: TreeNode<T> | null, data: T): TreeNode<T> | null {
    if (!node) return null;

    const comparison = this.comparator(data, node.data);

    if (comparison === 0) {
      return node;
    } else if (comparison === 1) {
      return this.searchNode(node.rightNode, data);
    } else {
      return this.searchNode(node.leftNode, data);
    }
  }

  insert(data: T): void {
    this.root = this.insertNode(this.root, data);
  }

  search(data: T): TreeNode<T> | null {
    return this.searchNode(this.root, data);
  }

  inOrderTraversal(node: TreeNode<T> | null): void {
    if (node) {
      this.inOrderTraversal(node.leftNode);
      console.log(node.data);
      this.inOrderTraversal(node.rightNode);
    }
  }

  preOrderTraversal(node: TreeNode<T> | null): void {
    if (node) {
      console.log(node.data);
      this.preOrderTraversal(node.leftNode);
      this.preOrderTraversal(node.rightNode);
    }
  }

  postOrderTraversal(node: TreeNode<T> | null): void {
    if (node) {
      this.postOrderTraversal(node.leftNode);
      this.postOrderTraversal(node.rightNode);
      console.log(node.data);
    }
  }

  breadthFirstTraversal() {
    const queue: Array<TreeNode<T>> = [];

    if (this.root) {
      queue.push(this.root);
    }

    while (queue.length > 0) {
      // dequeue the first element
      const currentNode = queue.shift();

      if (currentNode) {
        console.log(currentNode.data);

        // enqueue left and right children
        if (currentNode.leftNode) {
          queue.push(currentNode.leftNode);
        }
        if (currentNode.rightNode) {
          queue.push(currentNode.rightNode);
        }
      }
    }
    

  }
}

let bst = new BinarySearchTree((a: number, b: number) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);
bst.insert(25);
bst.insert(35);

console.log(JSON.stringify(bst, null, 2));

console.log(bst.search(30));
console.log(bst.search(120));

console.log("\nIN ORDER TRAVERSAL");
bst.inOrderTraversal(bst.root);

console.log("\nPRE ORDER TRAVERSAL");
bst.preOrderTraversal(bst.root);

console.log("\nPOST ORDER TRAVERSAL");
bst.postOrderTraversal(bst.root);

console.log("\nLEVEL ORDER TRAVERSAL");
bst.breadthFirstTraversal();