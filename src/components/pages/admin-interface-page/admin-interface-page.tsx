import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminOrdersPage from "../admin-orders-page/admin-orders-page";

import "./admin-interface-page.scss";
import AdminMenu from "../../admin-menu/admin-menu";
import AdminErrorPage from "../admin-error-page/admin-error-page";
import AdminCarEditPage from "../admin-car-edit-page/admin-car-edit-page";

const AdminInterfacePage = () => {
  return (
    <div className="admin-interface_container">
      <aside className="admin-side-bar">
        <div className="admin-side-bar_header">
          <img src="../assets/logo.svg" alt="logo" />
          <h3>Need for drive</h3>
        </div>
        <AdminMenu />
      </aside>
      <main className="admin-interface_main">
        <header>
          <span>
            <input type="text" placeholder="Поиск ..." />
          </span>
        </header>
        <Switch>
          <Route exact path="/admin/orders" component={AdminOrdersPage} />
          <Route exact path="/admin/cars" component={AdminCarEditPage} />
          <Route path="/admin/error" component={AdminErrorPage} />
        </Switch>
        <footer>
          <div>
            <a href="#">Главная страница</a>
            <a href="#">Ссылка</a>
          </div>
          <span>Copyright © 2020 Simbirsoft</span>
        </footer>
      </main>
    </div>
  );
};

export default AdminInterfacePage;
