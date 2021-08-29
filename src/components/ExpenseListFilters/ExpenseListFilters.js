import React, { useState } from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setEndDate,
  setStartDate,
} from "../../store/filters/actions";
import { DateRangePicker } from "react-dates";

const ExpenseListFilters = ({ filters, dispatch }) => {
  const [calendarFocused, setCalendarFocused] = useState(null);

  const onDatesChange = ({ startDate, endDate }) => {
    dispatch(setStartDate(startDate));
    dispatch(setEndDate(endDate));
  };
  const onFocusChange = (calendarFocused) =>
    setCalendarFocused(calendarFocused);

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
      <DateRangePicker
        startDate={filters.startDate} // momentPropTypes.momentObj or null,
        startDateId="startDate"
        endDate={filters.endDate} // momentPropTypes.momentObj or null,
        endDateId="endDate" // PropTypes.string.isRequired,
        onDatesChange={onDatesChange} // PropTypes.func.isRequired,
        focusedInput={calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={onFocusChange} // PropTypes.func.isRequired,
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}
      />
    </div>
  );
}; //todo чтобы у селектора работало onChange = e.target.value ==='date' , надо чтобы у <option value="date"></option>
//? connect(mapStateToProps) также дает доступ к dispatch(), т.е. mapDispatchToProps особо и не нужен...
const mapStateToProps = (state) => {
  return { filters: state.filters };
};

export default connect(mapStateToProps)(ExpenseListFilters);
