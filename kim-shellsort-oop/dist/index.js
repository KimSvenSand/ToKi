'use strict';

var _Shellsort = require('./js/Shellsort');

var _Shellsort2 = _interopRequireDefault(_Shellsort);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

var size = 10000000;

var array = createRandomArray(size);
runMeasurements(array);

function runMeasurements(array) {
  var hrStart = process.hrtime();
  console.info('start:\n' + _util2.default.inspect(process.memoryUsage()));

  var shellsort = new _Shellsort2.default();
  shellsort.sort(array);

  console.info('end:\n' + _util2.default.inspect(process.memoryUsage()));
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
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
