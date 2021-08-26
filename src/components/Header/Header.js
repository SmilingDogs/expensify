import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className='header'>
    <h1>Expensify</h1>
    <NavLink exact to="/" activeClassName='is-active' className='link'>Dashboard</NavLink>
    <NavLink to="/create" activeClassName='is-active' className='link'>Create Expenses</NavLink>
    <NavLink to="/help" activeClassName='is-active' className='link'>Help Page</NavLink>
  </header>
);

export default Header;
