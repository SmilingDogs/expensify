import React from "react";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../../store/expenses/actions";

const AddExpensePage = ({dispatch, history}) => {
  return (
    <div>
      <h2>Add Expense</h2>
      <ExpenseForm onSubmit={(exp) => {
          dispatch(addExpense(exp));
          history.push('/') //todo аналог <Redirect />

      }}
      />
    </div>
  );
}
export default connect()(AddExpensePage);
//todo после conneсt() мы получаем доступ к props.dispatch() props.history() автоматически
