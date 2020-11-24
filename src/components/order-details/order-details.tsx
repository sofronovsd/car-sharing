import React from "react";
import { connect, ConnectedProps, useSelector } from "react-redux";
import "./order-details.scss";
import { ModelState } from "../../store/modelReducer";
import { prettifyPrice } from "../../utils/utils";

const OrderDetails = (props: OrderDetailsProps) => {
  const { name, address } = props;

  const model = useSelector((state: OrderDetailsState) => state.model.model);
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

const mapStateToProps = (state: any) => ({
  name: state.location.city.name,
  address: state.location.city.address,
});

const connector = connect(mapStateToProps, null);

type PropsFromRedux = ConnectedProps<typeof connector>;

type OrderDetailsProps = PropsFromRedux & {
  name: string;
  address: string;
};

interface OrderDetailsState {
  model: ModelState;
}

export default connector(OrderDetails);
