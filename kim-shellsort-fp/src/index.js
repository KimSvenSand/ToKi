import { shellsort } from './js/shellsort-functions';
import util from 'util';
'use strict';

console.log('Shellsort FP');
var size = 6000;
console.log("Data size: " + size);
runMeasurements(createRandomArray(size));
global.gc();

function runMeasurements(array) {
  var hrStart = process.hrtime();
  var memStart = process.memoryUsage().rss;
  console.info('start:\n' + util.inspect(process.memoryUsage()));

  shellsort(array);

  console.info('end:\n' + util.inspect(process.memoryUsage()));
  var memEnd = process.memoryUsage().rss;
  let hrEnd = process.hrtime(hrStart);
  console.info('Runtime: ' + hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
  console.info('Memory: ' + (memEnd - memStart));
}

function createRandomArray(size) {
  var getRandom = function() {
    return Math.floor((Math.random() * size * 2) + 1);
  }

  var randomArray = [];
  if (randomArray.length >= size) {
    return randomArray;
  } else {
    return randomArray.concat(getRandom()).concat(createRandomArray(size - 1));
  }
}
