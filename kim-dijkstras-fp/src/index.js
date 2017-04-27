import { dijkstras, getNeighborEdges, getNeighborNodes } from './js/dijkstras-functions'
import util from 'util';
'use strict';

console.log('Dijkstras OOP');
let size = 15;
console.log("Data size: " + size);
let graph = createGraph(size);
runMeasurements(graph)
global.gc();

function runMeasurements(graph, size) {
  let hrStart = process.hrtime();
  let memStart = process.memoryUsage().rss;
  console.info('start:\n' + util.inspect(process.memoryUsage()));

  let result = dijkstras(graph.nodes, graph.edges, 'node1', 'node' + size);

  console.info('end:\n' + util.inspect(process.memoryUsage()));
  let memEnd = process.memoryUsage().rss;
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
  console.info('Memory: ' + (memEnd - memStart));
}

function createGraph(size) {
  if (size === 0) {
    return {
      'nodes': [],
      'edges': {}
    }
  } else if (size === 1) {
    return {
      'nodes': [ 'node' + size ],
      'edges': {}
    }
  } else if (size === 2) {
    return {
      'nodes': ['node1', 'node2'],
      'edges': {
      'node1-node2': getRandom()
      }
    }
  } else {
    let graph = createGraph(size - 1);
    let edges = Object.assign({}, graph.edges);
    edges['node' + size + '-node' + (size - 1)] = getRandom();
    edges['node' + size + '-node' + (size - 2)] = getRandom();
    return {
      'nodes': graph.nodes.concat(['node' + size]),
      'edges': edges
    }
  }
}

function getRandom() {
  return Math.floor((Math.random() * 100) + 1);
}
