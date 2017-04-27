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
  let t0 = new Date();
  let hrStart = process.hrtime();

  var tree = [13, 6, 24, 2, 3, 7, 9, 16, 20, 32];
  tree = (0, _BinarySearchTree.createTree)(tree);
  /*let inputArray = [];
  var treelength = 0;
  while(treelength < 10){
    var tree = insert(Math.floor((Math.random()*100)+1),tree);
    iterations++
  }*/

  //console.log("Unsorted: "+tree);
  //console.log("Sorted: "+inOrderTraversal(tree,0,[]));

  let hrEnd = process.hrtime(hrStart);
  let t1 = new Date();

  console.info(t1 - t0 + 'ms');
  console.info(hrEnd[1] / 1000000 + 'ms');
}
//# sourceMappingURL=index.js.map
