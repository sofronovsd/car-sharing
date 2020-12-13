import React, { useEffect, useState } from "react";
import "./step-four.scss";
import { useSelector } from "react-redux";
import { loadCarImage } from "../../api/api-factory";
import { modelSelector, orderSelector } from "../../store/selectors";

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
          <b>Доступна с</b> {order.dateFrom?.format("DD.MM.YYYY HH:mm")}
        </p>
      </div>
      <img src={imgSrc} alt="car" />
    </div>
  );
};

export default StepFour;
