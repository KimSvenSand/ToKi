'use strict';

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _treeFunctions = require('./js/tree-functions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

console.log('Search tree algorithms FP');
var size = 10000;
console.log("Data size: " + size);

runMeasurements(size);
global.gc();

function runMeasurements(size) {
  var hrStart = process.hrtime();
  var startMem = process.memoryUsage().rss;
  console.info('start:\n' + _util2.default.inspect(process.memoryUsage()));
  var tree = createRandomTree(size);
  console.info('after insert:\n' + _util2.default.inspect(process.memoryUsage()));
  (0, _treeFunctions.inOrderTraversal)(tree);
  console.info('after inOrderTraversal:\n' + _util2.default.inspect(process.memoryUsage()));
  (0, _treeFunctions.findNode)(getRandom(), tree);
  (0, _treeFunctions.findNode)(getRandom(), tree);
  (0, _treeFunctions.findNode)(getRandom(), tree);
  var endMem = process.memoryUsage().rss;
  console.info('after 3x random findNode:\n' + _util2.default.inspect(process.memoryUsage()));

  let hrEnd = process.hrtime(hrStart);
  console.info('Runtime: ' + hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
  console.info('Memory: ' + (endMem - startMem));
}

function createRandomTree(size, tree) {
  if (size <= 0) {
    return tree;
  } else {
    var random = getRandom();
    if ((0, _treeFunctions.findNode)(random, tree)) {
      return createRandomTree(size, (0, _treeFunctions.insert)(random, tree));
    } else {
      return createRandomTree(size - 1, (0, _treeFunctions.insert)(random, tree));
    }
  }
}

function getRandom() {
  return Math.floor(Math.random() * size * 10 + 1);
}
//# sourceMappingURL=index.js.map
