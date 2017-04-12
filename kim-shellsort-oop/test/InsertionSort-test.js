'use strict';

var _InsertionSort = require('../dist/js/InsertionSort');

var _InsertionSort2 = _interopRequireDefault(_InsertionSort);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

describe('InsertionSort', function () {
  var insertionSort = new _InsertionSort2.default();
  var input = [9, 8, 1, 15, 3, 4, 11, 2, 7, 6];

  describe('insertionSort(array, gap)', function () {
    it('Should return a sortedArray given that gap is 1', function () {
      var expectedArray = [1, 2, 3, 4, 6, 7, 8, 9, 11, 15];
      (0, _chai.expect)(insertionSort.insertionSort(input, 1)).to.eql(expectedArray);
    });
  });
});
//# sourceMappingURL=InsertionSort-test.js.map
