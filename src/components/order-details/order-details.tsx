import React from "react";
import { useSelector } from "react-redux";
import "./order-details.scss";
import { ModelState } from "../../store/modelReducer";
import { prettifyPrice } from "../../utils/utils";
import { OrderState } from "../../store/orderReducer";
import { LocationState } from "../../store/locationReducer";
import moment from "moment";

interface OrderDetailsState {
  location: LocationState;
  model: ModelState;
  order: OrderState;
}

const modelSelector = (state: OrderDetailsState) => state.model.model;
const colorSelector = (state: OrderDetailsState) => state.order.color;
const dateFromSelector = (state: OrderDetailsState) => state.order.dateFrom;
const dateToSelector = (state: OrderDetailsState) => state.order.dateTo;
const fullTankSelector = (state: OrderDetailsState) => state.order.isFullTank;
const childChairSelector = (state: OrderDetailsState) =>
  state.order.isNeedChildChair;
const rightWheelSelector = (state: OrderDetailsState) =>
  state.order.isRightWheel;
const cityNameSelector = (state: OrderDetailsState) => state.location.city.name;
const addressSelector = (state: OrderDetailsState) =>
  state.location.city.address;

const OrderDetails = () => {
  const model = useSelector(modelSelector);
  const color = useSelector(colorSelector);
  const dateFrom = useSelector(dateFromSelector);
  const dateTo = useSelector(dateToSelector);
  const name = useSelector(cityNameSelector);
  const address = useSelector(addressSelector);
  const isFullTank = useSelector(fullTankSelector);
  const isNeedChildChair = useSelector(childChairSelector);
  const isRightWheel = useSelector(rightWheelSelector);
  return (
    <div className="order-details">
      <label>Ваш заказ:</label>
      {name ? (
        <div className="order-details_row">
          <span>Пункт выдачи</span>
          <div>............</div>
          <div className="order-details_value">
            <span>{`${name}${address ? "," : ""}`}</span>
            <span>{address}</span>
          </div>
        </div>
      ) : null}
      {model.name ? (
        <div className="order-details_row">
          <span>Модель</span>
          <div>............</div>
          <div className="order-details_value">
            <span>{model.name}</span>
          </div>
        </div>
      ) : null}
      {color ? (
        <div className="order-details_row">
          <span>Цвет</span>
          <div>............</div>
          <div className="order-details_value">
            <span>{color}</span>
          </div>
        </div>
      ) : null}
      {isFullTank ? (
        <div className="order-details_row">
          <span>Полный бак</span>
          <div>............</div>
          <div className="order-details_value">
            <span>Да</span>
          </div>
        </div>
      ) : null}
      {isNeedChildChair ? (
        <div className="order-details_row">
          <span>Детское кресло</span>
          <div>............</div>
          <div className="order-details_value">
            <span>Да</span>
          </div>
        </div>
      ) : null}
      {isRightWheel ? (
        <div className="order-details_row">
          <span>Правый руль</span>
          <div>............</div>
          <div className="order-details_value">
            <span>Да</span>
          </div>
        </div>
      ) : null}
      {dateFrom ? (
        <div className="order-details_row">
          <span>С</span>
          <div>............</div>
          <div className="order-details_value">
            <span>{moment(dateFrom).format("DD.MM.YYYY")}</span>
          </div>
        </div>
      ) : null}
      {dateTo ? (
        <div className="order-details_row">
          <span>По</span>
          <div>............</div>
          <div className="order-details_value">
            {<span>{dateTo.toString()}</span>}
          </div>
        </div>
      ) : null}
      {model.priceMax ? (
        <p>
          <b>Цена:</b> от {prettifyPrice(model.priceMin)} до
          {prettifyPrice(model.priceMax)} ₽
        </p>
      ) : null}
      <button className="button button__infinite button__disabled">
        Выбрать модель
      </button>
    </div>
  );
};

export default OrderDetails;
