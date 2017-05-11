'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGapSequence = getGapSequence;
exports.random = random;
exports.shellsortContainer = shellsortContainer;
exports.findBiggestGap = findBiggestGap;
exports.shellsort = shellsort;
exports.useCurrentGap = useCurrentGap;
exports.replaceValues = replaceValues;
function getGapSequence(length, gapSequence) {
  var sequenceCopy = gapSequence.slice();
  if (length >= 0) {
    if (length == 0) {
      gapSequence.push(0);
    } else {
      sequenceCopy = getGapSequence(length - 1, sequenceCopy);
    }
  }

  sequenceCopy.push(9 * (Math.pow(4, length) - Math.pow(2, length)) + 1);
  sequenceCopy.push(Math.pow(2, length + 2) * (Math.pow(2, length + 2) - 3) + 1);

  return sequenceCopy;
}

function random(length, array) {
  var arrayCopy = array.slice();
  if (length >= 0) {
    arrayCopy.push(Math.floor(Math.random() * 100 + 1));
    arrayCopy = random(length - 1, arrayCopy);
  }
  return arrayCopy;
}

function shellsortContainer(inputArray, gapSequence) {
  var currentGapIndex = findBiggestGap(inputArray.length, gapSequence, 0);
  var sortedArray = shellsort(currentGapIndex, gapSequence, 0, 0, inputArray);
  return sortedArray;
}

function findBiggestGap(inputArrayLength, gapSequence, currentGapIndex) {
  var index = currentGapIndex;
  if (gapSequence[index] > inputArrayLength / 2) {
    index = index - 1;
  } else if (gapSequence[index] < inputArrayLength / 2) {
    index = findBiggestGap(inputArrayLength, gapSequence, index + 1);
  }
  return index;
}

function shellsort(currentGapIndex, gapSequence, currentValue, currentIndex, inputArray) {
  var arrayCopy = inputArray.slice();
  if (gapSequence[currentGapIndex] > 0) {
    arrayCopy = useCurrentGap(gapSequence[currentGapIndex], 0, gapSequence[currentGapIndex], arrayCopy);
    arrayCopy = shellsort(currentGapIndex - 1, gapSequence, currentValue, currentIndex, arrayCopy);
  }
  return arrayCopy;
}

function useCurrentGap(currentGap, currentValue, currentIndex, inputArray) {
  var arrayCopy = inputArray.slice();
  var indexCopy = currentIndex;
  var valueCopy = currentValue;
  if (indexCopy < arrayCopy.length) {
    valueCopy = arrayCopy[indexCopy];
    var arr = replaceValues(arrayCopy, indexCopy, currentGap, valueCopy);
    arrayCopy = arr[0];
    indexCopy = arr[1];
    arrayCopy[indexCopy] = valueCopy;

    arrayCopy = useCurrentGap(currentGap, valueCopy, currentIndex + 1, arrayCopy);
  }
  return arrayCopy;
}

function replaceValues(inputArray, currentIndex, currentGap, currentValue) {
  var arrayCopy = inputArray.slice();
  var indexCopy = currentIndex;
  if (indexCopy - currentGap >= 0 && arrayCopy[indexCopy - currentGap] > currentValue) {
    arrayCopy[currentIndex] = arrayCopy[currentIndex - currentGap];
    indexCopy = indexCopy - currentGap;
    var arr = replaceValues(arrayCopy, indexCopy, currentGap, currentValue);
    arrayCopy = arr[0];
    indexCopy = arr[1];
  }
  return [arrayCopy, indexCopy];
}
//# sourceMappingURL=Shellsort.js.map
