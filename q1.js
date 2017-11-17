(() => {
    'use strict';

    const permutations = function* (array) {
        if (array.length === 1) {
            yield array;
        }
        else {
            let [first, ...rest] = array;
            for (let permutation of permutations(rest)) {
                for (let i = 0; i < array.length; i++) {
                    let start = permutation.slice(0, i);
                    let rest = permutation.slice(i);
                    yield [...start, first, ...rest];
                }
            }
        }
    }

    const getPermutations = function () {
        const args = Array.prototype.slice.call(arguments);
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
                const permutationGenerator = permutations(args);
                let permutation = permutationGenerator.next();
                let allPossiblePermutations = [];

                while (!permutation.done) {
                    allPossiblePermutations.push(parseInt(permutation.value.join('')));
                    permutation = permutationGenerator.next();
                }
                return allPossiblePermutations;
            }
        }
    }

    console.log(getPermutations(4, 7, 2));
})();