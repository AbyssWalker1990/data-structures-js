import { LinkedList } from "../linked-list-complete.js";

class LinkedListRemoveDuplicatesWithNestedLoop extends LinkedList {
  removeDuplicates() {
    let current = this.head;

    while (current !== null) {
      let runner = current;

      while (runner.next !== null) {
        if (runner.next.value === current.value) {
          runner.next = runner.next.next;
          this.length -= 1;
        } else {
          runner = runner.next;
        }
      }

      current = current.next;
    }

    return this;
  }
}

const linkedList = new LinkedListRemoveDuplicatesWithNestedLoop(1);
linkedList.push(2);
linkedList.push(1);
linkedList.push(3);
linkedList.push(4);
linkedList.push(2);
linkedList.push(5);
linkedList.push(5);

// make a LOOP
console.log(linkedList.removeDuplicates());
