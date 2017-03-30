import util from 'util';
import BinarySearchTree from './js/BinarySearchTree'
'use strict';

var size = 100;

runMeasurements(size);

function runMeasurements(size) {
  var hrStart = process.hrtime();
  console.info('start:\n' + util.inspect(process.memoryUsage()));
  var mTree = initiateTree(size);
  console.info('after insert:\n' + util.inspect(process.memoryUsage()));
  mTree.inOrderTraversal();
  console.info('end:\n' + util.inspect(process.memoryUsage()));
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
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
