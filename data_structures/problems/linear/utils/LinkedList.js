"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(data) {
        this.next = null;
        this.data = data;
    }
    return Node;
}());
exports.Node = Node;
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
exports.LinkedList = LinkedList;
