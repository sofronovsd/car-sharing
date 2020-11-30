import React, { useEffect, useState } from "react";
import { prettifyPrice } from "../../utils/utils";
import "./car-card.scss";
import { loadCarImage } from "../../api/api-factory";
import ICar from "../../store/interfaces/i-car";

interface CarCardProps {
  itemClass: string;
  car: ICar;
}

const CarCard = ({ itemClass, car }: CarCardProps) => {
  const [imgSrc, setImgSrc] = useState("");
  useEffect(() => {
    loadCarImage(car.thumbnail.path).then((blob) => {
      setImgSrc(URL.createObjectURL(blob));
    });
  }, []);
  return (
    <div className={itemClass} data-id={car.id}>
      <h4>{car.name}</h4>
      <p>
        {prettifyPrice(car.priceMin)} - {prettifyPrice(car.priceMax)} ₽
      </p>
      <img src={imgSrc} alt="car" />
    </div>
  );
};

export default CarCard;
