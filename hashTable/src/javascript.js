class HashTable {
  constructor(length) {
    this.storage = [];
    this.storageLength = length;
  }

  //need to 1. Hash and 2. Hash and map to an index.
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
    let bucket = this.getHash(key, this.storageLength);
    let tuple = [key, value, bucket];
    if (!this.storage[bucket]) {
      this.storage[bucket] = [];
    }

    this.storage[index].push(tuple);
    console.log(tuple + ' has been added to hash!');
  }

  find(key, value) {
    let bucket = this.getHash(key, this.storageLength);

    if (!this.storage[bucket]) {
      return 'Item not in hash table!';
    };
    this.storage[bucket].forEach((tuple) => {
      if (tuple[0] === key && tuple[1] === value){
        return tuple;
      }
    });
    return 'Item not in hash table!';
  }
  remove(key, value) {
    let bucket = this.getHash(key, this.storageLength);

    if (!this.storage[bucket]) {
      return 'Item not in hash table!';
    };
    this.storage[bucket].forEach((tuple, tupleIndex) => {
      if (tuple[0] === key && tuple[1] === value) {
        let eliminated = this.storage[bucket].splice(tupleIndex, 1);
      }
    });
    this.showHash();
  }

  showHash() {
    let result = 'this.storage = [';
    result += '\n';

    this.storage.forEach((item, index) => {
      result += '    bucket at index number ' + index + ' [';
      item.forEach((innerItem, innerIndex) => {
        result += '[' + innerItem[0] + ', ' + innerItem[1] + ', ' + innerItem[2] + ']';
        if (innerIndex < item.length - 1) {
          result += ', ';
        }
      });

      result += ']';
      result += '\n';

    });
    result += '\n';
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

// class HashTable {
//   constructor(length) {
//     this.storage = [];
//     this.storageLength = length;
//   }

//   getHash(key) {

//   }

//   add(key, value) {

//   }
//   find(key) {

//   }
//   remove(key) {

//   }
  // showHash() {

  // }
// }