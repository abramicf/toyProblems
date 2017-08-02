describe('Swapping function', () => {

  it('should exist', () => {
    should.exist(swap);
  });

  xit('should swap properly', () => {
    let arr = [5, 6, 7, 4, 1, 2, 3];
    let result = swap(arr, 0, 6);
    result.should.eql([3, 6, 7, 4, 1, 2, 5]);
  });



});

describe('Partitioning function', () => {

  it('should exist', () => {
    should.exist(partition);
  });

  it('should work on [5, 6, 7, 4, 1, 2, 3]', () => {
    let arr = [5, 6, 7, 4, 1, 2, 3];
    let len = arr.length - 1;
    let result = partition(arr, 0, len);
    result.should.eql([3, 2, 1, 4, 7, 6, 5]);
  });

});

describe('quickSort function', () => {

  it('should exist', () => {
    should.exist(functionName);
  });
});