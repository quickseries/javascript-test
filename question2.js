/**
 * Gets the nth smallest number in an array of numbers.
 * @param {array} numbers The array of numbers to get the nth smallest number of
 * @param {number} position The "n" value
 */
const getNthSmallestNumber = (numbers, position) => {

    let result;

    // Check if the numbers array contains at least one item
    if (!numbers.length > 0) {
        result = "The array of numbers must not be empty.";
    }

    // Check if the position is smaller than the array length
    if (typeof position !== "number" || numbers.length < position || position < 1) {
        result = "The position must be a number, smaller or equal to the numbers array length and higher than 0.";
    }

    // Check if all items of the array are numbers
    for (let number of numbers) {
        if (typeof number !== "number") {
            result = "The array should only contain numbers.";
            break;
        }
    }

    // If no error occured and all values are valid
    if (!result) {

        /**
         * Function that recursively gets the smallest number by removing the smallest number at 
         *  every iteration until arriving at the nth iteration (position).
         * @param {array} numbers The array of numbers to get the smallest number from
         * @param {number} nb_iterations The number of iterations we went through the array.
         */
        const getSmallestNumber = (numbers, nb_iterations = 0) => {

            // Check if we are at the right iteration
            if (nb_iterations === position - 1) {
                result = Math.min(...numbers);
            } else {

                // Remove the smallest number of the array and recursively call the function by incrementing the number of iteration
                numbers.splice(numbers.indexOf(Math.min(...numbers)), 1);
                getSmallestNumber(numbers.slice(), nb_iterations + 1);
            }
        }

        // Recursive function first execution
        getSmallestNumber(numbers);
    }

    return result;
}

console.log(getNthSmallestNumber([4, -1, 2, 5, -3, -7, 39, 123, 72, 582, 38], 5));
