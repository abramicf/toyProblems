// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

describe('[Toy Problem Name]', () => {
  //first pass tests
  it('should exist', () => {
    should.exist(longestString);
  });

  it('should work for string "abcabcbb"', () => {
    longestString('abcabcbb').should.equal('abc');
  });

  it('should work for string "bbbbb"', () => {
    longestString('bbbbb').should.equal('b');
  });

  it('should work for string "pwwkew"', () => {
    longestString('pwwkew').should.equal('wke');
  });

  it('should work for string "c"', () => {
    longestString('c').should.equal('c');
  });
});
