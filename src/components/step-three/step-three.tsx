import React, { useCallback, useEffect } from "react";
import "./step-three.scss";
import { useDispatch, useSelector } from "react-redux";
import { ModelState } from "../../store/modelReducer";
import {
  fetchRates,
  setChildChair,
  setColor,
  setFullTank,
  setRightWheel,
} from "../../store/actions";
import { OrderState } from "../../store/orderReducer";
import AdditionalRatePicker from "../additional-rate-picker/additional-rate-picker";
import RatePicker from "../rate-picker/rate-picker";
import ColorPicker from "../color-picker/color-picker";
import DateTimePicker from "../date-time-picker/date-time-picker";

interface StepThreeState {
  model: ModelState;
  order: OrderState;
}

const modelSelector = (state: StepThreeState) => state.model.model;
const ratesSelector = (state: StepThreeState) => state.model.rates;

const StepThree = () => {
  const model = useSelector(modelSelector);
  const rates = useSelector(ratesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(fetchRates());
    })();
  }, [dispatch]);

  const handleColorChangeValue = useCallback(
    (e: any) => {
      let color = model.colors[e.target.id];
      if (!color) {
        color = model.colors[Math.floor(Math.random() * model.colors.length)];
      }
      dispatch(setColor(color));
    },
    [dispatch, model.colors]
  );

  const handleChangeRateValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const rateId = e.target.id;
      const value = e.target.checked;
      switch (rateId) {
        case "service1": {
          dispatch(setFullTank(value));
          break;
        }
        case "service2": {
          dispatch(setChildChair(value));
          break;
        }
        case "service3": {
          dispatch(setRightWheel(value));
          break;
        }
        default: {
        }
      }
    },
    [dispatch]
  );

  return (
    <div className="addition-container">
      <form>
        <ColorPicker handleChangeValue={handleColorChangeValue} />
        <DateTimePicker />
        <RatePicker />
        <AdditionalRatePicker handleChangeValue={handleChangeRateValue} />
      </form>
    </div>
  );
};

export default StepThree;
