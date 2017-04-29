'use strict';

var _Dijkstras = require('./js/Dijkstras.js');

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

console.log("OOP Dijkstras algorithm:");
var nrOfElements = 5;
console.log("nrOfElements: " + nrOfElements);
runDijkstrasAlgorithm(nrOfElements);

global.gc();

function runDijkstrasAlgorithm(nrOfElements) {
  var hrStart = process.hrtime();
  var memStart = process.memoryUsage().rss;
  console.info('start:\n' + _util2.default.inspect(process.memoryUsage()));
  var [nodes, edges] = makeGraph([], [], nrOfElements);
  console.log(nodes);
  console.log("");
  console.log(edges);
  var startNode = "node1";
  var endNode = "node" + nrOfElements;
  console.log((0, _Dijkstras.dijkstras)(nodes, edges, startNode, endNode));

  console.info('end:\n' + _util2.default.inspect(process.memoryUsage()));
  var memEnd = process.memoryUsage().rss;
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
  console.log("Memory: " + (memEnd - memStart));
}

function makeGraph(nodes, edges, nrOfElements) {
  var nodesCopy = nodes.slice(),
      edgesCopy = edges.slice();
  if (nrOfElements > 1) {
    var [nodesCopy, edgesCopy] = makeGraph(nodes, edges, nrOfElements - 1);
  }
  nodesCopy.push("node" + nrOfElements);
  if (nrOfElements > 1) {
    edgesCopy.push("node" + nrOfElements + "-node" + (nrOfElements - 1) + "=" + Math.floor(Math.random() * 10 + 1));
    if (nrOfElements > 2) {
      edgesCopy.push("node" + nrOfElements + "-node" + (nrOfElements - 2) + "=" + Math.floor(Math.random() * 10 + 1));
    }
  }
  return [nodesCopy, edgesCopy];
}
//# sourceMappingURL=index.js.map
