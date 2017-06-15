/**
 * The main permutation function.
 * @param {array} numbers The unlimited quantity of parameters, as numbers
 * @return {array} The final array of permutations
 */
const permutator = (...numbers) => {

    let are_numbers_valid = true;

    // Checks if every parameter is a number and is higher than 0 (we don't want negative numbers)
    for (let number of numbers) {
        if (isNaN(number) || number < 0) {
            are_numbers_valid = false;
            break;
        }
    }

    // The final array of all permutations.
    let permutations = (are_numbers_valid) ? [] : "This function only takes numbers higher than 0 as parameters.";

    if (are_numbers_valid) {

        /**
         * Recursively permutes an array of numbers.
         * @param {array} numbers The numbers to permute
         * @param {string} permutation The final permutation of the current numbers iteration
         */
        const permute = (numbers, permutation = "") => {

            // If there is no more number in the numbers array
            if (numbers.length === 0) {

                // Adds the new final permutation in the permutations array
                permutations.push(Number(permutation));

            } else {

                // For every number of the array, take this number and the next one
                for (let i = 0; i < numbers.length; i++) {
                    let number = numbers.slice();
                    let next_number = number.splice(i, 1);

                    // Permutes the new array of numbers and concat the permutation with the next number
                    permute(number.slice(), permutation.concat(next_number));
                }

            }
        }

        // Recursive function first execution
        permute(numbers);
    }

    // Returns the final permutations array
    return permutations;
}

console.log(permutator(4, -1, 2));
console.log(permutator(4, "some wrong parameter", 2));
console.log(permutator(4, 7, 2));
