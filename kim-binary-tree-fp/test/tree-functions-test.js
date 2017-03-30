'use strict';

var _treeFunctions = require('./../dist/js/tree-functions');

var _chai = require('chai');

describe('When insert() is used', function () {
  it('New nodes should be added at the correct position', function () {
    var tree = (0, _treeFunctions.insert)([13, 6, 20, 2, 9, 16, 24, 3, 7, 32]);
    (0, _chai.expect)(tree).to.eql(createTestTree());
    (0, _chai.expect)((0, _treeFunctions.insert)(9, tree)).to.eql(createTestTree());
    (0, _chai.expect)((0, _treeFunctions.insert)(8, tree)).to.eql(createTestTree('o8'));
    (0, _chai.expect)((0, _treeFunctions.insert)(1, tree)).to.eql(createTestTree('o1'));
    (0, _chai.expect)((0, _treeFunctions.insert)(33, tree)).to.eql(createTestTree('o33'));
  });
});

describe('When findNode() is used', function () {
  it('findNode should return node containing comparable. If comparable is not in tree undefined should be returned', function () {
    (0, _chai.expect)((0, _treeFunctions.findNode)(5, createTestTree())).to.eql(null);
    (0, _chai.expect)((0, _treeFunctions.findNode)(13, createTestTree())).to.eql(createTestTree());
    (0, _chai.expect)((0, _treeFunctions.findNode)(2, createTestTree())).to.eql(createTestTree().leftTree.leftTree);
    (0, _chai.expect)((0, _treeFunctions.findNode)(32, createTestTree())).to.eql(createTestTree().rightTree.rightTree.rightTree);
    (0, _chai.expect)((0, _treeFunctions.findNode)(20, createTestTree())).to.eql(createTestTree().rightTree);
  });
});

describe('inOrderTraversal()', function () {
  it('Should return a sorted array of elements in the tree. If no numbers it should return empty array', function () {
    var expectedArray = [2, 3, 6, 7, 9, 13, 16, 20, 24, 32];
    (0, _chai.expect)((0, _treeFunctions.inOrderTraversal)(createTestTree())).to.eql(expectedArray);
    expectedArray = [];
    (0, _chai.expect)((0, _treeFunctions.inOrderTraversal)()).to.eql(expectedArray);
    (0, _chai.expect)((0, _treeFunctions.inOrderTraversal)({})).to.eql(expectedArray);
  });
});

function createTestTree(wantedTree) {
  var initTree = {
    comparable: 13,
    leftTree: {
      comparable: 6,
      leftTree: {
        comparable: 2,
        leftTree: null,
        rightTree: {
          comparable: 3,
          leftTree: null,
          rightTree: null
        }
      },
      rightTree: {
        comparable: 9,
        leftTree: {
          comparable: 7,
          leftTree: null,
          rightTree: null
        },
        rightTree: null
      }
    },
    rightTree: {
      comparable: 20,
      leftTree: {
        comparable: 16,
        leftTree: null,
        rightTree: null
      },
      rightTree: {
        comparable: 24,
        leftTree: null,
        rightTree: {
          comparable: 32,
          leftTree: null,
          rightTree: null
        }
      }
    }
  };

  if (wantedTree === 'o8') {
    initTree.leftTree.rightTree.leftTree.rightTree = (0, _treeFunctions.createNode)(8);
  } else if (wantedTree === 'o1') {
    initTree.leftTree.leftTree.leftTree = (0, _treeFunctions.createNode)(1);
  } else if (wantedTree === 'o33') {
    initTree.rightTree.rightTree.rightTree.rightTree = (0, _treeFunctions.createNode)(33);
  }

  return initTree;
}
//# sourceMappingURL=tree-functions-test.js.map
