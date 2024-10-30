var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function quickSort(arr) {
    // Base case: if the array is empty or has one element
    if (arr.length <= 1) {
        return arr;
    }
    // Choose the pivot (we'll use the last element here)
    var pivot = arr[arr.length - 1];
    var left = [];
    var right = [];
    // Partitioning the array
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // Elements less than pivot go to the left
        }
        else {
            right.push(arr[i]); // Elements greater than pivot go to the right
        }
    }
    // Recursively sort the left and right sub-arrays and concatenate the results
    return __spreadArray(__spreadArray(__spreadArray([], quickSort(left), true), [pivot], false), quickSort(right), true);
}
var arr = [34, 7, 23, 32, 5, 62];
console.log("Original array:", arr);
var sortedArray = quickSort(arr);
console.log("Sorted array:", sortedArray);
