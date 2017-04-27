import {hanoi} from './js/Hanoi.js';
import {createStartPeg} from './js/Hanoi.js';
import util from 'util';
'use strict';

console.info('start' + util.inspect(process.memoryUsage()));
runTowerOfHanoi();
console.info(util.inspect(process.memoryUsage()));

global.gc();
console.log(util.inspect(process.memoryUsage()))

function runTowerOfHanoi() {
  let t0 = new Date();
  let hrStart = process.hrtime();

  var nrOfDisks = 3;
  var startPeg = createStartPeg(nrOfDisks,[]);
  var afterHanoi = hanoi(nrOfDisks,startPeg,[],[],0);
  console.log(afterHanoi);

  let hrEnd = process.hrtime(hrStart);
  let t1 = new Date();

  console.info(t1 - t0 + 'ms');
  console.info(hrEnd[1] / 1000000 + 'ms');
}
