import util from 'util';
import { insert, findNode, inOrderTraversal } from './js/tree-functions'
'use strict';

var size = 10000;

runMeasurements(size);

function runMeasurements(size) {
  var hrStart = process.hrtime();
  var startMem = process.memoryUsage().heapUsed;
  console.info('start:\n' + util.inspect(process.memoryUsage()));
  var tree = createRandomTree(size);
  console.info('after insert:\n' + util.inspect(process.memoryUsage()));
  inOrderTraversal(tree);
  console.info('after inOrderTraversal:\n' + util.inspect(process.memoryUsage()));
  findNode(getRandom(), tree);
  findNode(getRandom(), tree);
  findNode(getRandom(), tree);
  var endMem = process.memoryUsage().heapUsed;
  console.info('after 3x random findNode:\n' + util.inspect(process.memoryUsage()));

  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
  console.info('Initial memory usage: ' + startMem);
  console.info('Final memory usage: ' + endMem);
  console.info(hrEnd[0] * 1000 + hrEnd[1] / 1000000);
  console.info(endMem - startMem);
}

function createRandomTree(size, tree) {
  if (size <= 0) {
    return tree;
  } else {
    var random = getRandom();
    if (findNode(random, tree)) {
      return createRandomTree(size, insert(random, tree));
    } else {
      return createRandomTree(size - 1, insert(random, tree));
    }
  }
}

function getRandom() {
  return Math.floor((Math.random() * size * 10) + 1);
}
