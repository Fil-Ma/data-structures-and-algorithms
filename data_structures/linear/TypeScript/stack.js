// Implement the Stack class
var Stack = /** @class */ (function () {
    function Stack() {
        this.storage = []; // Internal array to store stack elements
    }
    // Add an element to the top of the stack
    Stack.prototype.push = function (item) {
        this.storage.push(item);
    };
    // Remove and return the top element from the stack
    Stack.prototype.pop = function () {
        return this.storage.length === 0 ? null : this.storage.pop() || null;
    };
    // Return the top element without removing it
    Stack.prototype.peek = function () {
        return this.storage.length === 0 ? null : this.storage[this.storage.length - 1];
    };
    // Check if the stack is empty
    Stack.prototype.isEmpty = function () {
        return this.storage.length === 0;
    };
    // Get the number of elements in the stack
    Stack.prototype.size = function () {
        return this.storage.length;
    };
    return Stack;
}());
// Example Usage
var stack = new Stack();
// Push elements onto the stack
stack.push(10);
stack.push(20);
stack.push(30);
// Check the size of the stack
console.log("Size of the stack:", stack.size()); // Output: 3
// Peek at the top element
console.log("Top element:", stack.peek()); // Output: 30
// Pop the top element
console.log("Popped element:", stack.pop()); // Output: 30
// Check if the stack is empty
console.log("Is stack empty?", stack.isEmpty()); // Output: false
// Pop remaining elements
console.log("Popped element:", stack.pop()); // Output: 20
console.log("Popped element:", stack.pop()); // Output: 10
// Check if the stack is empty after popping all elements
console.log("Is stack empty?", stack.isEmpty()); // Output: true
