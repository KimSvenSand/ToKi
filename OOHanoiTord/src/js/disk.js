'use strict';


export default class Disk {
  constructor(size){
    this.diskSize = size;
  }

  getSize(){
    return this.diskSize;
  }
}
