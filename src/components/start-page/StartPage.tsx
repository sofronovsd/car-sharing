import React, { useState } from "react";
import "./start-page.scss";
import Slider from "./slider/Slider";
import BurgerMenu from "./burger-menu/BurgerMenu";
import Header from "./header/Header";
import MainBlock from "./main-block/MainBlock";
import Footer from "./footer/Footer";
import Menu from "./menu/Menu";

const StartPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="container">
      <Menu isOpen={showMenu} />
      <div className="side-bar">
        <BurgerMenu isActive={showMenu} setActive={setShowMenu} />
        <button className="language-btn">Eng</button>
      </div>
      <div className="main-page">
        <Header />
        <MainBlock />
        <Footer />
      </div>
      <div className="slider-container">
        <Slider />
      </div>
    </div>
  );
};

export default StartPage;
