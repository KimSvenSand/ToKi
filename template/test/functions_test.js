import { add } from '../js/functions';

describe('add(a, b)', function() {
  it('should return a + b', function() {
    expect(add(7, 8)).to.equal(15);
  });
});
