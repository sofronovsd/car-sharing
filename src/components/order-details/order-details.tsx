import React, { useMemo } from "react";
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
const rateSelector = (state: OrderDetailsState) => state.order.rate;
const dateFromSelector = (state: OrderDetailsState) => state.order.dateFrom;
const dateToSelector = (state: OrderDetailsState) => state.order.dateTo;
const fullTankSelector = (state: OrderDetailsState) => state.order.isFullTank;
const childChairSelector = (state: OrderDetailsState) =>
  state.order.isNeedChildChair;
const rightWheelSelector = (state: OrderDetailsState) =>
  state.order.isRightWheel;
const cityNameSelector = (state: OrderDetailsState) => state.location.city.name;
const addressSelector = (state: OrderDetailsState) =>
  state.location.point.address;

const OrderDetails = () => {
  const model = useSelector(modelSelector);
  const color = useSelector(colorSelector);
  const rate = useSelector(rateSelector);
  const dateFrom = useSelector(dateFromSelector);
  const dateTo = useSelector(dateToSelector);
  const name = useSelector(cityNameSelector);
  const address = useSelector(addressSelector);
  const isFullTank = useSelector(fullTankSelector);
  const isNeedChildChair = useSelector(childChairSelector);
  const isRightWheel = useSelector(rightWheelSelector);

  const rentTime = useMemo(() => {
    if (dateFrom && dateTo) {
      return `${moment(dateTo).diff(moment(dateFrom), "hours")}ч`;
    }
  }, [dateFrom, dateTo]);

  const finalPrice = useMemo(() => {
    let price;
    if (dateFrom && dateTo && rate) {
      const startPrice = rate.price;
      const unit = rate.rateTypeId.unit;
      let units: "minutes" | "days";
      switch (unit) {
        case "мин": {
          units = "minutes";
          break;
        }
        case "сутки": {
          units = "days";
          break;
        }
        default: {
          units = "minutes";
        }
      }
      let time = moment(dateTo).diff(moment(dateFrom), units);
      if (units === "days") {
        time = Math.max(time, 1);
      }
      price = `${prettifyPrice(startPrice * time)} ₽`;
    } else if (model.priceMax) {
      price = `от ${prettifyPrice(model.priceMin)} до ${prettifyPrice(
        model.priceMax
      )} ₽`;
    }
    return price;
  }, [dateFrom, dateTo, model.priceMax, model.priceMin, rate]);
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
      {rate?.rateTypeId?.name ? (
        <div className="order-details_row">
          <span>Тариф</span>
          <div>............</div>
          <div className="order-details_value">
            <span>{rate.rateTypeId.name}</span>
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
      {rentTime ? (
        <div className="order-details_row">
          <span>Длительность аренды</span>
          <div>............</div>
          <div className="order-details_value">
            <span>{rentTime}</span>
          </div>
        </div>
      ) : null}
      {finalPrice ? (
        <p>
          <b>Цена:</b> {finalPrice}
        </p>
      ) : null}
      <button className="button button__infinite button__disabled">
        Выбрать модель
      </button>
    </div>
  );
};

export default OrderDetails;
