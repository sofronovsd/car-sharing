import React, { useEffect, useState } from "react";
import IOrder from "../../store/interfaces/i-order";
import "./admin-orders-table.scss";
import AdminOrderTableRow from "../admin-order-table-row/admin-order-table-row";
import Pagination from "../pagination/pagination";
import { useSelector } from "react-redux";
import { accessTokenSelector } from "../../store/selectors";
import { getOrders } from "../../api/api-factory";
import { useHistory } from "react-router-dom";

const limit = 5;

const AdminOrdersTable = () => {
  const accessToken = useSelector(accessTokenSelector);
  const [orders, setOrders] = useState([] as IOrder[]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const history = useHistory();

  useEffect(() => {
    getOrders(accessToken, limit, currentPage)
      .then((res) => {
        setOrders(res.data);
        setTotalRecords(res.count);
      })
      .catch(() => {
        history.push("/admin/error");
      });
  }, [accessToken, currentPage, history]);

  return (
    <div className="admin-orders-table">
      {orders.map((order) => {
        return <AdminOrderTableRow order={order} />;
      })}
      <Pagination
        totalRecords={totalRecords}
        limitRecords={limit}
        neighbourPages={2}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default AdminOrdersTable;
