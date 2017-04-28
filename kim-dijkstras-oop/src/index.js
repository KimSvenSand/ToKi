import Graph from './js/Graph'
import Dijkstras from './js/Dijkstras'
import util from 'util'
'use strict'

var size = 1000;
var dijkstras = new Dijkstras();
var graph = createGraph(size);
runMeasurements(graph, dijkstras);

function runMeasurements(graph, dijkstras) {
  var hrStart = process.hrtime();
  console.info('start:\n' + util.inspect(process.memoryUsage()));

  var result = dijkstras.getShortestPath(graph.findNode('node' + 1), graph.findNode('node' + graph.getNrOfNodes()), graph);

  console.info('end:\n' + util.inspect(process.memoryUsage()));
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
}

function createGraph(size) {
  var getRandom = function() {
    return Math.floor((Math.random() * 100) + 1);
  }

  var graph = new Graph();
  if (size <= 0) {
    return graph;
  }
  graph.addNode('node' + 1);
  if (size <= 1) {
    return graph;
  }
  graph.addNode('node' + 2)
    .createEdge(getRandom(), graph.findNode('node' + 1));
  if (size <= 2) {
    return graph;
  }

  for (var i = 3; i <= size; i++) {
    graph.addNode('node' + i)
      .createEdge(getRandom(), graph.findNode('node' + (i - 1)))
      .createEdge(getRandom(), graph.findNode('node' + (i - 2)));
  }

  return graph;
}
