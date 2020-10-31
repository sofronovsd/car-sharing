import React, { useState } from "react";
import "./burger-menu.scss";

const BurgerMenu = () => {
  const [isActive, setActive] = useState(false);
  const showMenu = () => {
    setActive((prevState) => !prevState);
  };
  return (
    <button
      className={`burger-menu ${isActive ? "burger-menu__active" : ""}`}
      onClick={showMenu}
    >
      <div />
      <div />
      <div />
    </button>
  );
};

export default BurgerMenu;
