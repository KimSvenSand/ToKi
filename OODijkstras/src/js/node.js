import Edge from './edge.js';
'use strict';

export default class Node {
  constructor(name){
    this.name = name;
    this.connectingEdges = [];
    this.visited = false;
    this.dist = Number.MAX_SAFE_INTEGER;
    this.path = "";
  }

  getEdges(){
    return this.connectingEdges;
  }

  getName(){
    return this.name;
  }

  getIfVisited(){
    return this.visited;
  }

  getDist(){
    return this.dist;
  }

  getPath(){
    return this.path;
  }

  setVisited(visited){
    this.visited = visited;
  }

  setDist(newDist){
    this.dist = newDist;
  }

  setPath(newPath){
    this.path = newPath;
  }

  addEdge(to,weight){
    this.connectingEdges.push(new Edge(to,weight));
  }

}
