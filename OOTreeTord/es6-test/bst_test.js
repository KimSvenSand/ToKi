import BinarySearchTree from '../dist/js/binarySearchTree';
import { expect } from 'chai';

describe('BinarySearchTree', function() {
  var treeArray = [3,2,5,1,4];
  var BST = new BinarySearchTree(treeArray);
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

  describe('insert',function(){
    it('should return true', function(){
        input = 6;
        expectedResult = true;
        expect(BST.insert(input)).to.equal(expectedResult);
    });
  });
});
