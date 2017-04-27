import {getGapSequence} from './js/Shellsort.js';
import {shellsort} from './js/Shellsort.js';
import {random} from './js/Shellsort.js';
import util from 'util';
'use strict';

console.info('start' + util.inspect(process.memoryUsage()));
runShellsort();
console.info(util.inspect(process.memoryUsage()));

global.gc();
console.log(util.inspect(process.memoryUsage()))

function runShellsort() {
  let t0 = new Date();
  let hrStart = process.hrtime();

  var gapSequence = getGapSequence(2,[]);
  var array = random(10,[]);

  console.log("Unsorted:");
  console.log(array);
  console.log("Sorted:");
  console.log(shellsort(array,gapSequence));
  
  let hrEnd = process.hrtime(hrStart);
  let t1 = new Date();

  console.info(t1 - t0 + 'ms');
  console.info(hrEnd[1] / 1000000 + 'ms');
}
