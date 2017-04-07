'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function dijkstras(nodes, edges, startNode, endNode, neighborNodes) {
  if (!neighborNodes) {
    return dijkstras(nodes, edges, startNode, endNode, getNeighborNodes(startNode, edges));
  }

  if (nodes.length <= 1 || startNode === endNode || neighborNodes.length <= 0) {
    //Return empty path and dist 0
    return {
      'path': [],
      'dist': 0
    };
    //Else
  } else {
    var newNodes = nodes.filter(function (node) {
      return node !== startNode;
    });

    var paths = neighborNodes.map(function (neighbor) {
      var newNeighborNodes = getNeighborNodes(neighbor, edges).filter(function (node) {
        return node !== startNode && nodes.includes(node);
      });

      return dijkstras(newNodes, edges, neighbor, endNode, newNeighborNodes);
    });

    var pathsDists = paths.map(function (path) {
      if (path.path.length <= 0) {
        return path.dist + getEdgeWeight(startNode + '-' + endNode, edges);
      } else {
        return path.dist + getEdgeWeight(startNode + '-' + path.path[0], edges);
      }
    });
    var shortestPath = paths[indexOfSmallest(pathsDists)];

    return {
      'path': [startNode].concat(shortestPath.path),
      'dist': pathsDists[indexOfSmallest(pathsDists)]
    };
  }
}

function getNeighborNodes(node, edges) {
  var keys = getNeighborEdges(node, edges);

  return keys.map(function (key) {
    return key.replace(node, '').replace('-', '');
  });
}

function getNeighborEdges(node, edges) {
  if (!Array.isArray(edges)) {
    var keys = Object.keys(edges);
  } else {
    keys = edges.slice();
  }

  if (keys.length <= 0) {
    return [];
  } else {
    if (keys[0].includes(node)) {
      return getNeighborEdges(node, keys.slice(1)).concat(keys[0]);
    } else {
      return getNeighborEdges(node, keys.slice(1));
    }
  }
}

function getEdgeWeight(name, edges) {
  if (edges[name]) {
    return edges[name];
  } else {
    return edges[name.replace(/(\w*)-(\w*)/, '$2-$1')];
  }
  return 0;
}

//Returns index of smallest element in array
function indexOfSmallest(array) {
  var arrayCopy = array.slice();

  if (array.length <= 1) {
    return 0;
  } else {
    var tmpIndex = indexOfSmallest(array.slice(1)) + 1;
    if (array[0] < array[tmpIndex]) {
      return 0;
    } else {
      return tmpIndex;
    }
  }
}

function fillArrayWithElement(size, element) {
  if (size <= 1) {
    return [element];
  } else {
    return fillArrayWithElement(size - 1, element).concat([element]);
  }
}

exports.fillArrayWithElement = fillArrayWithElement;
exports.indexOfSmallest = indexOfSmallest;
exports.getNeighborEdges = getNeighborEdges;
exports.getNeighborNodes = getNeighborNodes;
exports.dijkstras = dijkstras;
//# sourceMappingURL=dijkstras-functions.js.map
