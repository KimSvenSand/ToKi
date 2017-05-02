import Node from './node.js';
'use strict';

export default class Graph{
  constructor(){
    this.nodes = [];
  }

  getNodes(){
    return this.nodes;
  }

  findNodeByName(nodeName){
    for (var i = 0; i < this.nodes.length; i++) {
      if(this.nodes[i].getName() == nodeName && this.nodes[i].getIfVisited() == false){
        return this.nodes[i];
      }
    }
    return undefined;
  }

  findNodeByDist(){
    var value = Number.MAX_SAFE_INTEGER;
    var place = -1;
    for (var i = 0; i < this.nodes.length; i++) {
      if(value > this.nodes[i].getDist() && this.nodes[i].getIfVisited() == false){
        value = this.nodes[i].getDist();
        place = i;
      }
    }
    return this.nodes[place];
  }

  getUnvisitedNodes(){
    var unvisitedNodes = [];
    for(var i = 0; i < this.nodes.length; i++){
      if(this.nodes[i].getIfVisited() == false){
        unvisitedNodes.push(this.nodes[i].getName());
      }
    }
    return unvisitedNodes;
  }

  addNodes(nodeArray){
    for(var i = 0; i < nodeArray.length; i++){
      this.nodes.push(new Node(nodeArray[i]));
    }
  }

  addEdges(edgeArray){
    var currentFromNode = "";
    var currentToNode = "";
    var currentEdgeLength = 0;
    for(var i = 0; i < edgeArray.length;i++){
      currentFromNode = edgeArray[i].slice(0,edgeArray[i].indexOf("-"));
      currentToNode = edgeArray[i].slice(edgeArray[i].indexOf("-")+1,edgeArray[i].indexOf("="));
      currentEdgeLength = edgeArray[i].slice(edgeArray[i].indexOf("=")+1,edgeArray[i].length);
      this.findNodeByName(currentFromNode).addEdge(currentToNode,currentEdgeLength);
      this.findNodeByName(currentToNode).addEdge(currentFromNode,currentEdgeLength);
    }
  }

  findVisitedNode(nodeName){
    for (var i = 0; i < this.nodes.length; i++) {
      if(this.nodes[i].getName() == nodeName && this.nodes[i].getIfVisited() == true){
        return this.nodes[i];
      }
    }
    return undefined;
  }
}
