'use strict';

var _BinarySearchTree = require('../dist/js/BinarySearchTree');

var _BinarySearchTree2 = _interopRequireDefault(_BinarySearchTree);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('BinarySearchTree', function () {
  var treeArray = [13, 6, 24, 2, 3, 7, 9, 16, 20, 32];
  var BST = new _BinarySearchTree2.default();
  BST.insertMany(treeArray);
  var BST2 = new _BinarySearchTree2.default();
  var expectedResult = 0;
  var input = 0;

  describe('insert', function () {
    it('inserts a number thats already in the tree, so should return false', function () {
      input = 9;
      expectedResult = false;
      (0, _chai.expect)(BST.insert(input)).to.equal(expectedResult);
    });
  });

  describe('insert', function () {
    it('Inserts a number that is not in the tree. Should return true', function () {
      input = 8;
      expectedResult = true;
      (0, _chai.expect)(BST.insert(input)).to.equal(expectedResult);
    });
  });

  describe('insert', function () {
    it('Inserts a number that is not in the tree. Should return true', function () {
      input = 1;
      expectedResult = true;
      (0, _chai.expect)(BST.insert(input)).to.equal(expectedResult);
    });
  });

  describe('insert', function () {
    it('Inserts a number that is not in the tree. Should return true', function () {
      input = 33;
      expectedResult = true;
      (0, _chai.expect)(BST.insert(input)).to.equal(expectedResult);
    });
  });

  describe('findNode', function () {
    it('should return empty node since the node isnt in the tree', function () {
      input = 5;
      expectedResult = "Key:null\nParentNode:null\nLeftNode:null\nRightNode:null";
      (0, _chai.expect)(BST.findNode(input).toString()).to.equal(expectedResult);
    });
  });

  describe('findNode', function () {
    it('should return the node with key 13, to not get all the links to the whole tree, I use a toString function', function () {
      input = 13;
      expectedResult = "Key:13\nParentNode:null\nLeftNode:6\nRightNode:24";

      (0, _chai.expect)(BST.findNode(input).toString()).to.equal(expectedResult);
    });
  });

  describe('findNode', function () {
    it('should return the node with key 2, to not get all the links to the whole tree, I use a toString function', function () {
      input = 2;
      expectedResult = "Key:2\nParentNode:6\nLeftNode:1\nRightNode:3";

      (0, _chai.expect)(BST.findNode(input).toString()).to.equal(expectedResult);
    });
  });

  describe('findNode', function () {
    it('should return the node with key 32, to not get all the links to the whole tree, I use a toString function', function () {
      input = 32;
      expectedResult = "Key:32\nParentNode:24\nLeftNode:null\nRightNode:33";
      (0, _chai.expect)(BST.findNode(input).toString()).to.equal(expectedResult);
    });
  });

  describe('findNode', function () {
    it('should return the node with key 20, to not get all the links to the whole tree, I use a toString function', function () {
      input = 20;
      expectedResult = "Key:20\nParentNode:16\nLeftNode:null\nRightNode:null";

      (0, _chai.expect)(BST.findNode(input).toString()).to.equal(expectedResult);
    });
  });

  describe('inOrderTravelsal', function () {
    it("should return treeArray sorted", function () {
      expectedResult = [1, 2, 3, 6, 7, 8, 9, 13, 16, 20, 24, 32, 33];

      (0, _chai.expect)(BST.inOrderTraversal()).to.eql(expectedResult);
    });
  });

  describe('inOrderTravelsal in empty tree', function () {
    it("should return empty array", function () {
      expectedResult = [];

      (0, _chai.expect)(BST2.inOrderTraversal()).to.eql(expectedResult);
    });
  });
});
//# sourceMappingURL=bst_test.js.map
