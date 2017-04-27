'use strict';

var _Shellsort = require('./js/Shellsort');

var _Shellsort2 = _interopRequireDefault(_Shellsort);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

console.log('Shellsort OOP');
var size = 6000;
console.log("Data size: " + size);

var array = createRandomArray(size);
runMeasurements(array);
global.gc();

function runMeasurements(array) {
  var hrStart = process.hrtime();
  var memStart = process.memoryUsage().rss;
  console.info('start:\n' + _util2.default.inspect(process.memoryUsage()));

  var shellsort = new _Shellsort2.default();
  shellsort.sort(array);

  console.info('end:\n' + _util2.default.inspect(process.memoryUsage()));
  var memEnd = process.memoryUsage().rss;
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
  console.log("Memory: " + (memEnd - memStart));
}

function createRandomArray(size) {
  var getRandom = function () {
    return Math.floor(Math.random() * size * 2 + 1);
  };
  var randomArray = [];

  for (var i = 0; i < size; i++) {
    randomArray.push(getRandom());
  }

  return randomArray;
}
//# sourceMappingURL=index.js.map
