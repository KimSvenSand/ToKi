'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
class Dijkstras {
  dijkstras(graph, edges, startNode, endNode) {
    if (startNode != endNode) {
      var dist = [];
      var path = [];
      for (var i = 0; i < graph.length; i++) {
        dist[i] = Number.MAX_SAFE_INTEGER;
        path[i] = "";
      }
      dist[graph.indexOf(startNode)] = 0;
      path[graph.indexOf(startNode)] = "";
      var unvisitedNodes = graph.slice();
      var currentNode = 0;
      var currentValue = Number.MAX_SAFE_INTEGER;
      var currentFromNode = "";
      var currentToNode = "";
      var currentEdgeLength = 0;
      while (unvisitedNodes.length != 0 || unvisitedNodes.indexOf(graph.indexOf(endNode)) != -1) {
        for (var i = 0; i < graph.length; i++) {
          if (dist[i] < currentValue && unvisitedNodes.indexOf(graph[i]) != -1) {
            currentNode = i;
            currentValue = dist[i];
          }
        }

        unvisitedNodes.splice(unvisitedNodes.indexOf(graph[currentNode]), 1);
        for (var i = 0; i < edges.length; i++) {
          currentFromNode = edges[i].slice(0, edges[i].indexOf("-"));
          currentToNode = edges[i].slice(edges[i].indexOf("-") + 1, edges[i].indexOf("="));
          currentEdgeLength = edges[i].slice(edges[i].indexOf("=") + 1, edges[i].length);
          if (currentFromNode == graph[currentNode] && dist[graph.indexOf(currentToNode)] > dist[currentNode] + parseInt(currentEdgeLength)) {
            dist[graph.indexOf(currentToNode)] = parseInt(dist[currentNode]) + parseInt(currentEdgeLength);
            path[graph.indexOf(currentToNode)] = path[currentNode] + "," + currentFromNode + "-" + currentToNode + "=" + currentEdgeLength;
          } else if (currentToNode == graph[currentNode] && dist[graph.indexOf(currentFromNode)] > dist[currentNode] + parseInt(currentEdgeLength)) {
            dist[graph.indexOf(currentFromNode)] = parseInt(dist[currentNode]) + parseInt(currentEdgeLength);
            path[graph.indexOf(currentToNode)] = path[currentNode] + "," + currentToNode + "-" + currentFromNode + "=" + currentEdgeLength;
          }
        }
        currentValue = Number.MAX_SAFE_INTEGER;
      }
      return dist[graph.indexOf(endNode)];
    } else {
      return 0;
    }
  }
}
exports.default = Dijkstras;
//# sourceMappingURL=Dijkstras.js.map
