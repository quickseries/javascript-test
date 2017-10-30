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
