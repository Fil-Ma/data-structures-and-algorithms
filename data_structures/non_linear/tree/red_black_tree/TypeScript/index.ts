enum Color {
  RED = 0,
  BLACK = 1
}

class RedBlackNode {
  data: number;
  left: RedBlackNode | null;
  right: RedBlackNode | null;
  parent: RedBlackNode | null;
  color: Color;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = Color.RED; // new nodes are always red
  }
}

class RedBlackTree {
  private root: RedBlackNode | null;

  constructor() {
    this.root = null;
  }

  // Helper function to set the color of a node
  private setColor(node: RedBlackNode | null, color: Color): void {
    if (node !== null) {
        node.color = color;
    }
  }

  // Helper function to get the color of a node
  private getColor(node: RedBlackNode | null): Color {
      return node === null ? Color.BLACK : node.color;
  }

  private transplant(u: RedBlackNode, v: RedBlackNode | null): void {
    if (u?.parent === null) {
      this.root = v;
    } else if (u === u.parent.left) {
      u.parent.left = v;
    } else {
      u.parent.right = v;
    }

    if (v !== null) {
      v.parent = u.parent;
    }
  }

  private fixDelete(x: RedBlackNode | null): void {
    while (x !== this.root && this.getColor(x) === Color.BLACK) {
      if (x === x!.parent!.left) {
        let w = x!.parent!.right;

        // Case 1: x's sibling w is red
        if (this.getColor(w) === Color.RED) {
          this.setColor(w, Color.BLACK);
          this.setColor(x!.parent, Color.RED);
          this.leftRotate(x!.parent!);
          w = x!.parent!.right;
      }

      // Case 2: w's children are both black
      if (this.getColor(w!.left) === Color.BLACK && this.getColor(w!.right) === Color.BLACK) {
          this.setColor(w, Color.RED);
          x = x!.parent;
      } else {
          // Case 3: w's right child is black and left child is red
          if (this.getColor(w!.right) === Color.BLACK) {
              this.setColor(w!.left, Color.BLACK);
              this.setColor(w, Color.RED);
              this.rightRotate(w!);
              w = x!.parent!.right;
          }

          // Case 4: w's right child is red
          this.setColor(w, this.getColor(x!.parent));
          this.setColor(x!.parent, Color.BLACK);
          this.setColor(w!.right, Color.BLACK);
          this.leftRotate(x!.parent!);
          x = this.root;
        }
  } else {
      let w = x!.parent!.left;

      // Case 1: x's sibling w is red
      if (this.getColor(w) === Color.RED) {
          this.setColor(w, Color.BLACK);
          this.setColor(x!.parent, Color.RED);
          this.rightRotate(x!.parent!);
          w = x!.parent!.left;
      }

      // Case 2: w's children are both black
      if (this.getColor(w!.left) === Color.BLACK && this.getColor(w!.right) === Color.BLACK) {
          this.setColor(w, Color.RED);
          x = x!.parent;
      } else {
          // Case 3: w's left child is black and right child is red
          if (this.getColor(w!.left) === Color.BLACK) {
              this.setColor(w!.right, Color.BLACK);
              this.setColor(w, Color.RED);
              this.leftRotate(w!);
              w = x!.parent!.left;
          }

          // Case 4: w's left child is red
          this.setColor(w, this.getColor(x!.parent));
          this.setColor(x!.parent, Color.BLACK);
          this.setColor(w!.left, Color.BLACK);
          this.rightRotate(x!.parent!);
          x = this.root;
      }
  }
}

if (x !== null) {
  this.setColor(x, Color.BLACK);
}
      }
    }
  }

  private findNode() {

  }

  private deleteNode(node: RedBlackNode): void {
    let y = node;
    let yOriginalColor = y.color;
    let x: RedBlackNode | null;

    if (node.left === null) {
      x = node.right;
      this.transplant(node, node.right);
    } else if (node.right === null) {
      x = node.left;
      this.transplant(node, node.left);
    } else {
      y = this.minimum(node.right);
      yOriginalColor = y.color;
      x = y.right;

      if (y.parent === node) {
        if (x !== null) {
          x!.parent = y;
        }
      } else {
        this.transplant(y, y.right);
        y.right = node.right;
        y.right!.parent = y;
      }

      this.transplant(node, y);
      y.left = node.left;
      y.left!.parent = y;
      y.color = node.color;
    }

    if (yOriginalColor === Color.BLACK) {
      this.fixDelete(x);
    }
  }

  private bstInsert(root: RedBlackNode | null, node: RedBlackNode): RedBlackNode {
    if (!root) {
      return node;
    }

    if (node.data < root.data) {
      root.left = this.bstInsert(root.left, node);
      root.left.parent = root;
    } else if (node.data > root.data) {
      root.right = this.bstInsert(root.right, node);
      root.right.parent = root;
    }

    return root;
  }

  private leftRotate(node: RedBlackNode): void {
    const rightChild = node.right!;
    node.right = rightChild.left;

    if (rightChild.left !== null) {
      rightChild.left.parent = node;
    }

    rightChild.parent = node.parent;

    if (node.parent === null) {
      this.root = rightChild;
    } else if (node === node.parent.left) {
      node.parent.left = rightChild;
    } else {
      node.parent.right = rightChild;
    }

    rightChild.left = node;
    node.parent = rightChild;
  }

  private rightRotate(node: RedBlackNode) {
    const leftChild = node.left!;
    node.left = leftChild.right;

    if (leftChild.right !== null) {
      leftChild.right.parent = node;
    }

    leftChild.parent = node.parent;

    if (node.parent === null) {
      this.root = leftChild;
    } else if (node === node.parent.right) {
      node.parent.right = leftChild;
    } else {
      node.parent.left = leftChild;
    }

    leftChild.right = node;
    node.parent = leftChild;
  }

  private fixViolation(node: RedBlackNode): void {
    let parent: RedBlackNode | null = null;
    let grandParent: RedBlackNode | null = null;

    while (node !== this.root && node.parent?.color === Color.RED) {
      parent = node.parent;
      grandParent = parent.parent;

      // if node's parent is a left, grandParent.right is the node uncle
      if (parent === grandParent?.left) {
        const uncle = grandParent.right;

        // case 1 - uncle is red
        if (uncle?.color === Color.RED) {
          grandParent.color = Color.RED;
          parent.color = Color.BLACK;
          uncle.color = Color.BLACK;
          node = grandParent;
        } else {
          // uncle is a black node

          if (node === parent.right) {
            // case 2 - node is right child
            this.leftRotate(parent);
            node = parent;
            parent = node.parent!;
          }

          // case 3 - node is left child
          this.rightRotate(grandParent);
          const tempColor = parent.color;
          parent.color = grandParent.color;
          grandParent.color = tempColor;
          node = parent;
        }

      } else if (parent === grandParent?.right) {
        // node's parent is a right, grandParent.left is the node uncle
        const uncle = grandParent.left;

        // case 1: uncle is red
        if (uncle?.color === Color.RED) {
          grandParent.color = Color.RED;
          parent.color = Color.BLACK;
          uncle.color = Color.BLACK;
          node = grandParent;
        } else {
          // uncle is black

          // case 2 - node is left child
          if (node === parent.left) {
            this.rightRotate(parent);
            node = parent;
            parent = node.parent!;
          }

          // case 3 - node is right child
          this.leftRotate(grandParent);
          const tempColor = parent.color;
          parent.color = grandParent.color;
          grandParent.color = tempColor;
          node = parent;
        }
      }
    }

    // color the root black
    this.root!.color = Color.BLACK;
  }

  insert(data: number): void {
    let newNode = new RedBlackNode(data);

    this.root = this.bstInsert(this.root, newNode);

    this.fixViolation(newNode);
  }

  delete(data: number): void {
    const node = this.findNode(this.root, data);

    if (!node) {
      console.log("Node not found");
      return;
    }

    this.deleteNode(node);
  }

  printTree(
    node: RedBlackNode | null = this.root,
    indent: string = "",
    last: boolean = true
  ): void {
    if (node !== null) {
        console.log(indent + (last ? "└── " : "├── ") + (node.color === Color.RED ? "RED" : "BLACK") + " " + node.data);
        indent += last ? "    " : "│   ";
        this.printTree(node.left, indent, false);
        this.printTree(node.right, indent, true);
    }
  }
}

const rbTree = new RedBlackTree();

const insertRBNodes = (array: number[]) => array.forEach((n) => rbTree.insert(n));
// const arr = [10, 18, 7, 15, 16, 30, 25, 40, 60];
// const arr = [3, 2, 5, 6, 10, 4];
const arr = [10, 20, 30, 15, 25]
insertRBNodes(arr);

console.log("Red-Black Tree after insertion:");
rbTree.printTree();