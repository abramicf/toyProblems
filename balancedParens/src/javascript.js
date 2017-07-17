//Third Pass

//Second Pass
balancedParens = (string) => {
  //create storage
  let storage = {
    '(': {opposite: ')', count: 0},
    ')': {opposite: '(', count: 0},
    '{': {opposite: '}', count: 0},
    '}': {opposite: '{', count: 0},
    '[': {opposite: ']', count: 0},
    ']': {opposite: '[', count: 0},
  };
  let total = 0;

  for (let char of string) {
    if (storage[char]) {
      total += 1;
      if (char === ')' || char === '}' || char === ']') {
        let closingChar = storage[char];
        let openingChar = storage[storage[char]['opposite']];
        if (openingChar.count === 0 || closingChar.count === openingChar.count) {
          return false;
        }
//something should only be able to 'close' if all other parens are balanced (i.e. if their counts are equal).  So, prior to closing ANYTHING off, we should check the counts for the other two types to make sure they're equal.
        if (char === ')') {
          let testOne = storage[']']['count'] < storage['[']['count'];
          let testTwo = storage['}']['count'] < storage['{']['count'];
          if (testOne || testTwo) {
            return false;
          }
        }
      }
    }
    storage[char].count += 1;
  }


  if (total % 2 !== 0) {
    return false;
  }
  return true;
};


//First Pass
// balancedParens = (string) => {
//   //create storage
//   let storage = {
//     '(': {opposite: ')', count: 0},
//     ')': {opposite: '(', count: 0},
//     '{': {opposite: '}', count: 0},
//     '}': {opposite: '{', count: 0},
//     '[': {opposite: ']', count: 0},
//     ']': {opposite: '[', count: 0},
//   };
//   let total = 0;

//   for (let char of string) {
//     if (storage[char]) {
//       total += 1;
//       if (char === ')' || char === '}' || char === ']') {
//         let closingChar = storage[char];
//         let openingChar = storage[storage[char]['opposite']];
//         if (openingChar.count === 0 || closingChar.count === openingChar.count) {
//           return false;
//         }
//       }
//     }
//     storage[char].count += 1;
//   }


//   if (total % 2 !== 0) {
//     return false;
//   }
//   return true;
// };