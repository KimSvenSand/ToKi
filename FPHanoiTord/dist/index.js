'use strict';

var _Hanoi = require('./js/Hanoi.js');

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

console.log("FP Tower of Hanoi algorithm:");
var nrOfElements = 10;
runTowerOfHanoi(nrOfElements);

global.gc();

function runTowerOfHanoi(nrOfElements) {
  var hrStart = process.hrtime();
  var memStart = process.memoryUsage().rss;
  console.info('start:\n' + _util2.default.inspect(process.memoryUsage()));

  var startPeg = (0, _Hanoi.createStartPeg)(nrOfElements, []);
  (0, _Hanoi.hanoi)(nrOfElements, startPeg, [], [], 0);

  console.info('end:\n' + _util2.default.inspect(process.memoryUsage()));
  var memEnd = process.memoryUsage().rss;
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
  console.log("Memory: " + (memEnd - memStart));
}
//# sourceMappingURL=index.js.map
