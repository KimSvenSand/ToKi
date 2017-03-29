import BinarySearchTree from '../dist/js/BinarySearchTree';
import { expect } from 'chai';

describe('BinarySearchTree', function() {
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

  describe('When initiated', function() {
    it('Tree should have correct structure', function() {
      var mTree = new BinarySearchTree(13);
      initiateTree(mTree);

      expect(mTree.getRoot().getRightTree().getComparable()).to.equal(20);
      expect(mTree.getRoot().getRightTree().getParent()).to.equal(mTree.getRoot());
      expect(mTree.getRoot().getLeftTree().getComparable()).to.equal(6);
      expect(mTree.getRoot().getLeftTree().getParent()).to.equal(mTree.getRoot());
      expect(mTree.getRoot().getLeftTree().getLeftTree().getComparable()).to.equal(2);
      expect(mTree.getRoot().getLeftTree().getLeftTree().getParent()).to.equal(mTree.getRoot().getLeftTree());
      expect(mTree.getRoot().getLeftTree().getRightTree().getComparable()).to.equal(9);
      expect(mTree.getRoot().getLeftTree().getRightTree().getParent()).to.equal(mTree.getRoot().getLeftTree());
      expect(mTree.getRoot().getRightTree().getLeftTree().getComparable()).to.equal(16);
      expect(mTree.getRoot().getRightTree().getLeftTree().getParent()).to.equal(mTree.getRoot().getRightTree());
      expect(mTree.getRoot().getRightTree().getRightTree().getComparable()).to.equal(24);
      expect(mTree.getRoot().getRightTree().getRightTree().getParent()).to.equal(mTree.getRoot().getRightTree());
      expect(mTree.getRoot().getRightTree().getRightTree().getRightTree().getComparable()).to.equal(32);
      expect(mTree.getRoot().getRightTree().getRightTree().getRightTree().getParent()).to.equal(mTree.getRoot().getRightTree().getRightTree());
      expect(mTree.getRoot().getLeftTree().getLeftTree().getRightTree().getComparable()).to.equal(3);
      expect(mTree.getRoot().getLeftTree().getLeftTree().getRightTree().getParent()).to.equal(mTree.getRoot().getLeftTree().getLeftTree());
      expect(mTree.getRoot().getLeftTree().getRightTree().getLeftTree().getComparable()).to.equal(7);
      expect(mTree.getRoot().getLeftTree().getRightTree().getLeftTree().getParent()).to.equal(mTree.getRoot().getLeftTree().getRightTree());
    });
  });

  describe('Insert(comparable)', function() {
    it('Should insert the correct values and return true or false', function() {
      var mTree = new BinarySearchTree(13);
      initiateTree(mTree);
      expect(mTree.getSize()).to.equal(10);
      expect(mTree.insert(9)).to.equal(false);

      mTree.insert(8);
      expect(mTree.getRoot().getLeftTree().getRightTree().getLeftTree().getRightTree().getComparable()).to.equal(8);
      expect(mTree.getRoot().getLeftTree().getRightTree().getLeftTree().getRightTree().getParent()).to.equal(mTree.getRoot().getLeftTree().getRightTree().getLeftTree());
      mTree.insert(1);
      expect(mTree.getRoot().getLeftTree().getLeftTree().getLeftTree().getComparable()).to.equal(1);
      expect(mTree.getRoot().getLeftTree().getLeftTree().getLeftTree().getParent()).to.equal(mTree.getRoot().getLeftTree().getLeftTree());
      mTree.insert(33);
      expect(mTree.getRoot().getRightTree().getRightTree().getRightTree().getRightTree().getComparable()).to.equal(33);
      expect(mTree.getRoot().getRightTree().getRightTree().getRightTree().getRightTree().getParent()).to.equal(mTree.getRoot().getRightTree().getRightTree().getRightTree());
    });
  });

  describe('findNode(comparable)', function() {
    it('should return node containing comparable. If comparable does not exists it should return null', function() {
      var mTree = new BinarySearchTree(13);
      initiateTree(mTree);

      expect(mTree.findNode(5)).to.equal(null);
      expect(mTree.findNode(13)).to.equal(mTree.getRoot());
      expect(mTree.findNode(2)).to.equal(mTree.getRoot().getLeftTree().getLeftTree());
      expect(mTree.findNode(32)).to.equal(mTree.getRoot().getRightTree().getRightTree().getRightTree());
      expect(mTree.findNode(20)).to.equal(mTree.getRoot().getRightTree());
    });
  });

  describe('inOrderTraversal()', function() {
    it('should return the correct array', function() {
      var mTree = new BinarySearchTree(13);
      initiateTree(mTree);

      var emptyTree = new BinarySearchTree(null);
      var expectedArray = [2, 3, 6, 7, 9, 13, 16, 20, 24, 32];

      expect(emptyTree.inOrderTraversal()).to.eql([]);
      expect(mTree.inOrderTraversal()).to.eql(expectedArray);
    });
  });
});
