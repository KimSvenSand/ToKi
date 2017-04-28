import Shellsort from './js/Shellsort';
import util from 'util';
'use strict';

console.log('Shellsort OOP');
var size = 6000;
console.log("Data size: " + size);

var array = createRandomArray(size);
runMeasurements(array);
global.gc();

function runMeasurements(array) {
  var hrStart = process.hrtime();
  var memStart = process.memoryUsage().rss;
  console.info('start:\n' + util.inspect(process.memoryUsage()));

  var shellsort = new Shellsort();
  shellsort.sort(array);

  console.info('end:\n' + util.inspect(process.memoryUsage()));
  var memEnd = process.memoryUsage().rss;
  let hrEnd = process.hrtime(hrStart);
  console.info('Runtime: ' + hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
  console.log("Memory: " + (memEnd - memStart));
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
