import React, { useCallback, useState } from "react";
import "./App.scss";
import StartPage from "./components/pages/start-page/start-page";
import { Route, Switch } from "react-router-dom";
import OrderPage from "./components/pages/order-page/order-page";
import BurgerMenu from "./components/burger-menu/burger-menu";
import Menu from "./components/menu/menu";
import FinalPage from "./components/pages/final-page/final-page";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const changeActive = useCallback(() => {
    setShowMenu((prev: boolean) => !prev);
  }, [setShowMenu]);

  return (
    <div className="container">
      <Menu isOpen={showMenu} />
      <aside className="side-bar">
        <BurgerMenu isActive={showMenu} changeActive={changeActive} />
        <button className="language-btn">Eng</button>
      </aside>
      <Switch>
        <Route exact path="/car-sharing/" component={StartPage} />
        <Route path="/car-sharing/order" component={OrderPage} />
      </Switch>
    </div>
  );
}

export default App;
