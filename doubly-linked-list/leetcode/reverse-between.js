import { DoublyLinkedList, Node } from "../doubly-linked-list-complete.js";

class DoublyLinkedListWithReverseBetween extends DoublyLinkedList {
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
      if (temp.next) temp.next.prev = current;
      temp.next = prev.next;
      prev.next.prev = temp;
      prev.next = temp;
      temp.prev = prev;
    }

    this.head = dummy.next;
  }
}

const doublyLinkedList = new DoublyLinkedListWithReverseBetween(3);
doublyLinkedList.push(2);
doublyLinkedList.push(3);
doublyLinkedList.push(4);
doublyLinkedList.push(5);

doublyLinkedList.reverseBetween(1, 3);

let temp = doublyLinkedList.head;
while (temp) {
  console.log(temp.value);
  temp = temp.next;
}
