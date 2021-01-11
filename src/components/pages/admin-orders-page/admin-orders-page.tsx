import React, { useEffect, useState } from "react";
import "./admin-orders-page.scss";
import { useSelector } from "react-redux";
import { getOrders } from "../../../api/api-factory";
import { accessTokenSelector } from "../../../store/selectors";
import AdminOrdersTable from "../../admin-orders-table/admin-orders-table";
import IOrder from "../../../store/interfaces/i-order";

const AdminOrdersPage = () => {
  return (
    <div className="admin-page_container">
      <h1 className="admin-page_header">Заказы</h1>
      <div className="admin-page_card">
        <AdminOrdersTable />
      </div>
    </div>
  );
};

export default AdminOrdersPage;
