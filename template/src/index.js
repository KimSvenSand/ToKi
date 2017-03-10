import Calculator from './js/calculator.js';
import util from 'util';
'use strict';

console.info('start' + util.inspect(process.memoryUsage()));
runCalculatorMeasurements(5, 8);
console.info(util.inspect(process.memoryUsage()));

global.gc();
console.log(util.inspect(process.memoryUsage()))

function runCalculatorMeasurements(a, b) {
  let calculator = new Calculator();
  let result = [];
  let t0 = new Date();
  let hrStart = process.hrtime();

  for (var i = 0; i < 10000000; i++) {
    result[i] = calculator.add(i, i + 1);
  }

  let hrEnd = process.hrtime(hrStart);
  let t1 = new Date();

  console.info(t1 - t0 + 'ms');
  console.info(hrEnd[1] / 1000000 + 'ms');
}
