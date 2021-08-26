import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount} from "../../store/filters/actions";

const ExpenseListFilters = ({dispatch, filters, selectSortingByDate, selectSortingByAmount}) => {
  return (
    <div>
      <input
        type="text"
        value={filters.text}
        onChange={(e) => {
          dispatch(setTextFilter(e.target.value));
        }}
      />
      <select onChange={(e) => {
        if (e.target.value === 'date') {
          selectSortingByDate()
        }
        else if (e.target.value === 'amount') {
          selectSortingByAmount()
        }
      }}>
        <option value='date'>Date</option>
        <option value='amount'>Amount</option>
      </select>
    </div>
  );
} //todo чтобы у селектора работало onChange = e.target.value ==='somevalue , надо чтобы у <option value="somevalue"></option>
const mapStateToProps = (state) => {
  return {
    filters: state.filters,

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    selectSortingByDate: () => dispatch(sortByDate()),
    selectSortingByAmount: () => dispatch(sortByAmount())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
