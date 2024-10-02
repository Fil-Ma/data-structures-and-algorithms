var TreeNode = /** @class */ (function () {
    function TreeNode(data) {
        this.data = data;
    }
    return TreeNode;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree(comparator) {
        this.comparator = comparator;
    }
    BinarySearchTree.prototype.insertNode = function (node, data) {
        if (!node) {
            return new TreeNode(data);
        }
        var comparison = this.comparator(data, node.data);
        // if data > this.root.data
        if (comparison === 1) {
            node.rightNode = this.insertNode(node.rightNode, data);
        }
        else if (comparison === -1) {
            node.leftNode = this.insertNode(node.leftNode, data);
        }
        return node;
    };
    BinarySearchTree.prototype.searchNode = function (node, data) {
        if (!node)
            return null;
        var comparison = this.comparator(data, node.data);
        if (comparison === 0) {
            return node;
        }
        else if (comparison === 1) {
            return this.searchNode(node.rightNode, data);
        }
        else {
            return this.searchNode(node.leftNode, data);
        }
    };
    BinarySearchTree.prototype.insert = function (data) {
        this.root = this.insertNode(this.root, data);
    };
    BinarySearchTree.prototype.search = function (data) {
        return this.searchNode(this.root, data);
    };
    BinarySearchTree.prototype.inOrderTraversal = function (node) {
        if (node) {
            this.inOrderTraversal(node.leftNode);
            console.log(node.data);
            this.inOrderTraversal(node.rightNode);
        }
    };
    BinarySearchTree.prototype.preOrderTraversal = function (node) {
        if (node) {
            console.log(node.data);
            this.preOrderTraversal(node.leftNode);
            this.preOrderTraversal(node.rightNode);
        }
    };
    BinarySearchTree.prototype.postOrderTraversal = function (node) {
        if (node) {
            this.postOrderTraversal(node.leftNode);
            this.postOrderTraversal(node.rightNode);
            console.log(node.data);
        }
    };
    BinarySearchTree.prototype.breadthFirstTraversal = function () {
        var queue = [];
        if (this.root) {
            queue.push(this.root);
        }
        while (queue.length > 0) {
            // dequeue the first element
            var currentNode = queue.shift();
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
    };
    return BinarySearchTree;
}());
var bst = new BinarySearchTree(function (a, b) {
    if (a > b)
        return 1;
    if (a < b)
        return -1;
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
