'use strict';

var _Shellsort = require('../dist/js/Shellsort');

var _Shellsort2 = _interopRequireDefault(_Shellsort);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

describe('Shellsort', function () {
  var shellsort = new _Shellsort2.default();
  var input = [9, 8, 1, 15, 3, 4, 11, 2, 7, 6];

  describe('calculateGapSequence(n)', function () {
    it('Returns a gapSequence for n-sized array', function () {
      var expectedArray = [109, 41, 19, 5, 1];
      (0, _chai.expect)(shellsort.calculateGapSequence(200)).to.eql(expectedArray);
    });
  });

  describe('shellsort()', function () {
    it('Should return a sorted array. If array is empty an emtpy array should be returned', function () {
      var expectedArray = [1, 2, 3, 4, 6, 7, 8, 9, 11, 15];
      (0, _chai.expect)(shellsort.shellsort(input)).to.eql(expectedArray);
      (0, _chai.expect)(shellsort.shellsort([])).to.eql([]);
    });
  });
});
//# sourceMappingURL=Shellsort-test.js.map
