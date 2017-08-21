describe('moveZeros', () => {
  //first pass tests
  it('should exist', () => {
    should.exist(moveZeros);
  });

  it('should work for [0,1,0,3,12]', () => {
    let result = moveZeros([0, 1, 0, 3, 12]);
    result.should.eql([1, 3, 12, 0, 0]);
  });

  it('should work for [0,0,1]', () => {
    let result = moveZeros([0, 0, 1]);
    result.should.eql([1, 0, 0]);
  });

});
