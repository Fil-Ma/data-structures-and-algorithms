var MaxHeap = /** @class */ (function () {
    function MaxHeap() {
        this.heap = [];
    }
    MaxHeap.prototype.getParentIndex = function (index) {
        return Math.floor((index - 1) / 2);
    };
    MaxHeap.prototype.getLeftChildIndex = function (index) {
        return 2 * index + 1;
    };
    MaxHeap.prototype.getRightChildIndex = function (index) {
        return 2 * index + 2;
    };
    MaxHeap.prototype.swap = function (index1, index2) {
        var _a;
        _a = [this.heap[index2], this.heap[index1]], this.heap[index1] = _a[0], this.heap[index2] = _a[1];
    };
    MaxHeap.prototype.insert = function (value) {
        this.heap.push(value);
        this.heapifyUp();
    };
    MaxHeap.prototype.heapifyUp = function () {
        var index = this.heap.length - 1;
        while (index > 0) {
            var parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] < this.heap[index]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            }
            else {
                break;
            }
        }
    };
    MaxHeap.prototype.removeMax = function () {
        if (this.heap.length === 0)
            return null;
        if (this.heap.length === 1)
            return this.heap.pop() || null;
        var max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max;
    };
    MaxHeap.prototype.heapifyDown = function () {
        var index = 0;
        var length = this.heap.length;
        while (this.getLeftChildIndex(index) < length) {
            var largerChildIndex = this.getLeftChildIndex(index);
            var rigthChildIndex = this.getRightChildIndex(index);
            if (rigthChildIndex < length && this.heap[rigthChildIndex] > this.heap[largerChildIndex]) {
                largerChildIndex = rigthChildIndex;
            }
            if (this.heap[index] < this.heap[largerChildIndex]) {
                this.swap(index, largerChildIndex);
                index = largerChildIndex;
            }
            else {
                break;
            }
        }
    };
    MaxHeap.prototype.peek = function () {
        return this.heap.length === 0 ? null : this.heap[0];
    };
    MaxHeap.prototype.isEmpty = function () {
        return this.heap.length === 0;
    };
    return MaxHeap;
}());
var maxHeap = new MaxHeap();
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
