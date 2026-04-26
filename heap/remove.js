class Heap {
  #heap = [];

  getHeap() {
    return [...this.#heap];
  }

  #leftChild(index) {
    return index * 2 + 1;
  }

  #rightChild(index) {
    return index * 2 + 2;
  }

  #parent(index) {
    return Math.floor((index - 1) / 2);
  }

  #swap(index1, index2) {
    [this.#heap[index1], this.#heap[index2]] = [
      this.#heap[index2],
      this.#heap[index1],
    ];
  }

  insert(value) {
    this.#heap.push(value);
    let current = this.#heap.length - 1;

    while (
      current > 0 &&
      this.#heap[current] > this.#heap[this.#parent(current)]
    ) {
      this.#swap(current, this.#parent(current));
      current = this.#parent(current);
    }
  }

  #sinkDown(index) {
    const size = this.#heap.length;
    let maxIndex = index;

    while (true) {
      let leftChild = this.#leftChild(index);
      let rightChild = this.#rightChild(index);

      if (leftChild < size && this.#heap[leftChild] > this.#heap[maxIndex]) {
        maxIndex = leftChild;
      }

      if (rightChild < size && this.#heap[rightChild] > this.#heap[maxIndex]) {
        maxIndex = rightChild;
      }

      if (maxIndex !== index) {
        this.#swap(index, maxIndex);
        index = maxIndex;
      } else {
        return;
      }
    }
  }

  remove() {
    if (this.#heap.length === 0) return null;

    if (this.#heap.length === 1) return this.#heap.pop();

    const maxValue = this.#heap[0];
    this.#heap[0] = this.#heap.pop();

    this.#sinkDown(0);

    return maxValue;
  }
}

const myHeap = new Heap();
myHeap.insert(99);
myHeap.insert(72);
myHeap.insert(61);
myHeap.insert(58);

console.log(myHeap.getHeap());

myHeap.insert(100);

console.log(myHeap.getHeap());

myHeap.insert(75);

console.log(myHeap.getHeap());

console.log('--- removing ---');
console.log('removed:', myHeap.remove());
console.log('heap:', myHeap.getHeap());

console.log('removed:', myHeap.remove());
console.log('heap:', myHeap.getHeap());

console.log('removed:', myHeap.remove());
console.log('heap:', myHeap.getHeap());
