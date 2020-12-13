import React from "react";
import "./additional-rate-picker.scss";
import { OrderState } from "../../store/orderReducer";
import { useSelector } from "react-redux";
import CustomCheckbox from "../custom-checkbox/custom-checkbox";

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
        <CustomCheckbox
          id="service1"
          name="service1"
          checked={isFullTank}
          text="Полный бак, 500р"
        />
        <CustomCheckbox
          id="service2"
          name="service2"
          checked={isNeedChildChair}
          text="Детское кресло, 200р"
        />
        <CustomCheckbox
          id="service3"
          name="service3"
          checked={isRightWheel}
          text="Правый руль, 1600р"
        />
      </div>
    </div>
  );
};

export default AdditionalRatePicker;
