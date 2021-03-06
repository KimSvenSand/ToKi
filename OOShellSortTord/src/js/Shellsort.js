'use strict';

export default class Shellsort {

  runShellsort(array,gapSequence){
    var sortedArray = array;
    var currentGap = 1;
    var currentGapIndex = 0;
    var currentValue = 0;
    var currentIndex = 0;
    for(var i = 0; i < gapSequence.length && gapSequence[i] <= sortedArray.length/2; i++){
      currentGap = gapSequence[i];
      currentGapIndex = i;
    }
    while(currentGap > 0){
      for(var i = currentGap;i < sortedArray.length;i++){
        currentValue = sortedArray[i];
        currentIndex = i;
        while((currentIndex - currentGap) >= 0 && sortedArray[currentIndex - currentGap] > currentValue){
          sortedArray[currentIndex] = sortedArray[currentIndex - currentGap];
          currentIndex = currentIndex - currentGap;
        }
        sortedArray[currentIndex] = currentValue;
      }
      currentGapIndex--;
      currentGap = gapSequence[currentGapIndex];
    }
    return sortedArray;
  }

  getGapSequence(){
    var gapSequence = [];
    gapSequence.push(0);
    for(var i = 0; i < 10; i++){
      gapSequence.push(9*(Math.pow(4,i) - Math.pow(2,i)) + 1);
      gapSequence.push(Math.pow(2,i+2)*(Math.pow(2,i+2)-3)+1);
    }
    return gapSequence;
  }

  insertRandomValues(nrOfElements){
    var array = [];
    for(var i = 0; i < nrOfElements; i++){
      array.push(Math.floor((Math.random() * nrOfElements * 10) + 1));
    }
    return array;
  }

}
