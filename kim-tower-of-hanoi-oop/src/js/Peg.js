import Disc from './Disc'
'use strict'

export default class Peg {
  constructor(nrOfDiscs) {
    this._nrOfDiscs = nrOfDiscs;
    this._discs = this.initDiscs(this._nrOfDiscs);
  }

  initDiscs(nrOfDiscs) {
    var discArray = [];

    for (var i = 0; i < nrOfDiscs; i++) {
      discArray.push(new Disc(nrOfDiscs - i));
    }

    return discArray;
  }

  popDisc() {
    if (this.peak()) {
      this._nrOfDiscs--;
      return this._discs.pop();
    } else {
      return null;
    }
  }

  pushDisc(disc) {
    if (disc) {
      if (disc.getSize() >= this.peak().getSize()) {
        return false;
      } else {
        this._nrOfDiscs++;
        this._discs.push(disc);
        return true;
      }
    } else {
      return false;
    }
  }

  peak() {
    if (this._discs[this._discs.length - 1]) {
      return new Disc(this._discs[this._discs.length - 1].getSize());
    } else {
      return null;
    }
  }

  getDiscs() {
    return this._discs;
  }

  getNrOfDiscs() {
    return this._nrOfDiscs;
  }
}
