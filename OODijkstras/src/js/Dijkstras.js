import Graph from './graph.js';
'use strict';

export default class Dijkstras {
  constructor(){
    this.graph = new Graph();
  }

  addNodes(nodeArray){
    this.graph.addNodes(nodeArray);
  }

  addEdges(edgeArray){
    this.graph.addEdges(edgeArray);
  }

  runDijkstrasAlgorithm(startNode,endNode){
    if(startNode != endNode){
      this.graph.findNodeByName(startNode).setDist(0);
      var unvisitedNodes = this.graph.getUnvisitedNodes();
      var currentNode= this.graph.findNodeByDist();
      var currentConnection = "";
      var connectingEdges = "";
      while(unvisitedNodes.length != 0 || unvisitedNodes.indexOf(endNode) != -1){
        currentNode = this.graph.findNodeByDist();

        currentNode.setVisited(true);
        unvisitedNodes = this.graph.getUnvisitedNodes();
        connectingEdges = currentNode.getEdges();
        for(var i = 0;i < connectingEdges.length; i++){
          currentConnection = this.graph.findNodeByName(connectingEdges[i].getConnection());
          if(currentConnection != undefined && parseInt(currentConnection.getDist()) > parseInt(parseInt(currentNode.getDist()) + parseInt(connectingEdges[i].getWeight()))){
            currentConnection.setDist(parseInt(parseInt(currentNode.getDist()) + parseInt(connectingEdges[i].getWeight())));
            if(currentNode.getPath() == ""){
              currentConnection.setPath(currentNode.getName());
            }else{
              currentConnection.setPath(currentNode.getPath() + "-" + currentNode.getName());
            }
          }
        }
      }
      return this.graph.findVisitedNode(endNode).getDist();

    }else{
      return 0;
    }
  }


}
