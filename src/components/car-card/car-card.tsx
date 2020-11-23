import React from "react";
import { prettifyPrice } from "../../utils/utils";
import "./car-card.scss";

const CarCard = (props: any) => {
  const { itemClass, car } = props;
  return (
    <div className={itemClass} key={car.id} data-id={car.id}>
      <h4>{car.name}</h4>
      <p>
        {prettifyPrice(car.priceMin)} - {prettifyPrice(car.priceMax)} ₽
      </p>
      <img
        src={`http://api-factory.simbirsoft1.com/${car.thumbnail.path}`}
        alt="car"
        onError={() => console.log("error", car.thumbnail)}
      />
    </div>
  );
};

export default CarCard;
