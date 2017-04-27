import BinarySearchTree from './js/BinarySearchTree.js';
import _BinaryNode from './js/BinarySearchTree.js';
import util from 'util';
'use strict';

console.info('start' + util.inspect(process.memoryUsage()));
runBinarySearchTree();
console.info(util.inspect(process.memoryUsage()));

global.gc();
console.log(util.inspect(process.memoryUsage()))

function runBinarySearchTree() {
  let t0 = new Date();
  let hrStart = process.hrtime();

  let treeArray = [13,6,24,2,3,7,9,16,20,32,1];
  let BST = new BinarySearchTree(treeArray);
  /*var inserted = 0;
  while(inserted < 10){
    if(BST.insert(Math.floor((Math.random()*100)+1))){
      inserted++;
    }

  }*/
  console.log(BST.findNode(1).toString());

  let hrEnd = process.hrtime(hrStart);
  let t1 = new Date();

  console.info(t1 - t0 + 'ms');
  console.info(hrEnd[1] / 1000000 + 'ms');
}
