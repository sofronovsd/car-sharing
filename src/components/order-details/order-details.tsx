import React, { useCallback, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./order-details.scss";
import { prettifyPrice } from "../../utils/utils";
import moment from "moment";
import classNames from "classnames";
import orderButtons from "./order-buttons";
import { changeStage, setPrice } from "../../store/actions";
import Modal from "../modal/modal";
import { makeOrder } from "../../api/api-factory";
import {
  addressSelector,
  availableSelector,
  childChairSelector,
  cityNameSelector,
  citySelector,
  colorSelector,
  dateFromSelector,
  dateToSelector,
  fullTankSelector,
  modelSelector,
  pointSelector,
  priceSelector,
  rateSelector,
  rightWheelSelector,
} from "../../store/selectors";
import OrderDetailsRow from "../order-details-row/OrderDetailsRow";

interface OrderDetailsProps {
  stage: number;
}

const OrderDetails = ({ stage }: OrderDetailsProps) => {
  const model = useSelector(modelSelector);
  const totalPrice = useSelector(priceSelector);
  const color = useSelector(colorSelector);
  const rate = useSelector(rateSelector);
  const dateFrom = useSelector(dateFromSelector);
  const dateTo = useSelector(dateToSelector);
  const city = useSelector(citySelector);
  const point = useSelector(pointSelector);
  const name = useSelector(cityNameSelector);
  const address = useSelector(addressSelector);
  const isFullTank = useSelector(fullTankSelector);
  const isNeedChildChair = useSelector(childChairSelector);
  const isRightWheel = useSelector(rightWheelSelector);
  const available = useSelector(availableSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  const [isPriceOK, setPriceOK] = useState(false);
  const [hidden, setHidden] = useState(true);

  const buttonClass = classNames("button", "button__infinite", {
    button__disabled: !available,
    button__red: stage === 5,
  });

  const priceClass = classNames({ price__red: !isPriceOK });

  const changeModalVisibility = useCallback(() => {
    setHidden((prev) => !prev);
  }, []);

  const onModalAccept = useCallback(() => {
    const request = {
      orderStatusId: "5e26a191099b810b946c5d89",
      cityId: city.id,
      pointId: point.id,
      carId: model.id,
      color,
      dateFrom: dateFrom?.valueOf(),
      dateTo: dateTo?.valueOf(),
      rateId: rate.id,
      price: totalPrice,
      isFullTank,
      isNeedChildChair,
      isRightWheel,
    };
    makeOrder(request).then((res) => {
      setHidden((prev) => !prev);
      dispatch(changeStage(stage + 1));
      history.push(`/car-sharing/order/${res.data.id}`);
    });
  }, [
    city.id,
    color,
    dateFrom,
    dateTo,
    dispatch,
    history,
    isFullTank,
    isNeedChildChair,
    isRightWheel,
    model.id,
    point.id,
    rate.id,
    stage,
    totalPrice,
  ]);

  const onModalDecline = useCallback(() => {
    setHidden((prev) => !prev);
  }, []);

  const rentTime = useMemo(() => {
    if (dateFrom && dateTo) {
      return `${moment(dateTo).diff(moment(dateFrom), "hours")}ч`;
    }
  }, [dateFrom, dateTo]);

  const finalPrice = useMemo(() => {
    let price = totalPrice;
    let stringPrice = "";
    if (dateFrom && dateTo && rate?.price) {
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
      price = startPrice * time;
      if (isRightWheel) price += 1600;
      if (isNeedChildChair) price += 200;
      if (isFullTank) price += 500;
    }

    const isResultPriceOK =
      price !== 0 && price < model?.priceMax && price > model?.priceMin;
    setPriceOK(isResultPriceOK);

    if (price && isResultPriceOK) {
      stringPrice = `${prettifyPrice(price)} ₽`;
      dispatch(setPrice(price));
    } else if (model?.priceMax) {
      dispatch(setPrice(0));
      stringPrice = `от ${prettifyPrice(model.priceMin)} до ${prettifyPrice(
        model.priceMax
      )} ₽`;
    }
    return stringPrice;
  }, [
    totalPrice,
    dateFrom,
    dateTo,
    rate.price,
    rate.rateTypeId.unit,
    model.priceMax,
    model.priceMin,
    isRightWheel,
    isNeedChildChair,
    isFullTank,
    dispatch,
  ]);

  const handleNextButtonClick = useCallback(() => {
    if (stage !== 4) {
      dispatch(changeStage(stage + 1));
    } else {
      changeModalVisibility();
    }
  }, [changeModalVisibility, dispatch, stage]);
  return (
    <>
      <Modal
        isHidden={hidden}
        onAccept={onModalAccept}
        onDecline={onModalDecline}
      />
      <div className="order-details">
        <label>Ваш заказ:</label>
        {name && (
          <div className="order-details_row">
            <span>Пункт выдачи</span>
            <div />
            <div className="order-details_value">
              <span>{`${name}${address ? "," : ""}`}</span>
              <span>{address}</span>
            </div>
          </div>
        )}
        {model.name && <OrderDetailsRow label="Модель" value={model.name} />}
        {color && <OrderDetailsRow label="Цвет" value={color} />}
        {rate?.rateTypeId?.name && (
          <OrderDetailsRow label="Тариф" value={rate.rateTypeId.name} />
        )}
        {isFullTank && <OrderDetailsRow label="Полный бак" value="Да" />}
        {isNeedChildChair && (
          <OrderDetailsRow label="Детское кресло" value="Да" />
        )}
        {isRightWheel && <OrderDetailsRow label="Правый руль" value="Да" />}
        {rentTime && (
          <OrderDetailsRow label="Длительность аренды" value={rentTime} />
        )}
        {finalPrice && (
          <p className={priceClass}>
            <b>Цена:</b> {finalPrice}
          </p>
        )}
        <button
          className={buttonClass}
          onClick={handleNextButtonClick}
          disabled={!available}
        >
          {orderButtons.get(stage)}
        </button>
      </div>
    </>
  );
};

export default OrderDetails;
