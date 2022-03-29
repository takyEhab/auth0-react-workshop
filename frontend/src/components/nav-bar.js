// src/components/nav-bar.js

import React from "react";
import MainNav from "./main-nav";
import AuthNav from "./auth-nav";
import logo from '../images/send-money.png'
// const logo = require('../images/send-money.png')

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">

          <div className="navbar-brand" >
            <img className="" src={logo} alt="banking logo" width="50" />


          </div>
          <MainNav />
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
