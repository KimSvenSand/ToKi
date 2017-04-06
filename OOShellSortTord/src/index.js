import Shellsort from './js/Shellsort.js';
import util from 'util';
'use strict';

console.info('start' + util.inspect(process.memoryUsage()));
runShellsort();
console.info(util.inspect(process.memoryUsage()));

global.gc();
console.log(util.inspect(process.memoryUsage()))

function runShellsort() {
  var shellsort = new Shellsort();
  var gapSequence = shellsort.getGapSequence();
  console.log(gapSequence);
  var array = [];
  var nrInArray = 10;
  for(var i = 0; i < nrInArray; i++){
    array.push(Math.floor((Math.random()*100)+1));
  }
  console.log(array);
  console.log(shellsort.shellsort(array,gapSequence));


  let t0 = new Date();
  let hrStart = process.hrtime();



  let hrEnd = process.hrtime(hrStart);
  let t1 = new Date();

  console.info(t1 - t0 + 'ms');
  console.info(hrEnd[1] / 1000000 + 'ms');
}
