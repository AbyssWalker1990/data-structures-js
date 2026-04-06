import { LinkedList, Node } from "../linked-list-complete.js";

class LinkedListWithReverseBetweenWithoutTail extends LinkedList {
  reverseBetween(m, n) {
    if (this.head === null) return;

    const dummy = new Node(0);
    dummy.next = this.head;
    let prev = dummy;

    for (let i = 0; i < m; i++) {
      prev = prev.next;
    }

    let current = prev.next;
    for (let i = 0; i < n - m; i++) {
      const temp = current.next;
      current.next = temp.next;
      temp.next = prev.next;
      prev.next = temp;
    }

    this.head = dummy.next;
  }
}

const linkedList = new LinkedListWithReverseBetweenWithoutTail(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);

linkedList.reverseBetween(1, 3);

let temp = linkedList.head;
while (temp) {
  console.log(temp.value);
  temp = temp.next;
}
