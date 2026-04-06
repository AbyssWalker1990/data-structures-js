import { LinkedList } from "../linked-list-complete.js";

class LinkedListKthNodeFromTheEnd extends LinkedList {
  findKthFromEnd(k) {
    let slow = this.head;
    let fast = this.head;

    for (let i = 0; i < k; ++i) {
      if (fast === null) {
        return null;
      }
      fast = fast.next;
    }

    while (fast !== null) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow;
  }
}

const linkedList = new LinkedListKthNodeFromTheEnd(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
// linkedList.push(5);

// make a LOOP
console.log(linkedList.findKthNodeFromTheEnd(1));
