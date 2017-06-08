function heapify(array, index, heapSize) {
  var left = 2 * index + 1;
  var right = 2 * index + 2;
  var largest = index;
  if (left < heapSize && comparator(array[left], array[index]) > 0) {
    largest = left;
  }
  if (right < heapSize && comparator(array[right], array[largest]) > 0) {
    largest = right;
  }
  if (largest !== index) {
    var temp = array[index];
    array[index] = array[largest];
    array[largest] = temp;
    heapify(array, largest, heapSize);
  }
}

function buildMaxHeap(array) {
  for (var i = Math.floor(array.length / 2); i >= 0; i -= 1) {
    heapify(array, i, array.length);
  }
  return array;
}

function comparator(a, b) {
  return a - b;
}

function heapSort(array) {
  var size = array.length;
  var temp;
  buildMaxHeap(array);
  for (var i = array.length - 1; i > 0; i -= 1) {
    temp = array[0];
    array[0] = array[i];
    array[i] = temp;
    size -= 1;
    heapify(array, 0, size);
  }
  return array;
};
