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
import ModelGrid from "../model-grid/model-grid";
import "./step-two.scss";
import IRate from "../../store/interfaces/i-rate";
import IRateTypeId from "../../store/interfaces/i-rate-type-id";
import {
  carIdSelector,
  carsSelector,
  modelSelector,
} from "../../store/selectors";
import ModelOptionEnum from "./model-option-enum";
import CustomRadio from "../custom-radio/custom-radio";

const StepTwo = () => {
  const cars = useSelector(carsSelector);
  const carId = useSelector(carIdSelector);
  const storedCar = useSelector(modelSelector);
  const dispatch = useDispatch();
  const [modelOption, setModelOption] = useState(ModelOptionEnum.modelOption1);
  const [filteredCars, setFilteredCars] = useState(cars);

  const handleCardClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const target = e.target as HTMLDivElement;
      const modelItem = target.closest(".model-item");
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
      case ModelOptionEnum.modelOption1: {
        setFilteredCars(cars);
        break;
      }
      case ModelOptionEnum.modelOption2: {
        const filteredCars = cars.filter(
          (car) => car.categoryId.name === "Эконом"
        );
        setFilteredCars(filteredCars);
        break;
      }
      case ModelOptionEnum.modelOption3: {
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
      setModelOption(Number.parseInt(e.target.id));
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
        <CustomRadio
          name="modelType"
          id={ModelOptionEnum.modelOption1.toString()}
          defaultChecked={true}
          text="Все модели"
        />
        <CustomRadio
          name="modelType"
          id={ModelOptionEnum.modelOption2.toString()}
          defaultChecked={false}
          text="Эконом"
        />
        <CustomRadio
          name="modelType"
          id={ModelOptionEnum.modelOption3.toString()}
          defaultChecked={false}
          text="Премиум"
        />
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
