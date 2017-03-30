import BinarySearchTree from './js/BinarySearchTree.js';
import util from 'util';
'use strict';

console.info('start' + util.inspect(process.memoryUsage()));
runBinarySearchTree();
console.info(util.inspect(process.memoryUsage()));

global.gc();
console.log(util.inspect(process.memoryUsage()))

function runBinarySearchTree() {
  let treeArray = [];
  let BST = new BinarySearchTree(treeArray);
  var rnd = 0;
  var inserted = 0;
  while(inserted < 10){
    rnd = Math.floor((Math.random()*100)+1);
    if(BST.insert(rnd)){
      inserted++;
    }

  }
  //console.log(BST);
  console.log(BST.inOrderTraversal());

  let t0 = new Date();
  let hrStart = process.hrtime();



  let hrEnd = process.hrtime(hrStart);
  let t1 = new Date();

  console.info(t1 - t0 + 'ms');
  console.info(hrEnd[1] / 1000000 + 'ms');
}
