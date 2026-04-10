import { DoublyLinkedList } from "../doubly-linked-list-complete.js";

class DoublyLinkedListWithIsPalindrome extends DoublyLinkedList {
  isPalindrome() {
    if (this.length <= 1) return true;

    const forward = this.head;
    const backward = this.tail;

    for (let i = 0; i < this.length / 2; i++) {
      if (forward.value !== backward.value) return false;

      forward.next;
      backward.previous;
    }

    return true;
  }
}

const doublyLinkedList = new DoublyLinkedListWithIsPalindrome(1);
doublyLinkedList.push(2);
doublyLinkedList.push(3);
doublyLinkedList.push(2);
doublyLinkedList.push(1);

console.log(doublyLinkedList.isPalindrome());
