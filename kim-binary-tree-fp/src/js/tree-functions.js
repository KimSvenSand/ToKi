function insertOne(comparable, root) {
    if (!root) {
      return createNode(comparable);
    }

    var copyRoot = Object.assign({}, root); //Copy root

    if (comparable > copyRoot.comparable) {
      if (!copyRoot.rightTree) {
        copyRoot.rightTree = createNode(comparable);
      } else {
        copyRoot.rightTree = insert(comparable, copyRoot.rightTree);
      }
    } else if (comparable < copyRoot.comparable) {
      if (!copyRoot.leftTree) {
        copyRoot.leftTree = createNode(comparable);
      } else {
        copyRoot.leftTree = insert(comparable, copyRoot.leftTree);
      }
    }
    return copyRoot;
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

  if (!root.comparable) {
    return array;
  } else {
    array = array.concat(inOrderTraversal(root.leftTree));
    array = array.concat([root.comparable]);
    array = array.concat(inOrderTraversal(root.rightTree));
    return array;
  }
}

function findNode(comparable, root) {
  if (!root || !comparable) {
    return null;
  }

  if (comparable === root.comparable) {
    return root;
  } else if (comparable > root.comparable) {
    return findNode(comparable, root.rightTree);
  } else {
    return findNode(comparable, root.leftTree);
  }
}

function insert(comparables, root) {
  if (Number.isInteger(comparables)) {
    return insertOne(comparables, root);
  } else if (comparables.length === 1) {
    return insertOne(comparables[0], root);
  } else {
    return insert(comparables.slice(1), insertOne(comparables[0], root));
  }
}

export {
  insert,
  createNode,
  inOrderTraversal,
  findNode
}
