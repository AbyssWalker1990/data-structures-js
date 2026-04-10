import { DoublyLinkedList } from "../doubly-linked-list-complete.js";

class DoublyLinkedListWithReverse extends DoublyLinkedList {
  reverse() {
    if (this.length <= 1) return false;

    let current = this.head;
    let temp = null;

    this.tail = this.head;

    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    if (temp) {
      this.head = temp.prev;
    }

    return true;
  }
}

const doublyLinkedList = new DoublyLinkedListWithReverse(1);
doublyLinkedList.push(2);
doublyLinkedList.push(3);
doublyLinkedList.push(4);
doublyLinkedList.push(5);

doublyLinkedList.reverse();

let head = doublyLinkedList.head;
while (head) {
  console.log(head.value);
  head = head.next;
}
