import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../header/header";
import "./final-page.scss";
import OrderDetails from "../../order-details/order-details";
import { useDispatch, useSelector } from "react-redux";
import { getOrder, loadCarImage } from "../../../api/api-factory";
import {
  setAvailable,
  setChildChair,
  setCity,
  setColor,
  setDateFrom,
  setDateTo,
  setFullTank,
  setModel,
  setPoint,
  setPrice,
  setRate,
  setRightWheel,
} from "../../../store/actions";
import moment from "moment";
import { modelSelector, orderSelector } from "../../../store/selectors";

interface FinalPageParams {
  orderId: string;
}

const FinalPage = () => {
  const model = useSelector(modelSelector);
  const order = useSelector(orderSelector);
  const dispatch = useDispatch();
  const { orderId }: FinalPageParams = useParams();

  const [imgSrc, setImgSrc] = useState("");
  useEffect(() => {
    loadCarImage(model.thumbnail.path).then((blob) => {
      setImgSrc(URL.createObjectURL(blob));
    });
  }, [model.thumbnail.path]);

  useEffect(() => {
    if (!order.price) {
      getOrder(orderId).then((res) => {
        const data = res.data;
        dispatch(setColor(data.color));
        dispatch(setDateFrom(moment(data.dateFrom)));
        dispatch(setDateTo(moment(data.dateTo)));
        dispatch(setFullTank(data.isFullTank));
        dispatch(setChildChair(data.isNeedChildChair));
        dispatch(setRightWheel(data.isRightWheel));
        dispatch(setPrice(data.price));
        dispatch(setCity(data.cityId));
        dispatch(setModel(data.carId));
        dispatch(setPoint(data.pointId));
        dispatch(setRate(data.rateId));
        dispatch(setAvailable(true));
      });
    }
  }, [dispatch, orderId]);

  return (
    <div className="order-page-container">
      <Header />
      <div className="order-nav-bar-container">
        <div className="order-nav-bar">Заказ номер {orderId}</div>
      </div>
      <main className="order-container">
        <div className="total-container">
          <div className="total-card">
            <h2>Ваш заказ подтверждён</h2>
            <h4>{model.name}</h4>
            {model.number ? (
              <div className="model-number">{model.number}</div>
            ) : null}
            {order.isFullTank ? (
              <p>
                <b>Топливо</b> 100%
              </p>
            ) : null}
            <p>
              <b>Доступна с</b> {order.dateFrom?.format("DD.MM.YYYY HH:mm")}
            </p>
          </div>
          <img src={imgSrc} alt="car" />
        </div>
        <OrderDetails stage={5} />
      </main>
    </div>
  );
};

export default FinalPage;
