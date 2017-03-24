import Node from './Node'

export default class BinarySearchTree {
  constructor(rootComparable) {
    this._root = new Node(rootComparable, null);
  }

  getRoot() {
    return this._root;
  }

  insert(comparable) {
    let currentNode = this.getRoot();
    let added = false;

    while(added === false) {
      if (comparable === currentNode.getComparable()) {
        return false; //Comparable already in tree.
      }
      else if (comparable > currentNode.getComparable()) {
        if (currentNode.getRightTree() === null) {
          currentNode.setRightTree(new Node(comparable, currentNode));
          added = true;
        }
        else {
          currentNode = currentNode.getRightTree();
        }
      }
      else {
        if (currentNode.getLeftTree() === null) {
          currentNode.setLeftTree(new Node(comparable, currentNode));
          added = true;
        }
        else {
          currentNode = currentNode.getLeftTree();
        }
      }
    }

    return true;
  }

  inOrderTraversal() {
    var array = [];
    var visited = [];
    var rootVisits = 1;
    var currentNode = this.getRoot();

    if (currentNode.getComparable() === null) {
      return array;
    }

    while (rootVisits <= 3) {
      if (currentNode === this.getRoot()) {
        rootVisits++;
      }

      while (!visited.includes(currentNode)) {
        while (currentNode.getLeftTree() != null && !visited.includes(currentNode.getLeftTree())) {
          currentNode = currentNode.getLeftTree();
        }
        array.push(currentNode.getComparable());
        visited.push(currentNode);

        if (currentNode.getRightTree() != null && !visited.includes(currentNode.getRightTree())) {
          currentNode = currentNode.getRightTree();
        }
      }

      while (currentNode.getParent() != null && visited.includes(currentNode.getParent())) {
        currentNode = currentNode.getParent();
      }

      if (currentNode.getParent() != null) {
        currentNode = currentNode.getParent();
      }
    }

    return array;
  }

  findNode(comparable) {
    var currentNode = this.getRoot();

    while(currentNode != null && comparable != currentNode.getComparable()) {
      if (comparable > currentNode.getComparable()) {
        currentNode = currentNode.getRightTree();
      }
      else {
        currentNode = currentNode.getLeftTree();
      }
    }

    return currentNode;
  }
}
