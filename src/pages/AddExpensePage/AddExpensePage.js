import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";
import { addExpense } from "../../store/expenses/actions";

const AddExpensePage = ({ dispatch, history }) => {
  return (
    <div>
      <h2>Add Expense</h2>
      <ExpenseForm
        onSubmit={(exp) => {
          dispatch(addExpense(exp));
          history.push("/");
        }}
      />
    </div>
  );
};
export default connect()(AddExpensePage);
//todo после пустого conneсt() мы получаем доступ к props.dispatch()
