// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.






//Third Pass
longestString = (s) => {
  let arr = s.split('');
  let longestStringLength = 0;
  let storage = {};
  let i = 0;
  let j = 0;
  let n = arr.length;

  while (i < n && j < n) {
    let val = arr[j];
    if (!storage[val]) {
      storage[val] = true;
      longestStringLength = Math.max(longestStringLength, j - i);
      j++;
    } else {
      i++;
      let closeVal = arr[i];
      delete storage[closeVal];
    }
  }

  return longestStringLength;
};

//Second Pass
// longestString = (s) => {
//   let arr = s.split('');
//   let longestString = '';
//   let storage = {};
//   let str = '';

//   for (let i = 0; i < arr.length; i++) {
//     storage = {};
//     str = '';
//     for (let j = i; j < arr.length; j++) {
//       let val = arr[j];
//       if ( !storage[val] ) {
//         storage[val] = true;
//         str = str + val;
//       } else {
//         break;
//       }
//     }
//     if (str.length > longestString.length) {
//       longestString = str;
//     }
//   }
//   return longestString;
// };


//First Pass
// longestString = (s) => {
//   let arr = s.split('');
//   //define longest string
//   let longestString = '';
//   //loop through characters in string
//   for (let i = 0; i < arr.length; i++) {
//     //define storage object to track what you've hit already
//     let storage = {};
//     let str = '';
//     //loop through beginning at char i - when you hit a repeated character
//     for (let j = i; j < arr.length; j++) {
//       //when you hit the end of the string, evaluate its length against that of the current longest string.  If it's longer, replace it.
//       let val = arr[j]; //arr[0] = 'c'
//       if ( !storage[val] ) {
//         storage[val] = true; //'{ 'c': true }''
//         str = str + val;     //'' + 'c'
//       } else {
//         if (str.length > longestString.length) {
//           longestString = str;
//         }
//         break;
//       }
//     }
//   }
//   //return longest string
//   return longestString;
// };

