'use strict';

export function dijkstras(graph,edges,startNode,endNode){
  if(startNode != endNode){
    var pathAndDist = createPathAndDist(graph.length,[],[]);
    var path = pathAndDist[0];
    var dist = pathAndDist[1];

    dist[graph.indexOf(startNode)] = 0;
    path[graph.indexOf(startNode)] = "";

    var unvisitedNodes = graph.slice();
    var currentNode = 0;
    var currentValue = Number.MAX_SAFE_INTEGER;
    var pathAndDist = unvisitedNotEmpty(graph,edges,startNode,endNode,path,dist,unvisitedNodes,currentNode,currentValue);
    return pathAndDist[1][graph.indexOf(endNode)];
  }else{
    return 0;
  }
}

export function createPathAndDist(length,path,dist){
  if(length > 1){
    var arr = createPathAndDist(length-1,path,dist);
    path = arr[0];
    dist = arr[1];
  }
  path.push("");
  dist.push(Number.MAX_SAFE_INTEGER);
  return [path,dist];

}

export function unvisitedNotEmpty(graph, edges,startNode,endNode,path,dist,unvisitedNodes,currentNode,currentValue){
  if(unvisitedNodes.length > 0 && unvisitedNodes.indexOf(endNode) != -1){
    var arr = findCurrentNode(graph,graph.length,unvisitedNodes,dist,currentNode,currentValue);
    currentNode = arr[0];
    unvisitedNodes = removeVisitedItem(graph,unvisitedNodes,unvisitedNodes.length-1,currentNode,[]);
    var arr = assignPathAndDist(graph,edges,edges.length-1,path,dist,currentNode);
    path = arr[0];
    dist = arr[1];

    var arr = unvisitedNotEmpty(graph,edges,startNode,endNode,path,dist,unvisitedNodes,currentNode,currentValue);
    path = arr[0];
    dist = arr[1];
  }
  return [path,dist];

}

export function findCurrentNode(graph,graphLength,unvisitedNodes,dist,currentNode,currentValue){
  if(graphLength > 0){
    var arr = findCurrentNode(graph,graphLength-1,unvisitedNodes,dist,currentNode,currentValue);
    currentNode = arr[0];
    currentValue = arr[1];
  }

  if(dist[graphLength] < currentValue && unvisitedNodes.indexOf(graph[graphLength]) != -1){
    currentNode = graphLength;
    currentValue = dist[graphLength];
  }
  return [currentNode,currentValue];
}

export function assignPathAndDist(graph,edges,edgeLength,path,dist,currentNode){
  if(edgeLength > 0){
    var arr = assignPathAndDist(graph,edges,edgeLength-1,path,dist,currentNode);
    path = arr[0];
    dist = arr[1];
  }
  var currentFromNode = edges[edgeLength].slice(0,edges[edgeLength].indexOf("-"));
  var currentToNode = edges[edgeLength].slice(edges[edgeLength].indexOf("-")+1,edges[edgeLength].indexOf("="));
  var currentEdgeLength = edges[edgeLength].slice(edges[edgeLength].indexOf("=")+1,edges[edgeLength].length);

  if(currentFromNode == graph[currentNode] && dist[graph.indexOf(currentToNode)] > dist[currentNode] + parseInt(currentEdgeLength)){
    dist[graph.indexOf(currentToNode)] = parseInt(dist[currentNode]) + parseInt(currentEdgeLength);
    path[graph.indexOf(currentToNode)] = path[currentNode] +","+ currentFromNode+"-"+currentToNode+"="+currentEdgeLength;
  }else if(currentToNode == graph[currentNode] && dist[graph.indexOf(currentFromNode)] > dist[currentNode] + parseInt(currentEdgeLength)){
    dist[graph.indexOf(currentFromNode)] = parseInt(dist[currentNode]) + parseInt(currentEdgeLength);
    path[graph.indexOf(currentToNode)] = path[currentNode] +","+ currentToNode+"-"+currentFromNode+"="+currentEdgeLength;
  }

  return [path,dist];
}

export function removeVisitedItem(graph,unvisitedNodes,unvisitedLength,currentNode,newArray){
  if(unvisitedLength > 0){
    newArray = removeVisitedItem(graph,unvisitedNodes,unvisitedLength-1,currentNode,newArray);
  }
  if(unvisitedNodes[unvisitedLength] != graph[currentNode]){
    newArray.push(unvisitedNodes[unvisitedLength]);
  }
  return newArray;
}
