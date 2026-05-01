class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;

    while (true) {
      if (temp.value === newNode.value) {
        return undefined;
      }

      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }

        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }

        temp = temp.right;
      }
    }
  }

  contains(value) {
    if (this.root === null) return false;

    let temp = this.root;

    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }

    return false;
  }

  recursiveContains(value, currentNode = this.root) {
    if (currentNode === null) return false;

    if (currentNode.value === value) return true;

    if (value < currentNode.value) {
      return this.recursiveContains(value, currentNode.left);
    } else {
      return this.recursiveContains(value, currentNode.right);
    }
  }

  #recursiveInsert(value, currentNode = this.root) {
    if (currentNode === null) return new Node(value);

    if (value < currentNode.value) {
      currentNode.left = this.#recursiveInsert(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.#recursiveInsert(value, currentNode.right);
    }

    return currentNode;
  }

  recursiveInsert(value) {
    if (this.root === null) this.root = new Node(value);

    this.#recursiveInsert(value);
  }

  minValue(currentNode) {
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }

  #recursiveDelete(value, currentNode) {
    if (currentNode === null) return null;

    if (value < currentNode.value) {
      currentNode.left = this.#recursiveDelete(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.#recursiveDelete(value, currentNode.right);
    } else {
      if (currentNode.left === null && currentNode.right === null) {
        return null;
      } else if (currentNode.left === null) {
        return currentNode.right;
      } else if (currentNode.right === null) {
        return currentNode.left;
      } else {
        const subTreeMin = this.minValue(currentNode.right);
        currentNode.value = subTreeMin;

        currentNode.right = this.#recursiveDelete(
          subTreeMin,
          currentNode.right,
        );
      }
    }

    return currentNode;
  }

  recursiveDelete(value) {
    this.root = this.#recursiveDelete(value, this.root);
  }

  breadthFirstSearch() {
    let currentNode = this.root;
    let queue = [];
    let result = [];
    queue.push(currentNode);

    while (queue.length) {
      const node = queue.shift();
      result.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return result;
  }

  depthFirstSearchPreOrder() {
    let result = [];

    function traverse(node) {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return result;
  }

  depthFirstSearchPostOrder() {
    let result = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    }

    traverse(this.root);

    return result;
  }

  depthFirstSearchInOrder() {
    let result = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return result;
  }
}

const myTree = new BinarySearchTree();

myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);
myTree.insert(27);
myTree.insert(52);
myTree.insert(82);

console.log(myTree.depthFirstSearchInOrder());

/*
    EXPECTED OUTPUT:
    ----------------
    [ 18, 21, 27, 47, 52, 76, 82 ]

*/
