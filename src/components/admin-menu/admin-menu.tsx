import React from "react";
import AdminMenuItem from "../admin-menu-item/admin-menu-item";

const AdminMenu = () => {
  return (
    <ul>
      <li>
        <AdminMenuItem
          iconClassName="auto"
          label="Карточка автомобиля"
          route="/admin/car"
        />
      </li>
      <li>
        <AdminMenuItem
          iconClassName="auto-list"
          label="Список авто"
          route="/admin/orders"
        />
      </li>
      <li>
        <AdminMenuItem
          iconClassName="order"
          label="Заказы"
          route="/admin/orders"
        />
      </li>
      <li>
        <AdminMenuItem
          iconClassName="menu4"
          label="Автомобили"
          route="/admin/cars"
        />
      </li>
      <li>
        <AdminMenuItem
          iconClassName="menu5"
          label="Menu 5"
          route="/admin/orders"
        />
      </li>
      <li>
        <AdminMenuItem
          iconClassName="menu6"
          label="Menu 6"
          route="/admin/orders"
        />
      </li>
      <li>
        <AdminMenuItem
          iconClassName="menu7"
          label="Error"
          route="/admin/error"
        />
      </li>
    </ul>
  );
};

export default AdminMenu;
