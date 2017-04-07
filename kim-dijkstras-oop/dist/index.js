'use strict';

var _Graph = require('./js/Graph');

var _Graph2 = _interopRequireDefault(_Graph);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

var size = 10000;
var graph = createGraph(size);
runMeasurements(graph);

function runMeasurements(graph) {
  var hrStart = process.hrtime();
  console.info('start:\n' + _util2.default.inspect(process.memoryUsage()));

  var result = graph.dijkstras(graph.findNode('node' + 1), graph.findNode('node' + graph.getNrOfNodes()));

  console.info('end:\n' + _util2.default.inspect(process.memoryUsage()));
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
}

function createGraph(size) {
  var getRandom = function () {
    return Math.floor(Math.random() * 100 + 1);
  };

  var graph = new _Graph2.default();
  if (size <= 0) {
    return graph;
  }
  graph.addNode('node' + 1);
  if (size <= 1) {
    return graph;
  }
  graph.addNode('node' + 2).createEdge(getRandom(), graph.findNode('node' + 1));
  if (size <= 2) {
    return graph;
  }

  for (var i = 3; i <= size; i++) {
    graph.addNode('node' + i).createEdge(getRandom(), graph.findNode('node' + (i - 1))).createEdge(getRandom(), graph.findNode('node' + (i - 2)));
  }

  return graph;
}
//# sourceMappingURL=index.js.map
