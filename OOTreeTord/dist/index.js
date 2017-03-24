'use strict';

var _BinarySearchTree = require('./js/BinarySearchTree.js');

var _BinarySearchTree2 = _interopRequireDefault(_BinarySearchTree);

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
  let treeArray = [3, 2, 5, 1, 4];
  let BST = new _BinarySearchTree2.default(treeArray);
  let t0 = new Date();
  let hrStart = process.hrtime();

  console.log(BST);

  let hrEnd = process.hrtime(hrStart);
  let t1 = new Date();

  console.info(t1 - t0 + 'ms');
  console.info(hrEnd[1] / 1000000 + 'ms');
}
//# sourceMappingURL=index.js.map
