import {createTree} from '../dist/js/BinarySearchTree';
import {insert} from '../dist/js/BinarySearchTree';
import {findNode} from '../dist/js/BinarySearchTree';
import {inOrderTraversal} from '../dist/js/BinarySearchTree';
import { expect } from 'chai';

describe('BinarySearchTree', function() {
  var inputArray = [13,6,24,2,3,7,9,16,20,32];
  var expectedResult = 0;
  var tree = createTree(inputArray);
  var input = 0;

  describe('createTree', function() {
    it("should return a binary tree in array form", function() {
      expectedResult = [13,6,24,2,7,16,32,,3,,9,,20];

      expect(createTree(inputArray)).to.eql(expectedResult);
    });
  });

  describe('createTree if empty', function() {
    it("should return a empty binary tree in array form", function() {
      expectedResult = [];

      expect(createTree([])).to.eql(expectedResult);
    });
  });

  describe('insert',function(){
    it('inserts a number thats already in the tree, should return full array without new number', function(){
        input = 9;
        expectedResult = [13,6,24,2,7,16,32,,3,,9,,20];
        expect(insert(input,tree)).to.eql(expectedResult);
    });
  });

  describe('insert',function(){
    it('inserts a number thats already in the tree, should return full array with new number 8', function(){
        input = 8;
        expectedResult = [13,6,24,2,7,16,32,,3,,9,,20,,,,,,,,,8];
        expect(insert(input,tree)).to.eql(expectedResult);
    });
  });

  describe('insert',function(){
    it('inserts a number thats already in the tree, should return full array with new number 1', function(){
        input = 1;
        //Found some troubling results, this reset shouldn't be needed, but already gotten comments on it so will come back to fix it.
        tree = createTree(inputArray);
        expectedResult = [13,6,24,2,7,16,32,1,3,,9,,20];
        expect(insert(input,tree)).to.eql(expectedResult);
    });
  });

  describe('insert',function(){
    it('inserts a number thats already in the tree, should return full array with new number 33', function(){
        input = 33;
        //Found some troubling results, this reset shouldn't be needed, but already gotten comments on it so will come back to fix it.
        tree = createTree(inputArray);
        expectedResult = [13,6,24,2,7,16,32,,3,,9,,20,,33];
        expect(insert(input,tree)).to.eql(expectedResult);
    });
  });

  describe('findNode', function() {
    it('should return undefined since the node isnt in the tree', function() {
      input = 5;
      //Found some troubling results, this reset shouldn't be needed, but already gotten comments on it so will come back to fix it.
      tree = createTree(inputArray);
      expectedResult = undefined;

      expect(findNode(input,tree,0,0)).to.equal(expectedResult);
    });
  });

  describe('findNode', function() {
    it('should return the key 13', function() {
      input = 13;
      expectedResult = 13;
      expect(findNode(input,tree,0,0)).to.equal(expectedResult);
    });
  });

  describe('findNode', function() {
    it('should return key 2', function() {
      input = 2;
      expectedResult = 2;

      expect(findNode(input,tree,0,0)).to.equal(expectedResult);
    });
  });

  describe('findNode', function() {
    it('should return key 32', function() {
      input = 32;
      expectedResult = 32;
      expect(findNode(input,tree,0,0)).to.equal(expectedResult);
    });
  });

  describe('findNode', function() {
    it('should return key 20', function() {
      input = 20;
      expectedResult = 20;

      expect(findNode(input,tree,0,0)).to.equal(expectedResult);
    });
  });


  describe('inOrderTravelsal', function() {
    it("should return an ordered array", function() {
      expectedResult = [2,3,6,7,9,13,16,20,24,32];

      expect(inOrderTraversal(tree,0,[])).to.eql(expectedResult);
    });
  });
  describe('empty inOrderTravelsal', function() {
    it("should return an empty array", function() {
      expectedResult = [];

      expect(inOrderTraversal([],0,[])).to.eql(expectedResult);
    });
  });
});
