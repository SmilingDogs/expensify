import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
} from "../../store/filters/actions";

const ExpenseListFilters = ({ filters, dispatch }) => {
  return (
    <div>
      <input
        type="text"
        value={filters.text} //*reads the text filter value from Store
        onChange={(e) => {
          dispatch(setTextFilter(e.target.value)); //*writes the text filter value to Store
        }}
      />
      <select
        value={filters.sortBy}
        onChange={(e) => {
          if (e.target.value === "date") {
            dispatch(sortByDate());
          } else if (e.target.value === "amount") {
            dispatch(sortByAmount());
          }
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
}; //todo чтобы у селектора работало onChange = e.target.value ==='date' , надо чтобы у <option value="date"></option>
//? connect(mapStateToProps) также дает доступ к dispatch(), т.е. mapDispatchToProps особо и не нужен...
const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
