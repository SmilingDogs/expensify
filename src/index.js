import React from "react";
import ReactDOM from "react-dom";
import "normalize-scss";
import "./styles/styles.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import getVisibleExpenses from "./utils/func";
import { addExpense } from "./store/expenses/actions";

// store.subscribe(() => {
//   console.log(store.getState());
// })

store.subscribe(() => {
  const allState = store.getState();
  const visibleExpenses = getVisibleExpenses(allState.expenses,allState.filters);
  console.log(visibleExpenses);
});

store.dispatch(
  addExpense({ description: "Water Bill", amount: 4500, createdAt: 1000 })
);
store.dispatch(
  addExpense({ description: "Gas Bill", amount: 5000, createdAt: -1000 })
);
store.dispatch(
  addExpense({ description: "Food", amount: 7000, createdAt: 200 })
);
// store.dispatch(setStartDate(125));
// store.dispatch(setTextFilter("wat"));
// store.dispatch(addExpense({description: 'Rent', amount: 109500}))
// store.dispatch(setTextFilter('Rent'))
// store.dispatch(setTextFilter())
// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
// store.dispatch(setStartDate(1200))
// store.dispatch(setEndDate(2500))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate())

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
// <AdminInfo info="This is the details" isAdmin />, document.getElementById("root")
// <AuthInfo info="This is the details" isAdmin={false} />, document.getElementById("root")
