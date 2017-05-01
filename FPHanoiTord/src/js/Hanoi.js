'use strict';

export function hanoi(disk,start,dest,aux,steps){
  var diskCopy=disk,startCopy=start.slice(),destCopy=dest.slice(),auxCopy=aux.slice(),stepsCopy=steps;
  if(diskCopy == 1){
    stepsCopy++;
    destCopy.push(startCopy.pop());
  }else if(diskCopy != 0){
    var [startCopy,destCopy,auxCopy,stepsCopy] = hanoi(diskCopy-1, startCopy, auxCopy, destCopy,stepsCopy);
    stepsCopy++;
    destCopy.push(startCopy.pop());
    var [auxCopy,startCopy,destCopy,stepsCopy] = hanoi(diskCopy-1, auxCopy, destCopy, startCopy,stepsCopy);
  }
  return [startCopy,auxCopy,destCopy,stepsCopy];
}


export function createStartPeg(nrOfDisks,peg){
  var pegCopy = peg.slice();
  if(nrOfDisks > 0){
    pegCopy.push(nrOfDisks);
    pegCopy = createStartPeg(nrOfDisks-1, pegCopy);
  }
  return pegCopy;
}
