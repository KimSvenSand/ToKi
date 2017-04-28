'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _edge = require('./edge.js');

var _edge2 = _interopRequireDefault(_edge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

class Node {
  constructor(name) {
    this.name = name;
    this.connectingEdges = [];
    this.visited = false;
    this.dist = Number.MAX_SAFE_INTEGER;
    this.path = "";
  }

  getEdges() {
    return this.connectingEdges;
  }

  getName() {
    return this.name;
  }

  getIfVisited() {
    return this.visited;
  }

  getDist() {
    return this.dist;
  }

  getPath() {
    return this.path;
  }

  setVisited(visited) {
    this.visited = visited;
  }

  setDist(newDist) {
    this.dist = newDist;
  }

  setPath(newPath) {
    this.path = newPath;
  }

  addEdge(to, weight) {
    this.connectingEdges.push(new _edge2.default(to, weight));
  }

}
exports.default = Node;
//# sourceMappingURL=node.js.map
