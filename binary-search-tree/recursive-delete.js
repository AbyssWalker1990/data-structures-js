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
    } else {
      currentNode.right = this.#recursiveInsert(value, currentNode.right);
    }

    return currentNode;
  }

  recursiveInsert(value) {
    if (this.root === null) this.root = new Node(value);

    return this.#recursiveInsert(value);
  }

  #recursiveDelete(value, currentNode) {
    if (currentNode === null) return null;

    if (value < currentNode.value) {
      currentNode.left = this.#recursiveDelete(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.#recursiveDelete(value, currentNode.right);
    } else {
      console.log("Implement for 4 different situations");
    }

    return currentNode;
  }

  recursiveDelete(value) {
    this.root = this.recursiveDelete(value, this.root);
  }
}

const myTree = new BinarySearchTree();

myTree.recursiveInsert(2);
myTree.recursiveInsert(1);
myTree.recursiveInsert(3);

console.log(myTree);
