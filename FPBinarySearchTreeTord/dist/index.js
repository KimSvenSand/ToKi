'use strict';

var _BinarySearchTree = require('./js/BinarySearchTree.js');

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

console.info("FP Tree search algorithms:");
var nrOfElements = 10000;
console.log("Number of elements: " + nrOfElements);
runBinarySearchTree(nrOfElements);

global.gc();

function runBinarySearchTree(nrOfElements) {
  var hrStart = process.hrtime();
  var startMem = process.memoryUsage().rss;
  console.info('start:\n' + _util2.default.inspect(process.memoryUsage()));
  let tree = (0, _BinarySearchTree.insertRandomValues)(nrOfElements, []);
  console.info('after insert:\n' + _util2.default.inspect(process.memoryUsage()));
  (0, _BinarySearchTree.inOrderTraversal)(tree, 0, []);
  console.info('after inOrderTraversal:\n' + _util2.default.inspect(process.memoryUsage()));
  (0, _BinarySearchTree.findNode)(Math.floor(Math.random() * nrOfElements * 10 + 1), tree, 0, 0);
  (0, _BinarySearchTree.findNode)(Math.floor(Math.random() * nrOfElements * 10 + 1), tree, 0, 0);
  (0, _BinarySearchTree.findNode)(Math.floor(Math.random() * nrOfElements * 10 + 1), tree, 0, 0);
  var endMem = process.memoryUsage().rss;
  console.info('after 3x random findNode:\n' + _util2.default.inspect(process.memoryUsage()));

  let hrEnd = process.hrtime(hrStart);
  console.info('Runtime: ' + hrEnd[0] + ' s and ' + hrEnd[1] / 1000000 + ' ms');
  console.info('Memory: ' + (endMem - startMem));
}
//# sourceMappingURL=index.js.map
