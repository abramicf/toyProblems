describe('longestPalindromicString', () => {
  //first pass tests
  it('should exist', () => {
    should.exist(longestPalindromicString);
  });

  it('should work for "babad"', () => {
    let result = longestPalindromicString('babad');
    result.should.equal('aba');
  });

  it('should work for "abcde"', () => {
    let result = longestPalindromicString('abcde');
    result.should.equal('a');
  });

  it('should work for "cbbd"', () => {
    let result = longestPalindromicString('cbbd');
    result.should.equal('bb');
  });

  it('should work for "a"', () => {
    let result = longestPalindromicString('a');
    result.should.equal('a');
  });

  it('should work for "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"', () => {
    let result = longestPalindromicString('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    result.should.equal("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  });

  it('should work for "racecar"', () => {
    let result = longestPalindromicString('racecar');
    result.should.equal('racecar');
  });

});
