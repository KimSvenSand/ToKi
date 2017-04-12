import Shellsort from '../dist/js/Shellsort';
import { expect } from 'chai';
'use strict';

describe('Shellsort', function() {
  var shellsort = new Shellsort();
  var input = [9, 8, 1, 15, 3, 4, 11, 2, 7, 6];

  describe('calculateGapSequence(n)', function() {
    it('Returns a gapSequence for n-sized array', function() {
      var expectedArray = [109, 41, 19, 5, 1];
      expect(shellsort.calculateGapSequence(200)).to.eql(expectedArray);
    });
  });

  describe('shellsort()', function() {
    it('Should return a sorted array. If array is empty an emtpy array should be returned', function() {
      var expectedArray = [1, 2, 3, 4, 6, 7, 8, 9, 11, 15];
      expect(shellsort.shellsort(input)).to.eql(expectedArray);
      expect(shellsort.shellsort([])).to.eql([]);
    });
  });
});
