import React from "react";
import "./start-page.scss";
import Slider from "./slider/Slider";
import BurgerMenu from "./burger-menu/BurgerMenu";
import Header from "./header/Header";
import MainBlock from "./main-block/MainBlock";
import Footer from "./footer/Footer";

const StartPage = () => {
  return (
    <div className="container">
      <div className="side-bar">
        <BurgerMenu />
        <button className="language-btn">Eng</button>
      </div>
      <div className="main-page">
        <Header />
        <MainBlock />
        <Footer />
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
};

export default StartPage;
