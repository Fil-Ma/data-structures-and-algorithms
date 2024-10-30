function heapSort(arr) {
    var _a;
    var n = arr.length;
    // 1: build a max heap from the array
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    // 2: extract elements one by one from the heap
    for (var i = n - 1; i > 0; i--) {
        _a = [arr[i], arr[0]], arr[0] = _a[0], arr[i] = _a[1];
        heapify(arr, i, 0);
    }
    return arr;
}
// heapify ensures the subtree rooted at index i satisfies the max-heap property
//
// it compares the root element with its left and right children, then swaps with
// the largest child if needed and calls itself recursively to continue this
// process down the tree
function heapify(arr, n, i) {
    var _a;
    var largest = i;
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== i) {
        _a = [arr[largest], arr[i]], arr[i] = _a[0], arr[largest] = _a[1];
        heapify(arr, n, largest);
    }
}
// example
var arr = [12, 11, 13, 5, 6, 7];
console.log("Original array:", arr);
var sortedArray = heapSort(arr);
console.log("Sorted array:", sortedArray);
