import { LinkedList } from "../linked-list-complete.js";

class LinkedListWithHasLoop extends LinkedList {
  //   without using length with 1 loop
  hasLoop() {
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }
}

const linkedList = new LinkedListWithHasLoop(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);

// make a LOOP
linkedList.tail.next = linkedList.head.next;

console.log(linkedList.hasLoop());
