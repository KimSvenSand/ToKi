'use strict';

var _shellsortFunctions = require('./js/shellsort-functions');

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

var size = 100;
runMeasurements(createRandomArray(size));

function runMeasurements(array) {
  var hrStart = process.hrtime();
  console.info('start:\n' + _util2.default.inspect(process.memoryUsage()));

  (0, _shellsortFunctions.shellsort)(array);

  console.info('end:\n' + _util2.default.inspect(process.memoryUsage()));
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
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
