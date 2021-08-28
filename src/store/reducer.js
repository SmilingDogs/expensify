import { combineReducers } from "redux";
import expensesReducer from './expenses/reducer';
import filtersReducer from './filters/reducer';

const mainReducer = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
})

export default mainReducer;
