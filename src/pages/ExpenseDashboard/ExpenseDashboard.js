import React from "react";
import ExpenseListFilters from "../../components/ExpenseListFilters/ExpenseListFilters";
import ExpenseList from "../../components/ExpenseList/ExpenseList";

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
