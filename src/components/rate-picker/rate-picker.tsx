import React, { useMemo } from "react";
import IRate from "../../store/interfaces/i-rate";
import { useSelector } from "react-redux";
import { ModelState } from "../../store/modelReducer";
import "./rate-picker.scss";

interface RatePickerState {
  model: ModelState;
}

const ratesSelector = (state: RatePickerState) => state.model.rates;

const RatePicker = () => {
  const rates = useSelector(ratesSelector);

  const rateOptions = useMemo(() => {
    return rates.map((rate: IRate, index) => {
      const id = `rate${index + 1}`;
      return (
        <div key={id}>
          <input type="radio" className="custom-radio" name="rate" id={id} />
          <label
            htmlFor={id}
          >{`${rate.rateTypeId.name}, ${rate.price}₽/${rate.rateTypeId.unit}`}</label>
        </div>
      );
    });
  }, [rates]);

  return (
    <div className="rate-picker_container">
      <label>Тариф</label>
      <div className="rate-picker">{rateOptions}</div>
    </div>
  );
};

export default RatePicker;
