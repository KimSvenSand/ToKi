'use strict';

var _Hanoi = require('./js/Hanoi.js');

var _Hanoi2 = _interopRequireDefault(_Hanoi);

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
  let t0 = new Date();
  let hrStart = process.hrtime();

  var hanoi = new _Hanoi2.default();
  var nrOfPegs = 3;
  console.log(hanoi.towerOfHanoi(nrOfPegs));

  let hrEnd = process.hrtime(hrStart);
  let t1 = new Date();

  console.info(t1 - t0 + 'ms');
  console.info(hrEnd[1] / 1000000 + 'ms');
}
//# sourceMappingURL=index.js.map
