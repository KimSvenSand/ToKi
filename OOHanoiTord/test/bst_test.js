'use strict';

var _Hanoi = require('../dist/js/Hanoi');

var _Hanoi2 = _interopRequireDefault(_Hanoi);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Tower of Hanoi', function () {
  var hanoi = new _Hanoi2.default();
  var nrOfPegs = 8;
  var expectedResult = 0;

  describe('Tower of Hanoi', function () {
    it("should return the array sorted", function () {
      expectedResult = [[], [], [8, 7, 6, 5, 4, 3, 2, 1]];

      (0, _chai.expect)(hanoi.towerOfHanoi(nrOfPegs)).to.eql(expectedResult);
    });
  });

  describe('Empty Tower of Hanoi', function () {
    it("should return empty pegs", function () {
      hanoi = new _Hanoi2.default();
      expectedResult = [[], [], []];

      (0, _chai.expect)(hanoi.towerOfHanoi(0)).to.eql(expectedResult);
    });
  });
});
//# sourceMappingURL=bst_test.js.map
