import React from "react";
import "./admin-menu-item.scss";

interface AdminMenuItemProps {
  iconClassName: string;
  label: string;
}

const AdminMenuItem = ({ iconClassName, label }: AdminMenuItemProps) => {
  return (
    <div className="admin-menu-item">
      <span className={iconClassName} />
      <h4>{label}</h4>
    </div>
  );
};

export default AdminMenuItem;
