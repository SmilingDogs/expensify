import React from "react";
import { Route, Switch } from "react-router-dom";
import ExpenseDashboardPage from "../../ExpenseDashboard/ExpenseDashboard";
import AddExpensePage from "../../AddExpensePage/AddExpensePage";
import EditExpensePage from "../../EditExpensePage/EditExpensePage";
import HelpPage from "../../HelpPage/HelpPage";
import Page404 from "../Page404";


const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={ExpenseDashboardPage}></Route>
    <Route path="/create" component={AddExpensePage}></Route>
    <Route path="/edit/:id" component={EditExpensePage}></Route>
    <Route path="/help" component={HelpPage}></Route>
    <Route><Page404 color='red' /></Route>
  </Switch>
);

export default AppRoutes;
