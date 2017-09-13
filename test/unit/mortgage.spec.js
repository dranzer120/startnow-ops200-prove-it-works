const expect = require('chai').expect;
const MortgageCalculator = require('../../src/js/lib/Mortgage');

describe('MortgageCalculator', () => {
  let mcalculator = null;

  beforeEach(() => {
    mcalculator = new MortgageCalculator();
  });

  it('should have a calmonthPay function', () => {
    expect(mcalculator.calmonthPay).to.exist;
  });

  it('should have a monthlyInterest function', () => {
      expect(mcalculator.monthlyInterest).to.exist;
  });

  it('should have a totalMonth function', () => {
      expect(mcalculator.totalMonth).to.exist;
  });


});