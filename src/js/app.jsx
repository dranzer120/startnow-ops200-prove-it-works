import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance:'',
      rate:'',
      terms:'',
      monthlypay:0
    };
    this.handleChangeB = this.handleChangeB.bind(this);
    this.handleChangeR = this.handleChangeR.bind(this);
    this.handleChangeT = this.handleChangeT.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleChangeB(event) {
    this.setState({balance: event.target.value});
  }
  handleChangeR(event) {
    this.setState({rate: event.target.value});
  }
  handleChangeT(event) {
    this.setState({terms: event.target.value});
  }
  
  calculate() {
    
    var mrate = (this.state.rate/12)/100;
    var totalmonths = this.state.terms * 12;
    var monthlypay = this.state.balance * (mrate * Math.pow((1 + mrate),totalmonths) / (Math.pow(1 + mrate,totalmonths)-1));

    monthlypay = monthlypay.toFixed(2)

    this.setState({
      monthlypay: monthlypay
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>Mortgage Calculator</h1>
        <input name = 'principal' value = {this.state.balance} onChange={this.handleChangeB} placeholder = 'principal'/>
        <input name = 'interestRate' value = {this.state.rate} onChange={this.handleChangeR} placeholder = 'Interest Rate'/>
        <input name = 'loanTerm' value = {this.state.terms} onChange={this.handleChangeT} placeholder = 'loanTerm'/>
        <select name = 'period'>
          <option value = '12'>Monthly</option>
          <option value = '4'>Quarterly</option>
        </select>
        <button id = 'calculate' onClick={() => this.calculate()}> Calculate </button>
        <p id = 'output'>${this.state.monthlypay}</p>
      </div>
    );
  }
}
