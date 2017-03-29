import Calculator from './js/calculator.js';
import { insert, inOrderTraversal } from './js/tree-functions'
import util from 'util';
'use strict';

var tree = insert(6, insert(20, insert(13)));

console.log(tree);
console.log(inOrderTraversal(tree));

// console.info('start' + util.inspect(process.memoryUsage()));
// runCalculatorMeasurements(5, 8);
// console.info(util.inspect(process.memoryUsage()));
//
// global.gc();
// console.log(util.inspect(process.memoryUsage()))
//
// function runCalculatorMeasurements(a, b) {
//   let calculator = new Calculator();
//   let result = [];
//   let t0 = new Date();
//   let hrStart = process.hrtime();
//
//   for (var i = 0; i < 10000000; i++) {
//     result[i] = calculator.add(i, i + 1);
//   }
//
//   let hrEnd = process.hrtime(hrStart);
//   let t1 = new Date();
//
//   console.info(t1 - t0 + 'ms');
//   console.info(hrEnd[1] / 1000000 + 'ms');
//}
