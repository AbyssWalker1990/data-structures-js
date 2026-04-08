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

  pop() {
    if (this.length === 0) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }

    this.length--;

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  shift() {
    if (this.length === 0) return undefined;

    const temp = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }

    this.length--;

    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;

    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;

      for (let i = this.length - 1; i > index; i--) {
        console.log(temp.value);
        temp = temp.prev;
      }
    }

    return temp;
  }

  set(index, value) {
    const temp = this.get(index);

    if (temp) {
      temp.value = value;
      return true;
    }

    return false;
  }
}

const myDoublyLinkedlist = new DoublyLinkedList(0);
myDoublyLinkedlist.push(1);
myDoublyLinkedlist.push(2);
myDoublyLinkedlist.push(3);
