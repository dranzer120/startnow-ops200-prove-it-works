module.exports = class Mortgage {
  constructor(principal, interest, term, period) {
    this.principal = principal;
    this.interest = interest;
    this.term = term;
    this.period = period;
  }

  get monthlyPayment() {
    return this.calmonthPay();
    // this getter should return the result of your monthly payment calculation
    // used in a previous assignment.
  }

  calmonthPay() {
    var monthlypay = this.principal * (monthlyInterest() * Math.pow((1 + MonthlyInterest()),totalMonth()) / (Math.pow(1 + monthlyInterest(),totalMonth())-1));
    return monthlypay;
  }

  monthlyInterest(){
      return (this.interest/12)/100;
  }

  totalMonth(){
      return this.term * 12;
  }
}