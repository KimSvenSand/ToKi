'use strict';

var _Shellsort = require('./js/Shellsort.js');

var _Shellsort2 = _interopRequireDefault(_Shellsort);

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
  var shellsort = new _Shellsort2.default();
  var gapSequence = shellsort.getGapSequence();
  console.log(gapSequence);
  var array = [];
  var nrInArray = 10;
  for (var i = 0; i < nrInArray; i++) {
    array.push(Math.floor(Math.random() * 100 + 1));
  }
  console.log(array);
  console.log(shellsort.shellsort(array, gapSequence));

  let t0 = new Date();
  let hrStart = process.hrtime();

  let hrEnd = process.hrtime(hrStart);
  let t1 = new Date();

  console.info(t1 - t0 + 'ms');
  console.info(hrEnd[1] / 1000000 + 'ms');
}
//# sourceMappingURL=index.js.map
