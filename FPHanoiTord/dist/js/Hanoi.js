'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hanoi = hanoi;
exports.createStartPeg = createStartPeg;
function hanoi(disk, start, dest, aux, steps) {
  if (disk == 1) {
    steps++;
    dest.push(start.pop());
  } else if (disk != 0) {
    var a = hanoi(disk - 1, start, aux, dest, steps);
    start = a[0];
    dest = a[1];
    aux = a[2];
    steps = a[3];
    steps++;
    dest.push(start.pop());
    var b = hanoi(disk - 1, aux, dest, start, steps);
    aux = b[0];
    start = b[1];
    dest = b[2];
    steps = b[3];
  }
  return [start, aux, dest, steps];
}

function createStartPeg(nrOfPegs, array) {
  if (nrOfPegs > 0) {
    array.push(nrOfPegs);
    createStartPeg(nrOfPegs - 1, array);
  }
  return array;
}
//# sourceMappingURL=Hanoi.js.map
