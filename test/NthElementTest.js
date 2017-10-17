const assert = require('chai').assert;
const NthElement = require('../solutions/NthElement');

describe('NthElement', function () {
  describe('#find', function () {
    let nthElement = new NthElement();

    it('should return: 100th item from array', function () {
      const min = 1;
      const max = 1000000;
      const arr = [];
      for (let i = min; i <= max; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
      }
      const sortedArr = arr.sort();
      const actual = nthElement.find(sortedArr[99], 100);
    });
  });
});
