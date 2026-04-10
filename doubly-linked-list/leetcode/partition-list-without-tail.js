import { DoublyLinkedList, Node } from "../doubly-linked-list-complete.js";

class DoublyLinkedListWithPartitionList extends DoublyLinkedList {
  partitionList(x) {
    if (!this.head) return;

    const dummy1 = new Node(0);
    const dummy2 = new Node(0);

    let prev1 = dummy1;
    let prev2 = dummy2;

    let current = this.head;

    while (current) {
      const nextNode = current.next;

      current.next = null;
      current.prev = null;

      if (current.value < x) {
        prev1.next = current;
        current.prev = prev1;
        prev1 = current;
      } else {
        prev2.next = current;
        current.prev = prev2;
        prev2 = current;
      }

      current = nextNode;
    }

    prev2.next = null;

    prev1.next = dummy2.next;

    if (dummy2.next) {
      dummy2.next.prev = prev1;
    }

    this.head = dummy1.next;

    if (this.head) {
      this.head.prev = null;
    }
  }
}

const doublyLinkedList = new DoublyLinkedListWithPartitionList(3);
doublyLinkedList.push(8);
doublyLinkedList.push(5);
doublyLinkedList.push(10);
doublyLinkedList.push(2);
doublyLinkedList.push(1);

doublyLinkedList.partitionList(5);

let temp = doublyLinkedList.head;
while (temp) {
  console.log(temp.value);
  temp = temp.next;
}
