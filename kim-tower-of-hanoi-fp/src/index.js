import { hanoi, getTopTower, buildTower } from './js/tower-of-hanoi-functions'
import util from 'util';
'use strict';

var size = 22;
var hanoiPegs = buildTower(size, []).concat([ [], [] ]);
runMeasurements(hanoiPegs)

function runMeasurements(hanoiPegs) {
  var hrStart = process.hrtime();
  console.info('start:\n' + util.inspect(process.memoryUsage()));

  hanoi(hanoiPegs, 0, 2, 1);

  console.info('end:\n' + util.inspect(process.memoryUsage()));
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
}
