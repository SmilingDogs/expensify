import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { addExpense } from "./store/expenses/actions";
import getVisibleExpenses from "./store/selectors/expenses";


store.dispatch(addExpense({description: 'Water Bill', amount: 4500}))
store.dispatch(addExpense({description: 'Gas Bill', createdAt: 1000}))
store.dispatch(addExpense({description: 'Rent', amount: 109500}))
const state = store.getState()

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
