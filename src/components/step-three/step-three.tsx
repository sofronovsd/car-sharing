import React, { useCallback, useEffect } from "react";
import "./step-three.scss";
import { useDispatch, useSelector } from "react-redux";
import { ModelState } from "../../store/modelReducer";
import {
  fetchRates,
  setChildChair,
  setColor,
  setFullTank,
  setRate,
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
    if (!rates?.length) {
      (async () => {
        dispatch(fetchRates());
      })();
    }
  }, [dispatch, rates?.length]);

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

  const handleChangeAdditionalRateValue = useCallback(
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

  const handleChangeRateValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const id = e.target.id.replace("rate", "");
      const value = rates[Number.parseInt(id)];
      dispatch(setRate(value));
    },
    [dispatch, rates]
  );

  return (
    <div className="addition-container">
      <form>
        <ColorPicker handleChangeValue={handleColorChangeValue} />
        <DateTimePicker />
        <RatePicker handleChangeValue={handleChangeRateValue} />
        <AdditionalRatePicker
          handleChangeValue={handleChangeAdditionalRateValue}
        />
      </form>
    </div>
  );
};

export default StepThree;
