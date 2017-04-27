'use strict';

var _Shellsort = require('../dist/js/Shellsort');

var _Shellsort2 = _interopRequireDefault(_Shellsort);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Shellsort', function () {
  var shellsort = new _Shellsort2.default();
  var gapSequence = shellsort.getGapSequence();
  var array = [9, 8, 1, 15, 3, 4, 11, 2, 7, 6];
  var emptyArray = [];
  var expectedResult = 0;

  describe('shellsort', function () {
    it("should return the array sorted", function () {
      expectedResult = [1, 2, 3, 4, 6, 7, 8, 9, 11, 15];

      (0, _chai.expect)(shellsort.shellsort(array, gapSequence)).to.eql(expectedResult);
    });
  });

  describe('shellsort with empty array', function () {
    it("should return an empty array", function () {
      expectedResult = [];

      (0, _chai.expect)(shellsort.shellsort(emptyArray, gapSequence)).to.eql(expectedResult);
    });
  });
});
//# sourceMappingURL=shellsort_test.js.map
