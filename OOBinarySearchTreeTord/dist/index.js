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
  let t0 = new Date();
  let hrStart = process.hrtime();

  let treeArray = [13, 6, 24, 2, 3, 7, 9, 16, 20, 32, 1];
  let BST = new _BinarySearchTree2.default(treeArray);
  /*var inserted = 0;
  while(inserted < 10){
    if(BST.insert(Math.floor((Math.random()*100)+1))){
      inserted++;
    }
   }*/
  console.log(BST.findNode(1).toString());

  let hrEnd = process.hrtime(hrStart);
  let t1 = new Date();

  console.info(t1 - t0 + 'ms');
  console.info(hrEnd[1] / 1000000 + 'ms');
}
//# sourceMappingURL=index.js.map
