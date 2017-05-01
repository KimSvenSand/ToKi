'use strict'

export default class InsertionSort {
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
