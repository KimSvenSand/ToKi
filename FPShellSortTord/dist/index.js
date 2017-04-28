'use strict';

var _Shellsort = require('./js/Shellsort.js');

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

console.log("FP Shellsort algorithm:");
var nrOfElements = 1000;
console.log("Number of elements: " + nrOfElements);
runShellsort(nrOfElements);

global.gc();

function runShellsort(nrOfElements) {
  var hrStart = process.hrtime();
  var memStart = process.memoryUsage().rss;
  console.info('start:\n' + _util2.default.inspect(process.memoryUsage()));

  var gapSequence = (0, _Shellsort.getGapSequence)(10, []);
  var array = (0, _Shellsort.random)(nrOfElements, []);
  var sortedArray = (0, _Shellsort.shellsortContainer)(array, gapSequence);

  console.info('end:\n' + _util2.default.inspect(process.memoryUsage()));
  var memEnd = process.memoryUsage().rss;
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
  console.log("Memory: " + (memEnd - memStart));
}
//# sourceMappingURL=index.js.map
