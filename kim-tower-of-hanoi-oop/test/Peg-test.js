'use strict';

var _Peg = require('../dist/js/Peg');

var _Peg2 = _interopRequireDefault(_Peg);

var _Disc = require('../dist/js/Disc');

var _Disc2 = _interopRequireDefault(_Disc);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

describe('Disc', function () {
  function createDiscArray() {
    var array = [];

    array[0] = new _Disc2.default(5);
    array[1] = new _Disc2.default(4);
    array[2] = new _Disc2.default(3);
    array[3] = new _Disc2.default(2);
    array[4] = new _Disc2.default(1);

    return array;
  }

  describe('new Disc(nrOfDiscs)', function () {
    it('Should initiate a peg with nrOfDiscs Discs', function () {
      var peg = new _Peg2.default(5);
      (0, _chai.expect)(peg.getDiscs()).to.eql(createDiscArray());
      (0, _chai.expect)(peg.getNrOfDiscs()).to.equal(5);
      var peg = new _Peg2.default(0);
      (0, _chai.expect)(peg.getDiscs()).to.eql([]);
      (0, _chai.expect)(peg.getNrOfDiscs()).to.equal(0);
    });
  });

  describe('peak()', function () {
    it('should return copy of top disk', function () {
      var peg = new _Peg2.default(5);
      (0, _chai.expect)(peg.peak()).to.eql(new _Disc2.default(1));
      peg = new _Peg2.default(0);
      (0, _chai.expect)(peg.peak()).to.equal(null);
    });
  });

  describe('popDisc()', function () {
    it('Should remove top disc and return it', function () {
      var peg = new _Peg2.default(5);
      (0, _chai.expect)(peg.popDisc()).to.eql(new _Disc2.default(1));
      (0, _chai.expect)(peg.getDiscs()).to.eql(createDiscArray().slice(0, 4));

      peg = new _Peg2.default(0);
      (0, _chai.expect)(peg.popDisc()).to.eql(null);
      (0, _chai.expect)(peg.getDiscs()).to.eql([]);
    });
  });

  describe('pushDisc(disc)', function () {
    it('Should push disc and return true if successful', function () {
      var peg = new _Peg2.default(5);
      (0, _chai.expect)(peg.pushDisc()).to.equal(false);
      (0, _chai.expect)(peg.pushDisc(new _Disc2.default(1))).to.equal(false);
      (0, _chai.expect)(peg.getDiscs()).to.eql(createDiscArray());
      peg.popDisc();
      (0, _chai.expect)(peg.pushDisc(new _Disc2.default(1))).to.equal(true);
      (0, _chai.expect)(peg.getDiscs()).to.eql(createDiscArray());
    });
  });
});
//# sourceMappingURL=Peg-test.js.map
