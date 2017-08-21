//Brute force solution
// longestPalindromicString = (s) => {
//   let arr = s.split('');
//   let len = arr.length - 1;
//   let palLeft = undefined;
//   let palRight = undefined;

//   let longestSoFar = {
//     palindrome: arr[0],
//     length: 1
//   };

//   for (let leftPointer = 0; leftPointer <= len; leftPointer++) {
//     for (let rightPointer = len; rightPointer > leftPointer; rightPointer--) {
//       let toBreak = false;
//       if (arr[leftPointer] === arr[rightPointer]) {
//         palLeft = leftPointer;
//         palRight = rightPointer;
//         while (palLeft < palRight) {
//           palLeft++;
//           palRight--;
//           if (arr[palLeft] !== arr[palRight]) {
//             toBreak = true;
//             break;
//           }
//         }
//         if (toBreak === true) {
//           continue;
//         }
//         let palLength = rightPointer - leftPointer + 1;
//         if (palLength >= longestSoFar.length) {
//           if (rightPointer === len) {
//             longestSoFar.palindrome = arr.slice(leftPointer).join('');
//           } else {
//             longestSoFar.palindrome = arr.slice(leftPointer, rightPointer + 1).join('');
//           }
//           longestSoFar.length = palLength;
//         }
//       }
//     }
//   }
//   return longestSoFar.palindrome;
// };





//linear solution
longestPalindromicString = (s) => {

  let arr = s.split('');
  console.log(arr);
  let len = arr.length - 1;
  let leftPointer = 0;
  let rightPointer = len;
  let palLeft = undefined;
  let palRight = undefined;


  //handles strings of length 1
  let longestSoFar = {
    palindrome: arr[0],
    length: 1
  };
  while (leftPointer < len) {
    //Case One:  left and right pointers are equal
    if (rightPointer === leftPointer) {
      leftPointer ++;
      rightPointer = len;
      continue;
    }
    //Case Two:  Values at the indicies indicated by the pointers are not equal
    if (arr[leftPointer] !== arr[rightPointer]) {
      rightPointer --;
      continue;
    }

    //Case Three:  Values at the indicies represented by left and right pointers ARE equal - defining the bounds for a new potential palindrome to consider
    if (arr[leftPointer] === arr[rightPointer] && palLeft === undefined && palRight === undefined) {
      palLeft = leftPointer;
      palRight = rightPointer;
      palLeft ++;
      palRight --;
      continue;
    }
    //Case Four:  'Drilling down' into the possible palindrome and assessing the values inside
    if (arr[leftPointer] === arr[rightPointer] && (palLeft < palRight)) {
      if (arr[palLeft] !== arr[palRight]) {
        palLeft = undefined;
        palRight = undefined;
        rightPointer --;
      } else {
        palLeft ++;
        palRight --;
        continue;
      }

    }
    //Case Five:  Comparing the palindrome against the 'longestSoFar'
    if (arr[leftPointer] === arr[rightPointer] && palRight <= palLeft) {
      let palLength = rightPointer - leftPointer + 1;
      if (palLength >= longestSoFar.length) {
        if (rightPointer === len) {
          longestSoFar.palindrome = arr.slice(leftPointer).join('');
        } else {
          longestSoFar.palindrome = arr.slice(leftPointer, rightPointer + 1).join('');
        }
        longestSoFar.length = palLength;
      }
      palLeft = undefined;
      palRight = undefined;
      rightPointer = len;
      leftPointer ++;
      continue;
    }
  }
  return longestSoFar.palindrome;
};





//shortened linear solution
// longestPalindromicString = (s) => {

//   let arr = s.split('');
//   console.log(arr);
//   let len = arr.length - 1;
//   let leftPointer = 0;
//   let rightPointer = len;
//   let palLeft = undefined;
//   let palRight = undefined;


//   //handles strings of length 1
//   let longestSoFar = {
//     palindrome: arr[0],
//     length: 1
//   };

//   while (leftPointer < len) {
//     if (arr[leftPointer] !== arr[rightPointer]) {
//       rightPointer --;
//       continue;
//     }
//     if (rightPointer === leftPointer) {
//       leftPointer ++;
//       rightPointer = len;
//       continue;
//     }
//     if (arr[leftPointer] === arr[rightPointer] && palLeft === undefined && palRight === undefined) {
//       palLeft = leftPointer;
//       palRight = rightPointer;
//       palLeft ++;
//       palRight --;
//       continue;
//     }
//     if (arr[leftPointer] === arr[rightPointer] && (palLeft < palRight)) {
//       if (arr[palLeft] !== arr[palRight]) {
//         palLeft = undefined;
//         palRight = undefined;
//         rightPointer --;
//       } else {
//         palLeft ++;
//         palRight --;
//         continue;
//       }
//     }
//     if (arr[leftPointer] === arr[rightPointer] && palRight <= palLeft) {
//       let palLength = rightPointer - leftPointer + 1;
//       if (palLength >= longestSoFar.length) {
//         if (rightPointer === len) {
//           longestSoFar.palindrome = arr.slice(leftPointer).join('');
//         } else {
//           longestSoFar.palindrome = arr.slice(leftPointer, rightPointer + 1).join('');
//         }
//         longestSoFar.length = palLength;
//       }
//       palLeft = undefined;
//       palRight = undefined;
//       rightPointer = len;
//       leftPointer ++;
//       continue;
//     }
//   }
//   return longestSoFar.palindrome;
// };

