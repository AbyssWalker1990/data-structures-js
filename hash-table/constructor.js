class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += (key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }
}

const myHashTable = new HashTable();

console.log(myHashTable);
