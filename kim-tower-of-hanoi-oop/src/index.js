import TowerOfHanoi from './js/TowerOfHanoi'
import util from 'util';
'use strict';

console.log('Tower of Hanoi OOP');
var size = 10;
console.log("Data size: " + size);
var hanoi = new TowerOfHanoi(size);
runMeasurements(hanoi);
global.gc();

function runMeasurements(towerOfHanoi) {
  var hrStart = process.hrtime();
  let memStart = process.memoryUsage().rss;
  console.info('start:\n' + util.inspect(process.memoryUsage()));

  hanoi.playHanoi(2);

  console.info('end:\n' + util.inspect(process.memoryUsage()));
  let memEnd = process.memoryUsage().rss;
  let hrEnd = process.hrtime(hrStart);
  console.info('Runtime: ' + hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
  console.info('Memory: ' + (memEnd - memStart));
}
