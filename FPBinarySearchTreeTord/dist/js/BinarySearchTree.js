'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTree = createTree;
exports.inputArrayInTree = inputArrayInTree;
exports.findPlaceForInput = findPlaceForInput;
exports.insert = insert;
exports.findNode = findNode;
exports.inOrderTraversal = inOrderTraversal;
function createTree(inputArray) {
  if (inputArray.length != 0) {
    var returnArray = inputArrayInTree(inputArray, 0, []);
  } else {
    var returnArray = [];
  }
  return returnArray;
}

function inputArrayInTree(inputArray, placeInInputArray, returnArray) {
  if (inputArray.length - 1 >= placeInInputArray) {
    returnArray = findPlaceForInput(returnArray, 0, inputArray[placeInInputArray]);
    returnArray = inputArrayInTree(inputArray, placeInInputArray + 1, returnArray);
  }
  return returnArray;
}

function findPlaceForInput(returnArray, place, input) {
  if (returnArray[place] == undefined) {
    returnArray[place] = input;
  } else {
    if (input < returnArray[place]) {
      returnArray = findPlaceForInput(returnArray, place * 2 + 1, input);
    } else if (input > returnArray[place]) {
      returnArray = findPlaceForInput(returnArray, place * 2 + 2, input);
    }
  }
  return returnArray;
}

function insert(input, tree) {
  var returnArray = findPlaceForInput(tree, 0, input);
  return returnArray;
}

function findNode(input, tree, place, returnValue) {
  if (tree[place] == undefined) {
    returnValue = undefined;
  } else if (input == tree[place]) {
    returnValue = tree[place];
  } else if (input < tree[place]) {
    returnValue = findNode(input, tree, place * 2 + 1);
  } else {
    returnValue = findNode(input, tree, place * 2 + 1);
  }
  return returnValue;
}

function inOrderTraversal(tree, place, returnArray) {
  if (tree[place * 2 + 1] != undefined) {
    returnArray = inOrderTraversal(tree, place * 2 + 1, returnArray);
  }
  if (tree[place] != undefined) {
    returnArray.push(tree[place]);
  }
  if (tree[place * 2 + 2] != undefined) {
    returnArray = inOrderTraversal(tree, place * 2 + 2, returnArray);
  }
  return returnArray;
}
//# sourceMappingURL=BinarySearchTree.js.map
