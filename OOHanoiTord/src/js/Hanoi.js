'use strict';
import Peg from './peg.js';
export default class Hanoi {
  constructor(){
    this.moves = [];
    this.pegs = [new Peg(),new Peg(),new Peg()];
  }
  towerOfHanoi(numberOfDisks){
  // direction of rotation of the smallest disk
  var dir = 0;
  if(numberOfDisks % 2 == 0){
    dir = 1;
  }else{
    dir = -1;
  }
  var currentPeg = 0;
  var previousPeg = 0;

  this.pegs[0].buildTower(numberOfDisks);


  var numberOfMoves = Math.pow(2,numberOfDisks) - 1;

  var next = [1, 2, 0];
  var prev = [2, 0, 1];

  var moveSmallest = true;

  for (var i = 0; i < numberOfMoves; i++) {
      //Moves smallest disk to make place for other disks to move
      if (moveSmallest) {
        previousPeg = currentPeg;
        currentPeg = (previousPeg + dir + 3) % 3;
        this.moveDisk(previousPeg, currentPeg, this.pegs, this.moves);
      }
      //Moves other disks
      else {
        if (this.pegs[next[currentPeg]].topDiskSize() > this.pegs[prev[currentPeg]].topDiskSize()) {
          this.moveDisk(prev[currentPeg], next[currentPeg]);
        }
        else {
          this.moveDisk(next[currentPeg], prev[currentPeg]);
        }
    }
    moveSmallest = !moveSmallest;
  }
  var endResult = [];
  for (var i = 0; i < this.pegs.length; i++) {
    endResult.push(this.pegs[i].toString());
  }
  endResult.push(numberOfMoves);
  return endResult;
 }

 moveDisk(from, to) {
   this.moves.push([from+1 +" -> "+ to+1]);
   this.pegs[to].addDisk(this.pegs[from].removeTopDisk());
 }

 resetHanoi(){
   this.moves = [];
   this.pegs = [new Peg(),new Peg(),new Peg()];
 }
}
