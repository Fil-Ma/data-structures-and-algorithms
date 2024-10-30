function heapSort(arr: number[]): number[] {
  const n = arr.length;

  // 1: build a max heap from the array
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // 2: extract elements one by one from the heap
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];

    heapify(arr, i, 0);
  }

  return arr;
}

// heapify ensures the subtree rooted at index i satisfies the max-heap property
//
// it compares the root element with its left and right children, then swaps with
// the largest child if needed and calls itself recursively to continue this
// process down the tree

function heapify(arr: number[], n: number, i: number): void {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

// example
const arr = [12, 11, 13, 5, 6, 7];
console.log("Original array:", arr);

const sortedArray = heapSort(arr);
console.log("Sorted array:", sortedArray);