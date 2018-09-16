const permutations = (...args) => {
    return permutationsOfArray(args);
}

const permutationsOfArray = (arr) => {
    let output = [];
    
    if (arr.length === 0) {
        return output;
    }

    if (arr.length === 1) {
        output.push(arr[0]);
        return output;
    }

    for (let i = 0; i < arr.length; i++) {
        const one = arr[i];
        const rest = arr.slice(0, i).concat(arr.slice(i + 1));
        const subPermutations = permutationsOfArray(rest);
        for (let j = 0; j < subPermutations.length; j++) {
            output.push(parseInt(one.toString() + subPermutations[j].toString()));
        }
    }

    return output;
}

module.exports = permutations;