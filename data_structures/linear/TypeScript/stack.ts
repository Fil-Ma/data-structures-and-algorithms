// Define the Stack interface
interface IStack<T> {
  push: (item: T) => void;
  pop: () => T | null;
  peek: () => T | null;
  isEmpty: () => boolean;
  size: () => number;
}

// Implement the Stack class
class Stack<T> implements IStack<T> {
  private storage: T[] = []; // Internal array to store stack elements

  // Add an element to the top of the stack
  push(item: T): void {
      this.storage.push(item);
  }

  // Remove and return the top element from the stack
  pop(): T | null {
      return this.storage.length === 0 ? null : this.storage.pop() || null;
  }

  // Return the top element without removing it
  peek(): T | null {
      return this.storage.length === 0 ? null : this.storage[this.storage.length - 1];
  }

  // Check if the stack is empty
  isEmpty(): boolean {
      return this.storage.length === 0;
  }

  // Get the number of elements in the stack
  size(): number {
      return this.storage.length;
  }
}

// Example Usage
const stack = new Stack<number>();

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
