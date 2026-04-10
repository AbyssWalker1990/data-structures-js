import { DoublyLinkedList, Node } from "../doubly-linked-list-complete.js";

class DoublyLinkedListWithSwapPairs extends DoublyLinkedList {
  swapPairs() {
    if (this.length === 0) return undefined;

    const dummy = new Node(0);
    dummy.next = this.head;
    this.head.prev = dummy;

    let prev = dummy;
    let first = prev.next;

    while (first && first.next) {
      const second = first.next;
      prev.next = second;
      first.next = second.next;
      if (second.next) second.next.prev = first;

      second.prev = first.prev;
      second.next = first;
      first.prev = second;

      prev = first;
      first = first.next;
    }

    this.head = dummy.next;
    this.head.prev = null;
  }
}

const doublyLinkedList = new DoublyLinkedListWithSwapPairs(3);
doublyLinkedList.push(2);
doublyLinkedList.push(3);
doublyLinkedList.push(4);
doublyLinkedList.push(5);
doublyLinkedList.push(6);

doublyLinkedList.swapPairs();

let temp = doublyLinkedList.head;
while (temp) {
  console.log(temp.value);
  temp = temp.next;
}
