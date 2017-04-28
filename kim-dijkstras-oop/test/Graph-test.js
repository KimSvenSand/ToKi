'use strict';

var _Graph = require('../dist/js/Graph');

var _Graph2 = _interopRequireDefault(_Graph);

var _Node = require('../dist/js/Node');

var _Node2 = _interopRequireDefault(_Node);

var _Edge = require('../dist/js/Edge');

var _Edge2 = _interopRequireDefault(_Edge);

var _Dijkstras = require('../dist/js/Dijkstras');

var _Dijkstras2 = _interopRequireDefault(_Dijkstras);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

describe('Graph', function () {
  function createTestGraph() {
    var graph = new _Graph2.default();
    graph.addNode('1');
    graph.addNode('2').createEdge(7, graph.findNode('1'));
    graph.addNode('3').createEdge(2, graph.findNode('1'));
    graph.addNode('4').createEdge(8, graph.findNode('1')).createEdge(6, graph.findNode('2')).createEdge(3, graph.findNode('3'));
    graph.addNode('5').createEdge(4, graph.findNode('3')).createEdge(5, graph.findNode('4'));
    graph.addNode('6').createEdge(1, graph.findNode('4')).createEdge(2, graph.findNode('5'));

    return graph;
  }

  describe('findNode(name)', function () {
    it('returns the node with the name name', function () {
      var graph = new _Graph2.default();
      graph.addNode('1');
      graph.addNode('2');
      graph.addNode('3');

      (0, _chai.expect)(graph.findNode('1')).to.eql(new _Node2.default('1'));
      (0, _chai.expect)(graph.findNode('2')).to.eql(new _Node2.default('2'));
      (0, _chai.expect)(graph.findNode('3')).to.eql(new _Node2.default('3'));
    });
  });

  describe('Node.findEdge(neighbor)', function () {
    it('should return wanted edge', function () {
      var graph = createTestGraph();
      (0, _chai.expect)(graph.findNode('4').findEdge('6')).to.eql(new _Edge2.default(1, graph.findNode('4'), graph.findNode('6')));
    });
  });

  describe('dijkstras(startNode, endNode)', function () {
    it('should return shortest path from startNode to endNode', function () {
      var dijkstras = new _Dijkstras2.default();
      var graph = createTestGraph();
      var expectedPath = {
        'path': [graph.findNode('1'), graph.findNode('3'), graph.findNode('4')],
        'dist': 6
      };
      var result = dijkstras.getShortestPath(graph.findNode('1'), graph.findNode('6'), graph);
      (0, _chai.expect)(result).to.eql(expectedPath);

      expectedPath = {
        'path': [graph.findNode('1'), graph.findNode('3')],
        'dist': 5
      };
      result = dijkstras.getShortestPath(graph.findNode('1'), graph.findNode('4'), graph);
      (0, _chai.expect)(result).to.eql(expectedPath);

      expectedPath = {
        'path': [graph.findNode('2'), graph.findNode('4'), graph.findNode('6')],
        'dist': 9
      };
      result = dijkstras.getShortestPath(graph.findNode('2'), graph.findNode('5'), graph);
      (0, _chai.expect)(result).to.eql(expectedPath);

      expectedPath = {
        'path': [],
        'dist': 0
      };
      result = dijkstras.getShortestPath(graph.findNode('1'), graph.findNode('1'), graph);
      (0, _chai.expect)(result).to.eql(expectedPath);

      graph = new _Graph2.default();
      result = dijkstras.getShortestPath();
      (0, _chai.expect)(result).to.eql(expectedPath);
    });
  });
});
//# sourceMappingURL=Graph-test.js.map
