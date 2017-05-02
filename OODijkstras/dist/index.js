'use strict';

var _Dijkstras = require('./js/Dijkstras.js');

var _Dijkstras2 = _interopRequireDefault(_Dijkstras);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

console.log("OOP Dijkstras algorithm:");
var nrOfElements = 20;
console.log("nrOfElements: " + nrOfElements);
runDijkstrasAlgorithm(nrOfElements);
global.gc();

function runDijkstrasAlgorithm(nrOfElements) {
  var hrStart = process.hrtime();
  var memStart = process.memoryUsage().rss;
  console.info('start:\n' + _util2.default.inspect(process.memoryUsage()));

  var dijk = new _Dijkstras2.default();

  var nodes = [];
  var edges = [];
  for (var i = 1; i <= nrOfElements; i++) {
    nodes.push("node" + i);
    if (i > 1) {
      edges.push("node" + i + "-node" + (i - 1) + "=" + Math.floor(Math.random() * 10 + 1));
      if (i > 2) {
        edges.push("node" + i + "-node" + (i - 2) + "=" + Math.floor(Math.random() * 10 + 1));
      }
    }
  }
  dijk.addNodes(nodes);
  dijk.addEdges(edges);
  var startNode = "node1";
  var endNode = "node" + nrOfElements;
  dijk.runDijkstrasAlgorithm(startNode, endNode);

  console.info('end:\n' + _util2.default.inspect(process.memoryUsage()));
  var memEnd = process.memoryUsage().rss;
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
  console.log("Memory: " + (memEnd - memStart));
}
//# sourceMappingURL=index.js.map
