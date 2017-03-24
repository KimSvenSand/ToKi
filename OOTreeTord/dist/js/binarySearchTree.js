'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
class BinarySearchTree {
  constructor(tree) {
    this.root = new _BinaryNode(tree[0]);
    for (var i = 1; i < tree.length; i++) {
      var node = this.root;
      while (node != undefined) {
        if (tree[i] < node.key) {
          if (node.leftNode == undefined) {
            node.leftNode = new _BinaryNode(tree[i]);
            node = undefined;
          } else {
            node = node.leftNode;
          }
        } else {
          if (node.rightNode == undefined) {
            node.rightNode = new _BinaryNode(tree[i]);
            node = undefined;
          } else {
            node = node.rightNode;
          }
        }
      }
    }
  }

  findNode(key) {
    var node = this.root;
    while (key != node.key && node != undefined) {
      if (key < node.key) {
        node = node.leftNode;
      } else if (key > node.key) {
        node = node.rightNode;
      }
    }

    return node;
  }

  /*inOrderTraversal(){
    var array = [];
    var node = this.root;
    while(node != " "){
      if(node.leftNode != null && array.indexOf(node.leftNode.key) == -1 ){
        node = node.leftNode;
      }else if(node.leftNode == null && array.indexOf(node.key) == -1){
        array.push(node.key);
      }else if(node.rightNode != null && array.indexOf(node.rightNode.key) == -1){
        node = node.rightNode;
      }else{
        node = node.parent;
      }
    }
    return array;
  }*/

  insert(key) {
    var node = this.root;
    var returnValue = false;
    while (key != node.key && node != undefined) {
      if (key < node.key) {
        if (node.leftNode === undefined) {
          node.leftNode = new _BinaryNode(key);
          node = undefined;
          returnValue = true;
        } else {
          node = node.leftNode;
        }
      } else if (key > node.key) {
        if (node.rightNode === undefined) {
          node.rightNode = new _BinaryNode(key);
          node = undefined;
          returnValue = true;
        }
        node = node.rightNode;
      }
    }
    return returnValue;
  }
}

exports.default = BinarySearchTree;
class _BinaryNode {
  constructor(key) {
    this.key = key;
    this.leftNode = null;
    this.rightNode = null;
  }
}
//# sourceMappingURL=binarySearchTree.js.map
