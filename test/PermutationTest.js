const assert = require('chai').assert;
const Permutation = require('../solutions/Permutation');

describe('Permutation', function () {
  describe('#permute', function () {
    let permutation = new Permutation();

    it('should return: 472, 742, 247, 427, 724, 274', function () {
      const result = permutation.permute(4, 7, 2);;
      const actual = result.join(', ');
      assert.equal('472, 742, 247, 427, 724, 274', actual);
    });
  });
});
