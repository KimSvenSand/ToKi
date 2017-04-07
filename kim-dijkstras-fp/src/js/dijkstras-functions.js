'use strict'

function dijkstras(nodes, edges, startNode, endNode, path, dist) {
  if (!path && !dist) {
    var path = [];
    var dist = fillArrayWithElement(nodes.length, Infinity);
    dist[indexOf(startNode)] = 0;
    return dijkstras(graph, startNode, endNode, path, dist);
  }
  var distCopy = dist.slice();
  var pathCopy = path.slice();

  if (nodes.length <= 1 || nodes.includes(endNode)) {
    return {
      'path': [],
      'dist': 0
    }
  } else {
    var pathPart = dijkstras(nodes.slice(1), edges, nodes.slice(1)[indexOfSmallest(dist.slice(1))], endNode);
    return {
      'path': pathPart.path.concat(startNode),
      'dist': pathPart.dist + getEdgeWeight(startNode + '-' + pathPart.path[0]);
    }
  }
}

function getEdgeWeight(name, edges) {
  if (edges[name]) {
    return edges[name];
  } else {
    return edges[name.replace(/(\w*)-(\w*)/, '$2-$1')];
  }
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
    return [ element ];
  } else {
    return fillArrayWithElement(size - 1, element).concat([ element ]);
  }
}

export {
  fillArrayWithElement,
  indexOfSmallest
}
