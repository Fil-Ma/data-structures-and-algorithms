/*
  singly linked list implementation
*/
var Node = /** @class */ (function () {
    function Node(data) {
        this.next = null;
        this.data = data;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(comparator) {
        this.head = null;
        this.comparator = comparator;
    }
    LinkedList.prototype.append = function (data) {
        if (!this.head) {
            this.head = new Node(data);
        }
        else {
            var current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = new Node(data);
        }
    };
    LinkedList.prototype.delete = function (data) {
        if (!this.head)
            return;
        // Check if the head node is the node to be removed
        if (this.comparator(this.head.data, data)) {
            this.head = this.head.next;
            return;
        }
        var current = this.head.next;
        var previous = this.head;
        /**
         * Search for the node to be removed and keep track of its previous node
         *
         * If it were a double linked list, we could simply search the node
         * and it would have a pointer to the previous node
         **/
        while (current) {
            if (this.comparator(current.data, data)) {
                current = null;
            }
            else {
                previous = current;
                current = current.next;
            }
        }
        /**
         * set previous.next to the target.next, if the node target is not found,
         * the 'previous' will point to the last node,
         * since the last node hasn't next, nothing will happen
         **/
        previous.next = previous.next ? previous.next.next : null;
    };
    LinkedList.prototype.search = function (data) {
        var current = this.head;
        while (current) {
            if (this.comparator(current.data, data)) {
                return current;
            }
            current = current.next;
        }
        return null;
    };
    LinkedList.prototype.traverse = function () {
        var current = this.head;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    };
    return LinkedList;
}());
/*
  implementation of a hash table with chaining resolution for collisions
*/
function sumChars(value) {
    return value.split("").reduce(function (acc, char) { return acc + char.charCodeAt(0); }, 0);
}
var HashTable = /** @class */ (function () {
    function HashTable(size) {
        this.data = [];
        this.size = size;
    }
    HashTable.prototype.hash = function (value) {
        var sum = sumChars(value);
        return sum % this.size;
    };
    HashTable.prototype.insert = function (value) {
        var index = this.hash(value);
        if (!this.data[index]) {
            this.data[index] = new LinkedList(function (a, b) { return a === b; });
        }
        this.data[index].append(value);
    };
    HashTable.prototype.delete = function (value) {
        var index = this.hash(value);
        if (!this.data[index])
            return;
        this.data[index].delete(value);
    };
    HashTable.prototype.search = function (value) {
        var _a;
        var index = this.hash(value);
        if (this.data[index]) {
            return ((_a = this.data[index].search(value)) === null || _a === void 0 ? void 0 : _a.data) || null;
        }
        return null;
    };
    HashTable.prototype.print = function () {
        for (var i = 0; i < this.size; i++) {
            console.log("[".concat(i, "] =>"));
            if (this.data[i])
                this.data[i].traverse();
        }
    };
    return HashTable;
}());
var hashTable = new HashTable(10);
hashTable.insert("aabb");
hashTable.insert("bbcc");
hashTable.insert("abcd");
hashTable.insert("abab");
console.log("--- FIRST PRINT ---");
hashTable.print();
hashTable.delete("abab");
console.log("\n\n --- SECOND PRINT ---");
hashTable.print();
