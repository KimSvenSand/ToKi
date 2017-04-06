import Graph from './js/Graph'
import util from 'util'
'use strict'

var graph = new Graph();
graph.addNode('1');
graph.addNode('2')
  .createEdge(7, graph.findNode('1'));
graph.addNode('3')
  .createEdge(2, graph.findNode('1'));
graph.addNode('4')
  .createEdge(8, graph.findNode('1'))
  .createEdge(6, graph.findNode('2'))
  .createEdge(3, graph.findNode('3'));
graph.addNode('5')
  .createEdge(4, graph.findNode('3'))
  .createEdge(5, graph.findNode('4'));
graph.addNode('6')
  .createEdge(1, graph.findNode('4'))
  .createEdge(2, graph.findNode('5'));

var result = graph.dijkstras(graph.findNode('1'), graph.findNode('6'));
console.log(result);
