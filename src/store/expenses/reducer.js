import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE } from "./types";
//! Это объект state - expenses (массив)
const initialExpensesState = [];

/* expense = {
//* description: "Coffee",
 *  amount: 2.34,
 *  createdAt: 2989289021809,
 *  id: uuidv4(),
 *  note": "comments to expense"
 *   */

const reducer = (state = initialExpensesState, action) => {
  switch (action.type) {

    case ADD_EXPENSE:
      return [...state, action.payload];

    case REMOVE_EXPENSE:
      //* return state.filter(exp => exp.id !== action.id ) destructure exp
      return state.filter(({ id }) => id !== action.payload);

    case EDIT_EXPENSE:
      return state.map((exp) =>
        exp.id === action.id ? { ...exp, ...action.updates } : exp
      ); //todo : exp - по сути значит - ничего не делать, if (exp.id !== action.id)

      default:
      return state;
  }
};
export default reducer;
