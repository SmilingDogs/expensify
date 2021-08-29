import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';
import { editExpense } from '../../store/expenses/actions';

const EditExpensePage = ({expenseToEdit, dispatch, history, match}) => {
  return (
    <div>
      <ExpenseForm
        expense={expenseToEdit}
        onSubmit={(exp) => {
          dispatch(editExpense(match.params.id, exp));
          history.push('/');
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, {match}) => {
  return {
    expenseToEdit: state.expenses.find((exp) => exp.id === match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);
