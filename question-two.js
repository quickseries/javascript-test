var findSmallest = {
    /**
     * My custom method sorts the array from smallest to biggest.
     * Array.sort is not a good idea first of all:
     * - works really well for string sorting but not when sorting numbers.
     * - In order to use array.sort for number you must pass in a compareFunction
     * as parameter to the sort.
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
    init: function(array) {

        if (!array || array.length === 0) {
            console.log('no params provided');
            return;
        }

        var result = this.sortArray(array)[0];
        //console.log('results', result)
        return result;
    }
}

var result = findSmallest.init([3, 1, 5, 0, -1, 4, 5, 6, 7, 8, 9, 0, 12, 13, 14, 15, 156]);
console.log('results', result);