// -------------------------------------------------------------------------------------
// * Question 1 :
//
// Create a function that takes an unlimited amount of number parameters, and returns
// an arr of all the permutations possible.
//
// For example, myFunction(4, 7, 2) {} should return [472, 427, 724, 742, 247, 274].
//
// Strategy :
// - Backtracking algorithm using recursion and in-place swapping
// - Perhaps could be optimised, not enough time to investigate thoroughly...
// -------------------------------------------------------------------------------------

/**
 * Takes arguments and through a recursive backtrack strategy, prints all
 * of the possible permutations. For example, with an input value of
 * <code>[1, 2, 3]</code>, the following values would be printed
 * to the console, each on separate lines :
 *
 * 123, 132, 213, 231, 321, 312
 *
 * getPermutations is the public-facing wrapper of _recursPermutations
 * @param arguments assumed to be a valid array of integers.
 * @see _recursPermutations private recursive helper function.
 */
const getPermutations = (...arguments) => {
    const startIndex = 0, endIndex = arguments.length - 1;
    _recursPermutations(arguments, startIndex, endIndex);
};

// public functions exported via module.exports...
module.exports = {};
module.exports.getPermutations = getPermutations;

/**
 * _switcheroo is basically a clever name for a swap function, swaps two elements of an array
 * at the specified indexes. It is used by _recursPermutations.
 * @param theArray array to be used for swapping two values at the specified indices.
 * @param leftIndex left index to swap, assumed to be in range and less than rightIndex.
 * @param rightIndex right index to swap, assumed to be in range and greater than leftIndex.
 * @see _recursPermutations
 * @private
 */
function _switcheroo (theArray, leftIndex, rightIndex) {
    const temp = theArray[leftIndex];
    theArray[leftIndex] = theArray[rightIndex];
    theArray[rightIndex] = temp;
}

/**
 * _recursPermutations is the recursive helper function of getPermutations().
 * @param valueArray the array of integer values for which we wish to obtain all possible permutations.
 * @param leftIndex left index of the current recursion, assumed to be in range and less than rightIndex.
 * @param rightIndex right index of the current recursion, assumed to be in range and greater than leftIndex.
 * @see getPermutations
 * @private
 */
function _recursPermutations (valueArray, leftIndex, rightIndex) {

    // stop condition.
    if (leftIndex === rightIndex) {
        console.log(valueArray.join(''));
    } else {
        // recursively solve...
        for (let i = leftIndex; i <= rightIndex; ++i) {
            _switcheroo(valueArray, leftIndex, i);
            _recursPermutations(valueArray, leftIndex + 1, rightIndex);
            _switcheroo(valueArray, leftIndex, i);
        }
    }
}
