import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./slider.scss";

const Slider = () => {
  return (
    <AwesomeSlider className="slider" animation="">
      <div className="slider-content" data-src="./assets/slider1.png">
        <h2 className="slider-content_title">Бесплатная парковка</h2>
        <p className="slider-content_description">
          Оставляйте машину на платных городских парковках и разрешенных местах,
          не нарушая ПДД, а также в аэропортах.
        </p>
        <button className="button button__medium button__green">
          Подробнее
        </button>
      </div>
      <div className="slider-content" data-src="./assets/slider2.png">
        <h2 className="slider-content_title">Страховка</h2>
        <p className="slider-content_description">
          Полная страховка автомобиля
        </p>
        <button className="button button__medium button__blue">
          Подробнее
        </button>
      </div>
      <div className="slider-content" data-src="./assets/slider3.png">
        <h2 className="slider-content_title">Бензин</h2>
        <p className="slider-content_description">
          Полный бак на любой заправке города за наш счёт
        </p>
        <button className="button button__medium button__red">Подробнее</button>
      </div>
      <div className="slider-content" data-src="./assets/slider4.png">
        <h2 className="slider-content_title">Обслуживание</h2>
        <p className="slider-content_description">
          Автомобиль проходит еженедельное ТО
        </p>
        <button className="button button__medium button__purple">
          Подробнее
        </button>
      </div>
    </AwesomeSlider>
  );
};

export default Slider;
