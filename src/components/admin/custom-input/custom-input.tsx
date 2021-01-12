import React, { ChangeEvent } from "react";
import "./custom-input.scss";
import classNames from "classnames";

interface CustomInputProps {
  label: string;
  type: string;
  value: string;
  onValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
}

const CustomInput = ({
  label,
  type,
  value,
  onValueChange,
  isError,
}: CustomInputProps) => {
  const inputClass = classNames({
    error: isError,
  });
  return (
    <div className="custom-input">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onValueChange}
        className={inputClass}
      />
    </div>
  );
};

export default CustomInput;
