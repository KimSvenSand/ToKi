'use strict';

var _towerOfHanoiFunctions = require('./js/tower-of-hanoi-functions');

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

var size = 22;
var hanoiPegs = (0, _towerOfHanoiFunctions.buildTower)(size, []).concat([[], []]);
runMeasurements(hanoiPegs);

function runMeasurements(hanoiPegs) {
  var hrStart = process.hrtime();
  console.info('start:\n' + _util2.default.inspect(process.memoryUsage()));

  (0, _towerOfHanoiFunctions.hanoi)(hanoiPegs, 0, 2, 1);

  console.info('end:\n' + _util2.default.inspect(process.memoryUsage()));
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
}
//# sourceMappingURL=index.js.map
