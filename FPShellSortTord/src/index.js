import {getGapSequence} from './js/Shellsort.js';
import {shellsortContainer} from './js/Shellsort.js';
import {random} from './js/Shellsort.js';
import util from 'util';
'use strict';

console.log("FP Shellsort algorithm:");
var nrOfElements = 1000;
console.log("Number of elements: " + nrOfElements);
runShellsort(nrOfElements);

global.gc();

function runShellsort(nrOfElements) {
  var hrStart = process.hrtime();
  var memStart = process.memoryUsage().rss;
  console.info('start:\n' + util.inspect(process.memoryUsage()));

  var gapSequence = getGapSequence(10,[]);
  var array = random(nrOfElements,[]);
  var sortedArray = shellsortContainer(array,gapSequence);

  console.info('end:\n' + util.inspect(process.memoryUsage()));
  var memEnd = process.memoryUsage().rss;
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
  console.log("Memory: " + (memEnd - memStart));
}
