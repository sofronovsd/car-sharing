import React from "react";
import ICity from "../../interfaces/i-city";
import IPoint from "../../interfaces/i-point";
import "./order-details.scss";

interface OrderDetailsProps {
  city: ICity;
  point: IPoint;
}

const OrderDetails = (props: OrderDetailsProps) => {
  const { city, point } = props;
  return (
    <div className="order-details">
      <label>Ваш заказ:</label>
      <div className="order-details_address">
        <span>Пункт выдачи</span>
        <div>............</div>
        <div className="address">
          <span>{`${city.name}${point.address ? "," : ""}`}</span>
          <span>{point.address}</span>
        </div>
      </div>
      <p>
        <b>Цена:</b> от 8 000 до 12 000 ₽
      </p>
      <button className="button button__infinite button__disabled">
        Выбрать модель
      </button>
    </div>
  );
};

export default OrderDetails;
