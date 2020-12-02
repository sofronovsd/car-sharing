import React from "react";
import "./slide-content.scss";
import classNames from "classnames";

const SlideContent = (props: any) => {
  const { title, description, buttonClass } = props;
  const btnClass = classNames("button", "button__medium", buttonClass);
  return (
    <>
      <h2 className="slider-content_title">{title}</h2>
      <p className="slider-content_description">{description}</p>
      <button className={btnClass}>Подробнее</button>
    </>
  );
};

export default SlideContent;
