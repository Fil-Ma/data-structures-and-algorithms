var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLACK"] = 1] = "BLACK";
})(Color || (Color = {}));
var RedBlackNode = /** @class */ (function () {
    function RedBlackNode(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.color = Color.RED; // new nodes are always red
    }
    return RedBlackNode;
}());
var RedBlackTree = /** @class */ (function () {
    function RedBlackTree() {
        this.root = null;
    }
    RedBlackTree.prototype.bstInsert = function (root, node) {
        if (!root) {
            return node;
        }
        if (node.data < root.data) {
            root.left = this.bstInsert(root.left, node);
            root.left.parent = root;
        }
        else if (node.data > root.data) {
            root.right = this.bstInsert(root.right, node);
            root.right.parent = root;
        }
        return root;
    };
    RedBlackTree.prototype.leftRotate = function (node) {
        var rightChild = node.right;
        node.right = rightChild.left;
        if (rightChild.left !== null) {
            rightChild.left.parent = node;
        }
        rightChild.parent = node.parent;
        if (node.parent === null) {
            this.root = rightChild;
        }
        else if (node === node.parent.left) {
            node.parent.left = rightChild;
        }
        else {
            node.parent.right = rightChild;
        }
        rightChild.left = node;
        node.parent = rightChild;
    };
    RedBlackTree.prototype.rightRotate = function (node) {
        var leftChild = node.left;
        node.left = leftChild.right;
        if (leftChild.right !== null) {
            leftChild.right.parent = node;
        }
        leftChild.parent = node.parent;
        if (node.parent === null) {
            this.root = leftChild;
        }
        else if (node === node.parent.right) {
            node.parent.right = leftChild;
        }
        else {
            node.parent.left = leftChild;
        }
        leftChild.right = node;
        node.parent = leftChild;
    };
    RedBlackTree.prototype.fixViolation = function (node) {
        var _a;
        var parent = null;
        var grandParent = null;
        while (node !== this.root && ((_a = node.parent) === null || _a === void 0 ? void 0 : _a.color) === Color.RED) {
            parent = node.parent;
            grandParent = parent.parent;
            // if node's parent is a left, grandParent.right is the node uncle
            if (parent === (grandParent === null || grandParent === void 0 ? void 0 : grandParent.left)) {
                var uncle = grandParent.right;
                // case 1 - uncle is red
                if ((uncle === null || uncle === void 0 ? void 0 : uncle.color) === Color.RED) {
                    grandParent.color = Color.RED;
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    node = grandParent;
                }
                else {
                    // uncle is a black node
                    if (node === parent.right) {
                        // case 2 - node is right child
                        this.leftRotate(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    // case 3 - node is left child
                    this.rightRotate(grandParent);
                    var tempColor = parent.color;
                    parent.color = grandParent.color;
                    grandParent.color = tempColor;
                    node = parent;
                }
            }
            else if (parent === (grandParent === null || grandParent === void 0 ? void 0 : grandParent.right)) {
                // node's parent is a right, grandParent.left is the node uncle
                var uncle = grandParent.left;
                // case 1: uncle is red
                if ((uncle === null || uncle === void 0 ? void 0 : uncle.color) === Color.RED) {
                    grandParent.color = Color.RED;
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    node = grandParent;
                }
                else {
                    // uncle is black
                    // case 2 - node is left child
                    if (node === parent.left) {
                        this.rightRotate(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    // case 3 - node is right child
                    this.leftRotate(grandParent);
                    var tempColor = parent.color;
                    parent.color = grandParent.color;
                    grandParent.color = tempColor;
                    node = parent;
                }
            }
        }
        // color the root black
        this.root.color = Color.BLACK;
    };
    RedBlackTree.prototype.insert = function (data) {
        var newNode = new RedBlackNode(data);
        this.root = this.bstInsert(this.root, newNode);
        this.fixViolation(newNode);
    };
    RedBlackTree.prototype.printTree = function (node, indent, last) {
        if (node === void 0) { node = this.root; }
        if (indent === void 0) { indent = ""; }
        if (last === void 0) { last = true; }
        if (node !== null) {
            console.log(indent + (last ? "└── " : "├── ") + (node.color === Color.RED ? "RED" : "BLACK") + " " + node.data);
            indent += last ? "    " : "│   ";
            this.printTree(node.left, indent, false);
            this.printTree(node.right, indent, true);
        }
    };
    return RedBlackTree;
}());
var rbTree = new RedBlackTree();
var insertRBNodes = function (array) { return array.forEach(function (n) { return rbTree.insert(n); }); };
// const arr = [10, 18, 7, 15, 16, 30, 25, 40, 60];
// const arr = [3, 2, 5, 6, 10, 4];
var arr = [10, 20, 30, 15, 25];
insertRBNodes(arr);
console.log("Red-Black Tree after insertion:");
rbTree.printTree();
