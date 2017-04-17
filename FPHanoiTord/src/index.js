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
  var nrOfDisks = 3;
  var startPeg = createStartPeg(nrOfDisks,[]);
  var beforeHanoi = [startPeg,[],[]];
  console.log(beforeHanoi);
  var afterHanoi = hanoi(nrOfDisks,startPeg,[],[],0);
  console.log(afterHanoi);


  let t0 = new Date();
  let hrStart = process.hrtime();



  let hrEnd = process.hrtime(hrStart);
  let t1 = new Date();

  console.info(t1 - t0 + 'ms');
  console.info(hrEnd[1] / 1000000 + 'ms');
}
