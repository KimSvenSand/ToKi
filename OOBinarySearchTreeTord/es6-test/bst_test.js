import BinarySearchTree from '../dist/js/BinarySearchTree';
import { expect } from 'chai';

describe('BinarySearchTree', function() {
  var treeArray = [3,2,5,1,4];
  var emptyTree = [];
  var BST = new BinarySearchTree(treeArray);
  var BST2 = new BinarySearchTree(emptyTree);
  var expectedResult = 0;
  var input = 0;

  describe('inOrderTravelsal', function() {
    it("should return treeArray sorted", function() {
      expectedResult = [1,2,3,4,5];

      expect(BST.inOrderTraversal()).to.eql(expectedResult);
    });
  });

  describe('inOrderTravelsal in empty tree', function() {
    it("should return empty array", function() {
      expectedResult = [];

      expect(BST2.inOrderTraversal()).to.eql(expectedResult);
    });
  });

  describe('findNode', function() {
    it('should return a node with key 1', function() {
      input = 1;
      expectedResult = 1;

      expect(BST.findNode(input)).to.equal(expectedResult);
    });
  });

  describe('findNode', function() {
    it('should return a node with unknown key', function() {
      input = 10;
      expectedResult = undefined;

      expect(BST.findNode(input)).to.equal(expectedResult);
    });
  });
  describe('insert',function(){
    it('should return true', function(){
        input = 6;
        expectedResult = true;
        expect(BST.insert(input)).to.equal(expectedResult);
    });
  });

  describe('insert',function(){
    it('should return true', function(){
        input = 6;
        expectedResult = false;
        expect(BST.insert(input)).to.equal(expectedResult);
    });
  });

  describe('inOrderTravelsal in empty tree', function() {
    it("should return empty array", function() {
      expectedResult = [1,2,3,4,5,6];

      expect(BST.inOrderTraversal()).to.eql(expectedResult);
    });
  });
});
