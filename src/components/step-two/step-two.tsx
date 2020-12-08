import React, { useCallback, useEffect, useState } from "react";
import {
  changeStage,
  fetchCars,
  setAvailable,
  setChildChair,
  setColor,
  setDateFrom,
  setDateTo,
  setFullTank,
  setModel,
  setRate,
  setRightWheel,
} from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { ModelState } from "../../store/modelReducer";
import ModelGrid from "../model-grid/model-grid";
import "./step-two.scss";
import IRate from "../../store/interfaces/i-rate";
import IRateTypeId from "../../store/interfaces/i-rate-type-id";

interface StepTwoState {
  model: ModelState;
}

const carsSelector = (state: StepTwoState) => state.model.cars;
const carIdSelector = (state: StepTwoState) => state.model.model.id;
const carSelector = (state: StepTwoState) => state.model.model;

const StepTwo = () => {
  const cars = useSelector(carsSelector);
  const carId = useSelector(carIdSelector);
  const storedCar = useSelector(carSelector);
  const dispatch = useDispatch();
  const [modelOption, setModelOption] = useState("");
  const [filteredCars, setFilteredCars] = useState(cars);
  // const [selectedCar, setSelectedCar] = useState(car);

  const handleCardClick = useCallback(
    (e: React.ChangeEvent<HTMLDivElement>) => {
      const modelItem = e.target.closest(".model-item");
      if (modelItem) {
        const dataId = modelItem.getAttribute("data-id");
        if (!dataId) {
          return;
        }
        const car = cars.find((car) => car.id === dataId);
        if (car) {
          if (car.id !== storedCar.id) {
            dispatch(setColor(""));
            dispatch(setDateFrom(""));
            dispatch(setDateTo(""));
            dispatch(setRightWheel(false));
            dispatch(setFullTank(false));
            dispatch(setChildChair(false));
            dispatch(
              setRate({
                price: 0,
                rateTypeId: { name: "", unit: "" } as IRateTypeId,
              } as IRate)
            );
            dispatch(changeStage(2));
          }
          dispatch(setModel(car));
        }
      }
    },
    [cars, dispatch, storedCar.id]
  );

  useEffect(() => {
    if (!cars || cars.length === 0) {
      (async () => {
        dispatch(fetchCars());
      })();
    }
  }, [cars, dispatch]);

  useEffect(() => {
    setFilteredCars(cars);
  }, [cars]);

  useEffect(() => {
    switch (modelOption) {
      case "modelOption1": {
        setFilteredCars(cars);
        break;
      }
      case "modelOption2": {
        const filteredCars = cars.filter(
          (car) => car.categoryId.name === "Эконом"
        );
        setFilteredCars(filteredCars);
        break;
      }
      case "modelOption3": {
        const filteredCars = cars.filter(
          (car) => car.categoryId.name === "Премиум"
        );
        setFilteredCars(filteredCars);
        break;
      }
      default: {
        setFilteredCars(cars);
      }
    }
  }, [cars, modelOption]);

  const handleChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setModelOption(e.target.id);
    },
    []
  );

  useEffect(() => {
    if (carId) {
      dispatch(setAvailable(true));
    } else {
      dispatch(setAvailable(false));
    }
  }, [carId, dispatch]);
  return (
    <div className="model-container">
      <div onChange={handleChangeValue}>
        <input
          type="radio"
          className="custom-radio"
          name="modelType"
          id="modelOption1"
          defaultChecked
        />
        <label htmlFor="modelOption1">Все модели</label>
        <input
          type="radio"
          className="custom-radio"
          name="modelType"
          id="modelOption2"
        />
        <label htmlFor="modelOption2">Эконом</label>
        <input
          type="radio"
          className="custom-radio"
          name="modelType"
          id="modelOption3"
        />
        <label htmlFor="modelOption3">Премиум</label>
      </div>
      <ModelGrid
        filteredCars={filteredCars}
        handleCardClick={handleCardClick}
        carId={carId}
      />
    </div>
  );
};

export default StepTwo;
