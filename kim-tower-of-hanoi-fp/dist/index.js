'use strict';

var _towerOfHanoiFunctions = require('./js/tower-of-hanoi-functions');

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

console.log('Tower of Hanoi OOP');
var size = 25;
console.log("Data size: " + size);
let hanoiPegs = (0, _towerOfHanoiFunctions.buildTower)(size, []).concat([[], []]);
runMeasurements(hanoiPegs);
global.gc();

function runMeasurements(hanoiPegs) {
  let hrStart = process.hrtime();
  let memStart = process.memoryUsage().rss;
  console.info('start:\n' + _util2.default.inspect(process.memoryUsage()));

  (0, _towerOfHanoiFunctions.hanoi)(hanoiPegs, 0, 2, 1);

  console.info('end:\n' + _util2.default.inspect(process.memoryUsage()));
  let memEnd = process.memoryUsage().rss;
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
  console.info('Memory: ' + (memEnd - memStart));
}
//# sourceMappingURL=index.js.map
