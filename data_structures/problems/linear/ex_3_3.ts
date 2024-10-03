/*
  we have seen how dynamic arrays enable arrays to grow while still achieving
  constant-time amortized performance. This problem concerns extending dynamic
  arrays to let them both grow and shrink on demand.
  (a) consider an underflow strategy that cuts the array size in half whenever
  the array falls below half full. Give an example sequence of insertions and
  deletions where this strategy gives a bad amortized cost
  (b) Then, give a better underflow strategy than the suggested above, one that
  achieves constant amortized cost per deletion
*/

// a

class CustomArray<T> {
  private data: (T | null)[];
  private capacity: number;
  private size: number;

  constructor() {
    this.capacity = 1;
    this.size = 1;
    this.data = [null];
  }

  private resize(newCapacity: number): void {
    const newArray = new Array(newCapacity).fill(null);
    for (let i = 0; i < this.size; i++) {
        newArray[i] = this.data[i];
    }
    this.data = newArray;
    this.capacity = newCapacity;
}

  insert(value: T): void {
    if (this.size + 1 > this.capacity) {
      this.resize(this.capacity * 2);
    }
    this.data.push(value);
    this.size++;
  }

  delete(): T | null {
    if (this.size === 0) {
      return null;
    }

    const item = this.data[this.size - 1];
    this.data[this.size - 1] = null; // Clear the last item
    this.size--;

    // Shrink the array if it's less than 1/4 full
    if (this.size > 0 && this.size === Math.floor(this.capacity / 4)) {
        this.resize(Math.floor(this.capacity / 2));
    }

    return item;
  }
}