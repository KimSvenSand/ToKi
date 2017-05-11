'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
class Dijkstras {
  getShortestPath(startNode, endNode, graph) {
    var dist = [];
    var path = [];
    var unvisited = [];
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
    var unvisited = graph.getNodes().slice();

    for (var i = 0; i < graph.getNodes().length; i++) {
      dist[graph.getNodes()[i].getName()] = Infinity;
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
exports.default = Dijkstras;
//# sourceMappingURL=Dijkstras.js.map
