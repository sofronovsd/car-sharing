import React from "react";
import "./admin-cars-page.scss";
import AdminCarsTable from "../../admin-cars-table/admin-cars-table";

const AdminCarsPage = () => {
  return (
    <div className="admin-page_container">
      <h1 className="admin-page_header">Автомобили</h1>
      <div className="admin-page_card">
        <AdminCarsTable />
      </div>
    </div>
  );
};

export default AdminCarsPage;
