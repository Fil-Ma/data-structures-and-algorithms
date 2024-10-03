var AVLTreeNode = /** @class */ (function () {
    function AVLTreeNode(data) {
        this.data = data;
        this.leftNode = null;
        this.rightNode = null;
        this.height = 1;
    }
    return AVLTreeNode;
}());
// get node height
function getHeight(node) {
    if (!node)
        return 0;
    return node.height;
}
// get node balance
function getBalance(node) {
    if (!node)
        return 0;
    return getHeight(node.leftNode) - getHeight(node.rightNode);
}
function getNewHeight(node) {
    return Math.max(getHeight(node.leftNode), getHeight(node.rightNode)) + 1;
}
function getMinValueNode(node) {
    var current = node;
    while (current.leftNode !== null) {
        current = current.leftNode;
    }
    return current;
}
var AVLTree = /** @class */ (function () {
    function AVLTree(comparator) {
        this.root = null;
        this.comparator = comparator;
    }
    // right rotation for balancing
    AVLTree.prototype.rightRotate = function (y) {
        var x = y.leftNode;
        var T2 = x.rightNode;
        x.rightNode = y;
        y.leftNode = T2;
        y.height = getNewHeight(y);
        x.height = getNewHeight(x);
        return x;
    };
    // left rotation for balancing
    AVLTree.prototype.leftRotate = function (x) {
        var y = x.rightNode;
        var T2 = y.leftNode;
        y.leftNode = x;
        x.rightNode = T2;
        x.height = getNewHeight(x);
        y.height = getNewHeight(y);
        return y;
    };
    AVLTree.prototype.balanceNode = function (node) {
        // check the balance factor to check if the tree is unbalanced
        var balance = getBalance(node);
        // Left heavy (balance > 1)
        if (balance > 1) {
            if (getBalance(node.leftNode) >= 0) {
                // Left Left Case
                return this.rightRotate(node);
            }
            else {
                // Left Right Case
                node.leftNode = this.leftRotate(node.leftNode);
                return this.rightRotate(node);
            }
        }
        // Right heavy (balance < -1)
        if (balance < -1) {
            if (getBalance(node.rightNode) <= 0) {
                // Right Right Case
                return this.leftRotate(node);
            }
            else {
                // Right Left Case
                node.rightNode = this.rightRotate(node.rightNode);
                return this.leftRotate(node);
            }
        }
        return node;
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
        node.height = getNewHeight(node);
        return this.balanceNode(node);
    };
    AVLTree.prototype.deleteNode = function (node, data) {
        if (!node) {
            return node;
        }
        var comparison = this.comparator(data, node.data);
        if (comparison === -1) {
            node.leftNode = this.deleteNode(node.leftNode, data);
        }
        else if (comparison === 1) {
            node.rightNode = this.deleteNode(node.rightNode, data);
        }
        else {
            // node with only one child or no child
            if (!node.leftNode) {
                return node.rightNode;
            }
            else if (!node.rightNode) {
                return node.leftNode;
            }
            // node with two children
            var temp = getMinValueNode(node.rightNode);
            node.data = temp.data;
            node.rightNode = this.deleteNode(node.rightNode, temp.data);
        }
        node.height = getNewHeight(node);
        return this.balanceNode(node);
    };
    AVLTree.prototype.insert = function (data) {
        this.root = this.insertNode(this.root, data);
    };
    AVLTree.prototype.delete = function (data) {
        this.root = this.deleteNode(this.root, data);
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
avl.insert(9);
avl.insert(5);
avl.insert(10);
avl.insert(0);
avl.insert(6);
avl.insert(11);
avl.insert(-1);
avl.insert(1);
avl.insert(2);
console.log("AVL Tree before deletion:");
console.log(JSON.stringify(avl.root, null, 2));
avl.delete(10);
console.log("AVL Tree after deletion:");
console.log(JSON.stringify(avl.root, null, 2));
