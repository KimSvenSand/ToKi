'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Node = require('./Node');

var _Node2 = _interopRequireDefault(_Node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

class Graph {
  constructor(nodes) {
    if (nodes) {
      this._nodes = nodes;
    } else {
      this._nodes = [];
    }
  }

  getNrOfNodes() {
    return this._nodes.length;
  }

  findNode(name) {
    var node = null;
    if (this._nodes[0].getName() === name) {
      return this._nodes[0];
    }
    for (var i = 1; i < this._nodes.length && this._nodes[i - 1].getName() !== name; i++) {
      node = this._nodes[i];
    }
    return node;
  }

  addNode(name) {
    var node = new _Node2.default(name);
    this._nodes.push(node);

    return node;
  }

  dijkstras(startNode, endNode) {
    var dist = [];
    var path = [];
    var unvisited = this._nodes.slice();
    var visited = [];
    var current;
    var currentIndex;
    var currentNeighbors;
    var resultingPath = {
      'path': [],
      'dist': 0
    };

    if (startNode === undefined || endNode === undefined) {
      return resultingPath;
    } else if (startNode === endNode) {
      return resultingPath;
    }

    for (var i = 0; i < this._nodes.length; i++) {
      dist[this._nodes[i].getName()] = Infinity;
    }
    path[startNode.getName()] = [];
    dist[startNode.getName()] = 0;

    while (unvisited.length > 0 && unvisited.includes(endNode)) {
      current = unvisited[0];
      currentIndex = 0;
      for (var i = 0; i < unvisited.length; i++) {
        if (dist[unvisited[i].getName()] < dist[current.getName()]) {
          current = unvisited[i];
          currentIndex = i;
        }
      }
      currentNeighbors = current.getNeighbors().filter(function (neighbor) {
        return unvisited.includes(neighbor);
      });

      unvisited.splice(currentIndex, 1);
      for (var i = 0; i < currentNeighbors.length; i++) {
        var tmp = dist[current.getName()] + current.findEdge(currentNeighbors[i]).getWeight();
        if (tmp < dist[currentNeighbors[i].getName()]) {
          dist[currentNeighbors[i].getName()] = tmp;
          if (path[currentNeighbors[i].getName()] === undefined || !path[currentNeighbors[i].getName()].includes(current)) {
            path[currentNeighbors[i].getName()] = path[current.getName()].slice().concat(current);
          }
        }
      }
    }

    return {
      'path': path[endNode.getName()],
      'dist': dist[endNode.getName()]
    };
  }
}
exports.default = Graph;
//# sourceMappingURL=Graph.js.map
