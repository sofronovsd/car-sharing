import React from "react";
import "./start-page.scss";
import Slider from "../../slider/Slider";
import Header from "../../header/Header";
import MainBlock from "../../main-block/MainBlock";
import Footer from "../../footer/Footer";

const StartPage = () => {
  return (
    <div className="start-page-container">
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
