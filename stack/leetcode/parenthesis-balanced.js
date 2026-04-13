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

// my solution
function isBalancedParentheses(string) {
  const stack = new Stack();

  const arr = string.split("");

  let balanced = true;

  arr.forEach((el) => {
    if (el === "(") {
      stack.push(el);
    } else if (el === ")" && stack.isEmpty()) {
      balanced = false;
    } else {
      stack.pop();
    }
  });

  if (stack.isEmpty() && balanced) return true;

  return false;
}

// Tutor's solution
function isBalancedParentheses(parentheses) {
  const stack = new Stack();

  for (const p of parentheses) {
    if (p === "(") {
      stack.push(p);
    } else if (p === ")") {
      if (stack.isEmpty() || stack.pop() !== "(") {
        return false;
      }
    }
  }
  return stack.isEmpty();
}

console.log(isBalancedParentheses("("));
