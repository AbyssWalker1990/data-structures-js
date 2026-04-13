class Stack {
  constructor() {
    this.stackList = [];
  }

  getStackList() {
    return this.stackList;
  }

  printStack() {
    for (let i = this.stackList.length - 1; i >= 0; i--) {
      console.log(this.stackList[i]);
    }
  }

  isEmpty() {
    return this.stackList.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.stackList[this.stackList.length - 1];
    }
  }

  size() {
    return this.stackList.length;
  }

  push(value) {
    this.stackList.push(value);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.stackList.pop();
  }
}

const myStack = new Stack();
myStack.push(2);
myStack.push(4);
myStack.push(1);
myStack.push(3);

function sortStack(stack) {
  const additionalStack = new Stack();

  while (!stack.isEmpty()) {
    const temp = stack.pop();

    while (!additionalStack.isEmpty() && additionalStack.peek() > temp) {
      stack.push(additionalStack.pop());
    }

    additionalStack.push(temp);
  }

  while (!additionalStack.isEmpty()) {
    stack.push(additionalStack.pop());
  }
}

console.log(sortStack(myStack));
