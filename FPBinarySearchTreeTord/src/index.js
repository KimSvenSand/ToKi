import {inOrderTraversal} from './js/BinarySearchTree.js';
import {insertRandomValues} from './js/BinarySearchTree.js';
import {findNode} from './js/BinarySearchTree.js';
import util from 'util';
'use strict';

console.info("FP Tree search algorithms:");
var nrOfElements = 1000;
console.log("Number of elements: " + nrOfElements);
runBinarySearchTree(nrOfElements);

global.gc();

function runBinarySearchTree(nrOfElements) {
  var hrStart = process.hrtime();
  var startMem = process.memoryUsage().rss;
  console.info('start:\n' + util.inspect(process.memoryUsage()));
  let tree = insertRandomValues(nrOfElements,[]);
  console.info('after insert:\n' + util.inspect(process.memoryUsage()));
  inOrderTraversal(tree,0,[]);
  console.info('after inOrderTraversal:\n' + util.inspect(process.memoryUsage()));
  findNode(Math.floor((Math.random() * nrOfElements * 10) + 1),tree,0,0);
  findNode(Math.floor((Math.random() * nrOfElements * 10) + 1),tree,0,0);
  findNode(Math.floor((Math.random() * nrOfElements * 10) + 1),tree,0,0);
  var endMem = process.memoryUsage().rss;
  console.info('after 3x random findNode:\n' + util.inspect(process.memoryUsage()));

  let hrEnd = process.hrtime(hrStart);
  console.info('Runtime: ' + hrEnd[0] + ' s and ' + hrEnd[1] / 1000000 + ' ms');
  console.info('Memory: ' + (endMem - startMem));
}
