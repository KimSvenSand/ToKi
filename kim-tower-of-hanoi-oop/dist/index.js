'use strict';

var _TowerOfHanoi = require('./js/TowerOfHanoi');

var _TowerOfHanoi2 = _interopRequireDefault(_TowerOfHanoi);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

var size = 20;
var hanoi = new _TowerOfHanoi2.default(size);
runMeasurements(hanoi);

function runMeasurements(towerOfHanoi) {
  var hrStart = process.hrtime();
  console.info('start:\n' + _util2.default.inspect(process.memoryUsage()));

  hanoi.playHanoi(2);

  console.info('end:\n' + _util2.default.inspect(process.memoryUsage()));
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
}
//# sourceMappingURL=index.js.map
