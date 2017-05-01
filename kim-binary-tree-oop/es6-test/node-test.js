import Node from '../dist/js/Node';
import { expect } from 'chai';

describe('Node', function() {
  var node = new Node(13);

  describe('When a node is created', function() {
    it('A node should be created with the correct comparable', function() {
      expect(node.getComparable()).to.equal(13);
      expect(node.getLeftTree()).to.equal(null);
      expect(node.getRightTree()).to.equal(null);
    });
  });
});
