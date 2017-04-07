
import util from 'util';
'use strict';

var nodes = ['node1', 'node2', 'node3'];
var edges = {
  'node1-node2': 4,
  'node1-node3': 5,
  'node3-node2': 3
}

var reversedName = 'node1-node2';
reversedName.replace(/(\w*)-(\w*)/, '$2-$1')

console.log(reversedName.replace(/(\w*)-(\w*)/, '$2-$1'));
