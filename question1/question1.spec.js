describe('allPossiblePermutations use cases', function() {

    it("accepts number and returns an array", function() {
        var result = allPossiblePermutations(2, 3);

        expect(result).toEqual([23, 32]);
    });

    it("accepts at least one argument", function() {
        var result = allPossiblePermutations();

        expect(result).toEqual("There is no arguments!");
    });

    it("accepts only numbers", function() {
        var result = allPossiblePermutations(4, 'b');

        expect(result).toEqual("All arguments must be numbers!");
    });

    it("shouldn't be an object", function() {
        var result = allPossiblePermutations({
            attribute: 'value'
        });

        expect(result).toEqual("All arguments must be numbers!");
    });

    it("accepts only positive numbers", function() {
        var result = allPossiblePermutations(4, -6);

        expect(result).toEqual("All arguments must be greather or equal to 0!");
    });

     it("accepts only integer numbers", function() {
        var result = allPossiblePermutations(4.1, 5);

        expect(result).toEqual("All arguments must be integer!");
    });

    it("return only unique result of numbers", function() {
        function hasUniqueValues(array) {
            var sortedArray = array.slice().sort();
            for (var i = 0; i < array.length - 1; i++) {
                if (sortedArray[i + 1] === sortedArray[i]) {
                    return false;
                }
            }
            return true;
        }

        var result = hasUniqueValues(allPossiblePermutations(2, 3, 3));

        expect(result).toEqual(true);
    });


});