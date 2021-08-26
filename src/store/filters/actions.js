import {
  SET_END_DATE,
  SET_START_DATE,
  SET_TEXT_FILTER,
  SORT_BY_AMOUNT,
  SORT_BY_DATE,
} from "./types";
//* Setting action-generators for filtersReducer

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

export const setStartDate = (start) => ({
  type: SET_START_DATE,
  payload: start,
});

export const setEndDate = (end) => ({
  type: SET_END_DATE,
  payload: end,
});
