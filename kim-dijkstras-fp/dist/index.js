'use strict';

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

var nodes = ['node1', 'node2', 'node3'];
var edges = {
  'node1-node2': 4,
  'node1-node3': 5,
  'node3-node2': 3
};

var reversedName = 'node1-node2';
reversedName.replace(/(\w*)-(\w*)/, '$2-$1');

console.log(reversedName.replace(/(\w*)-(\w*)/, '$2-$1'));
//# sourceMappingURL=index.js.map
