import React, { ChangeEvent } from "react";
import "./custom-input.scss";

interface CustomInputProps {
  label: string;
  type: string;
  value: string;
  onValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({
  label,
  type,
  value,
  onValueChange,
}: CustomInputProps) => {
  return (
    <div className="custom-input">
      <label>{label}</label>
      <input type={type} value={value} onChange={onValueChange} />
    </div>
  );
};

export default CustomInput;
