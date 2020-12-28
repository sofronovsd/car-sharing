import React from "react";
import IOrder from "../../store/interfaces/i-order";
import "./admin-table.scss";
import AdminOrderTableRow from "../admin-order-table-row/admin-order-table-row";

interface AdminTableProps {
  orders: IOrder[];
}

const AdminTable = ({ orders }: AdminTableProps) => {
  return (
    <div className="admin-table">
      {orders.map((order) => {
        return <AdminOrderTableRow order={order} />;
      })}
    </div>
  );
};

export default AdminTable;
