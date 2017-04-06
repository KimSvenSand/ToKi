'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Disc = require('./Disc');

var _Disc2 = _interopRequireDefault(_Disc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

class Peg {
  constructor(nrOfDiscs) {
    this._nrOfDiscs = nrOfDiscs;
    this._discs = this.initDiscs(this._nrOfDiscs);
  }

  initDiscs(nrOfDiscs) {
    var discArray = [];

    for (var i = 0; i < nrOfDiscs; i++) {
      discArray.push(new _Disc2.default(nrOfDiscs - i));
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
      if (this.peak() === null) {
        this._nrOfDiscs++;
        this._discs.push(disc);
        return true;
      }
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
      return new _Disc2.default(this._discs[this._discs.length - 1].getSize());
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

  getNrOfConsecutiveDiscs() {
    if (this._nrOfDiscs <= 1) {
      return this._nrOfDiscs;
    }

    var currentDisc = this._discs[this._nrOfDiscs - 1];
    var nextDisc = this._discs[this._nrOfDiscs - 2];
    var nrOfConsecutiveDiscs = 1;

    while (nrOfConsecutiveDiscs <= this._nrOfDiscs - 1 && nextDisc.getSize() === currentDisc.getSize() + 1) {
      nrOfConsecutiveDiscs++;
      currentDisc = this._discs[this._nrOfDiscs - nrOfConsecutiveDiscs];
      nextDisc = this._discs[this._nrOfDiscs - nrOfConsecutiveDiscs - 1];
    }

    return nrOfConsecutiveDiscs;
  }
}
exports.default = Peg;
//# sourceMappingURL=Peg.js.map
