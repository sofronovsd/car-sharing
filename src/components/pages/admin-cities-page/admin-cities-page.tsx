import React from "react";
import "./admin-cities-page.scss";
import AdminCitiesTable from "../../admin-cities-table/admin-cities-table";

const AdminCitiesPage = () => {
  return (
    <div className="admin-page_container">
      <h1 className="admin-page_header">Города</h1>
      <div className="admin-page_card">
        <AdminCitiesTable />
      </div>
    </div>
  );
};

export default AdminCitiesPage;
