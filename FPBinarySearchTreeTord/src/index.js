import {createTree} from './js/BinarySearchTree.js';
import {insert} from './js/BinarySearchTree.js';
import {inOrderTraversal} from './js/BinarySearchTree.js';
import util from 'util';
'use strict';

console.info('start' + util.inspect(process.memoryUsage()));
runBinarySearchTree();
console.info(util.inspect(process.memoryUsage()));

global.gc();
console.log(util.inspect(process.memoryUsage()))

function runBinarySearchTree() {
  var tree = [];
  let inputArray = [];
  var treelength = 0;
  while(treelength < 10){
    var tree = insert(Math.floor((Math.random()*100)+1),tree);
    iterations++
  }
  console.log("Unsorted: "+tree);
  console.log("Sorted: "+inOrderTraversal(tree,0,[]));

  let t0 = new Date();
  let hrStart = process.hrtime();



  let hrEnd = process.hrtime(hrStart);
  let t1 = new Date();

  console.info(t1 - t0 + 'ms');
  console.info(hrEnd[1] / 1000000 + 'ms');
}
