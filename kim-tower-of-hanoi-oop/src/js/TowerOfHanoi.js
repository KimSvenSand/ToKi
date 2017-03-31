import Peg from './Peg'
'use strict'

export default class TowerOfHanoi {
  constructor(nrOfDiscs) {
    this._nrOfPegs = 3;
    this._nrOfDiscs = nrOfDiscs;
    this._pegs = this.initPegs(this._nrOfDiscs);
    this._currentPeg = 0;
  }

  initPegs(nrOfDiscs) {
    var pegsArray = [];
    pegsArray.push(new Peg(nrOfDiscs));

    for (var i = 1; i < this._nrOfPegs; i++) {
      pegsArray.push(new Peg(0));
    }

    return pegsArray;
  }

  getPegs() {
    return this._pegs;
  }

  playHanoi(destIndex) {
    var start = this._pegs[this._currentPeg];
    var dest = this._pegs[destIndex];
    var aux = this._pegs[3 - this._currentPeg - destIndex];

    if (destIndex === this._currentPeg) {
      return this._pegs;
    } else {
      while (start.getNrOfDiscs() === 0) {
        //Do stuff
      }
    }
  }
}
