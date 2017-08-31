var findSmallest = {
    /**
     * Array.sort()
     * ------------
     * The sorting order is by default lexicographic and not numeric regardless of the 
     * types of values in the array. Even if the array is all numbers, 
     * all values will be converted to string and sorted which first slows down the computation
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

var result = findSmallest.init([7, 10, 4, 3, 20, 15], 2);
console.log('results', result);