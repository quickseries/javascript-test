/**
 * @method nthSmallestNumber
 * @param {number []} array
 * @param {number} n
 * @description Find the Nth smallest number in an array
 * @returns {number}
 */
function nthSmallestNumber(array, n) {
    if(arguments.length !== 2) {
        return "The arguments must be 2!";
    }
    else if(array.constructor !== Array || isNaN(n)) {
        return "Wrong arguments!";
    } 
    else if (n < 1 || n > array.length) {
        return "Out of range!";
    }
    else {
        var sortedArray = quickSort(array, 0, array.length - 1);
        return array[n - 1];
    }
}


/**
 * @method quickSort
 * @param {number []} array
 * @param {number} low
 * @param {number} high
 * @description Quick Sort algorithm to place the elements of an array in order, source: https://en.wikipedia.org/wiki/Quicksort
 * @returns {Array}
 */
function quickSort(array, low, high) {
    var newPartition;
    if (low < high) {
        newPartition = partition(array, low, high);

        //sort left and right
        quickSort(array, low, newPartition - 1);
        quickSort(array, newPartition + 1, high);
    }
    return array;
}


/**
 * @method quickSort
 * @memberof quickSort
 * @param {number []} array
 * @param {number} low
 * @param {number} high
 * @description Partition function to find the new array divider
 * @returns {number}
 */
function partition(array, low, high) {
    var pivot = array[high];
    var i = low - 1;

    for (var j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++;
            if (array[j] < pivot) {
                swap(array, i, j);
            }
        }
    }
    if (array[high] < array[i + 1]) {
        swap(array, i + 1, high);
    }

    return i + 1;
}


/**
 * @method swap
 * @memberof partition
 * @param {number} a
 * @param {number} b
 * @description Swap two elements from an array
 */
function swap(array, a, b) {
    if (arguments.length !== 3) {
        return "The arguments must be 3!";
    }
    else {
        var temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }
}