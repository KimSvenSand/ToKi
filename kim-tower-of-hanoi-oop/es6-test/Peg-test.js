import Peg from '../dist/js/Peg'
import Disc from '../dist/js/Disc'
import { expect } from 'chai'
'use strict'

describe('Disc', function() {
  function createDiscArray() {
    var array = [];

    array[0] = new Disc(5);
    array[1] = new Disc(4);
    array[2] = new Disc(3);
    array[3] = new Disc(2);
    array[4] = new Disc(1);

    return array;
  }

  describe('new Disc(nrOfDiscs)', function() {
    it('Should initiate a peg with nrOfDiscs Discs', function() {
      var peg = new Peg(5);
      expect(peg.getDiscs()).to.eql(createDiscArray());
      expect(peg.getNrOfDiscs()).to.equal(5);
      var peg = new Peg(0);
      expect(peg.getDiscs()).to.eql([]);
      expect(peg.getNrOfDiscs()).to.equal(0);
    });
  });

  describe('peak()', function() {
    it('should return copy of top disk', function() {
      var peg = new Peg(5);
      expect(peg.peak()).to.eql(new Disc(1));
      peg = new Peg(0);
      expect(peg.peak()).to.equal(null);
    });
  });

  describe('popDisc()', function() {
    it('Should remove top disc and return it', function() {
      var peg = new Peg(5);
      expect(peg.popDisc()).to.eql(new Disc(1));
      expect(peg.getDiscs()).to.eql(createDiscArray().slice(0, 4));

      peg = new Peg(0);
      expect(peg.popDisc()).to.eql(null);
      expect(peg.getDiscs()).to.eql([]);
    });
  });

  describe('pushDisc(disc)', function() {
    it('Should push disc and return true if successful', function() {
      var peg = new Peg(5);
      expect(peg.pushDisc()).to.equal(false);
      expect(peg.pushDisc(new Disc(1))).to.equal(false);
      expect(peg.getDiscs()).to.eql(createDiscArray());
      peg.popDisc();
      expect(peg.pushDisc(new Disc(1))).to.equal(true);
      expect(peg.getDiscs()).to.eql(createDiscArray());
    });
  });

  describe('getConsecutiveNrOfDiscs', function() {
    it('should return the number of consecutive discs', function() {
      var peg = new Peg(5);
      expect(peg.getNrOfConsecutiveDiscs()).to.equal(5);

      peg = new Peg(0);
      expect(peg.getNrOfConsecutiveDiscs()).to.equal(0);

      peg.pushDisc(new Disc(5));
      peg.pushDisc(new Disc(4));
      peg.pushDisc(new Disc(1));

      expect(peg.getNrOfConsecutiveDiscs()).to.equal(1);

      peg.popDisc();
      peg.popDisc();
      peg.pushDisc(new Disc(2));
      peg.pushDisc(new Disc(1));

      expect(peg.getNrOfConsecutiveDiscs()).to.equal(2);
    });
  });
})
