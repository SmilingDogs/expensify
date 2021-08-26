import { combineReducers } from "redux";
import expensesReducer from './expenses/reducer';
import filtersReducer from './filters/reducer';

const reducer = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
})

export default reducer;
