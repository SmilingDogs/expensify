import React from "react";
import { connect } from "react-redux";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeExpense } from "../../store/expenses/actions";

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => {
  // const dispatch = useDispatch();

  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>{amount} - {createdAt}</p>
      <button onClick={() => dispatch(removeExpense(id))}>Remove Expense</button>
    </div>
  );
};

export default connect()(ExpenseListItem);
//! Pure connect() gives access to dispatch() too
