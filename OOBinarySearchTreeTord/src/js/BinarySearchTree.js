'use strict';

export default class BinarySearchTree {
  constructor(tree) {
    if(tree.length > 0){
      this.root = new _BinaryNode(tree[0]);
      for(var i =1; i < tree.length; i++){
        var node = this.root;
        while(node != null){
          if(tree[i] < node.key){
            if(node.leftNode == undefined){
              node.leftNode = new _BinaryNode(tree[i]);
              node.leftNode.parentNode = node;
              node = null;
            }else{
              node = node.leftNode;
            }
          }else{
            if(node.rightNode == undefined){
              node.rightNode = new _BinaryNode(tree[i]);
              node.rightNode.parentNode = node;
              node = null;
            }else{
              node = node.rightNode;
            }
          }
        }
      }
    }
  }

  findNode(key){
    var node = this.root;
    var returnValue = new _BinaryNode(null);
    while(node != null && key != node.key){
      if(key < node.key){
        node = node.leftNode;
      }else if(key > node.key){
        node = node.rightNode;
      }
    }
    if(node != null){
      returnValue = node;
    }

    return returnValue;
  }

  inOrderTraversal(){
    var array = [];
    var node = this.root;
    while(node != null){
      if(node.leftNode != null && array.indexOf(node.leftNode.key) == -1 ){
        node = node.leftNode;
      }else if(array.indexOf(node.key) == -1){
        array.push(node.key);
      }else if(node.rightNode != null && array.indexOf(node.rightNode.key) == -1){
        node = node.rightNode;
      }else{
        node = node.parentNode;
      }
    }
    return array;
  }

  insert(key){
    var returnValue = false;
    if(this.root == null){
      this.root = new _BinaryNode(key);
      returnValue = true;
    }else{
      var node = this.root;
      while(node != null && key != node.key ){
        if(key < node.key){
          if(node.leftNode == null){
            node.leftNode = new _BinaryNode(key);
            node.leftNode.parentNode = node;
            node = null;
            returnValue = true;
          }else{
            node = node.leftNode;
          }
        }else if(key > node.key){
          if(node.rightNode == null){
            node.rightNode = new _BinaryNode(key);
            node.rightNode.parentNode = node;
            node = null;
            returnValue = true;
          }else{
            node = node.rightNode;
          }
        }
      }
    }

    return returnValue;
  }
}

export class _BinaryNode{
  constructor(key){
    this.key = key;
    this.parentNode = null;
    this.leftNode = null;
    this.rightNode = null;
  }

  toString(){
    var parentNode = null;
    var leftNode = null;
    var rightNode = null;
    if(this.parentNode != null){
      parentNode = this.parentNode.key;
    }
    if(this.leftNode != null){
      leftNode = this.leftNode.key;
    }
    if(this.rightNode != null){
      rightNode = this.rightNode.key;
    }
    return "Key:"+this.key+"\nParentNode:"+parentNode+"\nLeftNode:"+leftNode+"\nRightNode:"+rightNode;
  }
}
