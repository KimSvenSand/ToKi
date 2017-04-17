'use strict';

var _BinarySearchTree = require('../dist/js/BinarySearchTree');

var _chai = require('chai');

describe('BinarySearchTree', function () {
  var inputArray = [3, 2, 5, 1, 4];
  var expectedResult = 0;
  var input = 0;

  describe('createTree', function () {
    it("should return a binary tree in array form", function () {
      expectedResult = [3, 2, 5, 1,, 4];

      (0, _chai.expect)((0, _BinarySearchTree.createTree)(inputArray)).to.eql(expectedResult);
    });
  });

  describe('createTree if empty', function () {
    it("should return a empty binary tree in array form", function () {
      expectedResult = [];

      (0, _chai.expect)((0, _BinarySearchTree.createTree)([])).to.eql(expectedResult);
    });
  });

  describe('insert', function () {
    it("should return old array with new number inserted in it", function () {
      input = 10;
      expectedResult = [3, 2, 5, 1,, 4, 10];
      var tree = (0, _BinarySearchTree.createTree)(inputArray);
      (0, _chai.expect)((0, _BinarySearchTree.insert)(input, tree)).to.eql(expectedResult);
    });
  });

  describe('insert with number already in it', function () {
    it("should return old array", function () {
      input = 3;
      expectedResult = [3, 2, 5, 1,, 4];
      var tree = (0, _BinarySearchTree.createTree)(inputArray);
      console.log(expectedResult);
      (0, _chai.expect)((0, _BinarySearchTree.insert)(input, tree)).to.eql(expectedResult);
    });
  });
  describe('findNode', function () {
    it('should return node key 1', function () {
      input = 1;
      expectedResult = 1;
      var tree = (0, _BinarySearchTree.createTree)(inputArray);

      (0, _chai.expect)((0, _BinarySearchTree.findNode)(input, tree, 0, 0)).to.equal(expectedResult);
    });
  });

  describe('findNode', function () {
    it('should return undefined key', function () {
      input = 10;
      expectedResult = undefined;
      var tree = (0, _BinarySearchTree.createTree)(inputArray);

      (0, _chai.expect)((0, _BinarySearchTree.findNode)(input, tree, 0, 0)).to.equal(expectedResult);
    });
  });

  describe('inOrderTravelsal', function () {
    it("should return an ordered array", function () {
      expectedResult = [1, 2, 3, 4, 5];
      var tree = (0, _BinarySearchTree.createTree)(inputArray);

      (0, _chai.expect)((0, _BinarySearchTree.inOrderTraversal)(tree, 0, [])).to.eql(expectedResult);
    });
  });
  describe('empty inOrderTravelsal', function () {
    it("should return an empty array", function () {
      expectedResult = [];

      (0, _chai.expect)((0, _BinarySearchTree.inOrderTraversal)([], 0, [])).to.eql(expectedResult);
    });
  });
});
//# sourceMappingURL=bst_test.js.map
