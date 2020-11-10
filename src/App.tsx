import React, { useState } from "react";
import "./App.scss";
import StartPage from "./components/start-page/StartPage";
import { Route, Switch } from "react-router-dom";
import OrderPage from "./components/order-page/OrderPage";
import Menu from "./components/start-page/menu/Menu";
import BurgerMenu from "./components/start-page/burger-menu/BurgerMenu";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="container">
      <Menu isOpen={showMenu} />
      <aside className="side-bar">
        <BurgerMenu isActive={showMenu} setActive={setShowMenu} />
        <button className="language-btn">Eng</button>
      </aside>
      <Switch>
        <Route exact path="/car-sharing" component={StartPage} />
        <Route path="/car-sharing/order" component={OrderPage} />
      </Switch>
    </div>
  );
}

export default App;
