import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";
import { editExpense, removeExpense } from "../../store/expenses/actions";

const EditExpensePage = ({ expenseToEdit, dispatch, history, match }) => {
  const url = match.url.split("/")[1]

  return (
    <div>
      <ExpenseForm
        location={url}
        expense={expenseToEdit}
        onSubmit={(exp) => {
          dispatch(editExpense(match.params.id, exp));
          history.push("/");
        }}
      />
      <button
        onClick={(id) => {
          dispatch(removeExpense(match.params.id));
          history.push("/");
        }}
      >
        Remove Expense
      </button>
    </div>
  );
};

const mapStateToProps = (state, { match }) => {
  return {
    expenseToEdit: state.expenses.find((exp) => exp.id === match.params.id),
  };
};

export default connect(mapStateToProps)(EditExpensePage);
