moveZeros = (nums) => {
  let pointer = 0;
  let len = nums.length;
  let count = 0;

  while (pointer < len) {
    console.log(len);

    if (nums[pointer] === 0) {
      let spliced = nums.splice(pointer, 1);
      nums.push(spliced[0]);
      len--;
    } else {
      pointer++;
    }
    count++;
  }
  return nums;
};



// moveZeros = (nums) => {
//   let len = nums.length; //3
//   let replaced = 0; //1
//   let modLen = len - replaced;  //2

//   for (let i = 0; i < modLen; i++) {  //1 //2
//     console.log(replaced);
//     console.log(modLen);
//     if (nums[i] === 0) {  //Yes
//       let spliced = nums.splice(i, 1);
//       nums.push(spliced[0]);
//       replaced++;
//     }
//   }
//   return nums;
// };