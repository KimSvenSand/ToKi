import { hanoi, buildTower } from './js/tower-of-hanoi-functions'
import util from 'util';
'use strict';

console.log('Tower of Hanoi FP');
var size = 25;
console.log("Data size: " + size);
let hanoiPegs = buildTower(size, []).concat([ [], [] ]);
runMeasurements(hanoiPegs);
global.gc();

function runMeasurements(hanoiPegs) {
  let hrStart = process.hrtime();
  let memStart = process.memoryUsage().rss;
  console.info('start:\n' + util.inspect(process.memoryUsage()));

  hanoi(hanoiPegs, 0, 2, 1);

  console.info('end:\n' + util.inspect(process.memoryUsage()));
  let memEnd = process.memoryUsage().rss;
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
  console.info('Memory: ' + (memEnd - memStart));
}
