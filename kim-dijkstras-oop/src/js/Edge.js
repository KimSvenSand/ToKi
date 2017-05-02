'use strict'

export default class Edge {
  constructor(weight, start, end) {
    this._weight = weight;
    this._start = start;
    this._end = end;
  }

  getStart() {
    return this._start;
  }

  getEnd() {
    return this._end;
  }
  
  getWeight() {
    return this._weight;
  }

  setWeight(weight) {
    this._weight = weight;
  }
}
