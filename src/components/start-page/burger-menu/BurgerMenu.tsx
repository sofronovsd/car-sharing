import React, { useCallback } from "react";
import "./burger-menu.scss";

interface IBurger {
  isActive: boolean;
  setActive: any;
}

const BurgerMenu = (props: IBurger) => {
  const { isActive, setActive } = props;

  const change = useCallback(() => {
    setActive((prev: boolean) => !prev);
  }, [setActive]);

  return (
    <button
      className={`burger-menu ${isActive ? "burger-menu__active" : ""}`}
      onClick={change}
    >
      <div />
      <div />
      <div />
    </button>
  );
};

export default BurgerMenu;
