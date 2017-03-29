'use strict';

var _calculator = require('./js/calculator.js');

var _calculator2 = _interopRequireDefault(_calculator);

var _treeFunctions = require('./js/tree-functions');

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

var tree = (0, _treeFunctions.insert)(6, (0, _treeFunctions.insert)(20, (0, _treeFunctions.insert)(13)));

console.log(tree);
console.log((0, _treeFunctions.inOrderTraversal)(tree));

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
//# sourceMappingURL=index.js.map
