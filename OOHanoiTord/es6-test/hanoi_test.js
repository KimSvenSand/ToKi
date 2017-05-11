import Hanoi from '../dist/js/Hanoi';
import { expect } from 'chai';

describe('Tower of Hanoi', function() {
  var hanoi = new Hanoi();
  var nrOfDisks = 0;
  var expectedResult = 0;

  describe('Tower of Hanoi', function() {
    it("should return pegs and nrOfSteps", function() {
      nrOfDisks = 8;
      expectedResult = [[],[],[8,7,6,5,4,3,2,1],255];

      expect(hanoi.towerOfHanoi(nrOfDisks)).to.eql(expectedResult);
    });
  });

  describe('Empty Tower of Hanoi', function() {
    it("should return empty pegs", function() {
      hanoi.resetHanoi();
      nrOfDisks = 0;
      expectedResult = [[],[],[],0];


      expect(hanoi.towerOfHanoi(nrOfDisks)).to.eql(expectedResult);
    });
  });
});
