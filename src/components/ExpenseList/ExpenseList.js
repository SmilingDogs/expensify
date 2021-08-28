import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "../ExpenseListItem/ExpenseListItem";
import selectedExpenses from "../../utils/func";

const ExpenseList = ({ expenses }) => {
  const expenseList = expenses.map((e) => (
    <ExpenseListItem key={e.id} {...e} />
  ));
  //todo {...e} directly gives access to all keys of individual expense: description, amount, createdAt, id
  return (
    <div>
      <h3>Expense List</h3>
      {expenses.length > 0 ? (
        <p>I have {expenses.length} expenses:</p>
      ) : (
        <p>Nothing so far...</p>
      )}
      <ul>{expenseList}</ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { expenses: selectedExpenses(state.expenses, state.filters) };
};

export default connect(mapStateToProps)(ExpenseList);
