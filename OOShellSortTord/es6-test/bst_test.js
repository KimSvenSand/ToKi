import Shellsort from '../dist/js/Shellsort';
import { expect } from 'chai';

describe('BinarySearchTree', function() {
  var shellsort = new Shellsort();
  var gapSequence = shellsort.getGapSequence();
  var array = [10,5,20,15,30,25];
  var expectedResult = 0;

  describe('shellsort', function() {
    it("should return the array sorted", function() {
      expectedResult = [5,10,15,20,25,30];

      expect(shellsort.shellsort(array,gapSequence)).to.eql(expectedResult);
    });
  });

  describe('shellsort with empty array', function() {
    it("should return an empty array", function() {
      expectedResult = [];


      expect(shellsort.shellsort([],gapSequence)).to.eql(expectedResult);
    });
  });
});
