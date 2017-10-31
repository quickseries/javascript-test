/** 
 *  Its not a good idea to use the native JavaScript sort function "Array.sort()" because of its poor performance
 *  with large data. According to the online JavaScript community this is most likely related to the fact that 
 *  the native JavaScript srot creates internal arrays of pairs and sorts those arrays. The sorting
 *  of those arrays can result in further recursive calls to "GetThirdIndex()" as well as the checking for "holes"
 *  in the array and this is not very efficient. So in short the native JavaScript sort function is not designed 
 *  to sort big data.
 * 
 *  In order to get better performance its a good practice to use other sorting algorithims such as quicksort,
 *  merge sort, select sort, bubble sort or selection sort.
 *  
 *  In this implemention i've decided to use the quicksort algorithm which promise "O(n log(n))" in the best case,
 *  "O(n log(n))" on average and "O(n^2)" in the worst case.
*/
(() => {
    'use strict';

    Array.prototype.quickSort = function () {
        if (this.length < 2) { return this; }

        let pivot = this[Math.round(this.length / 2)];

        return this.filter(x => x < pivot)
            .quickSort()
            .concat(this.filter(x => x == pivot))
            .concat(this.filter(x => x > pivot).quickSort());
    };

    const getKthSmallestElement = function (args, k) {
        const invalidArgsMessage = 'Error: You must provide an array of one or more integer/integers!';
        if (args.length === 0) {
            alert(invalidArgsMessage);
            return invalidArgsMessage;
        }
        else {
            const hasNegativeValues = args.some(x => x < 0);
            const notInteger = args.some(x => !Number.isInteger(x));
            if (hasNegativeValues || notInteger) {
                alert(invalidArgsMessage);
                return invalidArgsMessage;
            }
            else {
                const sortArray = args.quickSort();
                return sortArray[k-1];
            }
        }
    }

    console.log(getKthSmallestElement([500,22,15,5,44543,3332,1],5));
})();
