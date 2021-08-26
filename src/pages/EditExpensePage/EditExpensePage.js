import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";
import { editExpense } from "../../store/expenses/actions";


const EditExpensePage = ({ expense, dispatch, history }) => {
  //todo 2) закидываем полученный экземплярв пропс страницы
  return (
    <div>
      <h2>Edit Expense</h2>
      <ExpenseForm
        expense={expense} //todo 3) передаем его в пропсах в компонент Формы, для проверок
        onSubmit={(exp) => {
          dispatch(editExpense(expense.id, exp)); //todo 4) передаем какойid редактировать (1ый парм), новую редакцию (2парам  -exp). exp мы получаем в результате
          history.push("/");

        }}
      />
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
  }; //todo 1) получаем экземпляр затрат id которого === props.match.params.id из Редакс Стора
};
export default connect(mapStateToProps)(EditExpensePage);
