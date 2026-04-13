import { Stack } from "../stack-complete.js";

function reverseString(string) {
  let stack;

  string.split("").forEach((element, index) => {
    if (index === 0) {
      stack = new Stack(element);
    } else {
      stack.push(element);
    }
  });

  let result = "";

  for (let i = stack.length; i > 0; i--) {
    result += stack.pop().value;
  }

  return result;
}

console.log(reverseString("Hello"));
