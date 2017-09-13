const expect = require('chai').expect;
const Calculator = require('../../src/js/lib/Calculator');

describe('Calculator', () => {
  let calculator = null;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should have an add function', () => {
    expect(calculator.add).to.exist;
  });

  it('should add 2 + 2 together correctly', () => {
    expect(calculator.add(2, 2)).to.equal(4);
  });

  it('should have an subtract function', () => {
      expect(calculator.subtract).to.exist;
  });

  it('should subtract 4 - 1 together correctly', () => {
      expect(calculator.subtract(4,1)).to.equal(3);
  });

  it('should have an divide function', () => {
      expect(calculator.divide).to.exist;
  });

  it('should divide 10 / 2 together correctly', () => {
      expect(calculator.divide(10,2)).to.equal(5);
  });
});