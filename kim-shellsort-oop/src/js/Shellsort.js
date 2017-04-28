import InsertionSort from './InsertionSort';
'use strict';

export default class Shellsort {
  constructor() {
    this.insertionSort = new InsertionSort();
  }

  shellsort(array) {
    if (!array) {
      return [];
    }

    var sortedArray = array;
    var gapSequence = this.calculateGapSequence(array.length);
    var currentGapIndex = 0;

    while (gapSequence[currentGapIndex] >= 1) {
      sortedArray = this.insertionSort.insertionSort(sortedArray, gapSequence[currentGapIndex]);
      currentGapIndex++;
    }

    return sortedArray;
  }

  calculateGapSequence(n) {
    var sequence = [1];
    var k1 = 2;
    var k2 = 1;

    while (sequence[sequence.length - 1] < n / 2) {
      if ((k1 + k2) % 2 !== 0) {
        sequence.push(Math.pow(4, k1) - (3 * Math.pow(2, k1)) + 1);
        k1++;
      } else {
        sequence.push((9 * Math.pow(4, k2)) - (9 * Math.pow(2, k2)) + 1);
        k2++;
      }
    }

    return sequence.reverse();
  }
}
