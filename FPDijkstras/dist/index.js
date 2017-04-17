'use strict';

var _Dijkstras = require('./js/Dijkstras.js');

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

console.info('start' + _util2.default.inspect(process.memoryUsage()));
runDijkstrasAlgorithm();
console.info(_util2.default.inspect(process.memoryUsage()));

global.gc();
console.log(_util2.default.inspect(process.memoryUsage()));

function runDijkstrasAlgorithm() {
  let t0 = new Date();
  let hrStart = process.hrtime();

  var nodes = ["node1", "node2", "node3", "node4", "node5", "node6"];
  var edges = ["node1-node2=7", "node1-node4=8", "node1-node3=2", "node2-node4=6", "node3-node4=3", "node3-node5=4", "node4-node6=1", "node4-node5=5", "node5-node6=2"];
  var startNode = "node1";
  var endNode = "node6";
  console.log((0, _Dijkstras.dijkstrasFP)(nodes, edges, startNode, endNode));

  let hrEnd = process.hrtime(hrStart);
  let t1 = new Date();

  console.info(t1 - t0 + 'ms');
  console.info(hrEnd[1] / 1000000 + 'ms');
}
//# sourceMappingURL=index.js.map
