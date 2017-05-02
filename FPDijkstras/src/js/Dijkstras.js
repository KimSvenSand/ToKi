'use strict';

export function dijkstras(graph,edges,startNode,endNode){
  if(startNode != endNode){
    var [path,dist] = createPathAndDist(graph.length,[],[]);

    dist[graph.indexOf(startNode)] = 0;

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
  var pathCopy = path.slice(),distCopy = dist.slice();
  if(length > 1){
    var [pathCopy, distCopy] = createPathAndDist(length-1,pathCopy,distCopy);
  }
  pathCopy.push("");
  distCopy.push(Number.MAX_SAFE_INTEGER);
  return [pathCopy,distCopy];

}

export function unvisitedNotEmpty(graph, edges,startNode,endNode,path,dist,unvisitedNodes,currentNode,currentValue){
  var pathCopy = path.slice(),distCopy = dist.slice(),unvisitedCopy = unvisitedNodes.slice(),nodeCopy = currentNode;
  if(unvisitedCopy.length > 0 && unvisitedCopy.indexOf(endNode) != -1){
    var [nodeCopy,value] = findCurrentNode(graph,graph.length,unvisitedCopy,distCopy,nodeCopy,currentValue);
    unvisitedCopy = unvisitedCopy.filter(function(node){
      return node != graph[nodeCopy];
    });
    var [pathCopy,distCopy] = assignPathAndDist(graph,edges,edges.length-1,pathCopy,distCopy,nodeCopy);

    var [pathCopy,distCopy] = unvisitedNotEmpty(graph,edges,startNode,endNode,pathCopy,distCopy,unvisitedCopy,nodeCopy,currentValue);
  }
  return [pathCopy,distCopy];

}

export function findCurrentNode(graph,graphLength,unvisitedNodes,dist,currentNode,currentValue){
  var nodeCopy = currentNode, valueCopy = currentValue;
  if(graphLength > 0){
    var [nodeCopy,valueCopy] = findCurrentNode(graph,graphLength-1,unvisitedNodes,dist,nodeCopy,valueCopy);
  }

  if(dist[graphLength] < valueCopy && unvisitedNodes.indexOf(graph[graphLength]) != -1){
    nodeCopy = graphLength;
    valueCopy = dist[graphLength];
  }
  return [nodeCopy,valueCopy];
}

export function assignPathAndDist(graph,edges,edgeLength,path,dist,currentNode){
  var pathCopy = path.slice(), distCopy = dist.slice();
  if(edgeLength > 0){
    var [pathCopy,distCopy] = assignPathAndDist(graph,edges,edgeLength-1,pathCopy,distCopy,currentNode);
  }

  var currentFromNode = edges[edgeLength].slice(0,edges[edgeLength].indexOf("-"));
  var currentToNode = edges[edgeLength].slice(edges[edgeLength].indexOf("-")+1,edges[edgeLength].indexOf("="));
  var currentEdgeLength = edges[edgeLength].slice(edges[edgeLength].indexOf("=")+1,edges[edgeLength].length);

  if(currentFromNode == graph[currentNode] && distCopy[graph.indexOf(currentToNode)] > dist[currentNode] + parseInt(currentEdgeLength)){
    distCopy[graph.indexOf(currentToNode)] = parseInt(distCopy[currentNode]) + parseInt(currentEdgeLength);
    if(pathCopy[graph.indexOf(currentFromNode)] == ""){
      pathCopy[graph.indexOf(currentToNode)] = currentFromNode+"-"+currentToNode;
    }else{
      pathCopy[graph.indexOf(currentToNode)] = pathCopy[graph.indexOf(currentFromNode)]+ "-"+currentToNode;
    }
  }else if(currentToNode == graph[currentNode] && dist[graph.indexOf(currentFromNode)] > dist[currentNode] + parseInt(currentEdgeLength)){
    distCopy[graph.indexOf(currentFromNode)] = parseInt(distCopy[currentNode]) + parseInt(currentEdgeLength);
    if(pathCopy[graph.indexOf(currentToNode)] == ""){
      pathCopy[graph.indexOf(currentFromNode)] = currentToNode+"-"+currentFromNode;
    }else{
      pathCopy[graph.indexOf(currentFromNode)] = pathCopy[graph.indexOf(currentToNode)]+"-"+currentFromNode;
    }
  }

  return [pathCopy,distCopy];
}
