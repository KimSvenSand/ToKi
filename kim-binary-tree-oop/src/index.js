import util from 'util';
import BinarySearchTree from './js/BinarySearchTree'
'use strict';

var size = 100;

var hrStart = process.hrtime();
console.info('start:\n' + util.inspect(process.memoryUsage()));
runMeasurements(5, 8);
console.info('end:\n' + util.inspect(process.memoryUsage()));
let hrEnd = process.hrtime(hrStart);
console.info(hrEnd[1] / 1000000 + 'ms');

function runMeasurements(size) {
  var mTree = initiateTree(size);

  console.info('after insert:\n' + util.inspect(process.memoryUsage()));
  mTree.inOrderTraversal();
  console.info('after traversal:\n' + util.inspect(process.memoryUsage()));
}

function initiateTree(nrOfElements) {
  var mRandom = function() {
    return Math.floor((Math.random() * nrOfElements * 2) + 1);
  }
  var tree = new BinarySearchTree(mRandom());

  while (tree.getSize() < nrOfElements) {
    tree.insert(mRandom());
  }

  return tree;
}
