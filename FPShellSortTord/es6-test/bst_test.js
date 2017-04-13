import {getGapSequence} from '../dist/js/Shellsort';
import {shellsort} from '../dist/js/Shellsort';
import { expect } from 'chai';

describe('BinarySearchTree', function() {
  var gapSequence = getGapSequence(2,[]);
  var array = [10,5,20,15,30,25];
  var expectedResult = 0;

  describe('shellsort', function() {
    it("should return the array sorted", function() {
      expectedResult = [5,10,15,20,25,30];

      expect(shellsort(array,gapSequence)).to.eql(expectedResult);
    });
  });

  describe('shellsort-gapSequence', function() {
    it("should return 7 steps in Segwicks gapsequence including 0", function() {
      expectedResult = [];


      expect(shellsort([],gapSequence)).to.eql(expectedResult);
    });
  });
});
