/*
  HEAP TREE (binary tree)
  Properties:
  - any given node is always greater than its child node/s and
    the key of the root node is the largest among all other nodes (max-heap)
  - any given node is always smaller than the child node/s and
    the key of the root node is the smallest among all other nodes (min-heap)

  ex max-heap

  9
  |--- 5 // left node
  |    |--- 1
  |    |--- 3
  |--- 4 // right node
  |    |--- 2

  ex min-heap

  1
  |--- 2 // left node
  |    |--- 4
  |    |--- 5
  |--- 3 // right node
  |    |--- 9
*/
class MinHeap {
  private heap: number[];

  constructor() {
    this.heap = [];
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  private getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  private swap(index1: number, index2: number): void {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  insert(value: number): void {
    this.heap.push(value);
    this.heapifyUp();
  }

  private heapifyUp(): void {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] > this.heap[index]) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  removeMin(): number | null {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop() || null;

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown();
    return min;
  }

  private heapifyDown(): void {
    let index = 0;
    const length = this.heap.length;

    while (this.getLeftChildIndex(index) < length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      const rigthChildeIndex = this.getRightChildIndex(index);

      if (rigthChildeIndex < length && this.heap[rigthChildeIndex] < this.heap[smallerChildIndex]) {
        smallerChildIndex = rigthChildeIndex;
      }

      if (this.heap[index] <= this.heap[smallerChildIndex]) {
        break;
      }

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }

  peek(): number| null {
    if (this.heap.length === 0) return null;
    return this.heap[0];
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }
}

const minHeap = new MinHeap();

minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(8);
minHeap.insert(1);
minHeap.insert(6);

console.log("Heap after insertions: ", minHeap); // Check the structure

// Peek at the minimum element
console.log("Peek minimum: ", minHeap.peek()); // Output should be 1, the smallest element

// Remove the minimum element
console.log("Remove minimum: ", minHeap.removeMin()); // Output should be 1
console.log("Heap after removing minimum: ", minHeap);

// Insert additional elements
minHeap.insert(2);
minHeap.insert(4);
console.log("Heap after additional insertions: ", minHeap);

// Continue removing the minimum element until the heap is empty
while (!minHeap.isEmpty()) {
    console.log("Remove minimum: ", minHeap.removeMin());
    console.log("Current heap: ", minHeap);
}

