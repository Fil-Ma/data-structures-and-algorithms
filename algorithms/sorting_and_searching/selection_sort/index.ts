function selectionSort(arr: number[]): number[] {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // assume the min element is the first element in the unsorted part
    let minIndex = i;

    // find the minimum element in the unsorted part
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // swap the found minimum element with the first element of the unsorted part
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

const arr = [64, 25, 12, 22, 11];
console.log("Original array:", arr);

const sortedArray = selectionSort(arr);
console.log("Sorted array:", sortedArray);