'use strict';

var _TowerOfHanoi = require('./js/TowerOfHanoi');

var _TowerOfHanoi2 = _interopRequireDefault(_TowerOfHanoi);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

console.log('Tower of Hanoi OOP');
var size = 25;
console.log("Data size: " + size);
var hanoi = new _TowerOfHanoi2.default(size);
runMeasurements(hanoi);

function runMeasurements(towerOfHanoi) {
  var hrStart = process.hrtime();
  let memStart = process.memoryUsage().rss;
  console.info('start:\n' + _util2.default.inspect(process.memoryUsage()));

  hanoi.playHanoi(2);

  console.info('end:\n' + _util2.default.inspect(process.memoryUsage()));
  let memEnd = process.memoryUsage().rss;
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
  console.info('Memory: ' + (memEnd - memStart));
}
//# sourceMappingURL=index.js.map
