'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Peg = require('./Peg');

var _Peg2 = _interopRequireDefault(_Peg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

class TowerOfHanoi {
  constructor(nrOfDiscs) {
    this._nrOfPegs = 3;
    this._nrOfDiscs = nrOfDiscs;
    this._pegs = this.initPegs(this._nrOfDiscs);
    this._currentPeg = 0;
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

  playHanoi(destIndex) {
    var start = this._pegs[this._currentPeg];
    var dest = this._pegs[destIndex];
    var aux = this._pegs[3 - this._currentPeg - destIndex];

    if (destIndex === this._currentPeg) {
      return this._pegs;
    } else {}
  }
}
exports.default = TowerOfHanoi;
//# sourceMappingURL=TowerOfHanoi.js.map
