'use strict';

var _calculator = require('../src/js/calculator');

var _calculator2 = _interopRequireDefault(_calculator);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Calculator', function () {
  var calculator = new _calculator2.default();
  var expectedResult = 0;
  var a = 8;
  var b = 5;

  describe('add(a, b)', function () {
    it("should return a + b", function () {
      expectedResult = 13;

      expect(calculator.add(a, b)).to.equal(expectedResult);
    });
  });

  describe('subtract(a, b)', function () {
    it('should return a - b', function () {
      expectedResult = 3;

      expect(calculator.subtract(a, b)).to.equal(expectedResult);
    });
  });
});
//# sourceMappingURL=calculator_test.js.map
