import React from "react";
import "./burger-menu.scss";
import classNames from "classnames";

interface IBurger {
  isActive: boolean;
  changeActive: any;
}

const BurgerMenu = ({ isActive, changeActive }: IBurger) => {
  const buttonClass = classNames("burger-menu", {
    "burger-menu__active": isActive,
  });
  return (
    <button className={buttonClass} onClick={changeActive}>
      <div />
      <div />
      <div />
    </button>
  );
};

export default BurgerMenu;
