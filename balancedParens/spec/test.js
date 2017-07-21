describe('balancedParens', () => {
  //first pass tests
  it('should exist', () => {
    should.exist(balancedParens);
  });

  it('should return true for "(){}[]"', () => {
    let test = '(){}[]';
    balancedParens(test).should.be.true;
  });

  it('should return true for "({[]})"', () => {
    let test = '({[]})';
    balancedParens(test).should.be.true;
  });

  it('should return true for "()()[]{[]}[({})]"', () => {
    let test = '()()[]{[]}[({})]';
    balancedParens(test).should.be.true;
  });

  it('should return false for "(()))"', () => {
    let test = '(()))';
    balancedParens(test).should.be.false;
  });

  it('should return false for "("', () => {
    let test = '(';
    balancedParens(test).should.be.false;
  });

  it('should return false for ")("', () => {
    let test = ')(';
    balancedParens(test).should.be.false;
  });

  it('should return false for "}{"', () => {
    let test = '}{';
    balancedParens(test).should.be.false;
  });

  it('should return false for "]["', () => {
    let test = '}{';
    balancedParens(test).should.be.false;
  });

  it('should return true for "((((()))))"', () => {
    let test = '((((()))))';
    balancedParens(test).should.be.true;
  });

  it('should return false for "([{})]{}"', () => {
    let test = '([{})]{}';
    balancedParens(test).should.be.false;
  });

  it('should return false for "()[]{"', () => {
    let test = '()[]{';
    balancedParens(test).should.be.false;
  });

  it('should return false for "()[({(){[}]})]"', () => {
    let test = '()[({(){[}]})]';
    balancedParens(test).should.be.false;
  });

  it('should work on actual functions (bubbleSort)', () => {
    let bubbleSort = (arr) => {
      if (!arr || !Array.isArray(arr)) {
        return 'please enter in an array of numeric values';
      }

      let countSwitch;
      //set a while loop
      while (countSwitch !== 0) {
        countSwitch = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i + 1] < arr[i]) {
            //do a switch
            var firstVal = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = firstVal;
            countSwitch ++;
          }
        }
      }
      return arr;
    };

    let bubbleSortString = bubbleSort.toString();

    balancedParens(bubbleSortString).should.be.true;
  });

  // it('should return true for ""', () => {
  //   let test = '';
  //   balancedParens(test).should.be.true;
  // });

  // it('should return false for ""', () => {
  //   let test = '';
  //   balancedParens(test).should.be.true;
  // });
});
