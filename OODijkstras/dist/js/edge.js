'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
class Edge {
  constructor(endPoint, weight) {
    this.endPoint = endPoint;
    this.weight = weight;
  }

  getWeight() {
    return this.weight;
  }

  getConnection() {
    return this.endPoint;
  }
}
exports.default = Edge;
//# sourceMappingURL=edge.js.map
