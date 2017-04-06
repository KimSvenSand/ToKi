'use strict';

var _TowerOfHanoi = require('../dist/js/TowerOfHanoi');

var _TowerOfHanoi2 = _interopRequireDefault(_TowerOfHanoi);

var _Peg = require('../dist/js/Peg');

var _Peg2 = _interopRequireDefault(_Peg);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

describe('TowerOfHanoi', function () {
  function createTestTower(towerIndex) {
    var array = [];

    for (var i = 0; i < 3; i++) {
      if (i === towerIndex) {
        array[i] = new _Peg2.default(8);
      } else {
        array[i] = new _Peg2.default(0);
      }
    }

    return array;
  }

  describe('new TowerOfHanoi(nrOfPegs, nrOfDiscs)', function () {
    it('should create new tower with discs on first peg', function () {
      var hanoi = new _TowerOfHanoi2.default(8);
      (0, _chai.expect)(hanoi.getPegs()).to.eql(createTestTower(0));
    });
  });

  describe('isLegalMove(start, dest)', function () {
    it('should return correct bool', function () {
      var hanoi = new _TowerOfHanoi2.default(3);
      (0, _chai.expect)(hanoi.isLegalMove(hanoi._pegs[0], hanoi._pegs[2])).to.equal(true);
      (0, _chai.expect)(hanoi.isLegalMove(hanoi._pegs[1], hanoi._pegs[0])).to.equal(false);
      hanoi._pegs[2].pushDisc(hanoi._pegs[0].popDisc());
      (0, _chai.expect)(hanoi.isLegalMove(hanoi._pegs[0], hanoi._pegs[2])).to.equal(false);
      (0, _chai.expect)(hanoi.isLegalMove(hanoi._pegs[2], hanoi._pegs[0])).to.equal(true);
    });
  });

  describe('playHanoi(destIndex)', function () {
    it('Should move the tower from current peg to dest following tower of hanou rules', function () {
      var hanoi = new _TowerOfHanoi2.default(0);
      hanoi.playHanoi(2);
      (0, _chai.expect)(hanoi.getCurrentPeg()).to.equal(2);

      hanoi = new _TowerOfHanoi2.default(8);
      hanoi.playHanoi(0);
      (0, _chai.expect)(hanoi.getPegs()).to.eql(createTestTower(0));
      (0, _chai.expect)(hanoi.getCurrentPeg()).to.equal(0);
      hanoi.playHanoi(2);
      (0, _chai.expect)(hanoi.getPegs()).to.eql(createTestTower(2));
      hanoi.playHanoi(1);
      (0, _chai.expect)(hanoi.getPegs()).to.eql(createTestTower(1));
    });
  });
});
//# sourceMappingURL=TowerOfHanoi-test.js.map
