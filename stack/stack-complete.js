class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    const temp = this.top;

    this.top = this.top.next;
    temp.next = null;
    this.length--;

    return temp;
  }
}

const myStack = new Stack(22);
myStack.push(1);
myStack.push(2);
myStack.push(3);
