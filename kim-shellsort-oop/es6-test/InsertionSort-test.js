import InsertionSort from '../dist/js/InsertionSort';
import { expect } from 'chai';
'use strict';

describe('InsertionSort', function() {
  var insertionSort = new InsertionSort();
  var input = [9, 8, 1, 15, 3, 4, 11, 2, 7, 6];

  describe('insertionSort(array, gap)', function() {
    it('Should return a sortedArray given that gap is 1', function() {
      var expectedArray = [1, 2, 3, 4, 6, 7, 8, 9, 11, 15];
      expect(insertionSort.sort(input, 1)).to.eql(expectedArray);
    });
  });
});
