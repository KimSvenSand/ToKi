import util from 'util';
import { insert, findNode, inOrderTraversal } from './js/tree-functions'
'use strict';

var size = 100;

var hrStart = process.hrtime();
console.info('start:\n' + util.inspect(process.memoryUsage()));
runMeasurements(size);
console.info('end:\n' + util.inspect(process.memoryUsage()));
let hrEnd = process.hrtime(hrStart);
console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');

function runMeasurements(size) {
  var tree = createRandomTree(size);
  console.info('after insert:\n' + util.inspect(process.memoryUsage()));
  inOrderTraversal(tree);
  console.info('after traversal:\n' + util.inspect(process.memoryUsage()));
}

function createRandomTree(size, tree) {
  var mRandom = function() {
    return Math.floor((Math.random() * size * 2) + 1);
  }

  if (inOrderTraversal(tree).length >= size) {
    return tree;
  } else {
    return createRandomTree(size, insert(mRandom(), tree));
  }
}
