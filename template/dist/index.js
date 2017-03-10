'use strict';

var _calculator = require('./js/calculator.js');

var _calculator2 = _interopRequireDefault(_calculator);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

console.info('start' + _util2.default.inspect(process.memoryUsage()));

runCalculatorMeasurements(5, 8);

global.gc(); //Run garbage collection.
console.info('end' + _util2.default.inspect(process.memoryUsage()));

function runCalculatorMeasurements(a, b) {
  var calculator = new _calculator2.default();
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
  console.info(_util2.default.inspect(process.memoryUsage()));
}
//# sourceMappingURL=index.js.map
