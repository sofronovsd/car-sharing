import React from "react";
import { Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { authenticatedSelector } from "../../store/selectors";

interface LoggedInRouteProps {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}

const LoggedInRoute = ({ component: Component }: LoggedInRouteProps) => {
  const history = useHistory();
  const isAuthenticated = useSelector(authenticatedSelector);
  if (!isAuthenticated) {
    history.push(`/admin/login`);
  }
  return <Route render={(otherProps) => <Component {...otherProps} />} />;
};

export default LoggedInRoute;
