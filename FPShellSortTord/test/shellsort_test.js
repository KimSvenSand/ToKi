'use strict';

var _Shellsort = require('../dist/js/Shellsort');

var _chai = require('chai');

describe('Shellsort', function () {
  var gapSequence = (0, _Shellsort.getGapSequence)(2, []);
  var array = [9, 8, 1, 15, 3, 4, 11, 2, 7, 6];
  var emptyArray = [];
  var expectedResult = 0;

  describe('shellsort', function () {
    it("should return the array sorted", function () {
      expectedResult = [1, 2, 3, 4, 6, 7, 8, 9, 11, 15];
      ;

      (0, _chai.expect)((0, _Shellsort.shellsort)(array, gapSequence)).to.eql(expectedResult);
    });
  });

  describe('shellsort with empty array', function () {
    it("should return an empty array", function () {
      expectedResult = [];

      (0, _chai.expect)((0, _Shellsort.shellsort)(emptyArray, gapSequence)).to.eql(expectedResult);
    });
  });
});
//# sourceMappingURL=shellsort_test.js.map
