'use strict';

var _Shellsort = require('../dist/js/Shellsort');

var _chai = require('chai');

describe('BinarySearchTree', function () {
  var gapSequence = (0, _Shellsort.getGapSequence)(2, []);
  var array = [10, 5, 20, 15, 30, 25];
  var expectedResult = 0;

  describe('shellsort', function () {
    it("should return the array sorted", function () {
      expectedResult = [5, 10, 15, 20, 25, 30];

      (0, _chai.expect)((0, _Shellsort.shellsort)(array, gapSequence)).to.eql(expectedResult);
    });
  });

  describe('shellsort-gapSequence', function () {
    it("should return 7 steps in Segwicks gapsequence including 0", function () {
      expectedResult = [];

      (0, _chai.expect)((0, _Shellsort.shellsort)([], gapSequence)).to.eql(expectedResult);
    });
  });
});
//# sourceMappingURL=bst_test.js.map
