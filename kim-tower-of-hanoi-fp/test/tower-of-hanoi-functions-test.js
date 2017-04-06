'use strict';

var _towerOfHanoiFunctions = require('../dist/js/tower-of-hanoi-functions');

var _chai = require('chai');

'use strict';

function createHanoi(index, size) {
  var tmpHanoi = [[], [], []];
  return tmpHanoi.slice(0, index).concat((0, _towerOfHanoiFunctions.buildTower)(size, tmpHanoi[index])).concat(tmpHanoi.slice(index + 1));
}

describe('buildTower(size, peg)', function () {
  it('should return a peg with a tower of size size', function () {
    var peg = [];
    (0, _chai.expect)((0, _towerOfHanoiFunctions.buildTower)(3, peg)).to.eql([[3, 2, 1]]);
  });
});

describe('hanoi(pegs, start, dest, aux)', function () {
  it('should return pegs moved according to hanoi rules', function () {
    var pegs = [[8, 7, 6, 5, 4, 3, 2, 1], [], []];

    var expected = [[], [], [8, 7, 6, 5, 4, 3, 2, 1]];
    (0, _chai.expect)((0, _towerOfHanoiFunctions.hanoi)(pegs, 0, 2, 1)).to.eql(expected);

    expected = [[], [8, 7, 6, 5, 4, 3, 2, 1], []];
    (0, _chai.expect)((0, _towerOfHanoiFunctions.hanoi)(pegs, 2, 1, 0)).to.eql(expected);

    var pegs = [[], [], []];
    (0, _chai.expect)((0, _towerOfHanoiFunctions.hanoi)(pegs, 0, 2, 1)).to.eql(pegs);
  });
});
//# sourceMappingURL=tower-of-hanoi-functions-test.js.map
