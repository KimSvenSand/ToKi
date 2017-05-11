'use strict'

export default class Disc {
  constructor(size) {
    this._size = size;
  }

  getSize() {
    return this._size;
  }

  setSize(size) {
    this._size = size;
  }
}
