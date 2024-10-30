function selectionSort(arr) {
    var _a;
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        // assume the min element is the first element in the unsorted part
        var minIndex = i;
        // find the minimum element in the unsorted part
        for (var j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // swap the found minimum element with the first element of the unsorted part
        if (minIndex !== i) {
            _a = [arr[minIndex], arr[i]], arr[i] = _a[0], arr[minIndex] = _a[1];
        }
    }
    return arr;
}
var arr = [64, 25, 12, 22, 11];
console.log("Original array:", arr);
var sortedArray = selectionSort(arr);
console.log("Sorted array:", sortedArray);
