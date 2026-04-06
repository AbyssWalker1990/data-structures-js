import { LinkedList, Node } from "../linked-list-complete.js";

class LinkedListWithSwapPairsWithoutTail extends LinkedList {
  swapPairs() {
    const dummy = new Node(0);
    dummy.next = this.head;

    let prev = dummy;
    let first = prev.next;

    while (first && first.next) {
      const second = first.next;
      prev.next = second;
      first.next = second.next;
      second.next = first;

      prev = first;
      first = first.next;
    }

    this.head = dummy.next;
  }
}

const linkedList = new LinkedListWithSwapPairsWithoutTail(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
linkedList.push(6);

linkedList.swapPairs(1, 3);

let temp = linkedList.head;
while (temp) {
  console.log(temp.value);
  temp = temp.next;
}
