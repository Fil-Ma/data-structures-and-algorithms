var AVLTreeNode = /** @class */ (function () {
    function AVLTreeNode(data) {
        this.data = data;
        this.leftNode = null;
        this.rightNode = null;
        this.height = 1;
    }
    return AVLTreeNode;
}());
var AVLTree = /** @class */ (function () {
    function AVLTree(comparator) {
        this.root = null;
        this.comparator = comparator;
    }
    // get node height
    AVLTree.prototype.getHeight = function (node) {
        if (!node)
            return 0;
        return node.height;
    };
    // get node balance
    AVLTree.prototype.getBalance = function (node) {
        if (!node)
            return 0;
        return this.getHeight(node.leftNode) - this.getHeight(node.rightNode);
    };
    AVLTree.prototype.getNewHeight = function (node) {
        return Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode)) + 1;
    };
    // right rotation for balancing
    AVLTree.prototype.rightRotate = function (y) {
        var x = y.leftNode;
        var T2 = x.rightNode;
        x.rightNode = y;
        y.leftNode = T2;
        y.height = this.getNewHeight(y);
        x.height = this.getNewHeight(x);
        return x;
    };
    // left rotation for balancing
    AVLTree.prototype.leftRotate = function (x) {
        var y = x.rightNode;
        var T2 = y.leftNode;
        y.leftNode = x;
        x.rightNode = T2;
        x.height = this.getNewHeight(x);
        y.height = this.getNewHeight(y);
        return y;
    };
    AVLTree.prototype.insertNode = function (node, data) {
        if (!node) {
            return new AVLTreeNode(data);
        }
        var comparison = this.comparator(data, node.data);
        // if data < this.root.data
        if (comparison === -1) {
            node.leftNode = this.insertNode(node.leftNode, data);
        }
        else if (comparison === 1) {
            node.rightNode = this.insertNode(node.rightNode, data);
        }
        else {
            return node;
        }
        // update the height of the ancestor node
        node.height = 1 + Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));
        // check the balance factor to check if the tree is unbalanced
        var balance = this.getBalance(node);
        if (balance > 1 && data < node.leftNode.data) {
            return this.rightRotate(node);
        }
        if (balance < -1 && data > node.rightNode.data) {
            return this.leftRotate(node);
        }
        if (balance > 1 && data > node.leftNode.data) {
            node.leftNode = this.leftRotate(node.leftNode);
            return this.rightRotate(node);
        }
        if (balance < -1 && data < node.rightNode.data) {
            node.rightNode = this.rightRotate(node.rightNode);
            return this.leftRotate(node);
        }
        return node;
    };
    AVLTree.prototype.insert = function (data) {
        this.root = this.insertNode(this.root, data);
    };
    return AVLTree;
}());
var avl = new AVLTree(function (a, b) {
    if (a > b)
        return 1;
    if (a < b)
        return -1;
    return 0;
});
avl.insert(10);
avl.insert(20);
avl.insert(30);
avl.insert(40);
avl.insert(50);
avl.insert(25);
console.log(JSON.stringify(avl.root, null, 2));
