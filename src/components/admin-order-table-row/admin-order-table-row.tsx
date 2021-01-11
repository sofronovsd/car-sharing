import React, { useEffect, useState } from "react";
import moment from "moment";
import CustomCheckbox from "../custom-checkbox/custom-checkbox";
import IOrder from "../../store/interfaces/i-order";
import "./admin-order-table-row.scss";
import { loadCarImage } from "../../api/api-factory";

interface AdminOrderTableRowProps {
  order: IOrder;
}

const AdminOrderTableRow = ({ order }: AdminOrderTableRowProps) => {
  const [imgSrc, setImgSrc] = useState("");
  useEffect(() => {
    if (order.carId) {
      loadCarImage(order.carId.thumbnail.path).then((blob) => {
        setImgSrc(URL.createObjectURL(blob));
      });
    }
  }, [order.carId]);
  return (
    <div className="admin-order-table-row">
      <div className="admin-order-table-row_column">
        <img className="admin-order-table-row_img" src={imgSrc} alt="car" />
      </div>
      <div className="admin-order-table-row_column admin-order-table-row_info">
        <p>
          <span className="admin-order-table-row_info__black">
            {order.carId?.name ?? "N/A"}
          </span>
          {` в `}
          <span className="admin-order-table-row_info__black">{`${
            order.cityId.name ?? "N/A"
          },`}</span>{" "}
          {order.pointId.address ?? "N/A"}
        </p>
        <p>{`${moment(order.dateFrom).format("DD.MM.YYYY HH:mm") ?? "N/A"} - ${
          moment(order.dateTo).format("DD.MM.YYYY HH:mm") ?? "N/A"
        }`}</p>
        <p>
          {`Цвет: `}
          <span className="admin-order-table-row_info__black admin-order-table-row_info__capitalized">
            {order.color ?? "N/A"}
          </span>
        </p>
      </div>
      <div className="admin-order-table-row_column admin-order-table-row_checkbox">
        <CustomCheckbox
          id="service1"
          name="service1"
          checked={order.isFullTank}
          text="Полный бак"
        />
        <CustomCheckbox
          id="service2"
          name="service2"
          checked={order.isNeedChildChair}
          text="Детское кресло"
        />
        <CustomCheckbox
          id="service3"
          name="service3"
          checked={order.isRightWheel}
          text="Правый руль"
        />
      </div>
      <div className="admin-order-table-row_column">
        <h3 className="admin-order-table-row_price">{order.price}</h3>
      </div>
      <div className="admin-order-table-row_column">
        <div className="admin-order-table-row_button-group">
          <button>
            <span className="check">Готово</span>
          </button>
          <button>
            <span className="reject">Отмена</span>
          </button>
          <button>
            <span className="edit">Изменить</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderTableRow;
