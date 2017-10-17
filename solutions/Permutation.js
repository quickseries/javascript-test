class Permutation {
  permute() {
    return this.heapsGenerator(Array.prototype.slice.call(arguments));
  }

  /**
   * Back-tracking implementation
   */
  backTracking(arr, k, result) {
    for (let i = k; i < arr.length; i++) {
      this.swap(arr, i, k);
      this.backTracking(arr, k + 1, result);
      this.swap(arr, k, i);
    }

    if (k == arr.length - 1) {
      result.push(arr.join(''));
    }
  }

  /**
   * Heap's algorithm implementation
   */
  heapsGenerator(arr, result) {
    result = result || [];
    var map = [];

    for (let i = 0; i < arr.length; i++) {
      map[i] = 0;
    }

    result.push(arr.join(''));

    let counter = 1;
    while (counter < arr.length) {
      if (map[counter] < counter) {
        if (counter % 2 == 0) {
          this.swap(arr, 0, counter);
        } else {
          this.swap(arr, map[counter], counter);
        }

        result.push(arr.join(''));

        map[counter] += 1;
        counter = 1;
      } else {
        map[counter] = 0;
        counter += 1;
      }
    }
    return result;
  }

  swap(arr, x, y) {
    let val = arr[x];
    arr[x] = arr[y];
    arr[y] = val;
  }
}

module.exports = Permutation;
