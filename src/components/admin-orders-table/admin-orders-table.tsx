import React, { useEffect, useState } from "react";
import IOrder from "../../store/interfaces/i-order";
import "./admin-orders-table.scss";
import AdminOrderTableRow from "../admin-order-table-row/admin-order-table-row";
import Pagination from "../pagination/pagination";
import { useSelector } from "react-redux";
import { accessTokenSelector } from "../../store/selectors";
import { getOrders } from "../../api/api-factory";

const limit = 5;

const AdminOrdersTable = () => {
  const accessToken = useSelector(accessTokenSelector);
  const [orders, setOrders] = useState([] as IOrder[]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    getOrders(accessToken, limit, currentPage).then((res) => {
      console.log("res", res);
      setOrders(res.data);
      setTotalRecords(res.count);
    });
  }, [accessToken, currentPage]);

  return (
    <div className="admin-table">
      <div>
        <select>
          <option>За неделю</option>
        </select>
      </div>
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
