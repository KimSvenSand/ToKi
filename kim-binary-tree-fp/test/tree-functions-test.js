'use strict';

var _treeFunctions = require('./../dist/js/tree-functions');

var _chai = require('chai');

describe('When insert() is used', function () {
  it('New nodes should be added at the correct position', function () {
    var tree = (0, _treeFunctions.insert)(13);
    var expectedTree = {
      comparable: 13,
      leftTree: null,
      rightTree: null
    };

    (0, _chai.expect)(tree).to.eql(expectedTree);
  });
});
//# sourceMappingURL=tree-functions-test.js.map
