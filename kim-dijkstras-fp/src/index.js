import { dijkstras, getNeighborEdges, getNeighborNodes } from './js/dijkstras-functions'
import util from 'util';
'use strict';

var nodes = ['node1', 'node2', 'node3', 'node4', 'node5', 'node6'];
var edges = {
  'node1-node2': 7,
  'node1-node3': 2,
  'node1-node4': 8,
  'node2-node4': 6,
  'node3-node4': 3,
  'node3-node5': 4,
  'node4-node5': 5,
  'node4-node6': 1,
  'node5-node6': 2
}

//console.log(getNeighborNodes('node4', edges));
console.log(dijkstras(nodes, edges, 'node1', 'node4'));
