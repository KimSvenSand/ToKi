import { indexOfSmallest, getEdgeWeight, getNeighborEdges, getNeighborNodes, dijkstras } from '../dist/js/dijkstras-functions'
import { expect } from 'chai'
'use strict'

function createGraph() {
  var nodes = ['node1', 'node2', 'node3', 'node4', 'node5', 'node6'];
  var edges = {
    'node1-node2': 7,
    'node1-node3': 2,
    'node1-node4': 8,
    'node2-node4': 6,
    'node3-node4': 3,
    'node3-node5': 4,
    'node4-node5': 5,
    'node4-node6': 1,
    'node5-node6': 2
  }

  return {
    'nodes': nodes,
    'edges': edges
  }
}

describe('indexOfSmallest(array)', function() {
  it('should return index of the smallest element in array', function() {
    var expected = 7;
    var array = [7, 4, 8, 9, 2, 3, 14, 1, 6, 11];

    expect(indexOfSmallest(array)).to.equal(expected);
  });
});

describe('getEdgeWeight(name, edges)', function() {
  it('Should return weight of a given edge', function() {
    var graph = createGraph();

    expect(getEdgeWeight('node4-node6', graph.edges)).to.equal(1);
    expect(getEdgeWeight('node6-node4', graph.edges)).to.equal(1);
    expect(getEdgeWeight('node1-node1', graph.edges)).to.equal(-1);
  });
});

describe('getNeighborEdges(node, edges)', function() {
  it('should return neighboring edges to node', function() {
    var graph = createGraph();
    var expected = ['node1-node4', 'node1-node3', 'node1-node2'];

    expect(getNeighborEdges('node1', graph.edges)).to.eql(expected);
  });
});

describe('getNeighborNodes(node, edges)', function() {
  it('should return neighboring nodes to node', function() {
    var graph = createGraph();
    var expected = ['node4', 'node3', 'node2'];

    expect(getNeighborNodes('node1', graph.edges)).to.eql(expected);
  });
});

describe('dijkstras(nodes, edges, startNode, endNode, neighborNodes)', function() {
  it('to return shortestPath from startNode to endNode', function() {
    var graph = createGraph();
    var expected = {
      path: [ 'node1', 'node3', 'node4' ],
      dist: 6
    }
    expect(dijkstras(graph.nodes, graph.edges, 'node1', 'node6')).to.eql(expected);

    expected = {
      path: [ 'node2', 'node4', 'node6' ],
      dist: 9
    }
    expect(dijkstras(graph.nodes, graph.edges, 'node2', 'node5')).to.eql(expected);

    expected = {
      path: [],
      dist: 0
    }
    expect(dijkstras(graph.nodes, graph.edges, 'node1', 'node1')).to.eql(expected);

    graph = {
      'nodes': [],
      'edges': {}
    }
    expect(dijkstras(graph.nodes, graph.edges, 'node2', 'node5')).to.eql(expected);
  });
});
