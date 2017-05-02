import Hanoi from '../dist/js/Hanoi';
import { expect } from 'chai';

describe('Tower of Hanoi', function() {
  var hanoi = new Hanoi();
  var nrOfPegs = 0;
  var expectedResult = 0;

  describe('Tower of Hanoi', function() {
    it("should return pegs and nrOfSteps", function() {
      nrOfPegs = 8;
      expectedResult = [[],[],[8,7,6,5,4,3,2,1],255];

      expect(hanoi.towerOfHanoi(nrOfPegs)).to.eql(expectedResult);
    });
  });

  describe('Empty Tower of Hanoi', function() {
    it("should return empty pegs", function() {
      hanoi = new Hanoi();
      nrOfPegs = 8;
      expectedResult = [[],[],[],0];


      expect(hanoi.towerOfHanoi(0)).to.eql(expectedResult);
    });
  });
});
