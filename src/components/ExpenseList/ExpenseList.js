import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "../ExpenseListItem/ExpenseListItem";


const ExpenseList = ({ expenses}) => {
  const expenseList = expenses.map(e => <ExpenseListItem key={e.id} {...e} />);

  return (
    <div>
      <h3>Expense List</h3>
      <p> I have {expenses.length} expenses:</p>
      <ul>{expenseList}</ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};
export default connect(mapStateToProps)(ExpenseList);
