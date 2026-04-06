import { LinkedList } from "../linked-list-complete.js";

class LinkedListWithBinaryToDecimal extends LinkedList {
  binaryToDecimal() {
    let decimal = 0;
    let temp = this.head;

    while (temp) {
      decimal *= 2;
      decimal += temp.value;
      temp = temp.next;
    }

    return decimal;
  }
}

const linkedList = new LinkedListWithBinaryToDecimal(1);
linkedList.push(1);
linkedList.push(1);
linkedList.push(0);

console.log(linkedList.binaryToDecimal());
