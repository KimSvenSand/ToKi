import { compose } from './general-functions'
'use strict'

function shellsort(array, gapIndex) {
  var gapSequence = createGapSequence(array.length);
  var copyArray = array.slice();

  if (!gapIndex) {
    return shellsort(copyArray, gapSequence[gapSequence.length - 1]);
  } else if (!gapSequence[gapIndex]) {
    return copyArray;
  } else {
    return shellsort(insertionSort(copyArray, gapSequence[gapIndex]), gapIndex + 1);
  }
}

function insertionSort(array, gap, i) {
  var copyArray = array.slice();

  if (!i) {
    return insertionSort(copyArray, gap, gap);
  }
  else if (i >= array.length) {
    return copyArray;
  } else {
    return insertionSort(sortSection(copyArray, gap, i), gap, i + 1);
  }
}

function sortSection(array, gap, i) {
  var copyArray = array.slice();

  if (i - gap < 0 || copyArray[i - gap] <= copyArray[i]) {
    return copyArray;
  } else {
    return sortSection(switchElements(copyArray, i, i - gap), gap, i - gap);
  }
}

function switchElements(array, i1, i2) {
  var copyArray = array.slice();
  copyArray[i1] = array[i2];
  copyArray[i2] = array[i1];
  return copyArray;
}

function createGapSequence(n, sequence) {
  if (!sequence) {
    return createGapSequence(n, [1]);
  } else if (sequence[sequence.length - 1] >= n / 2) {
    return sequence.reverse();
  } else {
    return createGapSequence(n, sequence.concat(sedgewick(sequence.length)));
  }
}

function sedgewick(length) {
  if (length % 2 !== 0) {
    let k = Math.floor(length / 2) + 2;
    return Math.pow(4, k) - (3 * Math.pow(2, k)) + 1;
  } else {
    let k = length / 2;
    return (9 * Math.pow(4, k)) - (9 * Math.pow(2, k)) + 1;
  }
}

export {
  shellsort,
  createGapSequence,
  insertionSort,
  sortSection,
  switchElements
}
