var findSmallest = {
    /**
     * My custom method sorts the array from smallest to biggest.
     * Array.sort is not a good idea first of all:
     * - works really well for string sorting but not when sorting numbers.
     * - In order to use array.sort for number you must pass in a compareFunction
     * as parameter to the sort.
     */

    /**
     * SORRY ABOUT MISREADING THE QUESTION
     */

    sortArray: function(array) {
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < array.length; j++) {
                if (array[i] < array[j]) {
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
        return array;
    },
    init: function(array, n) {

        if (!array || array.length === 0) {
            console.log('no params provided');
            return;
        }

        if (array.length < n) {
            console.log('n is too big');
            return;
        }

        var result = this.sortArray(array)[n - 1];
        //console.log('results', result)
        return result;
    }
}

var result = findSmallest.init([7, 10, 4, 3, 20, 15], 6);
console.log('results', result);