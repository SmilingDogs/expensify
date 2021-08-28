import { v4 as uuidv4 } from "uuid";
import { ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE } from "./types";

//* Creating action-generators

//*ADD_EXPENSE
export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: ADD_EXPENSE,
  payload: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt,
  },
});

//*REMOVE_EXPENSE
export const removeExpense = (id) => ({
  type: REMOVE_EXPENSE,
  payload: id,
});

//* EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: EDIT_EXPENSE,
  id,
  updates,
});

