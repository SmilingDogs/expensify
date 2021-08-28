import {
  SET_END_DATE,
  SET_START_DATE,
  SET_TEXT_FILTER,
  SORT_BY_AMOUNT,
  SORT_BY_DATE,
} from "./types";
//* Setting action-generators for filtersReducer
                              //* if no argument is provided, text equals ""
export const setTextFilter = (text = "") => ({
  type: SET_TEXT_FILTER,
  payload:text,
});

export const sortByAmount = () => ({
  type: SORT_BY_AMOUNT,
});

export const sortByDate = () => ({
  type: SORT_BY_DATE,
});

export const setStartDate = (startDate) => ({
  type: SET_START_DATE,
  payload: startDate,
});

export const setEndDate = (endDate) => ({
  type: SET_END_DATE,
  payload: endDate,
});
