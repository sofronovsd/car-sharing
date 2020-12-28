import React, { useEffect, useState } from "react";
import "./admin-orders-page.scss";
import { useSelector } from "react-redux";
import { getOrders } from "../../../api/api-factory";
import { accessTokenSelector } from "../../../store/selectors";
import AdminTable from "../../admin-table/admin-table";
import IOrder from "../../../store/interfaces/i-order";

const AdminOrdersPage = () => {
  const accessToken = useSelector(accessTokenSelector);
  const [orders, setOrders] = useState([] as IOrder[]);

  useEffect(() => {
    getOrders(accessToken).then((res) => setOrders(res.data));
  }, []);

  return (
    <div className="admin-page_container">
      <h1 className="admin-page_header">Заказы</h1>
      <div className="admin-page_card">
        <AdminTable orders={orders} />
      </div>
    </div>
  );
};

export default AdminOrdersPage;
