import React from "react";
import "./custom-checkbox.scss";

interface CustomCheckboxProps {
  name: string;
  id: string;
  checked: boolean;
  text: string;
}

const CustomCheckbox = ({ id, name, checked, text }: CustomCheckboxProps) => {
  return (
    <div>
      <input
        type="checkbox"
        name={name}
        id={id}
        className="custom-checkbox"
        defaultChecked={checked}
      />
      <label htmlFor={id}>{text}</label>
    </div>
  );
};

export default CustomCheckbox;
