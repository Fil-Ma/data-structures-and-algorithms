class MaxHeap {
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
      if (this.heap[parentIndex] < this.heap[index]) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  removeMax(): number | null {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop() || null;

    const max = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown();
    return max;
  }

  private heapifyDown(): void {
    let index = 0;
    const length = this.heap.length;

    while (this.getLeftChildIndex(index) < length) {
      let largerChildIndex = this.getLeftChildIndex(index);
      const rigthChildIndex = this.getRightChildIndex(index);

      if (rigthChildIndex < length && this.heap[rigthChildIndex] > this.heap[largerChildIndex]) {
        largerChildIndex = rigthChildIndex;
      }

      if (this.heap[index] < this.heap[largerChildIndex]) {
        this.swap(index, largerChildIndex);
        index = largerChildIndex;
      } else {
        break;
      }
    }
  }

  peek(): number | null {
    return this.heap.length === 0 ? null : this.heap[0];
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }
}

const maxHeap = new MaxHeap();

// Insert elements
maxHeap.insert(10);
maxHeap.insert(4);
maxHeap.insert(15);
maxHeap.insert(20);
maxHeap.insert(2);

console.log("Heap after insertions: ", maxHeap); // Should have 20 at the root

// Peek at the maximum element
console.log("Peek maximum: ", maxHeap.peek()); // Output should be 20

// Remove the maximum element
console.log("Remove maximum: ", maxHeap.removeMax()); // Output should be 20
console.log("Heap after removing maximum: ", maxHeap);

// Continue removing maximum elements
while (!maxHeap.isEmpty()) {
    console.log("Remove maximum: ", maxHeap.removeMax());
    console.log("Current heap: ", maxHeap);
}