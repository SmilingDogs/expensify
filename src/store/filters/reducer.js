import moment from "moment";

import {
  SET_TEXT_FILTER,
  SORT_BY_AMOUNT,
  SORT_BY_DATE,
  SET_START_DATE,
  SET_END_DATE,
} from "./types";

//! Это объект state - filters(объект)
const initialFiltersState = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

const reducer = (state = initialFiltersState, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return { ...state, text: action.payload };
    case SORT_BY_AMOUNT:
      return { ...state, sortBy: "amount" };
    case SORT_BY_DATE:
      return { ...state, sortBy: "date" };
    case SET_START_DATE:
      return { ...state, startDate: action.payload };
    case SET_END_DATE:
      return { ...state, endDate: action.payload };
    default:
      return state;
  }
};
export default reducer;
