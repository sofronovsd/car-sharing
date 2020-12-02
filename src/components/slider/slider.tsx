import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./slider.scss";
import SlideContent from "../slide-content/slide-content";
import slides from "./slides";

const Slider = () => {
  const renderedSlides = slides.map((slide) => (
    <div className="slider-content" data-src={slide.image}>
      <SlideContent
        title={slide.title}
        description={slide.description}
        buttonClass={slide.buttonClass}
      />
    </div>
  ));
  return (
    <AwesomeSlider className="slider" animation="">
      {renderedSlides}
    </AwesomeSlider>
  );
};

export default Slider;
