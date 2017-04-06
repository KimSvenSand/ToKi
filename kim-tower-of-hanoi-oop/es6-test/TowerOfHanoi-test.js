import TowerOfHanoi from '../dist/js/TowerOfHanoi'
import Peg from '../dist/js/Peg'
import { expect } from 'chai'
'use strict'

describe('TowerOfHanoi', function() {
  function createTestTower(towerIndex) {
    var array = [];

    for (var i = 0; i < 3; i++) {
      if (i === towerIndex) {
        array[i] = new Peg(8);
      } else {
        array[i] = new Peg(0);
      }
    }

    return array;
  }

  describe('new TowerOfHanoi(nrOfPegs, nrOfDiscs)', function() {
    it('should create new tower with discs on first peg', function() {
      var hanoi = new TowerOfHanoi(8);
      expect(hanoi.getPegs()).to.eql(createTestTower(0));
    });
  });

  describe('isLegalMove(start, dest)', function() {
    it('should return correct bool', function() {
      var hanoi = new TowerOfHanoi(3);
      expect(hanoi.isLegalMove(hanoi._pegs[0], hanoi._pegs[2])).to.equal(true);
      expect(hanoi.isLegalMove(hanoi._pegs[1], hanoi._pegs[0])).to.equal(false);
      hanoi._pegs[2].pushDisc(hanoi._pegs[0].popDisc());
      expect(hanoi.isLegalMove(hanoi._pegs[0], hanoi._pegs[2])).to.equal(false);
      expect(hanoi.isLegalMove(hanoi._pegs[2], hanoi._pegs[0])).to.equal(true);
    });
  });

  describe('playHanoi(destIndex)', function() {
    it('Should move the tower from current peg to dest following tower of hanou rules', function() {
      var hanoi = new TowerOfHanoi(0);
      hanoi.playHanoi(2);
      expect(hanoi.getCurrentPeg()).to.equal(2);

      hanoi = new TowerOfHanoi(8);
      hanoi.playHanoi(0);
      expect(hanoi.getPegs()).to.eql(createTestTower(0));
      expect(hanoi.getCurrentPeg()).to.equal(0);
      hanoi.playHanoi(2);
      expect(hanoi.getPegs()).to.eql(createTestTower(2));
      hanoi.playHanoi(1);
      expect(hanoi.getPegs()).to.eql(createTestTower(1));
    });
  });
})
