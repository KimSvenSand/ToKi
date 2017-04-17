'use strict';

var _Dijkstras = require('../dist/js/Dijkstras');

var _chai = require('chai');

describe('Dijkstras Algrithm', function () {
  var expectedResult = 0;

  describe('Dijkstras algorithm 1nd test', function () {
    it("Should return the length between Node1 and Node6 which is 6", function () {
      expectedResult = 6;
      var nodes = ["node1", "node2", "node3", "node4", "node5", "node6"];
      var edges = ["node1-node2=7", "node1-node4=8", "node1-node3=2", "node2-node4=6", "node3-node4=3", "node3-node5=4", "node4-node6=1", "node4-node5=5", "node5-node6=2"];
      var startNode = "node1";
      var endNode = "node6";

      (0, _chai.expect)((0, _Dijkstras.dijkstras)(nodes, edges, startNode, endNode)).to.eql(expectedResult);
    });
  });

  describe('Dijkstras algorithm 2nd test', function () {
    it("Should return the length between Node1 and Node4 which is 5", function () {
      expectedResult = 5;
      var nodes = ["node1", "node2", "node3", "node4", "node5", "node6"];
      var edges = ["node1-node2=7", "node1-node4=8", "node1-node3=2", "node2-node4=6", "node3-node4=3", "node3-node5=4", "node4-node6=1", "node4-node5=5", "node5-node6=2"];
      var startNode = "node1";
      var endNode = "node4";

      (0, _chai.expect)((0, _Dijkstras.dijkstras)(nodes, edges, startNode, endNode)).to.eql(expectedResult);
    });
  });

  describe('Dijkstras algorithm 3rd test', function () {
    it("Should return the length between Node2 and Node5 which is 9", function () {
      expectedResult = 9;
      var nodes = ["node1", "node2", "node3", "node4", "node5", "node6"];
      var edges = ["node1-node2=7", "node1-node4=8", "node1-node3=2", "node2-node4=6", "node3-node4=3", "node3-node5=4", "node4-node6=1", "node4-node5=5", "node5-node6=2"];
      var startNode = "node2";
      var endNode = "node5";

      (0, _chai.expect)((0, _Dijkstras.dijkstras)(nodes, edges, startNode, endNode)).to.eql(expectedResult);
    });
  });

  describe('Dijkstras algorithm 4rd test', function () {
    it("Should return 0 since startNode and endNode is the same", function () {
      expectedResult = 0;
      var nodes = ["node1", "node2", "node3", "node4", "node5", "node6"];
      var edges = ["node1-node2=7", "node1-node4=8", "node1-node3=2", "node2-node4=6", "node3-node4=3", "node3-node5=4", "node4-node6=1", "node4-node5=5", "node5-node6=2"];
      var startNode = "node1";
      var endNode = "node1";

      (0, _chai.expect)((0, _Dijkstras.dijkstras)(nodes, edges, startNode, endNode)).to.eql(expectedResult);
    });
  });

  describe('Dijkstras algorithm 5rd test', function () {
    it("Should return 0 since there is nothing comming to the function", function () {
      expectedResult = 0;
      var nodes = [];
      var edges = [];
      var startNode = "";
      var endNode = "";

      (0, _chai.expect)((0, _Dijkstras.dijkstras)(nodes, edges, startNode, endNode)).to.eql(expectedResult);
    });
  });
});
//# sourceMappingURL=bst_test.js.map
