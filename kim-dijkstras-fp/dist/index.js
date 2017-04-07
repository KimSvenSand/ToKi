'use strict';

var _dijkstrasFunctions = require('./js/dijkstras-functions');

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

var nodes = ['node1', 'node2', 'node3', 'node4', 'node5', 'node6'];
var edges = {
  'node1-node2': 7,
  'node1-node3': 2,
  'node1-node4': 8,
  'node2-node4': 6,
  'node3-node4': 3,
  'node3-node5': 4,
  'node4-node5': 5,
  'node4-node6': 1,
  'node5-node6': 2
};

//console.log(getNeighborNodes('node4', edges));
console.log((0, _dijkstrasFunctions.dijkstras)(nodes, edges, 'node1', 'node4'));
//# sourceMappingURL=index.js.map
