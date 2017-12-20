// -------------------------------------------------------------------------------------
// * Question 2 :
// Create a function that can find the Nth smallest number in an arr. The arr can be
// very very big, so you are not allowed using the Array.sort() method. Try to build a
// function that would perform fast. Also, explain why using Array.sort() isn't a
// good idea when sorting large arrays.
//
// Answer : because the built-in Array.sort is 4-5 times
//          less efficient than e.g. quickSort.
//          Solution chooses quickSort over mergeSort
//          due to potentially large size of the array
//          (minimizes memory allocation).
//
// IMPORTANT : in my results, I provide the slow method and the quick method with
//             timers and test data to evaluate the performance improvement.
//             The slow built-in method can be enabled by un-commenting the lines
//             prefixed with a 'TODO' comment line.
// Note :
//
// * Assumptions :
// - Assumes an integer array, can be modified to supply a comparator callback for other data types.
// - ES6-enabled engine or should be transpile towards babel.
// - blocking implementation, some browsers might show 'script running slowly' message,
//   but quickSort allows conversion to non-blocking as well :
//   see :
//   > https://nodejs.org/api/process.html#process_process_nexttick_callback
//   > https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate
//   > https://github.com/Katochimoto/setImmediate
// - Partition strategy : Lomuto Partition
// -------------------------------------------------------------------------------------

// public functions exported via module.exports...
module.exports = {};
module.exports.quickSort = quickSort;
module.exports.getTestArray = getTestArray;

/**
 * quickSort sort implementation, runs in-place, can be converted to non-blocking.
 *
 * @param arr a valid array of integers.
 * @param leftIndex the left index of this recursion, must be in range of arr and less than rightIndex.
 * @param rightIndex the right index of this recursion, must be in range of arr and greater than leftIndex.
 */
function quickSort(arr, leftIndex, rightIndex) {
    const pivot = arr[Math.floor((leftIndex + rightIndex) / 2)];
    let i = leftIndex, j = rightIndex;

    while (i <= j) {
        while (arr[i] < pivot) {
            ++i;
        }
        while (arr[j] > pivot) {
            --j;
        }
        if (i <= j) {
           const tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
            ++i;
            --j;
        }
    }

    if (leftIndex < j) {
        quickSort(arr, leftIndex, j);
    }
    if (i < rightIndex) {
        quickSort(arr, i, rightIndex);
    }

} // function quickSort (END)

/**
 * Given a size, generate a test array with values from 0 to size * 2.
 * @param size a valid integer
 * @returns {Array} a valid test array based on the criteria stated above.
 */
function getTestArray(size=10000000) {
    const testArray = new Array(size);
    for (let i = 0; i < size; ++i) {
        testArray[i] = _generateRandom(size * 2);
    }
    return testArray;
}

/**
 * _generateRandom generates a random integer from 0 to the specified maximum.
 * @param max maximum random number value, default value is <code>100</code>
 * @returns {number} the random number between 0 and max.
 * @private
 */
function _generateRandom(max=100) {
    return Math.floor(Math.random() * Math.floor(max));
}
