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
    var stack = [];
    var start = this._pegs[this._currentPeg];
    var dest = this._pegs[destIndex];
    var aux = this._pegs[3 - this._currentPeg - destIndex];
    var current = {
      'start': start,
      'dest': dest,
      'aux': aux
    }

    if (this._pegs[destIndex] !== this._pegs[this._currentPeg]) {
      //while all disks are not at dest
      while (dest.getNrOfDiscs() < nrOfDiscs) {
        //while current start is not empty
        while(current.start.getNrOfConsecutiveDiscs() > 0) {
          //If even
          if (current.start.getNrOfConsecutiveDiscs() % 2 === 0) {
            if (this.isLegalMove(current.start, current.aux)) {
              current.aux.pushDisc(current.start.popDisc());
              stack.push(Object.assign({}, current));
              current.start = stack[stack.length - 1].dest;
              current.dest = stack[stack.length - 1].aux;
              current.aux = stack[stack.length - 1].start;
            } else {
              current = stack.pop();
            }
          //Else if odd
          } else {
            if (this.isLegalMove(current.start, current.dest)) {
              current.dest.pushDisc(current.start.popDisc());
              stack.push(Object.assign({}, current));
              current.start = stack[stack.length - 1].aux;
              current.aux = stack[stack.length - 1].start;
              current.dest = stack[stack.length - 1].dest;
            } else {
              current = stack.pop();
            }
          }
        }
        current = stack.pop();
      }
    }
    this._currentPeg = destIndex;
  }
}
