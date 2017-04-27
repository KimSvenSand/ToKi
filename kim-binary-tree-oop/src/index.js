import util from 'util';
import BinarySearchTree from './js/BinarySearchTree'
'use strict';

console.log('Search tree algorithms OOP');
var size = 10000;
console.log("Data size: " + size);

runMeasurements(size);
global.gc();

function runMeasurements(size) {
  var hrStart = process.hrtime();
  var startMem = process.memoryUsage().rss;
  console.info('start:\n' + util.inspect(process.memoryUsage()));
  var mTree = new BinarySearchTree(Math.floor((Math.random() * size * 10) + 1));
  mTree.initiateRandomTree(size);
  console.info('after insert:\n' + util.inspect(process.memoryUsage()));
  mTree.inOrderTraversal();
  console.info('after inOrderTraversal:\n' + util.inspect(process.memoryUsage()));
  mTree.findNode((Math.random() * size * 2) + 1);
  mTree.findNode((Math.random() * size * 2) + 1);
  mTree.findNode((Math.random() * size * 2) + 1);
  var endMem = process.memoryUsage().rss;
  console.info('after 3x random findNode:\n' + util.inspect(process.memoryUsage()));

  let hrEnd = process.hrtime(hrStart);
  console.info('Runtime: ' + hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
  console.info('Memory: ' + (endMem - startMem));
}
