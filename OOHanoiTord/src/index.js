import Hanoi from './js/Hanoi.js';
import util from 'util';
'use strict';

console.info('start' + util.inspect(process.memoryUsage()));
runTowerOfHanoi();
console.info(util.inspect(process.memoryUsage()));

global.gc();
console.log(util.inspect(process.memoryUsage()))

function runTowerOfHanoi() {
  var hanoi = new Hanoi();
  var nrOfPegs = 3;
  console.log(hanoi.towerOfHanoi(nrOfPegs));


  let t0 = new Date();
  let hrStart = process.hrtime();



  let hrEnd = process.hrtime(hrStart);
  let t1 = new Date();

  console.info(t1 - t0 + 'ms');
  console.info(hrEnd[1] / 1000000 + 'ms');
}
