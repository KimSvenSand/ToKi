'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGapSequence = getGapSequence;
exports.random = random;
exports.shellsort = shellsort;
exports.findBiggestGap = findBiggestGap;
exports.countCurrentGap = countCurrentGap;
exports.placeGap = placeGap;
exports.replaceValues = replaceValues;
function getGapSequence(length, gapSequence) {
  if (length >= 0) {
    if (length == 0) {
      gapSequence.push(0);
    } else {
      gapSequence = getGapSequence(length - 1, gapSequence);
    }
  }

  gapSequence.push(9 * (Math.pow(4, length) - Math.pow(2, length)) + 1);
  gapSequence.push(Math.pow(2, length + 2) * (Math.pow(2, length + 2) - 3) + 1);

  return gapSequence;
}

function random(length, array) {
  if (length >= 0) {
    array.push(Math.floor(Math.random() * 100 + 1));
    array = random(length - 1, array);
  }
  return array;
}

function shellsort(array, gapSequence) {
  var currentGapIndex = findBiggestGap(array, gapSequence, 0);
  var sortedArray = countCurrentGap(currentGapIndex, gapSequence, 0, 0, array);
  return sortedArray;
}

function findBiggestGap(array, gapSequence, currentGapIndex) {
  if (gapSequence[currentGapIndex] > array.length / 2) {
    currentGapIndex = currentGapIndex - 1;
  } else if (gapSequence[currentGapIndex] < array.length / 2) {
    currentGapIndex = findBiggestGap(array, gapSequence, currentGapIndex + 1);
  }
  return currentGapIndex;
}

function countCurrentGap(currentGapIndex, gapSequence, currentValue, currentIndex, array) {
  if (gapSequence[currentGapIndex] > 0) {
    array = placeGap(gapSequence[currentGapIndex], 0, gapSequence[currentGapIndex], array);
    countCurrentGap(currentGapIndex - 1, gapSequence, currentValue, currentIndex, array);
  }
  return array;
}

function placeGap(currentGap, currentValue, currentIndex, array) {
  if (currentIndex < array.length) {
    currentValue = array[currentIndex];
    var arr = replaceValues(array, currentIndex, currentGap, currentValue);
    array = arr[0];
    currentIndex = arr[1];
    array[currentIndex] = currentValue;

    array = placeGap(currentGap, currentValue, currentIndex + 1, array);
  }
  return array;
}

function replaceValues(array, currentIndex, currentGap, currentValue) {
  if (currentIndex - currentGap >= 0 && array[currentIndex - currentGap] > currentValue) {
    array[currentIndex] = array[currentIndex - currentGap];
    currentIndex = currentIndex - currentGap;
    var arr = replaceValues(array, currentIndex, currentGap, currentValue);
    array = arr[0];
    currentIndex = arr[1];
  }
  return [array, currentIndex];
}
//# sourceMappingURL=Shellsort.js.map
