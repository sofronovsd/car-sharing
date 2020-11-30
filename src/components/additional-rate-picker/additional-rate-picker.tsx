import React from "react";
import "./additional-rate-picker.scss";

interface AdditionalRatePickerProps {
  handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AdditionalRatePicker = ({
  handleChangeValue,
}: AdditionalRatePickerProps) => {
  return (
    <div className="additional-rate-picker_container">
      <label>Доп услуги</label>
      <div className="additional-rate-picker" onChange={handleChangeValue}>
        <div>
          <input
            type="checkbox"
            name="service1"
            id="service1"
            className="custom-checkbox"
          />
          <label htmlFor="service1">Полный бак, 500р</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="custom-checkbox"
            name="service2"
            id="service2"
          />
          <label htmlFor="service2">Детское кресло, 200р</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="custom-checkbox"
            name="service3"
            id="service3"
          />
          <label htmlFor="service3">Правый руль, 1600р</label>
        </div>
      </div>
    </div>
  );
};

export default AdditionalRatePicker;
