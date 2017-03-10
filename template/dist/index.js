'use strict';

var _calculator = require('./js/calculator.js');

var _calculator2 = _interopRequireDefault(_calculator);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

console.info('start' + _util2.default.inspect(process.memoryUsage()));
runCalculatorMeasurements(5, 8);
console.info(_util2.default.inspect(process.memoryUsage()));

global.gc();
console.log(_util2.default.inspect(process.memoryUsage()));

function runCalculatorMeasurements(a, b) {
  let calculator = new _calculator2.default();
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
//# sourceMappingURL=index.js.map
