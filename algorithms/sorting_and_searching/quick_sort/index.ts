function quickSort(arr: number[]): number[] {
  // Base case: if the array is empty or has one element
  if (arr.length <= 1) {
      return arr;
  }

  // Choose the pivot (we'll use the last element here)
  const pivot = arr[arr.length - 1];
  const left: number[] = [];
  const right: number[] = [];

  // Partitioning the array
  for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
          left.push(arr[i]); // Elements less than pivot go to the left
      } else {
          right.push(arr[i]); // Elements greater than pivot go to the right
      }
  }

  // Recursively sort the left and right sub-arrays and concatenate the results
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [34, 7, 23, 32, 5, 62];
console.log("Original array:", arr);

const sortedArray = quickSort(arr);
console.log("Sorted array:", sortedArray);