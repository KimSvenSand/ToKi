import TowerOfHanoi from './js/TowerOfHanoi'
import util from 'util';
'use strict';

var size = 20;
var hanoi = new TowerOfHanoi(size);
runMeasurements(hanoi);

function runMeasurements(towerOfHanoi) {
  var hrStart = process.hrtime();
  console.info('start:\n' + util.inspect(process.memoryUsage()));

  hanoi.playHanoi(2);

  console.info('end:\n' + util.inspect(process.memoryUsage()));
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
}
