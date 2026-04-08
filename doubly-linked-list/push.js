class Node {
  constructor(value) {
    this.value = value;
  }

  toJSON() {
    return { value: this.value, next: this.next };
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }
}

const myDoublyLinkedlist = new DoublyLinkedList(1);
myDoublyLinkedlist.push(2);
console.log(myDoublyLinkedlist.push(3));

let temp = myDoublyLinkedlist.head;
while (temp) {
  console.log(temp.value);
  temp = temp.next;
}
