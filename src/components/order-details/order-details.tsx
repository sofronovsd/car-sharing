import React from "react";
import { connect, ConnectedProps } from "react-redux";
import "./order-details.scss";

const OrderDetails = (props: OrderDetailsProps) => {
  const { name, address } = props;
  return (
    <div className="order-details">
      <label>Ваш заказ:</label>
      <div className="order-details_address">
        <span>Пункт выдачи</span>
        <div>............</div>
        <div className="address">
          <span>{`${name}${address ? "," : ""}`}</span>
          <span>{address}</span>
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

export default connector(OrderDetails);
