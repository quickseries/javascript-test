import { findNthSmallestNumber } from "../src/q2";

describe('findNthSmallestNumber Tests', () => {
  it('Should return null on an empty array', () => {
    const numbers = []
    const nthSmallest = 1;

    const output = findNthSmallestNumber(numbers, nthSmallest);

    expect(output).toEqual(null);
  })
  it('Should return null on non positive nth smallest number', () => {
    const numbers = [1, 2, 3]
    const nthSmallest = -1;

    const output = findNthSmallestNumber(numbers, nthSmallest);

    expect(output).toEqual(null);
  })

  it.each([
    { numbers: [1, 2, 3], nthSmallest: 1, expectedValue: 1 },
    { numbers: [1, 2, 3], nthSmallest: 2, expectedValue: 2 },
    { numbers: [1, 2, 3], nthSmallest: 3, expectedValue: 3 },
    { numbers: [-5, 8, 160], nthSmallest: 2, expectedValue: 8 },
  ])('Should return null on non positive nth smallest number',
  ({ numbers, nthSmallest, expectedValue }) => {
    const output = findNthSmallestNumber(numbers, nthSmallest);

    expect(output).toEqual(expectedValue);
  })
})