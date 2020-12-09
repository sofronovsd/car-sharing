import React from "react";
import "./custom-radio.scss";

interface CustomRadioProps {
  name: string;
  id: string;
  defaultChecked: boolean;
  text: string;
}

const CustomRadio = ({ id, name, defaultChecked, text }: CustomRadioProps) => {
  return (
    <>
      <input
        type="radio"
        className="custom-radio"
        name={name}
        id={id}
        defaultChecked={defaultChecked}
      />
      <label htmlFor={id}>{text}</label>
    </>
  );
};

export default CustomRadio;
