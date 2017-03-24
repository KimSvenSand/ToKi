'use strict';

var _binarySearchTree = require('../dist/js/binarySearchTree');

var _binarySearchTree2 = _interopRequireDefault(_binarySearchTree);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('BinarySearchTree', function () {
  var treeArray = [3, 2, 5, 1, 4];
  var BST = new _binarySearchTree2.default(treeArray);
  var expectedResult = 0;
  var input = 0;
  console.log(BST);

  /*describe('inOrderTravelsal', function() {
    it("should return treeArray sorted", function() {
      expectedResult = [1,2,3,4,5];
        expect(BST.inOrderTraversal()).to.equal(expectedResult);
    });
  });*/

  /*describe('findNode', function() {
    it('should return a node with key 1', function() {
      input = 1;
      expectedResult = new BinarySearchTree([1]);
        expect(BST.findNode(input)).to.equal(expectedResult);
    });
  });*/

  describe('insert', function () {
    it('should return true', function () {
      input = 6;
      expectedResult = true;
      (0, _chai.expect)(BST.insert(input)).to.equal(expectedResult);
    });
  });
});
//# sourceMappingURL=bst_test.js.map
