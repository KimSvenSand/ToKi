import Hanoi from '../dist/js/Hanoi';
import { expect } from 'chai';

describe('Tower of Hanoi', function() {
  var hanoi = new Hanoi();
  var nrOfPegs = 8;
  var expectedResult = 0;

  describe('Tower of Hanoi', function() {
    it("should return the array sorted", function() {
      expectedResult = [[],[],[8,7,6,5,4,3,2,1]];

      expect(hanoi.towerOfHanoi(nrOfPegs)).to.eql(expectedResult);
    });
  });

  describe('Empty Tower of Hanoi', function() {
    it("should return empty pegs", function() {
      hanoi = new Hanoi();
      expectedResult = [[],[],[]];


      expect(hanoi.towerOfHanoi(0)).to.eql(expectedResult);
    });
  });
});
