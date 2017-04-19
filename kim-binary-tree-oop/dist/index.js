'use strict';

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _BinarySearchTree = require('./js/BinarySearchTree');

var _BinarySearchTree2 = _interopRequireDefault(_BinarySearchTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

var size = 100;

runMeasurements(size);

function runMeasurements(size) {
  var hrStart = process.hrtime();
  console.info('start:\n' + _util2.default.inspect(process.memoryUsage()));
  var mTree = initiateTree(size);
  console.info('after insert:\n' + _util2.default.inspect(process.memoryUsage()));
  mTree.inOrderTraversal();
  console.info('end:\n' + _util2.default.inspect(process.memoryUsage()));
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
}

function initiateTree(nrOfElements) {
  var mRandom = function () {
    return Math.floor(Math.random() * nrOfElements * 2 + 1);
  };
  var tree = new _BinarySearchTree2.default(mRandom());

  while (tree.getSize() < nrOfElements) {
    tree.insert(mRandom());
  }

  return tree;
}
//# sourceMappingURL=index.js.map
