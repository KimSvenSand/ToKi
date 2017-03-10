import Calculator from '../dist/js/calculator';
import { expect } from 'chai';

describe('Calculator', function() {
  var calculator = new Calculator();
  var expectedResult = 0;
  var a = 8;
  var b = 5;

  describe('add(a, b)', function() {
    it("should return a + b", function() {
      expectedResult = 13;

      expect(calculator.add(a, b)).to.equal(expectedResult);
    });
  });

  describe('subtract(a, b)', function() {
    it('should return a - b', function() {
      expectedResult = 3;

      expect(calculator.subtract(a, b)).to.equal(expectedResult);
    });
  });
});
