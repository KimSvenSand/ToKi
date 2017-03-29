function insert(comparable, root) {
  if (!root) {
    return createNode(comparable);
  }

  var copyRoot = Object.assign({}, root); //Copy root

  if (comparable === copyRoot.comparable) {
    return copyRoot;
  } else if (comparable > copyRoot.comparable) {
    if (!copyRoot.rightTree) {
      copyRoot.rightTree = createNode(comparable);
      return copyRoot;
    } else {
      return insert(comparable, copyRoot.rightTree);
    }
  } else {
    if (!copyRoot.leftTree) {
      copyRoot.leftTree = createNode(comparable);
      return copyRoot;
    } else {
      return insert(comparable, copyRoot.leftTree);
    }
  }
}

function createNode(comparable) {
  return {
    comparable: comparable,
    rightTree: null,
    leftTree: null
  }
}

function inOrderTraversal(root) {
  var array = [];
  if (!root) {
    return [];
  }

  if (root.comparable === null) {
    return array;
  } else {
    array = array.concat(inOrderTraversal(root.leftTree));
    array = array.concat([root.comparable]);
    array = array.concat(inOrderTraversal(root.rightTree));
    return array;
  }
}

export {
  insert,
  createNode,
  inOrderTraversal
}
