'use strict';

var _Hanoi = require('./js/Hanoi.js');

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

console.info('start' + _util2.default.inspect(process.memoryUsage()));
runTowerOfHanoi();
console.info(_util2.default.inspect(process.memoryUsage()));

global.gc();
console.log(_util2.default.inspect(process.memoryUsage()));

function runTowerOfHanoi() {
  var nrOfDisks = 3;
  var startPeg = (0, _Hanoi.createStartPeg)(nrOfDisks, []);
  var beforeHanoi = [startPeg, [], []];
  console.log(beforeHanoi);
  var afterHanoi = (0, _Hanoi.hanoi)(nrOfDisks, startPeg, [], [], 0);
  console.log(afterHanoi);

  let t0 = new Date();
  let hrStart = process.hrtime();

  let hrEnd = process.hrtime(hrStart);
  let t1 = new Date();

  console.info(t1 - t0 + 'ms');
  console.info(hrEnd[1] / 1000000 + 'ms');
}
//# sourceMappingURL=index.js.map
