'use strict'

function dijkstras(nodes, edges, startNode, endNode, neighborNodes) {
  if (!neighborNodes) {
    return dijkstras(nodes, edges, startNode, endNode, getNeighborNodes(startNode, edges));
  }

  if (nodes.length <= 1 || startNode === endNode || neighborNodes.length <= 0) {
    //Return empty path and dist 0
    return {
      'path': [],
      'dist': 0
    }
  } else {
    var newNodes = nodes.filter(function(node) {
      return node !== startNode;
    });

    var paths = neighborNodes.map(function(neighbor) {
      var newNeighborNodes = getNeighborNodes(neighbor, edges).filter(function(node) {
        return node !== startNode && nodes.includes(node);
      });

      return dijkstras(newNodes, edges, neighbor, endNode, newNeighborNodes);
    });

    var pathsDists = paths.map(function(path) {
      if (path.path.length <= 0) {
        return path.dist + getEdgeWeight(startNode + '-' + endNode, edges);
      } else {
        if (path.dist >= 0) {
          return path.dist + getEdgeWeight(startNode + '-' + path.path[0], edges);
        } else {
          return -1;
        }

      }
    });
    var shortestPath = paths[indexOfSmallest(pathsDists)];

    return {
      'path': [ startNode ].concat(shortestPath.path),
      'dist': pathsDists[indexOfSmallest(pathsDists)]
    }
  }
}

function getNeighborNodes(node, edges) {
  var keys = getNeighborEdges(node, edges);

  return keys.map(function(key) {
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
    if (keys[0].replace(/(\w*)-(\w*)/, '$1') === node || keys[0].replace(/(\w*)-(\w*)/, '$2') === node) {
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
    var reversedName = name.replace(/(\w*)-(\w*)/, '$2-$1');
    if (edges[reversedName]) {
      return edges[reversedName];
    } else {
      return -1;
    }
  }
}

//Returns index of smallest element in array
function indexOfSmallest(array) {
  if (array.length <= 1) {
    return 0;
  } else {
    var tmpIndex = indexOfSmallest(array.slice(1)) + 1;
    if (array[0] < array[tmpIndex] || array[tmpIndex] < 0) {
      return 0;
    } else {
      return tmpIndex;
    }
  }
}

export {
  indexOfSmallest,
  getEdgeWeight,
  getNeighborEdges,
  getNeighborNodes,
  dijkstras
}
