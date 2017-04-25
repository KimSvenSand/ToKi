import util from 'util';
import BinarySearchTree from './js/BinarySearchTree'
'use strict';

<<<<<<< HEAD
var size = 1000;
=======
var size = 100;
>>>>>>> 20aabe29a3a388a8f13f6f679d624c15ff35c5e1

runMeasurements(size);

function runMeasurements(size) {
  var hrStart = process.hrtime();
<<<<<<< HEAD
  var startMem = process.memoryUsage().heapUsed;
  console.info('start:\n' + util.inspect(process.memoryUsage()));
  var mTree = new BinarySearchTree(Math.floor((Math.random() * size * 10) + 1));
  mTree.initiateRandomTree(size);
  console.info('after insert:\n' + util.inspect(process.memoryUsage()));
  mTree.inOrderTraversal();
  console.info('after inOrderTraversal:\n' + util.inspect(process.memoryUsage()));
  mTree.findNode((Math.random() * size * 2) + 1);
  mTree.findNode((Math.random() * size * 2) + 1);
  mTree.findNode((Math.random() * size * 2) + 1);
  var endMem = process.memoryUsage().heapUsed;
  console.info('after 3x random findNode:\n' + util.inspect(process.memoryUsage()));

  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
  console.info('Initial memory usage: ' + startMem);
  console.info('Final memory usage: ' + endMem);
  console.info(hrEnd[0] * 1000 + hrEnd[1] / 1000000);
  console.info(endMem - startMem);
=======
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
>>>>>>> 20aabe29a3a388a8f13f6f679d624c15ff35c5e1
}
