import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import React, { useState } from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enteredTitle: '', enteredAmount: '', enteredDate: '' };
  }
  myChangeHandler = event => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
    console.log(nam);
    console.log(val);
  };

  submitHandler = event => {
    event.preventDefault();

    const expenseData = {
      title: this.state.enteredTitle,
      amount: this.state.enteredAmount,
      date: new Date(this.state.enteredDate)
    };

    console.log(expenseData);
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              name="enteredTitle"
              onChange={this.myChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="text"
              name="enteredAmount"
              onChange={this.myChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              name="enteredDate"
              onChange={this.myChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
        <h1>
          Hello {this.state.enteredTitle} {this.state.enteredAmount}{' '}
          {this.state.enteredDate}
        </h1>
      </form>
    );
  }
}

ReactDOM.render(<ExpenseForm />, document.getElementById('root'));
