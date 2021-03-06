import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "../login-page/login-page";
import AdminInterfacePage from "../admin-interface-page/admin-interface-page";
import "./admin-page.scss";
import LoggedInRoute from "../../routes/logged-in-route";

const AdminPage = () => {
  return (
    <Switch>
      <Route exact path="/admin/login" component={LoginPage} />
      <LoggedInRoute path="/admin" component={AdminInterfacePage} />
    </Switch>
  );
};

export default AdminPage;
