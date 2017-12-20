const q01 = require('./question01');
const q02 = require('./question02');

// example :
console.log('*** Question 1 : get all permutations of an integer array -- DEMO START ***');
q01.getPermutations(1, 2, 3);
console.log('--------------------------------------------------------------------------------------');

// -------------------------------------------------------------------------------------
// setup data for test #2
// -------------------------------------------------------------------------------------

console.log('*** Question 2 : get nth smallest element of a big array -- DEMO START ***');

// TODO: uncomment to enable (slow) built-in sort test.
// let builtInTestArray = q01.getTestArray(10000000);
// console.time("Plain old JS sort (slow)     ");
// builtInTestArray.sort((a, b) => a - b);
// console.timeEnd("Plain old JS sort (slow)     ");

// *** Setup test data... ***
const arraySize = 10000000;
console.time(`Generating test array of ${arraySize} items...`);
const qsTestArray = q02.getTestArray(arraySize);

// *** ...perform the custom sort... ***
console.time("Super duper quickSort (fast) ");
q02.quickSort(qsTestArray, 0, qsTestArray.length - 1);
console.timeEnd("Super duper quickSort (fast) ");

// *** ...find the nth smallest non-unique value. ***
const n = 15;
console.log(`least element of order ${n} is ${qsTestArray[n - 1]}`);
console.log(`A sample or the first ${n} elements: ${qsTestArray.slice(0, n)}`);

// NOTE: for the nth smallest unique value (not clear to me), we would have to exclude the
// duplicatesvalues. If this is the case, I can update the PR with that solution.

console.log('--------------------------------------------------------------------------------------');

