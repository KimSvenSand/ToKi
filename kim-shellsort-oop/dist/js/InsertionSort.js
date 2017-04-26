'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
class InsertionSort {
  sort(array, gap) {
    var sortedArray = array;
    var currentValue = 0;
    var currentIndex = 0;

    for (var i = gap; i < array.length; i++) {
      currentValue = array[i];
      currentIndex = i;
      while (currentIndex - gap >= 0 && sortedArray[currentIndex - gap] > currentValue) {
        sortedArray[currentIndex] = sortedArray[currentIndex - gap];
        currentIndex = currentIndex - gap;
      }
      sortedArray[currentIndex] = currentValue;
    }

    return sortedArray;
  }
}
exports.default = InsertionSort;
//# sourceMappingURL=InsertionSort.js.map
