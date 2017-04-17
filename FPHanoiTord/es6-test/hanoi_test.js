import {hanoi} from '../dist/js/Hanoi';
import {createStartPeg} from '../dist/js/Hanoi';
import { expect } from 'chai';

describe('Tower of Hanoi', function() {
  var nrOfDisks = 8;
  var startPeg = createStartPeg(8,[]);
  var expectedResult = 0;

  describe('Tower of Hanoi', function() {
    it("should return pegs and nrOfSteps", function() {
      expectedResult = [[],[],[8,7,6,5,4,3,2,1],255];

      expect(hanoi(nrOfDisks,startPeg,[],[],0)).to.eql(expectedResult);
    });
  });

  describe('Empty Tower of Hanoi', function() {
    it("should return empty pegs and zero steps", function() {
      expectedResult = [[],[],[],0];

      expect(hanoi(0,[],[],[],0)).to.eql(expectedResult);
    });
  });
});
