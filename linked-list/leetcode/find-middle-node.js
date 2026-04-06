import { LinkedList } from "../linked-list-complete.js";

class LinkedListWithFindMiddleNode extends LinkedList {
  // without using length with 1 loop
  findMiddleNode() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }
}

const linkedList = new LinkedListWithFindMiddleNode(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);

console.log(linkedList.findMiddleNode());
