import React, { useMemo } from "react";
import IRate from "../../store/interfaces/i-rate";
import { useSelector } from "react-redux";
import { ModelState } from "../../store/modelReducer";
import "./rate-picker.scss";
import { OrderState } from "../../store/orderReducer";
import CustomRadio from "../custom-radio/custom-radio";

interface RatePickerProps {
  handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface RatePickerState {
  model: ModelState;
  order: OrderState;
}

const ratesSelector = (state: RatePickerState) => state.model.rates;
const rateSelector = (state: RatePickerState) => state.order.rate;

const RatePicker = ({ handleChangeValue }: RatePickerProps) => {
  const rates = useSelector(ratesSelector);
  const selectedRate = useSelector(rateSelector);

  const rateOptions = useMemo(() => {
    return rates.map((rate: IRate, index) => {
      const id = `rate${index}`;
      return (
        <React.Fragment key={id}>
          <CustomRadio
            id={id}
            name="rate"
            defaultChecked={
              selectedRate.rateTypeId.name === rate.rateTypeId.name
            }
            text={`${rate.rateTypeId.name}, ${rate.price}₽/${rate.rateTypeId.unit}`}
          />
        </React.Fragment>
      );
    });
  }, [rates, selectedRate.rateTypeId.name]);

  return (
    <div className="rate-picker_container">
      <label>Тариф</label>
      <div className="rate-picker" onChange={handleChangeValue}>
        {rateOptions}
      </div>
    </div>
  );
};

export default RatePicker;
