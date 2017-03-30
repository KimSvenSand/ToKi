'use strict';

var _BinarySearchTree = require('../dist/js/BinarySearchTree');

var _BinarySearchTree2 = _interopRequireDefault(_BinarySearchTree);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('BinarySearchTree', function () {
  var treeArray = [3, 2, 5, 1, 4];
  var emptyTree = [];
  var BST = new _BinarySearchTree2.default(treeArray);
  var BST2 = new _BinarySearchTree2.default(emptyTree);
  var expectedResult = 0;
  var input = 0;

  describe('inOrderTravelsal', function () {
    it("should return treeArray sorted", function () {
      expectedResult = [1, 2, 3, 4, 5];

      (0, _chai.expect)(BST.inOrderTraversal()).to.eql(expectedResult);
    });
  });

  describe('inOrderTravelsal in empty tree', function () {
    it("should return empty array", function () {
      expectedResult = [];

      (0, _chai.expect)(BST2.inOrderTraversal()).to.eql(expectedResult);
    });
  });

  describe('findNode', function () {
    it('should return a node with key 1', function () {
      input = 1;
      expectedResult = 1;

      (0, _chai.expect)(BST.findNode(input)).to.equal(expectedResult);
    });
  });

  describe('findNode', function () {
    it('should return a node with unknown key', function () {
      input = 10;
      expectedResult = undefined;

      (0, _chai.expect)(BST.findNode(input)).to.equal(expectedResult);
    });
  });
  describe('insert', function () {
    it('should return true', function () {
      input = 6;
      expectedResult = true;
      (0, _chai.expect)(BST.insert(input)).to.equal(expectedResult);
    });
  });

  describe('insert', function () {
    it('should return true', function () {
      input = 6;
      expectedResult = false;
      (0, _chai.expect)(BST.insert(input)).to.equal(expectedResult);
    });
  });

  describe('inOrderTravelsal in empty tree', function () {
    it("should return empty array", function () {
      expectedResult = [1, 2, 3, 4, 5, 6];

      (0, _chai.expect)(BST.inOrderTraversal()).to.eql(expectedResult);
    });
  });
});
//# sourceMappingURL=bst_test.js.map
