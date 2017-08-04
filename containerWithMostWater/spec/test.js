describe('First Pass', () => {
  //first pass tests
  it('shouldExist', () => {
    should.exist(containerWithMostWater);
  });

  it('should work for [3, 1, 2, 4]', () => {
    let arr = [3, 1, 2, 4];
    let result = containerWithMostWater(arr);
    result.should.eql([0, 3]);
  });

  it('should work for [3, 1, 2, 4, 2, 2, 5]', () => {
    let arr = [3, 1, 2, 4, 2, 2, 5];
    let result = containerWithMostWater(arr);
    result.should.eql([3, 6]);
  });

  it('should work for [10, 3, 3, 10, 2, 2, 8]', () => {
    let arr = [10, 3, 3, 10, 2, 2, 8];
    let result = containerWithMostWater(arr);
    result.should.eql([0, 3]);
  });
});

describe('Second Pass', () => {
  //first pass tests
  it('should work for [10, 8, 8, 10, 2, 3, 2, 5]', () => {
    let arr = [10, 8, 8, 10, 2, 3, 2, 5];
    let result = containerWithMostWater(arr);
    result.should.eql([3, 7]);
  });
});