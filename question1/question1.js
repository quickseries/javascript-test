/**
 * @method allPossiblePermutations
 * @param {...number} args 
 * @description Takes an unlimited amount of number parameters and returns an array of all the permutations possible, in case of error it return a string with the specified error
 * @returns {Array}
 */
function allPossiblePermutations() {
    var permutedArray = [];

    if (arguments.length === 0) {
        return "There is no arguments!";
    } else {

        /**
         * @method permutation
         * @memberof allPossiblePermutations
         * @param {number []} currentArray
         * @param {number} position
         * @description Recursive function that takes an array and a position and return all possible combinaisons starting from that possition until the end of the array, and push just the unique numbers generated
         */
        var permutation = function(currentArray, position) {
            if (position === currentArray.length - 1) {
                //Check if the generated number exist
                var generatedNumber = Number(currentArray.join(''));
                if (permutedArray.indexOf(generatedNumber) === -1) {
                    permutedArray.push(generatedNumber);
                }

            } else {

                for (var i = position; i < currentArray.length; i++) {
                    //Swap currentArray[position] and currentArray[i]
                    var temp = currentArray[position];
                    currentArray[position] = currentArray[i];
                    currentArray[i] = temp; 
                    permutation(currentArray.slice(), position + 1);
                }
            }
        }

        var filteredArguments = [];

        for (var i = 0; i < arguments.length; i++) {
            if (isNaN(arguments[i])) {
                return "All arguments must be numbers!";
            } 
            else if(arguments[i] < 0) { // In case of negative arguments, what will be the result positif or negatif?
                return "All arguments must be greather or equal to 0!";
            }
            else if(Math.round(arguments[i]) !== arguments[i]) { // In case of many decimal inputs, what will be the result?
                return "All arguments must be integer!";
            }
            else {
                filteredArguments.push(arguments[i]);
            }
        }

        //Start the permutation from the position 0 with the filtered array 
        permutation(filteredArguments, 0);
    }

    return permutedArray;
}


console.log(allPossiblePermutations(4, 7, 2));