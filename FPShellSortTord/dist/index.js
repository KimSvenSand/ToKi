'use strict';

var _Shellsort = require('./js/Shellsort.js');

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

console.info('start' + _util2.default.inspect(process.memoryUsage()));
runShellsort();
console.info(_util2.default.inspect(process.memoryUsage()));

global.gc();
console.log(_util2.default.inspect(process.memoryUsage()));

function runShellsort() {
  let t0 = new Date();
  let hrStart = process.hrtime();

  var gapSequence = (0, _Shellsort.getGapSequence)(2, []);
  var array = (0, _Shellsort.random)(10, []);

  console.log("Unsorted:");
  console.log(array);
  console.log("Sorted:");
  console.log((0, _Shellsort.shellsort)(array, gapSequence));

  let hrEnd = process.hrtime(hrStart);
  let t1 = new Date();

  console.info(t1 - t0 + 'ms');
  console.info(hrEnd[1] / 1000000 + 'ms');
}
//# sourceMappingURL=index.js.map
