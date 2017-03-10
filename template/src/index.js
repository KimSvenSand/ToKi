import Calculator from './js/calculator.js';
import util from 'util';
'use strict';

console.info('start' + util.inspect(process.memoryUsage()));

runCalculatorMeasurements(5, 8);

global.gc(); //Run garbage collection.
console.info('end' + util.inspect(process.memoryUsage()));

function runCalculatorMeasurements(a, b) {
  var calculator = new Calculator();
  var result = 0;
  var t0 = new Date();
  var hrStart = process.hrtime();

  for (var i = 0; i < 10000000; i++) {
    result = calculator.add(i, i + 1);
  }

  var hrEnd = process.hrtime(hrStart);
  var t1 = new Date();

  console.info(t1 - t0 + 'ms');
  console.info(hrEnd[1] / 1000000 + 'ms');
  console.info(util.inspect(process.memoryUsage()));
}
