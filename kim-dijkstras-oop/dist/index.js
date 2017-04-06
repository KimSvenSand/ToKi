'use strict';

var _Graph = require('./js/Graph');

var _Graph2 = _interopRequireDefault(_Graph);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

var graph = new _Graph2.default();
graph.addNode('1');
graph.addNode('2').createEdge(7, graph.findNode('1'));
graph.addNode('3').createEdge(2, graph.findNode('1'));
graph.addNode('4').createEdge(8, graph.findNode('1')).createEdge(6, graph.findNode('2')).createEdge(3, graph.findNode('3'));
graph.addNode('5').createEdge(4, graph.findNode('3')).createEdge(5, graph.findNode('4'));
graph.addNode('6').createEdge(1, graph.findNode('4')).createEdge(2, graph.findNode('5'));

var result = graph.dijkstras(graph.findNode('1'), graph.findNode('6'));
console.log(result);
//# sourceMappingURL=index.js.map
