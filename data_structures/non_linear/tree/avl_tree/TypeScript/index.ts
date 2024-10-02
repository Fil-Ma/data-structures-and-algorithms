class AVLTreeNode<T> {
  data: T;
  leftNode: AVLTreeNode<T> | null;
  rightNode: AVLTreeNode<T> | null;
  height: number;

  constructor(data: T) {
    this.data = data;
    this.leftNode = null;
    this.rightNode = null;
    this.height = 1;
  }
}

type TComp<T> = (a: T, b: T) => number;

class AVLTree<T> {
  root: AVLTreeNode<T> | null;
  comparator: TComp<T>;

  constructor(comparator: TComp<T>) {
    this.root = null;
    this.comparator = comparator;
  }

  // get node height
  private getHeight(node: AVLTreeNode<T> | null): number {
    if (!node) return 0;
    return node.height;
  }

  // get node balance
  private getBalance(node: AVLTreeNode<T> | null): number {
    if (!node) return 0;
    return this.getHeight(node.leftNode) - this.getHeight(node.rightNode);
  }

  private getNewHeight(node: AVLTreeNode<T>) {
    return Math.max(
      this.getHeight(node.leftNode),
      this.getHeight(node.rightNode)
    ) + 1;
  }

  // right rotation for balancing
  private rightRotate(y: AVLTreeNode<T>): AVLTreeNode<T> {
    const x = y.leftNode!;
    const T2 = x.rightNode;

    x.rightNode = y;
    y.leftNode = T2;

    y.height = this.getNewHeight(y);
    x.height = this.getNewHeight(x);

    return x;
  }

  // left rotation for balancing
  private leftRotate(x: AVLTreeNode<T>): AVLTreeNode<T> {
    const y = x.rightNode!;
    const T2 = y.leftNode;

    y.leftNode = x;
    x.rightNode = T2;

    x.height = this.getNewHeight(x);
    y.height = this.getNewHeight(y);

    return y;
  }

  private insertNode(node: AVLTreeNode<T> | null, data: T): AVLTreeNode<T> {
    if (!node) {
      return new AVLTreeNode(data);
    }

    const comparison = this.comparator(data, node.data);

    // if data < this.root.data
    if (comparison === -1) {
      node.leftNode = this.insertNode(node.leftNode, data);
    } else if (comparison === 1) {
      node.rightNode = this.insertNode(node.rightNode, data);
    } else {
      return node;
    }

    // update the height of the ancestor node
    node.height = 1 + Math.max(
      this.getHeight(node.leftNode),
      this.getHeight(node.rightNode)
    );

    // check the balance factor to check if the tree is unbalanced
    const balance = this.getBalance(node);

    if (balance > 1 && data < node.leftNode!.data) {
      return this.rightRotate(node);
    }

    if (balance < -1 && data > node.rightNode!.data) {
      return this.leftRotate(node);
    }

    if (balance > 1 && data > node.leftNode!.data) {
      node.leftNode = this.leftRotate(node.leftNode!);
      return this.rightRotate(node);
    }

    if (balance < -1 && data < node.rightNode!.data) {
      node.rightNode = this.rightRotate(node.rightNode!);
      return this.leftRotate(node);
    }

    return node;
  }

  insert(data: T): void {
    this.root = this.insertNode(this.root, data);
  }
}

const avl = new AVLTree((a: number, b: number) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

avl.insert(10);
avl.insert(20);
avl.insert(30);
avl.insert(40);
avl.insert(50);
avl.insert(25);

console.log(JSON.stringify(avl.root, null, 2));