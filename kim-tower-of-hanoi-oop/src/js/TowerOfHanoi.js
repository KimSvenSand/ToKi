import Peg from './Peg'
import CurrentHandler from './CurrentHandler'
'use strict'

export default class TowerOfHanoi {
  constructor(nrOfDiscs) {
    this._nrOfPegs = 3;
    this._nrOfDiscs = nrOfDiscs;
    this._pegs = this.initPegs(this._nrOfDiscs);
    this._currentPeg = 0;
    this._current = new CurrentHandler();
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

  getCurrentPeg() {
    return this._currentPeg;
  }

  isLegalMove(start, dest) {
    if (dest.peak() === null) {
      return true;
    } else if (start.peak() === null) {
      return false;
    } else {
      if (start.peak().getSize() < dest.peak().getSize()) {
        return true;
      } else {
        return false;
      }
    }
  }

  playHanoi(destIndex) {
    var nrOfDiscs = this._pegs[this._currentPeg].getNrOfDiscs();
    var start = this._pegs[this._currentPeg];
    var dest = this._pegs[destIndex];
    var aux = this._pegs[3 - this._currentPeg - destIndex];
    this._current.init(start, aux, dest);

    if (this._pegs[destIndex] !== this._pegs[this._currentPeg]) {
      //while all disks are not at dest
      while (dest.getNrOfDiscs() < nrOfDiscs) {
        //while current start is not empty
        while(this._current.start.getNrOfConsecutiveDiscs() > 0) {
          //If even
          if (this._current.start.getNrOfConsecutiveDiscs() % 2 === 0) {
            if (this.isLegalMove(this._current.start, this._current.aux)) {
              this._current.aux.pushDisc(this._current.start.popDisc());
              this._current.destToAux();
            } else {
              this._current.popLastState();
            }
          //Else if odd
          } else {
            if (this.isLegalMove(this._current.start, this._current.dest)) {
              this._current.dest.pushDisc(this._current.start.popDisc());
              this._current.auxToDest();
            } else {
              this._current.popLastState();
            }
          }
        }
        this._current.popLastState();
      }
    }
    this._currentPeg = destIndex;
  }
}
