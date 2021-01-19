import React from "react";
import "./admin-menu-item.scss";
import { Link } from "react-router-dom";

interface AdminMenuItemProps {
  iconClassName: string;
  label: string;
  route: string;
}

const AdminMenuItem = ({ iconClassName, label, route }: AdminMenuItemProps) => {
  return (
    <Link to={route} className="admin-menu-item">
      <span className={iconClassName} />
      <h4>{label}</h4>
    </Link>
  );
};

export default AdminMenuItem;
