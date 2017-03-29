'use strict';

var _BinarySearchTree = require('../dist/js/BinarySearchTree');

var _BinarySearchTree2 = _interopRequireDefault(_BinarySearchTree);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('BinarySearchTree', function () {
  function initiateTree(mTree) {
    mTree.insert(6);
    mTree.insert(20);
    mTree.insert(2);
    mTree.insert(9);
    mTree.insert(16);
    mTree.insert(24);
    mTree.insert(32);
    mTree.insert(3);
    mTree.insert(7);
  }

  describe('When initiated', function () {
    it('Tree should have correct structure', function () {
      var mTree = new _BinarySearchTree2.default(13);
      initiateTree(mTree);

      (0, _chai.expect)(mTree.getRoot().getRightTree().getComparable()).to.equal(20);
      (0, _chai.expect)(mTree.getRoot().getRightTree().getParent()).to.equal(mTree.getRoot());
      (0, _chai.expect)(mTree.getRoot().getLeftTree().getComparable()).to.equal(6);
      (0, _chai.expect)(mTree.getRoot().getLeftTree().getParent()).to.equal(mTree.getRoot());
      (0, _chai.expect)(mTree.getRoot().getLeftTree().getLeftTree().getComparable()).to.equal(2);
      (0, _chai.expect)(mTree.getRoot().getLeftTree().getLeftTree().getParent()).to.equal(mTree.getRoot().getLeftTree());
      (0, _chai.expect)(mTree.getRoot().getLeftTree().getRightTree().getComparable()).to.equal(9);
      (0, _chai.expect)(mTree.getRoot().getLeftTree().getRightTree().getParent()).to.equal(mTree.getRoot().getLeftTree());
      (0, _chai.expect)(mTree.getRoot().getRightTree().getLeftTree().getComparable()).to.equal(16);
      (0, _chai.expect)(mTree.getRoot().getRightTree().getLeftTree().getParent()).to.equal(mTree.getRoot().getRightTree());
      (0, _chai.expect)(mTree.getRoot().getRightTree().getRightTree().getComparable()).to.equal(24);
      (0, _chai.expect)(mTree.getRoot().getRightTree().getRightTree().getParent()).to.equal(mTree.getRoot().getRightTree());
      (0, _chai.expect)(mTree.getRoot().getRightTree().getRightTree().getRightTree().getComparable()).to.equal(32);
      (0, _chai.expect)(mTree.getRoot().getRightTree().getRightTree().getRightTree().getParent()).to.equal(mTree.getRoot().getRightTree().getRightTree());
      (0, _chai.expect)(mTree.getRoot().getLeftTree().getLeftTree().getRightTree().getComparable()).to.equal(3);
      (0, _chai.expect)(mTree.getRoot().getLeftTree().getLeftTree().getRightTree().getParent()).to.equal(mTree.getRoot().getLeftTree().getLeftTree());
      (0, _chai.expect)(mTree.getRoot().getLeftTree().getRightTree().getLeftTree().getComparable()).to.equal(7);
      (0, _chai.expect)(mTree.getRoot().getLeftTree().getRightTree().getLeftTree().getParent()).to.equal(mTree.getRoot().getLeftTree().getRightTree());
    });
  });

  describe('Insert(comparable)', function () {
    it('Should insert the correct values and return true or false', function () {
      var mTree = new _BinarySearchTree2.default(13);
      initiateTree(mTree);
      (0, _chai.expect)(mTree.getSize()).to.equal(10);
      (0, _chai.expect)(mTree.insert(9)).to.equal(false);

      mTree.insert(8);
      (0, _chai.expect)(mTree.getRoot().getLeftTree().getRightTree().getLeftTree().getRightTree().getComparable()).to.equal(8);
      (0, _chai.expect)(mTree.getRoot().getLeftTree().getRightTree().getLeftTree().getRightTree().getParent()).to.equal(mTree.getRoot().getLeftTree().getRightTree().getLeftTree());
      mTree.insert(1);
      (0, _chai.expect)(mTree.getRoot().getLeftTree().getLeftTree().getLeftTree().getComparable()).to.equal(1);
      (0, _chai.expect)(mTree.getRoot().getLeftTree().getLeftTree().getLeftTree().getParent()).to.equal(mTree.getRoot().getLeftTree().getLeftTree());
      mTree.insert(33);
      (0, _chai.expect)(mTree.getRoot().getRightTree().getRightTree().getRightTree().getRightTree().getComparable()).to.equal(33);
      (0, _chai.expect)(mTree.getRoot().getRightTree().getRightTree().getRightTree().getRightTree().getParent()).to.equal(mTree.getRoot().getRightTree().getRightTree().getRightTree());
    });
  });

  describe('findNode(comparable)', function () {
    it('should return node containing comparable. If comparable does not exists it should return null', function () {
      var mTree = new _BinarySearchTree2.default(13);
      initiateTree(mTree);

      (0, _chai.expect)(mTree.findNode(5)).to.equal(null);
      (0, _chai.expect)(mTree.findNode(13).getComparable()).to.equal(13);
      (0, _chai.expect)(mTree.findNode(2).getComparable()).to.equal(2);
      (0, _chai.expect)(mTree.findNode(32).getComparable()).to.equal(32);
      (0, _chai.expect)(mTree.findNode(20).getComparable()).to.equal(20);
    });
  });

  describe('inOrderTraversal()', function () {
    it('should return the correct array', function () {
      var mTree = new _BinarySearchTree2.default(13);
      initiateTree(mTree);

      var emptyTree = new _BinarySearchTree2.default(null);
      var expectedArray = [2, 3, 6, 7, 9, 13, 16, 20, 24, 32];

      (0, _chai.expect)(emptyTree.inOrderTraversal()).to.eql([]);
      (0, _chai.expect)(mTree.inOrderTraversal()).to.eql(expectedArray);
    });
  });
});
//# sourceMappingURL=binary-search-tree-test.js.map
