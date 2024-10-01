// Define the Queue interface
interface IQueue<T> {
  enqueue: (item: T) => void;
  dequeue: () => T | null;
  peek: () => T | null;
  isEmpty: () => boolean;
  size: () => number;
}

// Implement the Queue class
class Queue<T> implements IQueue<T> {
  private storage: T[] = []; // Internal array to store queue elements

  // Add an element to the end of the queue
  enqueue(item: T): void {
      this.storage.push(item);
  }

  // Remove and return the element from the front of the queue
  dequeue(): T | null {
      return this.storage.length === 0 ? null : this.storage.shift() || null;
  }

  // Return the element at the front without removing it
  peek(): T | null {
      return this.storage.length === 0 ? null : this.storage[0];
  }

  // Check if the queue is empty
  isEmpty(): boolean {
      return this.storage.length === 0;
  }

  // Get the number of elements in the queue
  size(): number {
      return this.storage.length;
  }
}

// Example Usage
const queue = new Queue<number>();

// Enqueue elements
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

// Check the size of the queue
console.log("Size of the queue:", queue.size()); // Output: 3

// Peek at the front element
console.log("Front element:", queue.peek()); // Output: 10

// Dequeue the front element
console.log("Dequeued element:", queue.dequeue()); // Output: 10

// Check if the queue is empty
console.log("Is queue empty?", queue.isEmpty()); // Output: false

// Dequeue remaining elements
console.log("Dequeued element:", queue.dequeue()); // Output: 20
console.log("Dequeued element:", queue.dequeue()); // Output: 30

// Check if the queue is empty after dequeuing all elements
console.log("Is queue empty?", queue.isEmpty()); // Output: true
