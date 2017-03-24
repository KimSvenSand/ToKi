import util from 'util';
import BinarySearchTree from './js/BinarySearchTree'
'use strict';

var mTree = new BinarySearchTree(13);
mTree.insert(6);
mTree.insert(20);
mTree.insert(2);
mTree.insert(9);
mTree.insert(16);
mTree.insert(24);
mTree.insert(32);
mTree.insert(3);
mTree.insert(7);

console.log(mTree.inOrderTraversal());
console.log(mTree.findNode(5));
console.log(mTree.findNode(6).getComparable());
