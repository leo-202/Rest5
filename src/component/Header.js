import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="header fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo mr-auto"><a href="index.html">Restaurantly</a></h1>
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li>
                <NavLink to="/home" >Home</NavLink>
              </li>
              <li>
                <NavLink to="/menu" >Menu</NavLink>
              </li>
              <li>
                <NavLink to="/contact" >Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;