import Edge from './Edge'
'use strict'

export default class Node {
  constructor(name) {
    this._name = name;
    this._edges = [];
    this._neighbors = [];
  }

  //Create an edge in both directions
  createEdge(weight, endNode) {
    this._edges.push(new Edge(weight, this, endNode));
    endNode._edges.push(new Edge(weight, endNode, this));
    this._neighbors.push(endNode);
    endNode._neighbors.push(this);

    return this;
  }

  getName() {
    return this._name;
  }

  getNeighbors() {
    return this._neighbors;
  }

  findEdge(neighbor) {
    var edge = null;

    if (this._edges[0].getEnd() === neighbor) {
      return this._edges[0];
    }

    for (var i = 1; i < this._edges.length && this._edges[i - 1].getEnd() !== neighbor; i++) {
      edge = this._edges[i];
    }

    return edge;
  }
}
