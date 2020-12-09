import React from "react";
import "./additional-rate-picker.scss";
import { OrderState } from "../../store/orderReducer";
import { useSelector } from "react-redux";

interface AdditionalRatePickerProps {
  handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface AdditionalRatePickerState {
  order: OrderState;
}

const isRightWheelSelector = (state: AdditionalRatePickerState) =>
  state.order.isRightWheel;
const isNeedChildChairSelector = (state: AdditionalRatePickerState) =>
  state.order.isNeedChildChair;
const isFullTankSelector = (state: AdditionalRatePickerState) =>
  state.order.isFullTank;

const AdditionalRatePicker = ({
  handleChangeValue,
}: AdditionalRatePickerProps) => {
  const isRightWheel = useSelector(isRightWheelSelector);
  const isNeedChildChair = useSelector(isNeedChildChairSelector);
  const isFullTank = useSelector(isFullTankSelector);
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
            checked={isFullTank}
          />
          <label htmlFor="service1">Полный бак, 500р</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="custom-checkbox"
            name="service2"
            id="service2"
            checked={isNeedChildChair}
          />
          <label htmlFor="service2">Детское кресло, 200р</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="custom-checkbox"
            name="service3"
            id="service3"
            checked={isRightWheel}
          />
          <label htmlFor="service3">Правый руль, 1600р</label>
        </div>
      </div>
    </div>
  );
};

export default AdditionalRatePicker;
