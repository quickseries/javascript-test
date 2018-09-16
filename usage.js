const permutations = require('./permutations');
const nthSmallest = require('./nthSmallest');

const output1 = permutations(7, 3, 4);
console.log(output1);


const output2 = nthSmallest([7, 3, 4, 11], 2);
console.log(output2);