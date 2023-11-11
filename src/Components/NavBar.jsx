import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./CCSS/NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <img className="bostan-logo" src="./bostanLogo.png" alt="bostan logo" />
      </Link>
      <div>
        <NavLink className="nav-link" to="/">
          Anasayfa
        </NavLink>
        <NavLink className="nav-link" to="/menu">
          Menü
        </NavLink>
        <NavLink className="nav-link" to="/aboutUs">
          Hakkımızda
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          İletişim
        </NavLink>
      </div>
    </nav>
  );
}
