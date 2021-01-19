import React from "react";
import AdminMenuItem from "../admin-menu-item/admin-menu-item";

const AdminMenu = () => {
  return (
    <ul>
      <li>
        <AdminMenuItem iconClassName="auto" label="Карточка автомобиля" />
      </li>
      <li>
        <AdminMenuItem iconClassName="auto-list" label="Список авто" />
      </li>
      <li>
        <AdminMenuItem iconClassName="order" label="Заказы" />
      </li>
      <li>
        <AdminMenuItem iconClassName="menu4" label="Menu 4" />
      </li>
      <li>
        <AdminMenuItem iconClassName="menu5" label="Menu 5" />
      </li>
      <li>
        <AdminMenuItem iconClassName="menu6" label="Menu 6" />
      </li>
      <li>
        <AdminMenuItem iconClassName="menu7" label="Menu 7" />
      </li>
    </ul>
  );
};

export default AdminMenu;
