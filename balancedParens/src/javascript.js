balancedParens = (string) => {
  let storage = [];
  let openings = ['[', '{', '('];
  let closings = [']', '}', ')'];
  let opposites = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let char of string) {
    //if opening
    if (openings.includes(char)) {
      storage.push(char);
    } else if (closings.includes(char)) {
      let opposite = opposites[char];
      let lastIndex = storage[storage.length - 1];
      if (opposite !== lastIndex) {
        return false;
      } else {
        let popped = storage.pop();
      }
    } else {
      continue;
    }
  }
  if (storage.length > 0) {
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