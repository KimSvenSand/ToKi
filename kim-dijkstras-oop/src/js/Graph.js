import Node from './Node'
'use strict'

export default class Graph {
  constructor(nodes) {
    if (nodes) {
      this._nodes = nodes;
    } else {
      this._nodes = [];
    }
  }

  getNodes() {
    return this._nodes;
  }

  getNrOfNodes() {
    return this._nodes.length;
  }

  findNode(name) {
    var node = null;
    if (this._nodes[0].getName() === name) {
      return this._nodes[0];
    }
    for (var i = 1; i < this._nodes.length && this._nodes[i - 1].getName() !== name; i++) {
      node = this._nodes[i];
    }
    return node;
  }

  addNode(name) {
    var node = new Node(name);
    this._nodes.push(node);

    return node;
  }
}
