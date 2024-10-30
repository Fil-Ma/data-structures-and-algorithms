function mergeSort(arr: number[]): number[] {
  // Base case: array of one element is already sorted
  if (arr.length <= 1) {
      return arr;
  }

  // Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort each half and merge them
  return merge(mergeSort(left), mergeSort(right));
}

// Helper function to merge two sorted arrays
function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0, j = 0;

  // Merge elements from left and right arrays in sorted order
  while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
          result.push(left[i]);
          i++;
      } else {
          result.push(right[j]);
          j++;
      }
  }

  // Concatenate any remaining elements from left and right arrays
  return result.concat(left.slice(i)).concat(right.slice(j));
}

const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Original array:", arr);

const sortedArray = mergeSort(arr);
console.log("Sorted array:", sortedArray);