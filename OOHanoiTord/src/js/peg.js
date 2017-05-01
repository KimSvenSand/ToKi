import Disk from './disk.js';
'use strict';


export default class Peg {
  constructor(){
    this.diskArray = [];
  }

  getNrOfDisks(){
    return this.diskArray.length;
  }

  addDisk(newDisk){
    this.diskArray.push(newDisk)
  }

  removeTopDisk(){
    return this.diskArray.pop();
  }

  buildTower(height){
    for(var i = height; i > 0; i--){
      this.diskArray.push(new Disk(i));
    }
  }

  topDiskSize(){
    if(this.diskArray.length === 0){
      return Number.MAX_SAFE_INTEGER;
    }else{
      return this.diskArray[this.diskArray.length-1].getSize();
    }
  }

  getDiskAt(place){
    return this.diskArray[place];
  }

  toString(){
    var disksContained = [];
    for(var i = 0; i < this.diskArray.length; i++){
      disksContained.push(this.getDiskAt(i).getSize());
    }

    return disksContained;
  }

}
