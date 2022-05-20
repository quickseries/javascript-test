export function findAllPermutations(...args: number[]): number[] {
  const permutationMap: Map<string, number> = new Map();

  const permutations = findAllPermutationsForArray(args);

  permutations.forEach((permutation) => {
    permutationMap.set(permutation, 0);
  })

  const possiblePermutations: number[] = []

  for (const entry of permutationMap.keys()) {
    possiblePermutations.push(Number(entry))
  }

  return possiblePermutations;
}

function findAllPermutationsForArray(array: number[]): string[] {

  const permutations: string[] = []
  array.forEach((value, index, array) => {
    const newArray = [...array.slice(0, index), ...array.slice(index + 1, array.length)]
    const newSubPermutations = findAllPermutationsForArray(newArray);
    if (newSubPermutations.length === 0) {
      permutations.push(String(value))
    } else {
      const newPermutations = newSubPermutations.map((newValue) => value + newValue);
      permutations.push(...newPermutations)
    }
  })
  return permutations;
}