'use strict';

var _Node = require('../dist/js/Node');

var _Node2 = _interopRequireDefault(_Node);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Node', function () {
  var node = new _Node2.default(13);

  describe('When a node is created', function () {
    it('A node should be created with the correct comparable', function () {
      (0, _chai.expect)(node.getComparable()).to.equal(13);
      (0, _chai.expect)(node.getLeftTree()).to.equal(null);
      (0, _chai.expect)(node.getRightTree()).to.equal(null);
    });
  });
});
//# sourceMappingURL=node-test.js.map
