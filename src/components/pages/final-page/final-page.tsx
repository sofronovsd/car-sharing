import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../header/header";
import "./final-page.scss";
import OrderDetails from "../../order-details/order-details";
import { useDispatch, useSelector } from "react-redux";
import { getOrder, loadCarImage } from "../../../api/api-factory";
import { setCity, setModel, setOrder, setPoint } from "../../../store/actions";
import moment from "moment";
import { modelSelector, orderSelector } from "../../../store/selectors";
import { OrderState } from "../../../store/orderReducer";

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
        const orderRequest = {
          price: data.price,
          color: data.color,
          dateFrom: moment(data.dateFrom),
          dateTo: moment(data.dateTo),
          available: true,
          isFullTank: data.isFullTank,
          isNeedChildChair: data.isNeedChildChair,
          isRightWheel: data.isRightWheel,
          rate: data.rateId,
        } as OrderState;
        dispatch(setCity(data.cityId));
        dispatch(setModel(data.carId));
        dispatch(setPoint(data.pointId));
        dispatch(setOrder(orderRequest));
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
            {model.number && <div className="model-number">{model.number}</div>}
            {order.isFullTank && (
              <p>
                <b>Топливо</b> 100%
              </p>
            )}
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
