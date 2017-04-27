'use strict';

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _BinarySearchTree = require('./js/BinarySearchTree');

var _BinarySearchTree2 = _interopRequireDefault(_BinarySearchTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

console.log('Search tree algorithms OOP');
var size = 10000;
console.log("Data size: " + size);

runMeasurements(size);
global.gc();

function runMeasurements(size) {
  var hrStart = process.hrtime();
  var startMem = process.memoryUsage().rss;
  console.info('start:\n' + _util2.default.inspect(process.memoryUsage()));
  var mTree = new _BinarySearchTree2.default(Math.floor(Math.random() * size * 10 + 1));
  mTree.initiateRandomTree(size);
  console.info('after insert:\n' + _util2.default.inspect(process.memoryUsage()));
  mTree.inOrderTraversal();
  console.info('after inOrderTraversal:\n' + _util2.default.inspect(process.memoryUsage()));
  mTree.findNode(Math.random() * size * 2 + 1);
  mTree.findNode(Math.random() * size * 2 + 1);
  mTree.findNode(Math.random() * size * 2 + 1);
  var endMem = process.memoryUsage().rss;
  console.info('after 3x random findNode:\n' + _util2.default.inspect(process.memoryUsage()));

  let hrEnd = process.hrtime(hrStart);
  console.info('Runtime: ' + hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
  console.info('Memory: ' + (endMem - startMem));
}
//# sourceMappingURL=index.js.map
