import React from "react";
import classNames from "classnames";
import "./model-grid.scss";
import CarCard from "../car-card/car-card";
import ICar from "../../store/interfaces/i-car";

interface ModelGridProps {
  filteredCars: ICar[];
  carId: string;
  handleCardClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const ModelGrid = ({
  filteredCars,
  handleCardClick,
  carId,
}: ModelGridProps) => {
  const carCards = filteredCars.map((car: ICar) => {
    const itemClass = classNames("model-item", {
      "model-item__selected": carId === car.id,
    });
    return <CarCard key={car.id} itemClass={itemClass} car={car} />;
  });
  return (
    <div className="model-grid" onClick={handleCardClick}>
      {carCards}
    </div>
  );
};

export default ModelGrid;
