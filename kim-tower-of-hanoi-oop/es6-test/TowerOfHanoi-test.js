import TowerOfHanoi from '../dist/js/TowerOfHanoi'
import Peg from '../dist/js/Peg'
import { expect } from 'chai'
'use strict'

describe('TowerOfHanoi', function() {
  function createTestTower() {
    var array = [];

    array[0] = new Peg(5);
    array[1] = new Peg(0);
    array[2] = new Peg(0);

    return array;
  }

  describe('new TowerOfHanoi(nrOfPegs, nrOfDiscs)', function() {
    it('should create new tower with discs on first peg', function() {
      var hanoi = new TowerOfHanoi(5);
      expect(hanoi.getPegs()).to.eql(createTestTower());
    });
  });
})
