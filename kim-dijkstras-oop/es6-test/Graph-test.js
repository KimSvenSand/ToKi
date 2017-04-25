import Graph from '../dist/js/Graph'
import Node from '../dist/js/Node'
import Edge from '../dist/js/Edge'
import Dijkstras from '../dist/js/Dijkstras'
import { expect } from 'chai'
'use strict'

describe('Graph', function() {
  function createTestGraph() {
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

    return graph;
  }

  describe('findNode(name)', function() {
    it('returns the node with the name name', function() {
      var graph = new Graph();
      graph.addNode('1');
      graph.addNode('2');
      graph.addNode('3');

      expect(graph.findNode('1')).to.eql(new Node('1'));
      expect(graph.findNode('2')).to.eql(new Node('2'));
      expect(graph.findNode('3')).to.eql(new Node('3'));
    });
  });

  describe('Node.findEdge(neighbor)', function() {
    it('should return wanted edge', function() {
      var graph = createTestGraph();
      expect(graph.findNode('4').findEdge('6')).to.eql(new Edge(1, graph.findNode('4'), graph.findNode('6')));
    });
  });

  describe('dijkstras(startNode, endNode)', function() {
    it('should return shortest path from startNode to endNode', function() {
      var dijkstras = new Dijkstras();
      var graph = createTestGraph();
      var expectedPath = {
        'path': [ graph.findNode('1'), graph.findNode('3'), graph.findNode('4') ],
        'dist': 6
      };
      var result = dijkstras.getShortestPath(graph.findNode('1'), graph.findNode('6'), graph);
      expect(result).to.eql(expectedPath);

      expectedPath = {
        'path': [ graph.findNode('1'), graph.findNode('3') ],
        'dist': 5
      }
      result = dijkstras.getShortestPath(graph.findNode('1'), graph.findNode('4'), graph);
      expect(result).to.eql(expectedPath);

      expectedPath = {
        'path': [ graph.findNode('2'), graph.findNode('4'), graph.findNode('6') ],
        'dist': 9
      }
      result = dijkstras.getShortestPath(graph.findNode('2'), graph.findNode('5'), graph);
      expect(result).to.eql(expectedPath);

      expectedPath = {
        'path': [],
        'dist': 0
      }
      result = dijkstras.getShortestPath(graph.findNode('1'), graph.findNode('1'), graph);
      expect(result).to.eql(expectedPath);

      graph = new Graph();
      result = dijkstras.getShortestPath();
      expect(result).to.eql(expectedPath);
    });
  });
})
