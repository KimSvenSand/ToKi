'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
class Hanoi {
  constructor() {
    this.moves = [];
    this.pegs = [[], [], []];
  }
  towerOfHanoi(numberOfDisks) {
    // direction of rotation of the smallest disk
    var dir = 0;
    if (numberOfDisks % 2 == 0) {
      dir = 1;
    } else {
      dir = -1;
    }
    //CHANGE moves and Pegs to global variables;
    var pegs = [[], [], []];
    var pegMin = 0;

    for (var i = 0; i < numberOfDisks; i++) {
      this.pegs[0].push(numberOfDisks - i);
    }

    var numberOfMoves = Math.pow(2, numberOfDisks) - 1;

    // To avoid using % operator we precompute next and prev tables
    var next = [1, 2, 0];
    var prev = [2, 0, 1];

    var moveSmallest = true;

    for (i = 0; i < numberOfMoves; i++) {
      if (moveSmallest) {
        var oldPegMin = pegMin;
        // in JS -1 % 3 === -1, we add 3 to get positive result
        pegMin = (oldPegMin + dir + 3) % 3;
        this.moveDisk(oldPegMin, pegMin, this.pegs, this.moves);
      } else {
        if (this.topDiskSize(next[pegMin]) > this.topDiskSize(prev[pegMin])) {
          this.moveDisk(prev[pegMin], next[pegMin]);
        } else {
          this.moveDisk(next[pegMin], prev[pegMin]);
        }
      }
      moveSmallest = !moveSmallest;
    }
    console.log("Number of moves: " + numberOfMoves);
    return this.pegs;
  }

  topDiskSize(pegIndex) {
    if (this.pegs[pegIndex].length === 0) {
      return Number.MAX_VALUE;
    }
    var peg = this.pegs[pegIndex];
    return peg[peg.length - 1];
  }

  moveDisk(from, to) {
    // 1-FROM ROD, 2-USING ROD, 3-TO ROD
    this.moves.push([from + 1 + " -> " + to + 1]);
    this.pegs[to].push(this.pegs[from].pop());
  }
}
exports.default = Hanoi;
//# sourceMappingURL=Hanoi.js.map
