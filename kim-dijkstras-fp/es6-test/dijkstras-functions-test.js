import { fillArrayWithElement, indexOfSmallest } from '../dist/js/dijkstras-functions'
import { expect } from 'chai'
'use strict'

describe('fillArrayWithElement(size, element)', function() {
  it('should return an array of size filled with element', function() {
    var expectedArray = ['Hej!', 'Hej!', 'Hej!', 'Hej!', 'Hej!', 'Hej!', 'Hej!', 'Hej!', 'Hej!', 'Hej!']
    expect(fillArrayWithElement(10, 'Hej!')).to.eql(expectedArray);
  });
});

describe('indexOfSmallest(array)', function() {
  it('should return index of the smallest element in array', function() {
    var expected = 7;
    var array = [7, 4, 8, 9, 2, 3, 14, 1, 6, 11];

    expect(indexOfSmallest(array)).to.equal(expected);
  });
});
