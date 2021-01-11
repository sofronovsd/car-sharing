import React from "react";
import IOrder from "../../store/interfaces/i-order";
import "./admin-table.scss";
import AdminOrderTableRow from "../admin-order-table-row/admin-order-table-row";
import Pagination from "../pagination/pagination";

interface AdminTableProps {
  orders: IOrder[];
}

const AdminTable = ({ orders }: AdminTableProps) => {
  return (
    <div className="admin-table">
      {orders.map((order) => {
        return <AdminOrderTableRow order={order} />;
      })}
      <Pagination
        totalRecords={20}
        limitRecords={10}
        neighbourPages={2}
        currentPage={1}
      />
    </div>
  );
};

export default AdminTable;
