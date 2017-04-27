'use strict';

export function createTree(inputArray){
  if(inputArray.length != 0){
    var returnArray = inputArrayInTree(inputArray,0,[]);
  }
  else{
    var returnArray = [];
  }
  return returnArray;
}

export function insertRandomValues(nrOfElements,returnArray){
  var returnCopy = returnArray;
  if(nrOfElements > 0){
    returnCopy = insertRandomValues(nrOfElements-1,returnCopy);
    returnCopy = insert(Math.floor((Math.random() * nrOfElements * 10) + 1),0, returnCopy);
  }
  return returnCopy;
}

export function inputArrayInTree(inputArray,placeInInputArray,returnArray){
    var arrayCopy = returnArray.slice();
    if(inputArray.length-1 >= placeInInputArray){
      arrayCopy = insert(inputArray[placeInInputArray],0,arrayCopy);
      arrayCopy = inputArrayInTree(inputArray,(placeInInputArray+1),arrayCopy);
    }
  return arrayCopy;
}


export function insert(input,place,tree){
  var arrayCopy = tree.slice();
  if(arrayCopy[place] == undefined){
    arrayCopy[place] = input;
  }else{
    if(input < arrayCopy[place]){
      arrayCopy = insert(input,(place * 2 +1),arrayCopy);
    }else if(input > arrayCopy[place]){
      arrayCopy = insert(input,(place * 2 + 2),arrayCopy);
    }
  }
  return arrayCopy;
}

export function findNode(input,tree,place,returnValue){
  var returnCopy = returnValue;
  if(tree[place] == undefined){
    returnCopy = undefined;
  }else if(input == tree[place]){
    returnCopy = tree[place];
  }else if(input < tree[place]){
    returnCopy = findNode(input,tree,(place*2+1),returnCopy);
  }else{
    returnCopy = findNode(input,tree,(place*2+2),returnCopy);
  }
  return returnCopy;
}

export function inOrderTraversal(tree,place,returnArray){
  var arrayCopy = returnArray.slice();
  if(tree[place*2+1] != undefined){
    arrayCopy = inOrderTraversal(tree,(place*2+1),arrayCopy);
  }
  if(tree[place] != undefined){
    arrayCopy.push(tree[place]);
  }
  if(tree[place*2+2] != undefined){
    arrayCopy = inOrderTraversal(tree,(place*2+2),arrayCopy);
  }
  return arrayCopy;
}
