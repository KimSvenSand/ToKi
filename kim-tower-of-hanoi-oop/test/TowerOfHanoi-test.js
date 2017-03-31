'use strict';

var _TowerOfHanoi = require('../dist/js/TowerOfHanoi');

var _TowerOfHanoi2 = _interopRequireDefault(_TowerOfHanoi);

var _Peg = require('../dist/js/Peg');

var _Peg2 = _interopRequireDefault(_Peg);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

describe('TowerOfHanoi', function () {
  function createTestTower() {
    var array = [];

    array[0] = new _Peg2.default(5);
    array[1] = new _Peg2.default(0);
    array[2] = new _Peg2.default(0);

    return array;
  }

  describe('new TowerOfHanoi(nrOfPegs, nrOfDiscs)', function () {
    it('should create new tower with discs on first peg', function () {
      var hanoi = new _TowerOfHanoi2.default(5);
      (0, _chai.expect)(hanoi.getPegs()).to.eql(createTestTower());
    });
  });
});
//# sourceMappingURL=TowerOfHanoi-test.js.map
