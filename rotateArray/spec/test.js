// A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. For example, if left rotations are performed on array , then the array would become .

// Given an array of  integers and a number, , perform  left rotations on the array. Then print the updated array as a single line of space-separated integers.

// Input Format

// The first line contains two space-separated integers denoting the respective values of  (the number of integers) and  (the number of left rotations you must perform).
// The second line contains  space-separated integers describing the respective elements of the array's initial state.

// Constraints

// Output Format

// Print a single line of  space-separated integers denoting the final state of the array after performing  left rotations.

// Sample Input

// 5 4
// 1 2 3 4 5
// Sample Output

// 5 1 2 3 4
// Explanation

// When we perform  left rotations, the array undergoes the following sequence of changes:

// Thus, we print the array's final state as a single line of space-separated values, which is 5 1 2 3 4.

describe('rotateArrayLeft', () => {
  //first pass tests
  it('should exist', () => {
    should.exist(rotateArrayLeft);
  });

  it('d should work as appropriate, and rotate array left', () => {
    let arr = [1, 2, 3, 4, 5, 6];
    let result1 = rotateArrayLeft(arr, 1);
    result1.should.eql([2, 3, 4, 5, 6, 1]);
  });

  it('d should work as appropriate, and rotate array left', () => {
    let arr = [1, 2, 3, 4, 5, 6];
    let result2 = rotateArrayLeft(arr, 2);
    result2.should.eql([3, 4, 5, 6, 1, 2]);
  });

  it('d should work as appropriate, and rotate array left', () => {
    let arr = [1, 2, 3, 4, 5, 6];
    let result3 = rotateArrayLeft(arr, 3);
    result3.should.eql([4, 5, 6, 1, 2, 3]);
  });

  it('should work for arrays of length 1', () => {
    let arr = [5];
    let result = rotateArrayLeft(arr);
    result.should.eql([5]);
  });
});
