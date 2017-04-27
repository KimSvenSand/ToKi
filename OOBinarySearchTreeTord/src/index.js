import BinarySearchTree from './js/BinarySearchTree.js';
import _BinaryNode from './js/BinarySearchTree.js';
import util from 'util';
'use strict';

console.log("OOP Tree search algorithms:");
var nrOfElements = 10000;
console.log("Number of elements: " + nrOfElements);
runBinarySearchTree(nrOfElements);

global.gc();

function runBinarySearchTree() {
  var hrStart = process.hrtime();
  var startMem = process.memoryUsage().rss;
  console.info('start:\n' + util.inspect(process.memoryUsage()));

  let BST = new BinarySearchTree();
  BST.insertRandomValues(nrOfElements);
  console.info('after insert:\n' + util.inspect(process.memoryUsage()));
  BST.inOrderTraversal();
  console.info('after inOrderTraversal:\n' + util.inspect(process.memoryUsage()));
  BST.findNode(Math.floor((Math.random() * nrOfElements * 10) + 1));
  BST.findNode(Math.floor((Math.random() * nrOfElements * 10) + 1));
  BST.findNode(Math.floor((Math.random() * nrOfElements * 10) + 1));
  var endMem = process.memoryUsage().rss;
  console.info('after 3x random findNode:\n' + util.inspect(process.memoryUsage()));

  let hrEnd = process.hrtime(hrStart);
  console.info('Runtime: ' + hrEnd[0] + ' s and ' + hrEnd[1] / 1000000 + ' ms');
  console.info('Memory: ' + (endMem - startMem));
}
