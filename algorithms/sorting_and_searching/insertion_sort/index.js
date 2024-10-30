function insertionSort(arr) {
    var n = arr.length;
    for (var i = 1; i < n; i++) {
        var current = arr[i];
        var j = i - 1;
        // Move elements of arr[0..i-1] that are greater than current to one position ahead
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        // Place the current element in its correct position
        arr[j + 1] = current;
    }
    return arr;
}
var arr = [12, 11, 13, 5, 6];
console.log("Original array:", arr);
var sortedArray = insertionSort(arr);
console.log("Sorted array:", sortedArray);
