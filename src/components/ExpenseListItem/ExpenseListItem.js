import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeExpense } from "../../store/expenses/actions";

const ExpenseListItem = ({ description, amount, createdAt, id, remove }) => {

  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>{amount} - {createdAt}</p>
      <button onClick={() => remove(id)}>Remove</button>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    remove: (id) => dispatch(removeExpense(id)),
  }; //todo означает что при вызове функции remove со значением id, id передается в dispatch(removeExpense(id))
};
export default connect(null, mapDispatchToProps)(ExpenseListItem);
//! обязательно писать connect(null, mapDispatchToProps) !!! иначе  - не работает
