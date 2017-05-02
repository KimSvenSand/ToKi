import Dijkstras from './js/Dijkstras.js';
import util from 'util';
'use strict';


console.log("OOP Dijkstras algorithm:");
var nrOfElements = 20;
console.log("nrOfElements: "+ nrOfElements);
runDijkstrasAlgorithm(nrOfElements);
global.gc();

function runDijkstrasAlgorithm(nrOfElements) {
  var hrStart = process.hrtime();
  var memStart = process.memoryUsage().rss;
  console.info('start:\n' + util.inspect(process.memoryUsage()));

  var dijk = new Dijkstras();

  var nodes=[];
  var edges=[];
  for(var i = 1; i <= nrOfElements; i++){
    nodes.push("node"+i);
    if(i > 1){
      edges.push("node"+i+"-node"+(i-1)+"="+Math.floor((Math.random() * 10) + 1));
    if(i > 2){
      edges.push("node"+i+"-node"+(i-2)+"="+Math.floor((Math.random() * 10) + 1));
    }
    }
  }
  dijk.addNodes(nodes);
  dijk.addEdges(edges);
  var startNode = "node1";
  var endNode = "node"+nrOfElements;
  console.log(dijk.runDijkstrasAlgorithm(startNode,endNode));


  console.info('end:\n' + util.inspect(process.memoryUsage()));
  var memEnd = process.memoryUsage().rss;
  let hrEnd = process.hrtime(hrStart);
  console.info(hrEnd[0] + 's and ' + hrEnd[1] / 1000000 + 'ms');
  console.log("Memory: " + (memEnd - memStart));
}
