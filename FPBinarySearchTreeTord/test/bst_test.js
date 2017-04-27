'use strict';

var _BinarySearchTree = require('../dist/js/BinarySearchTree');

var _chai = require('chai');

describe('BinarySearchTree', function () {
  var inputArray = [13, 6, 24, 2, 3, 7, 9, 16, 20, 32];
  var expectedResult = 0;
  var tree = (0, _BinarySearchTree.createTree)(inputArray);
  var input = 0;

  describe('createTree', function () {
    it("should return a binary tree in array form", function () {
      expectedResult = [13, 6, 24, 2, 7, 16, 32,, 3,, 9,, 20];
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
    it('inserts a number thats already in the tree, should return full array without new number', function () {
      input = 9;
      expectedResult = [13, 6, 24, 2, 7, 16, 32,, 3,, 9,, 20];
      (0, _chai.expect)((0, _BinarySearchTree.insert)(input, 0, tree)).to.eql(expectedResult);
    });
  });

  describe('insert', function () {
    it('inserts a number thats already in the tree, should return full array with new number 8', function () {
      input = 8;
      expectedResult = [13, 6, 24, 2, 7, 16, 32,, 3,, 9,, 20,,,,,,,,, 8];
      (0, _chai.expect)((0, _BinarySearchTree.insert)(input, 0, tree)).to.eql(expectedResult);
    });
  });

  describe('insert', function () {
    it('inserts a number thats already in the tree, should return full array with new number 1', function () {
      input = 1;

      expectedResult = [13, 6, 24, 2, 7, 16, 32, 1, 3,, 9,, 20];
      (0, _chai.expect)((0, _BinarySearchTree.insert)(input, 0, tree)).to.eql(expectedResult);
    });
  });

  describe('insert', function () {
    it('inserts a number thats already in the tree, should return full array with new number 33', function () {
      input = 33;

      expectedResult = [13, 6, 24, 2, 7, 16, 32,, 3,, 9,, 20,, 33];
      (0, _chai.expect)((0, _BinarySearchTree.insert)(input, 0, tree)).to.eql(expectedResult);
    });
  });

  describe('findNode', function () {
    it('should return undefined since the node isnt in the tree', function () {
      input = 5;

      expectedResult = undefined;
      (0, _chai.expect)((0, _BinarySearchTree.findNode)(input, tree, 0, 0)).to.equal(expectedResult);
    });
  });

  describe('findNode', function () {
    it('should return the key 13', function () {
      input = 13;

      expectedResult = 13;
      (0, _chai.expect)((0, _BinarySearchTree.findNode)(input, tree, 0, 0)).to.equal(expectedResult);
    });
  });

  describe('findNode', function () {
    it('should return key 2', function () {
      input = 2;

      expectedResult = 2;
      (0, _chai.expect)((0, _BinarySearchTree.findNode)(input, tree, 0, 0)).to.equal(expectedResult);
    });
  });

  describe('findNode', function () {
    it('should return key 32', function () {
      input = 32;

      expectedResult = 32;
      (0, _chai.expect)((0, _BinarySearchTree.findNode)(input, tree, 0, 0)).to.equal(expectedResult);
    });
  });

  describe('findNode', function () {
    it('should return key 20', function () {
      input = 20;

      expectedResult = 20;
      (0, _chai.expect)((0, _BinarySearchTree.findNode)(input, tree, 0, 0)).to.equal(expectedResult);
    });
  });

  describe('inOrderTravelsal', function () {
    it("should return an ordered array", function () {

      expectedResult = [2, 3, 6, 7, 9, 13, 16, 20, 24, 32];
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
