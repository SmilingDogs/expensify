import React, { PureComponent } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const now = moment();
console.log(now.format("Do MMM YYYY"));

class ExpenseForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      note: props.expense ? props.expense.note : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: "",
    };

  }
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  getDescription = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  getNote = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onFormSubmit = (e) => {
    const { description, amount } = this.state;
    e.preventDefault();
    if (!description || !amount) {
      this.setState({ error: "Please provide description and/or amount!" });
    } else {
      const { description, amount, createdAt, note } = this.state;
      const { onSubmit } = this.props;
      this.setState({ error: "" });
      onSubmit({
        description: description,
        amount: parseFloat(amount, 10) * 100, //todo приведение String "2.34" => to Number 2.34
        createdAt: createdAt.valueOf(),
        note:note
      });
    }
  };

  render() {
    const {
      createdAt,
      description,
      amount,
      note,
      calendarFocused,
      error,
    } = this.state;
    console.log(createdAt);
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={description}
            onChange={this.getDescription}
          />
          <div>
            <input
              type="text"
              placeholder="Amount"
              value={amount}
              onChange={this.onAmountChange}
            />
          </div>
          <SingleDatePicker
            date={createdAt}
            onDateChange={this.onDateChange}
            focused={calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            displayFormat="DD/MM/YYYY"
          />
          <div>
            <textarea
              placeholder="Add a note for your expense (optional)"
              value={note}
              onChange={this.getNote}
            ></textarea>
          </div>
          <div>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
