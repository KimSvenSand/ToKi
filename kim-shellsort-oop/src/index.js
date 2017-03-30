import Shellsort from './js/Shellsort';
import util from 'util';
'use strict';

var size = 10000000;

var array = createRandomArray(size);
runMeasurements(array);

function runMeasurements(array) {
  var hrStart = process.hrtime();
  console.info('start:\n' + util.inspect(process.memoryUsage()));

  var shellsort = new Shellsort();
  shellsort.shellsort(array);

  console.info('end:\n' + util.inspect(process.memoryUsage()));
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
}

function createRandomArray(size) {
  var getRandom = function() {
    return Math.floor((Math.random() * size * 2) + 1);
  }
  var randomArray = [];

  for (var i = 0; i < size; i++) {
    randomArray.push(getRandom());
  }

  return randomArray;
}
