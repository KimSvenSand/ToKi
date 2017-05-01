'use strict';

var _Shellsort = require('./js/Shellsort.js');

var _Shellsort2 = _interopRequireDefault(_Shellsort);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

console.log("OOP Shellsort algorithm:");
var nrOfElements = 6000;
console.log("nrOfElements: " + nrOfElements);
runShellsort(nrOfElements);

global.gc();

function runShellsort(nrOfElements) {
  var hrStart = process.hrtime();
  var memStart = process.memoryUsage().rss;
  console.info('start:\n' + _util2.default.inspect(process.memoryUsage()));

  var shellsort = new _Shellsort2.default();
  var gapSequence = shellsort.getGapSequence();
  var array = shellsort.insertRandomValues(nrOfElements);
  shellsort.runShellsort(array, gapSequence);

  console.info('end:\n' + _util2.default.inspect(process.memoryUsage()));
  var memEnd = process.memoryUsage().rss;
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
  console.log("Memory: " + (memEnd - memStart));
}
//# sourceMappingURL=index.js.map
