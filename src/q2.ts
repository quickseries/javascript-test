// nthSmallest is 1-based

export function findNthSmallestNumber(numbers: number[], nthSmallest: number): number {
  if (numbers.length === 0 || nthSmallest <= 0 || nthSmallest > numbers.length) {
    return null;
  }

  const nthSmallestIndex = nthSmallest - 1;
  const smallestNumbers = []; // [0] = smallest, [nthSmallestIndex] = nthSmallest

  for(const num of numbers) {
    if (smallestNumbers[nthSmallestIndex] === undefined || num < smallestNumbers[nthSmallestIndex]) {
      for(let i = 0; i <= nthSmallest; i++) {
        if (smallestNumbers[i] === undefined || num < smallestNumbers[i]) {
          smallestNumbers[i] = num;
          break;
        }
      }
    }
  }

  return smallestNumbers[nthSmallestIndex];
}

// Array.sort can be slower than some algorithm because the implementation depends on the browser which don't always use the fastest algo
// You probably should not sort that much data in the frontend 

