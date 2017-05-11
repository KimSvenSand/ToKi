'use strict';

var _shellsortFunctions = require('./js/shellsort-functions');

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

console.log('Shellsort FP');
var size = 10;
console.log("Data size: " + size);
runMeasurements(createRandomArray(size));
global.gc();

function runMeasurements(array) {
  var hrStart = process.hrtime();
  var memStart = process.memoryUsage().rss;
  console.info('start:\n' + _util2.default.inspect(process.memoryUsage()));

  console.log((0, _shellsortFunctions.shellsort)(array));

  console.info('end:\n' + _util2.default.inspect(process.memoryUsage()));
  var memEnd = process.memoryUsage().rss;
  let hrEnd = process.hrtime(hrStart);
  console.info('Runtime: ' + hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
  console.info('Memory: ' + (memEnd - memStart));
}

function createRandomArray(size) {
  var getRandom = function () {
    return Math.floor(Math.random() * size * 2 + 1);
  };

  var randomArray = [];
  if (randomArray.length >= size) {
    return randomArray;
  } else {
    return randomArray.concat(getRandom()).concat(createRandomArray(size - 1));
  }
}
//# sourceMappingURL=index.js.map
