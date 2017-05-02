'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _disk = require('./disk.js');

var _disk2 = _interopRequireDefault(_disk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

class Peg {
  constructor() {
    this.diskArray = [];
  }

  getNrOfDisks() {
    return this.diskArray.length;
  }

  addDisk(newDisk) {
    this.diskArray.push(newDisk);
  }

  removeTopDisk() {
    return this.diskArray.pop();
  }

  buildTower(height) {
    for (var i = height; i > 0; i--) {
      this.diskArray.push(new _disk2.default(i));
    }
  }

  topDiskSize() {
    if (this.diskArray.length === 0) {
      return Number.MAX_SAFE_INTEGER;
    } else {
      return this.diskArray[this.diskArray.length - 1].getSize();
    }
  }

  getDiskAt(place) {
    return this.diskArray[place];
  }

  toString() {
    var disksContained = [];
    for (var i = 0; i < this.diskArray.length; i++) {
      disksContained.push(this.getDiskAt(i).getSize());
    }

    return disksContained;
  }

}
exports.default = Peg;
//# sourceMappingURL=peg.js.map
