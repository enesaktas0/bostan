import React from "react";
import { NavLink } from "react-router-dom";

import "./CCSS/HomePage.css";

export default function HomePage() {
  const clickMenu = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="home-page">
      <div className="menu-button">
        <NavLink to="/menu">
          <button className="btn-menu" onClick={clickMenu}>
            Menü
          </button>
        </NavLink>
      </div>
    </div>
  );
}
