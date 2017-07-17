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

  //second pass tests


  it('should return false for "([{})]{}"', () => {
    let test = '([{})]{}';
    balancedParens(test).should.be.false;
  });

  // it('should return false for "()[]{"', () => {
  //   let test = '';
  //   balancedParens(test).should.be.false;
  // });

  // it('should return true for ""', () => {
  //   let test = '';
  //   balancedParens(test).should.be.true;
  // });

  // it('should return false for ""', () => {
  //   let test = '';
  //   balancedParens(test).should.be.true;
  // });
});
