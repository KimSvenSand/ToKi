'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Node = require('./Node');

var _Node2 = _interopRequireDefault(_Node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BinarySearchTree {
  constructor(rootComparable) {
    this._root = new _Node2.default(rootComparable, null);
    this._size = 1;
  }

  getRoot() {
    return this._root;
  }

  getSize() {
    return this._size;
  }

  insert(comparable) {
    let currentNode = this.getRoot();
    let added = false;

    while (added === false) {
      if (comparable === currentNode.getComparable()) {
        return false; //Comparable already in tree.
      } else if (comparable > currentNode.getComparable()) {
        if (currentNode.getRightTree() === null) {
          currentNode.setRightTree(new _Node2.default(comparable, currentNode));
          added = true;
        } else {
          currentNode = currentNode.getRightTree();
        }
      } else {
        if (currentNode.getLeftTree() === null) {
          currentNode.setLeftTree(new _Node2.default(comparable, currentNode));
          added = true;
        } else {
          currentNode = currentNode.getLeftTree();
        }
      }
    }

    this._size++;
    return true;
  }

  inOrderTraversal() {
    var array = [];
    var visited = [];
    var currentNode = this.getRoot();

    if (currentNode.getComparable() === null) {
      return array;
    }

    //While all nodes have not been visited
    while (visited.length < this.getSize()) {
      //While current node is not visited
      while (!visited.includes(currentNode)) {
        //Go to most left node from currentNode
        while (currentNode.getLeftTree() != null && !visited.includes(currentNode.getLeftTree())) {
          currentNode = currentNode.getLeftTree();
        }

        //Put currentNode in array and mark currentNode as visited
        array.push(currentNode.getComparable());
        visited.push(currentNode);

        //Go to right node if there is one
        if (currentNode.getRightTree() != null && !visited.includes(currentNode.getRightTree())) {
          currentNode = currentNode.getRightTree();
        }
      }

      //Go back to firstNode with an unvisited parent
      while (currentNode.getParent() != null && visited.includes(currentNode.getParent())) {
        currentNode = currentNode.getParent();
      }

      //If not rootNode go to the unvisited parent
      if (currentNode.getParent() != null) {
        currentNode = currentNode.getParent();
      }
    }

    return array;
  }

  findNode(comparable) {
    var currentNode = this.getRoot();

    while (currentNode != null && comparable != currentNode.getComparable()) {
      if (comparable > currentNode.getComparable()) {
        currentNode = currentNode.getRightTree();
      } else {
        currentNode = currentNode.getLeftTree();
      }
    }

    return currentNode;
  }
}
exports.default = BinarySearchTree;
//# sourceMappingURL=BinarySearchTree.js.map
