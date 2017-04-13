'use strict';

var _Hanoi = require('../dist/js/Hanoi');

var _chai = require('chai');

describe('Tower of Hanoi', function () {
  var nrOfDisks = 8;
  var startPeg = (0, _Hanoi.createStartPeg)(8, []);
  var expectedResult = 0;

  describe('Tower of Hanoi', function () {
    it("should return pegs", function () {
      expectedResult = [[], [], [8, 7, 6, 5, 4, 3, 2, 1], 255];

      (0, _chai.expect)((0, _Hanoi.hanoi)(nrOfDisks, startPeg, [], [], 0)).to.eql(expectedResult);
    });
  });

  describe('Empty Tower of Hanoi', function () {
    it("should return empty pegs", function () {
      expectedResult = [[], [], [], 0];

      (0, _chai.expect)((0, _Hanoi.hanoi)(0, [], [], [], 0)).to.eql(expectedResult);
    });
  });
});
//# sourceMappingURL=bst_test.js.map
