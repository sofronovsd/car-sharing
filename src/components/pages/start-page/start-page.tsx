import React from "react";
import "./start-page.scss";
import Slider from "../../slider/slider";
import Header from "../../header/header";
import MainBlock from "../../main-block/main-block";
import Footer from "../../footer/footer";

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
