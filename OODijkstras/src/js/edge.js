'use strict';

export default class Edge {
  constructor(endPoint,weight){
    this.endPoint = endPoint;
    this.weight = weight;
  }

  getWeight(){
    return this.weight;
  }

  getConnection(){
    return this.endPoint;
  }
}
