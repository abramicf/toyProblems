class HashTable {
  constructor(length) {
    this.storage = [];
    this.storageLength = length;
  }

  getHash(str, max) {
    let hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = (hash << 5) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % max;
  }

  add(key, value) {
    let bucketIndex = this.getHash(key, this.storageLength);
    let tuple = [key, value, bucketIndex];

    if (!this.storage[bucketIndex]) {
      this.storage[bucketIndex] = [];
    }

    for (let i = 0; i < this.storage[bucketIndex].length; i++) {
      let item = this.storage[bucketIndex][i];
      if (item[0] === key) {
        item[1] = value;
        this.showHash();
        return;
      }
    }

    this.storage[bucketIndex].push(tuple);
    console.log(tuple + ' has been added to hash!');
  }

  find(key) {
    let bucketIndex = this.getHash(key, this.storageLength);

    if (!this.storage[bucketIndex]) {
      return 'Item not in hash table!';
    }

    for (let i = 0; i < this.storage[bucketIndex].length; i++) {
      let tuple = this.storage[bucketIndex][i];
      if (tuple[0] === key) {
        return tuple;
      }
    }
    return 'Item not in hash table!';
  }

  remove(key) {
    let bucketIndex = this.getHash(key, this.storageLength);

    if (!this.storage[bucketIndex]) {
      return 'Item not in hash table!';
    }

    this.storage[bucketIndex].forEach((tuple, tupleIndex) => {
      if (tuple[0] === key) {
        let eliminated = this.storage[bucketIndex].splice(tupleIndex, 1);
      }
    });
    this.showHash();
  }

  showHash() {
    let result = 'this.storage = [';
    result += '\n';

    this.storage.forEach((bucket, bucketIndex) => {
      result += '    bucket at index number ' + bucketIndex + ' [';
      bucket.forEach((tuple, tupleIndex) => {
        result += '[' + tuple[0] + ', ' + tuple[1] + ', ' + tuple[2] + ']';
        if (tupleIndex < bucket.length - 1) {
          result += ', ';
        }
      });

      result += ']';
      result += '\n';

    });
    result += ']';
    console.log(result);
  }
}

let myHash = new HashTable(10);

myHash.add('Chris', 'Orange');
myHash.add('Uma', 'Purple');
myHash.add('Rudy', 'Brown');
myHash.add('Callie', 'Baby Blue');
myHash.add('Nahanni', 'White');
myHash.add('Rani', 'Magenta');
myHash.add('Greg', 'Grey');
myHash.add('Adrian', 'Orange');
myHash.add('Kris', 'Blue');
myHash.add('Adam', 'Red');

myHash.showHash();





//STEP ONE:  CREATE HASH TABLE

class HashTable {
  constructor(length) {
    this.storage = [];
    this.storageLength = length;
  }

  getHash(key) {

  }

  add(key, value) {

  }
  find(key) {

  }
  remove(key) {

  }
  showHash() {

  }
}