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
}
exports.default = Peg;
//# sourceMappingURL=Peg.js.map
