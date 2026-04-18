import util from "util";

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

  set(key, value) {
    const index = this._hash(key);

    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }

    this.dataMap[index].push([key, value]);

    return this;
  }
}

const myHashTable = new HashTable();

myHashTable.set("whashers", 100);
myHashTable.set("nails", 33);
myHashTable.set("descs", 4);

console.log(util.inspect(myHashTable, { showHidden: false, depth: null }));
