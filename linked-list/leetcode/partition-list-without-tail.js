import { LinkedList, Node } from "../linked-list-complete.js";

class LinkedListWithPartitionListWithoutTail extends LinkedList {
  partitionListWithoutTail(x) {
    if (this.head === null) return;

    const dummy1 = new Node(0);
    const dummy2 = new Node(0);
    let prev1 = dummy1;
    let prev2 = dummy2;
    let current = this.head;

    while (current !== null) {
      if (current.value < x) {
        prev1.next = current;
        prev1 = current;
      } else {
        prev2.next = current;
        prev2 = current;
      }
      current = current.next;
    }

    prev2.next = null;
    prev1.next = dummy2.next;

    this.head = dummy1.next;
  }
}

const linkedList = new LinkedListWithPartitionListWithoutTail(3);
linkedList.push(8);
linkedList.push(5);
linkedList.push(10);
linkedList.push(2);
linkedList.push(1);

linkedList.partitionListWithoutTail(5);

let temp = linkedList.head;
while (temp) {
  console.log(temp.value);
  temp = temp.next;
}
