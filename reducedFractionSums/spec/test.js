describe('reducedFractionSums', () => {
  //first pass tests
  it('should exist', () => {
    should.exist(reducedFractionSums);
  });

  it('should work for ["1/2+3+6", "3/15 + 2/12"]', () => {
    let result = reducedFractionSums(["1/2+3/6", "3/15+2/12"]);
  });
});
