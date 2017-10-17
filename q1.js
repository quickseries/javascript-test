/*

Create a function that takes an unlimited amount
of number parameters, and returns an array of all the
permutations possible.

For example, myFunction(4, 7, 2) {} should return [472, 427, 724, 742, 247, 274].

*/

console.log(findPermutations(4, 2, 7));

function findPermutations() {
    let list = Array.from(arguments);

    if (list.length <= 1) {
        return list;
    }

    let permutations = [];

    while (permutations.length < f(list.length)) {
        let listCopy = list.slice(0);
        let number = [];

        while (listCopy.length > 0) {
            let pos = Math.floor(Math.random() * listCopy.length);
            number.push(listCopy.splice(pos, 1)[0]);
        }

        let foundNumber = +number.join('');
        let found = permutations.find(x => x === foundNumber);

        if (!found) {
            permutations.push(foundNumber);
        }
    }

    return permutations;
}

function f(n) {
    return n ? (n * f(n-1)) : 1;
}
