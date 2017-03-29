import { insert } from './../dist/js/tree-functions'
import { expect } from 'chai';

describe('When insert() is used', function() {
  it('New nodes should be added at the correct position', function() {
    var tree = insert(13);
    var expectedTree = {
      comparable: 13,
      leftTree: null,
      rightTree: null
    }

    expect(tree).to.eql(expectedTree);
  });
});
