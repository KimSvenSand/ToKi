'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
class Node {
  constructor(comparable, parent) {
    this._leftTree = null; //Underscore signifies a private member.
    this._rightTree = null;
    this._parent = parent;
    this._comparable = comparable;
  }

  getParent() {
    return this._parent;
  }

  getComparable() {
    return this._comparable;
  }

  getRightTree() {
    return this._rightTree;
  }

  setRightTree(node) {
    this._rightTree = node;
  }

  getLeftTree() {
    return this._leftTree;
  }

  setLeftTree(node) {
    this._leftTree = node;
  }
}
exports.default = Node;
//# sourceMappingURL=Node.js.map
