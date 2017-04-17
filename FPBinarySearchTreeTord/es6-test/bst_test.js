import {createTree} from '../dist/js/BinarySearchTree';
import {insert} from '../dist/js/BinarySearchTree';
import {findNode} from '../dist/js/BinarySearchTree';
import {inOrderTraversal} from '../dist/js/BinarySearchTree';
import { expect } from 'chai';

describe('BinarySearchTree', function() {
  var inputArray = [3,2,5,1,4];
  var expectedResult = 0;
  var input = 0;

  describe('createTree', function() {
    it("should return a binary tree in array form", function() {
      expectedResult = [3,2,5,1,,4];

      expect(createTree(inputArray)).to.eql(expectedResult);
    });
  });

  describe('createTree if empty', function() {
    it("should return a empty binary tree in array form", function() {
      expectedResult = [];

      expect(createTree([])).to.eql(expectedResult);
    });
  });

  describe('insert', function() {
    it("should return old array with new number inserted in it", function() {
      input = 10;
      expectedResult = [3,2,5,1,,4,10];
      var tree =createTree(inputArray);
      expect(insert(input,tree)).to.eql(expectedResult);
    });
  });

  describe('insert with number already in it', function() {
    it("should return old array", function() {
      input = 3;
      expectedResult = [3,2,5,1,,4];
      var tree = createTree(inputArray);
      expect(insert(input,tree)).to.eql(expectedResult);
    });
  });
  describe('findNode', function() {
    it('should return node key 1', function() {
      input = 1;
      expectedResult = 1;
      var tree = createTree(inputArray);

      expect(findNode(input,tree,0,0)).to.equal(expectedResult);
    });
  });

  describe('findNode', function() {
    it('should return undefined key', function() {
      input = 10;
      expectedResult = undefined;
      var tree = createTree(inputArray);

      expect(findNode(input,tree,0,0)).to.equal(expectedResult);
    });
  });


  describe('inOrderTravelsal', function() {
    it("should return an ordered array", function() {
      expectedResult = [1,2,3,4,5];
      var tree = createTree(inputArray);

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
