'use strict';

var _Shellsort = require('../dist/js/Shellsort');

var _Shellsort2 = _interopRequireDefault(_Shellsort);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('BinarySearchTree', function () {
  var shellsort = new _Shellsort2.default();
  var gapSequence = shellsort.getGapSequence();
  var array = [10, 5, 20, 15, 30, 25];
  var expectedResult = 0;

  describe('shellsort', function () {
    it("should return the array sorted", function () {
      expectedResult = [5, 10, 15, 20, 25, 30];

      (0, _chai.expect)(shellsort.shellsort(array, gapSequence)).to.eql(expectedResult);
    });
  });

  describe('shellsort-gapSequence', function () {
    it("should return 20 steps in Segwicks gapsequence including 0", function () {
      expectedResult = [0, 1, 5, 19, 41, 109, 209, 505, 929, 2161, 3905, 8929, 16001, 36289, 64769, 146305, 260609, 587521, 1045505, 2354689, 4188161];

      (0, _chai.expect)(shellsort.getGapSequence()).to.eql(expectedResult);
    });
  });
});
//# sourceMappingURL=bst_test.js.map
