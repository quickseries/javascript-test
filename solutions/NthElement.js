class NthElement {
  constructor() {
    this._heap = [];
    this._size = 0;
  }

  find(arr, n) {
    if (arr.length < n) return -1;

    for (let i = 0; i < arr.length; i++) {
      if (this._size >= n) {
        if (this.compareItem(i, this._size - 1) < 0) {
          this._heap[this._size - 1] = arr[i];
          this.performBottomUp();
        }
      } else {
        this._heap.push(arr[i]);
        this._size += 1;
        this.performBottomUp();
      }
    }

    return this._heap[this._size - 1];
  }

  performBottomUp() {
    let currentIndex = this._heap.length - 1;
    while (currentIndex > 0) {
      let parentIndex = this.getParentIndex(currentIndex);
      if (this.compareItem(parentIndex, currentIndex) <= 0) {
        break;
      }

      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  swap(x, y) {
    let val = this._heap[x];
    this._heap[x] = this._heap[y];
    this._heap[y] = val;
  }

  compareItem(x, y) {
    if (this._heap[x] == this._heap[y]) {
      return 0;
    } else if (this._heap[x] <= this._heap[y]) {
      return -1;
    }
    else {
      return 1;
    }
  }
}

module.exports = NthElement;
