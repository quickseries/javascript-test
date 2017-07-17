describe('nthSmallestNumber use cases', function() {
    var array = [5, 2, 7, 1];

    it("accepts an array and a position and returns the value", function() {
        var n = 2;
        var result = nthSmallestNumber(array, n);
        expect(result).toEqual(5);
    });

    it("accepts only a position between 1 and the size of the array", function() {
        var n = 5;
        var result = nthSmallestNumber(array, n);
        expect(result).toEqual("Out of range!");
    });

    it("accepts only a position between 1 and the size of the array", function() {
        var n = 0;
        var result = nthSmallestNumber(array, n);
        expect(result).toEqual("Out of range!");
    });


    it("accepts only two arguments", function() {
        var n = 2;
        var result = nthSmallestNumber(array, n, 3);
        expect(result).toEqual("The arguments must be 2!");
    });

    it("accepts a first argument as array and second argument as a number", function() {
        var result = nthSmallestNumber("a", 2);

    });

});

describe('selection use cases', function() {
   

    //Test the performance 
    var array = [];
    //Add random numbers
    var arrayLength = 5555555;
    for (var i = 0; i < arrayLength; i++) {
        array.push(parseInt(100000000 * Math.random()));
    }

    it("s much much faster than the native sort in case of a big array", function() {

        function executionTime(functionToExecute) {
            var t0, t1;

            var t0 = performance.now();
            functionToExecute();
            var t1 = performance.now();
            return Promise.resolve(t1 - t0);
        }

        var executeSelection = function() {
            //Make a copy
            return selection(array.slice(), 1000, 0, array.length - 1);
        }

        var executeNativeSort = function() {
            //Make a copy
            var result = array.slice().sort();
            return result[1000];
        }

        executionTime(executeNativeSort).then(function(result) {
                console.log("Native sort execution time is: ", result);
                return result;
            })
            .then(function(nativeSortTime) {
                executionTime(executeSelection).then(function(result) {
                    console.log("executeSelection execution time is: ", result);
                    expect(result).toBeLessThan(nativeSortTime);
                });
            })
    });

});

describe('partition use cases', function() {
    it("will return a partition with the last index if the array is sorted", function() {
        result = partition([1, 3, 5], 0, 2);
        expect(result).toEqual(2);
    });
});

describe('swap use cases', function() {
    it("accepts only two arguments", function() {
        var result = swap([1, 2], 1, 2, 3);
        expect(result).toEqual("The arguments must be 3!");
    });

    it("swap correctly", function() {
        var array = [1, 2];
        swap(array, 0, 1);
        expect(array).toEqual([2, 1]);
    });

});