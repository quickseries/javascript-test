import { findAllPermutations } from "../src/q1";

describe('findAllPermutations Tests', () => {
  it('Should return empty on an empty array', () => {
    const input = [];

    const output = findAllPermutations(...input);

    expect(output).toEqual(input);
  })
  it('Should return the same array on an array with a single number', () => {
    const input = [1];

    const output = findAllPermutations(...input);

    expect(output).toEqual(input);
  })

  it('Should return 1 combination on an array with the same number twice', () => {
    const input = [1, 1];

    const output = findAllPermutations(...input);

    expect(output).toContain(11)
  })

  it('Should return 2 combination on an array with 2 different numbers', () => {
    const input = [1, 2];

    const output = findAllPermutations(...input);

    expect(output).toContain(12)
    expect(output).toContain(21)
  })

  it('Should return 3 combination on an array with 2 same numbers and 1 different', () => {
    const input = [1, 1, 2];

    const output = findAllPermutations(...input);

    expect(output).toContain(112)
    expect(output).toContain(121)
    expect(output).toContain(211)
  })

  it('Should return 6 combination on an array with 3 different numbers', () => {
    const input = [1, 2, 3];

    const output = findAllPermutations(...input);

    expect(output).toContain(123)
    expect(output).toContain(132)
    expect(output).toContain(231)
    expect(output).toContain(213)
    expect(output).toContain(312)
    expect(output).toContain(321)
  })


  it('Should return 720 combination on an array with 6 different numbers', () => {
    const input = [1, 2, 3, 4, 5, 6];

    const output = findAllPermutations(...input);

    expect(output).toHaveLength(720)

    expect(output).toContain(123456)
    expect(output).toContain(234561)
    expect(output).toContain(345612)
    expect(output).toContain(456123)
    expect(output).toContain(561234)
    expect(output).toContain(612345)
  })
})