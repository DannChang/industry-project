import "./Nav.scss";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo/logo.svg";

const Nav = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header_logo" src={Logo} alt="Instock Logo" />
        </Link>
        <nav className="header__nav">
          <NavLink
            className={"header__button header__button-left"}
            activeClassName={"header__button--active"}
            to="/warehouse"
          >
            Warehouse
          </NavLink>
          <NavLink
            className={"header__button"}
            activeClassName={"header__button--active"}
            to="/inventory"
          >
            Inventory
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
