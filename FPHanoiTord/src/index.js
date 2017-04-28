import {hanoi} from './js/Hanoi.js';
import {createStartPeg} from './js/Hanoi.js';
import util from 'util';
'use strict';

console.log("FP Tower of Hanoi algorithm:");
var nrOfElements = 10;
runTowerOfHanoi(nrOfElements);

global.gc();

function runTowerOfHanoi(nrOfElements) {
  var hrStart = process.hrtime();
  var memStart = process.memoryUsage().rss;
  console.info('start:\n' + util.inspect(process.memoryUsage()));

  var startPeg = createStartPeg(nrOfElements,[]);
  hanoi(nrOfElements,startPeg,[],[],0);

  console.info('end:\n' + util.inspect(process.memoryUsage()));
  var memEnd = process.memoryUsage().rss;
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
  console.log("Memory: " + (memEnd - memStart));
}
