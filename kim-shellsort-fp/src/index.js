import { shellsort } from './js/shellsort-functions';
import util from 'util';
'use strict';

var size = 100;
runMeasurements(createRandomArray(size));

function runMeasurements(array) {
  var hrStart = process.hrtime();
  console.info('start:\n' + util.inspect(process.memoryUsage()));

  shellsort(array);

  console.info('end:\n' + util.inspect(process.memoryUsage()));
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
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
