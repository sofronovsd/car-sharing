import React, { useEffect, useState } from "react";
import "./step-four.scss";
import { ModelState } from "../../store/modelReducer";
import { OrderState } from "../../store/orderReducer";
import { useSelector } from "react-redux";
import { loadCarImage } from "../../api/api-factory";

interface StepFourState {
  model: ModelState;
  order: OrderState;
}

const modelSelector = (state: StepFourState) => state.model.model;
const orderSelector = (state: StepFourState) => state.order;

const StepFour = () => {
  const model = useSelector(modelSelector);
  const order = useSelector(orderSelector);

  const [imgSrc, setImgSrc] = useState("");
  useEffect(() => {
    loadCarImage(model.thumbnail.path).then((blob) => {
      setImgSrc(URL.createObjectURL(blob));
    });
  }, [model.thumbnail.path]);
  return (
    <div className="total-container">
      <div className="total-card">
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
          <b>Доступна с</b> {order.dateFrom?.format("DD.MM.YYYY hh:mm")}
        </p>
      </div>
      <img src={imgSrc} alt="car" />
    </div>
  );
};

export default StepFour;
