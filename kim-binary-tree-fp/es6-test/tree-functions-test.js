import { insert, createNode, findNode, inOrderTraversal } from './../dist/js/tree-functions'
import { expect } from 'chai';

describe('When insert() is used', function() {
  it('New nodes should be added at the correct position', function() {
    var tree = insert([13, 6, 20, 2, 9, 16, 24, 3, 7, 32]);
    expect(tree).to.eql(createTestTree());
    expect(insert(9, tree)).to.eql(createTestTree());
    expect(insert(8, tree)).to.eql(createTestTree('o8'));
    expect(insert(1, tree)).to.eql(createTestTree('o1'));
    expect(insert(33, tree)).to.eql(createTestTree('o33'));
  });
});

describe('When findNode() is used', function() {
  it('findNode should return node containing comparable. If comparable is not in tree undefined should be returned', function() {
    expect(findNode(5, createTestTree())).to.eql(null);
    expect(findNode(13, createTestTree())).to.eql(createTestTree());
    expect(findNode(2, createTestTree())).to.eql(createTestTree().leftTree.leftTree);
    expect(findNode(32, createTestTree())).to.eql(createTestTree().rightTree.rightTree.rightTree);
    expect(findNode(20, createTestTree())).to.eql(createTestTree().rightTree);
  });
});

describe('inOrderTraversal()', function() {
  it('Should return a sorted array of elements in the tree. If no numbers it should return empty array', function () {
    var expectedArray = [2, 3, 6, 7, 9, 13, 16, 20, 24, 32];
    expect(inOrderTraversal(createTestTree())).to.eql(expectedArray);
    expectedArray = [];
    expect(inOrderTraversal()).to.eql(expectedArray);
    expect(inOrderTraversal({})).to.eql(expectedArray);

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
  }

  if (wantedTree === 'o8') {
    initTree.leftTree.rightTree.leftTree.rightTree = createNode(8);
  } else if (wantedTree === 'o1') {
    initTree.leftTree.leftTree.leftTree = createNode(1);
  } else if (wantedTree === 'o33') {
    initTree.rightTree.rightTree.rightTree.rightTree = createNode(33);
  }

  return initTree;
}
