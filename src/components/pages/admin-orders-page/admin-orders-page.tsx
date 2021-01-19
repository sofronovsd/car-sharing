import React from "react";
import "./admin-orders-page.scss";
import AdminOrdersTable from "../../admin-orders-table/admin-orders-table";

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
