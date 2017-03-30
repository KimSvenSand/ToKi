'use strict';

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _treeFunctions = require('./js/tree-functions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

var size = 100;

var hrStart = process.hrtime();
console.info('start:\n' + _util2.default.inspect(process.memoryUsage()));
runMeasurements(size);
console.info('end:\n' + _util2.default.inspect(process.memoryUsage()));
let hrEnd = process.hrtime(hrStart);
console.info(hrEnd[1] / 1000000 + 'ms');

function runMeasurements(size) {
  var tree = createRandomTree(size);
  console.info('after insert:\n' + _util2.default.inspect(process.memoryUsage()));
  (0, _treeFunctions.inOrderTraversal)(tree);
  console.info('after traversal:\n' + _util2.default.inspect(process.memoryUsage()));
}

function createRandomTree(size, tree) {
  var mRandom = function () {
    return Math.floor(Math.random() * size * 2 + 1);
  };

  if ((0, _treeFunctions.inOrderTraversal)(tree).length >= size) {
    return tree;
  } else {
    return createRandomTree(size, (0, _treeFunctions.insert)(mRandom(), tree));
  }
}
//# sourceMappingURL=index.js.map
