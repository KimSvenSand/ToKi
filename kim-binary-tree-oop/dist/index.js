'use strict';

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _BinarySearchTree = require('./js/BinarySearchTree');

var _BinarySearchTree2 = _interopRequireDefault(_BinarySearchTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

var mTree = new _BinarySearchTree2.default(13);
mTree.insert(6);
mTree.insert(20);
mTree.insert(2);
mTree.insert(9);
mTree.insert(16);
mTree.insert(24);
mTree.insert(32);
mTree.insert(3);
mTree.insert(7);

console.log(mTree.inOrderTraversal());
console.log(mTree.findNode(5));
console.log(mTree.findNode(6).getComparable());
//# sourceMappingURL=index.js.map
