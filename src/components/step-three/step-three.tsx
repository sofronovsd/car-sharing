import React, { useCallback, useEffect } from "react";
import "./step-three.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRates,
  setAvailable,
  setChildChair,
  setColor,
  setFullTank,
  setRate,
  setRightWheel,
} from "../../store/actions";
import AdditionalRatePicker from "../additional-rate-picker/additional-rate-picker";
import RatePicker from "../rate-picker/rate-picker";
import ColorPicker from "../color-picker/color-picker";
import DateTimePicker from "../date-time-picker/date-time-picker";
import {
  modelSelector,
  orderSelector,
  ratesSelector,
} from "../../store/selectors";

const StepThree = () => {
  const model = useSelector(modelSelector);
  const rates = useSelector(ratesSelector);
  const order = useSelector(orderSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rates?.length) {
      (async () => {
        dispatch(fetchRates());
      })();
    }
  }, [dispatch, rates?.length]);

  const handleColorChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let color = model.colors[parseInt(e.target.id)];
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
  useEffect(() => {
    if (order.color && order.dateFrom && order.dateTo && order.price) {
      dispatch(setAvailable(true));
    } else {
      dispatch(setAvailable(false));
    }
  }, [dispatch, order.color, order.dateFrom, order.dateTo, order.price]);

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
