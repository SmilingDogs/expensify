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

    const {expense} = this.props;
    this.state = {
      description: expense ? expense.description : '',
      note: expense ? expense.note : '',
      amount: expense ? (expense.amount / 100).toString() : '',
      createdAt: expense ? moment(expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description })); //* ES6 shorthand for description: description
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount })); //* ES6 shorthand for amount: amount
    }
  };

  onNoteChange = (e) => {
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
      this.setState(() => ({
        error: "Please provide description and/or amount!",
      }));
    } else {
      const { description, amount, createdAt, note } = this.state;
      const { onSubmit } = this.props;
      this.setState(() => ({ error: "" }));
      onSubmit({
        //todo onSubmit() колбек-функция передается пропсами из ExpenseForm. Принимается здесь и выполняется с аргументом exp - который берется из внутреннего state компонета ExpenseForm( NOT FROM REDUX STORE)
        description,
        amount: parseFloat(amount, 10) * 100, //todo приведение String "2.34" => to Number 2.34
        createdAt: createdAt.valueOf(),
        note,
      });
    }
  };

  render() {
    const { createdAt, description, amount, note, calendarFocused, error } = this.state;
    const {location} = this.props;
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={description}
            onChange={this.onDescriptionChange}
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
              onChange={this.onNoteChange}
            ></textarea>
          </div>
          <div>
            <button type="submit">{ location === 'edit' ? "Edit Expense" : "Add Expense" }</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
