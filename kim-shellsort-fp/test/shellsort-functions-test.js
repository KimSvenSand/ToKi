'use strict';

var _shellsortFunctions = require('../dist/js/shellsort-functions');

var _chai = require('chai');

'use strict';

describe('switchElements(array, i1, i2)', function () {
  it('Should return an array with switched places between element at i1 and i2', function () {
    var input = [9, 8, 1, 15, 3, 4, 11, 2, 7, 6];
    var expectedArray = [9, 7, 1, 15, 3, 4, 11, 2, 8, 6];

    (0, _chai.expect)((0, _shellsortFunctions.switchElements)(input, 1, 8)).to.eql(expectedArray);
  });
});

describe('sortSection(array, gap, i)', function () {
  it('should return an array where element at i has been moved to correct position', function () {
    var input = [9, 8, 1, 15, 3, 4, 11, 2, 7, 6];
    var expectedArray = [9, 8, 1, 2, 15, 3, 4, 11, 7, 6];

    (0, _chai.expect)((0, _shellsortFunctions.sortSection)(input, 1, 7)).to.eql(expectedArray);
  });
});

describe('insertionSort(array, gap, i)', function () {
  it('should return sorted array with regards to gap', function () {
    var input = [9, 8, 1, 15, 3, 4, 11, 2, 7, 6];
    var expectedArray = [1, 2, 3, 4, 6, 7, 8, 9, 11, 15];

    (0, _chai.expect)((0, _shellsortFunctions.insertionSort)(input, 1)).to.eql(expectedArray);
  });
});

describe('shellsort(array, gapIndex)', function () {
  it('should return a sorted copy of array', function () {
    var input = [9, 8, 1, 15, 3, 4, 11, 2, 7, 6];
    var expectedArray = [1, 2, 3, 4, 6, 7, 8, 9, 11, 15];

    (0, _chai.expect)((0, _shellsortFunctions.shellsort)(input)).to.eql(expectedArray);
  });
});
//# sourceMappingURL=shellsort-functions-test.js.map
