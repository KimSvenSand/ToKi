'use strict';

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _BinarySearchTree = require('./js/BinarySearchTree');

var _BinarySearchTree2 = _interopRequireDefault(_BinarySearchTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

var size = 1000;

runMeasurements(size);

function runMeasurements(size) {
  var hrStart = process.hrtime();
  var startMem = process.memoryUsage().heapUsed;
  console.info('start:\n' + _util2.default.inspect(process.memoryUsage()));
  var mTree = initiateTree(size);
  console.info('after insert:\n' + _util2.default.inspect(process.memoryUsage()));
  mTree.inOrderTraversal();
  console.info('after inOrderTraversal:\n' + _util2.default.inspect(process.memoryUsage()));
  mTree.findNode(Math.random() * size * 2 + 1);
  mTree.findNode(Math.random() * size * 2 + 1);
  mTree.findNode(Math.random() * size * 2 + 1);
  var endMem = process.memoryUsage().heapUsed;

  console.info('after 3x random findNode:\n' + _util2.default.inspect(process.memoryUsage()));
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
  console.info('Initial memory usage: ' + startMem);
  console.info('Final memory usage: ' + endMem);
  console.info(hrEnd[0] * 1000 + hrEnd[1] / 1000000);
  console.info(endMem - startMem);
}

function initiateTree(nrOfElements) {
  var mRandom = function () {
    return Math.floor(Math.random() * nrOfElements * 10 + 1);
  };
  var tree = new _BinarySearchTree2.default(mRandom());

  while (tree.getSize() < nrOfElements) {
    tree.insert(mRandom());
  }

  return tree;
}
//# sourceMappingURL=index.js.map
