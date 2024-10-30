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
var MinHeap = /** @class */ (function () {
    function MinHeap() {
        this.heap = [];
    }
    MinHeap.prototype.getParentIndex = function (index) {
        return Math.floor((index - 1) / 2);
    };
    MinHeap.prototype.getLeftChildIndex = function (index) {
        return 2 * index + 1;
    };
    MinHeap.prototype.getRightChildIndex = function (index) {
        return 2 * index + 2;
    };
    MinHeap.prototype.swap = function (index1, index2) {
        var _a;
        _a = [this.heap[index2], this.heap[index1]], this.heap[index1] = _a[0], this.heap[index2] = _a[1];
    };
    MinHeap.prototype.insert = function (value) {
        this.heap.push(value);
        this.heapifyUp();
    };
    MinHeap.prototype.heapifyUp = function () {
        var index = this.heap.length - 1;
        while (index > 0) {
            var parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] > this.heap[index]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            }
            else {
                break;
            }
        }
    };
    MinHeap.prototype.removeMin = function () {
        if (this.heap.length === 0)
            return null;
        if (this.heap.length === 1)
            return this.heap.pop() || null;
        var min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    };
    MinHeap.prototype.heapifyDown = function () {
        var index = 0;
        var length = this.heap.length;
        while (this.getLeftChildIndex(index) < length) {
            var smallerChildIndex = this.getLeftChildIndex(index);
            var rigthChildeIndex = this.getRightChildIndex(index);
            if (rigthChildeIndex < length && this.heap[rigthChildeIndex] < this.heap[smallerChildIndex]) {
                smallerChildIndex = rigthChildeIndex;
            }
            if (this.heap[index] <= this.heap[smallerChildIndex]) {
                break;
            }
            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    };
    MinHeap.prototype.peek = function () {
        if (this.heap.length === 0)
            return null;
        return this.heap[0];
    };
    MinHeap.prototype.isEmpty = function () {
        return this.heap.length === 0;
    };
    return MinHeap;
}());
var minHeap = new MinHeap();
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
