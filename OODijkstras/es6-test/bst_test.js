import Dijkstras from '../dist/js/Dijkstras';
import { expect } from 'chai';

describe('Dijkstras Algrithm', function() {
  var dijkstras = new Dijkstras();
  var expectedResult = 0;

  describe('Dijkstras algorithm 1nd test', function() {
    it("Should return the length between Node1 and Node6 which is 6", function() {
      expectedResult = 6;
      var nodes=["node1", "node2", "node3", "node4", "node5", "node6"];
      dijkstras.addNodes(nodes);
      var edges=["node1-node2=7", "node1-node4=8", "node1-node3=2", "node2-node4=6", "node3-node4=3", "node3-node5=4", "node4-node6=1", "node4-node5=5", "node5-node6=2"];
      dijkstras.addEdges(edges);
      var startNode = "node1";
      var endNode = "node6";

      expect(dijkstras.runDijkstrasAlgorithm(startNode,endNode)).to.eql(expectedResult);
    });
  });

  describe('Dijkstras algorithm 2nd test', function() {
    it("Should return the length between Node1 and Node4 which is 5", function() {
      dijkstras = new Dijkstras();
      expectedResult = 5;
      var nodes=["node1", "node2", "node3", "node4", "node5", "node6"];
      dijkstras.addNodes(nodes);
      var edges=["node1-node2=7", "node1-node4=8", "node1-node3=2", "node2-node4=6", "node3-node4=3", "node3-node5=4", "node4-node6=1", "node4-node5=5", "node5-node6=2"];
      dijkstras.addEdges(edges);
      var startNode = "node1";
      var endNode = "node4";

      expect(dijkstras.runDijkstrasAlgorithm(startNode,endNode)).to.eql(expectedResult);
    });
  });

  describe('Dijkstras algorithm 3rd test', function() {
    it("Should return the length between Node2 and Node5 which is 9", function() {
      dijkstras = new Dijkstras();
      expectedResult = 9;
      var nodes=["node1", "node2", "node3", "node4", "node5", "node6"];
      dijkstras.addNodes(nodes);
      var edges=["node1-node2=7", "node1-node4=8", "node1-node3=2", "node2-node4=6", "node3-node4=3", "node3-node5=4", "node4-node6=1", "node4-node5=5", "node5-node6=2"];
      dijkstras.addEdges(edges);
      var startNode = "node2";
      var endNode = "node5";

      expect(dijkstras.runDijkstrasAlgorithm(startNode,endNode)).to.eql(expectedResult);
    });
  });

  describe('Dijkstras algorithm 4rd test', function() {
    it("Should return 0 since startNode and endNode is the same", function() {
      dijkstras = new Dijkstras();
      expectedResult = 0;
      var nodes=["node1", "node2", "node3", "node4", "node5", "node6"];
      dijkstras.addNodes(nodes);
      var edges=["node1-node2=7", "node1-node4=8", "node1-node3=2", "node2-node4=6", "node3-node4=3", "node3-node5=4", "node4-node6=1", "node4-node5=5", "node5-node6=2"];
      dijkstras.addEdges(edges);
      var startNode = "node1";
      var endNode = "node1";

      expect(dijkstras.runDijkstrasAlgorithm(startNode,endNode)).to.eql(expectedResult);
    });
  });

  describe('Dijkstras algorithm 5rd test', function() {
    it("Should return 0 since there is nothing comming to the function", function() {
      dijkstras = new Dijkstras();
      expectedResult = 0;
      var nodes=[];
      var edges=[];
      var startNode = "";
      var endNode = "";

      expect(dijkstras.runDijkstrasAlgorithm(startNode,endNode)).to.eql(expectedResult);
    });
  });

});
