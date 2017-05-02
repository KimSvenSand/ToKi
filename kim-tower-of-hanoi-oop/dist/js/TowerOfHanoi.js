'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Peg = require('./Peg');

var _Peg2 = _interopRequireDefault(_Peg);

var _CurrentHandler = require('./CurrentHandler');

var _CurrentHandler2 = _interopRequireDefault(_CurrentHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

class TowerOfHanoi {
  constructor(nrOfDiscs) {
    this._nrOfPegs = 3;
    this._nrOfDiscs = nrOfDiscs;
    this._pegs = this.initPegs(this._nrOfDiscs);
    this._currentPeg = 0;
    this._current = new _CurrentHandler2.default();
  }

  initPegs(nrOfDiscs) {
    var pegsArray = [];
    pegsArray.push(new _Peg2.default(nrOfDiscs));

    for (var i = 1; i < this._nrOfPegs; i++) {
      pegsArray.push(new _Peg2.default(0));
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
        while (this._current.start.getNrOfConsecutiveDiscs() > 0) {
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
    this._current.stack = [];
  }
}
exports.default = TowerOfHanoi;
//# sourceMappingURL=TowerOfHanoi.js.map
