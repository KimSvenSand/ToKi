"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function hanoi(pegs, start, dest, aux, disc) {
  if (disc === undefined) {
    return hanoi(pegs, start, dest, aux, pegs[start].length);
  } else if (disc <= 0) {
    return pegs;
  } else {
    var pegsCopy = pegs.slice();
    if (disc <= 1) {
      pegsCopy[dest].push(pegsCopy[start].pop());
      return pegsCopy;
    } else {
      pegsCopy = hanoi(pegs, start, aux, dest, disc - 1);
      pegsCopy[dest].push(pegsCopy[start].pop());
      return hanoi(pegsCopy, aux, dest, start, disc - 1);
    }
  }
}

function buildTower(size, peg) {
  var tmpPeg = peg.slice();

  if (size <= 0) {
    return [tmpPeg];
  } else {
    return buildTower(size - 1, tmpPeg.concat(size));
  }
}

exports.hanoi = hanoi;
exports.buildTower = buildTower;
//# sourceMappingURL=tower-of-hanoi-functions.js.map
