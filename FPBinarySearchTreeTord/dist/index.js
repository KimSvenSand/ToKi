'use strict';

var _BinarySearchTree = require('./js/BinarySearchTree.js');

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

console.info('start' + _util2.default.inspect(process.memoryUsage()));
runBinarySearchTree();
console.info(_util2.default.inspect(process.memoryUsage()));

global.gc();
console.log(_util2.default.inspect(process.memoryUsage()));

function runBinarySearchTree() {
  var tree = [];
  let inputArray = [];
  var iterations = 0;
  while (iterations < 10) {
    var tree = (0, _BinarySearchTree.insert)(Math.floor(Math.random() * 100 + 1), tree);
    iterations++;
  }
  console.log("Unsorted: " + tree);
  console.log("Sorted: " + (0, _BinarySearchTree.inOrderTraversal)(tree, 0, []));

  let t0 = new Date();
  let hrStart = process.hrtime();

  let hrEnd = process.hrtime(hrStart);
  let t1 = new Date();

  console.info(t1 - t0 + 'ms');
  console.info(hrEnd[1] / 1000000 + 'ms');
}
//# sourceMappingURL=index.js.map
