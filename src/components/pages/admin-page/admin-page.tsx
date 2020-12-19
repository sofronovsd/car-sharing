import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "../login-page/login-page";
import "./admin-page.scss";

const AdminPage = () => {
  return (
    <Switch>
      <Route exact path="/car-sharing/admin/login" component={LoginPage} />
    </Switch>
  );
};

export default AdminPage;
