import Shellsort from './js/Shellsort.js';
import util from 'util';
'use strict';

console.log("OOP Shellsort algorithm:");
var nrOfElements = 6000;
console.log("nrOfElements: " + nrOfElements);
runShellsort(nrOfElements);

global.gc();

function runShellsort(nrOfElements) {
  var hrStart = process.hrtime();
  var memStart = process.memoryUsage().rss;
  console.info('start:\n' + util.inspect(process.memoryUsage()));

  var shellsort = new Shellsort();
  var gapSequence = shellsort.getGapSequence();
  var array = shellsort.insertRandomValues(nrOfElements);
  shellsort.runShellsort(array,gapSequence);

  console.info('end:\n' + util.inspect(process.memoryUsage()));
  var memEnd = process.memoryUsage().rss;
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
  console.log("Memory: " + (memEnd - memStart));
}
