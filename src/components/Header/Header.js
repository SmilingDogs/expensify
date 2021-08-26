import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <nav className="menu">
      <h1 className="menu-title">Expensify</h1>
      <NavLink exact to="/" activeClassName="is-active" className='menu-link'>Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active" className='menu-link'>Create Expense</NavLink>
      <NavLink to="/help" activeClassName="is-active"  className='menu-link'>Help Page</NavLink>
    </nav>
  </header>
);

export default Header;
