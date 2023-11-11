import React from "react";
import { menuData } from "./Helpers/menuData";
import "./CCSS/Menu.css";

export default function Menu() {
  const card = menuData.map((m, index) => {
    return (
      <div key={index} className="card">
        <img
          className="product-image"
          src={"./" + m.image}
          alt="product-image"
        />
        <h3> {m.name}</h3>
        <p className="description">{m.desription}</p>
        <p>
          <strong>{m.price} ₺</strong>
        </p>
      </div>
    );
  });
  return <div className="menu-page">{card}</div>;
}
