import React from "react";
import classNames from "classnames";
import { ICar } from "../../store/modelReducer";
import "./model-grid.scss";
import CarCard from "../car-card/car-card";

const ModelGrid = (props: any) => {
  const { filteredCars, handleCardClick, carId } = props;
  const carCards = filteredCars.map((car: ICar) => {
    const itemClass = classNames("model-item", {
      "model-item__selected": carId === car.id,
    });
    return <CarCard itemClass={itemClass} car={car} />;
  });
  return (
    <div className="model-grid" onClick={handleCardClick}>
      {carCards}
    </div>
  );
};

export default ModelGrid;
