import BinarySearchTree from './js/BinarySearchTree.js';
import util from 'util';
'use strict';

console.info('start' + util.inspect(process.memoryUsage()));
runBinarySearchTree();
console.info(util.inspect(process.memoryUsage()));

global.gc();
console.log(util.inspect(process.memoryUsage()))

function runBinarySearchTree() {
  let treeArray = [3,2,5,1,4];
  let BST = new BinarySearchTree(treeArray);
  let t0 = new Date();
  let hrStart = process.hrtime();

  console.log(BST);

  let hrEnd = process.hrtime(hrStart);
  let t1 = new Date();

  console.info(t1 - t0 + 'ms');
  console.info(hrEnd[1] / 1000000 + 'ms');
}
