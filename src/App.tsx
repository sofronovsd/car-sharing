import React, { useState } from "react";
import "./App.scss";
import StartPage from "./components/pages/start-page/StartPage";
import { Route, Switch } from "react-router-dom";
import OrderPage from "./components/pages/order-page/OrderPage";
import Menu from "./components/menu/Menu";
import BurgerMenu from "./components/burger-menu/BurgerMenu";

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
        <Route exact path="/" component={StartPage} />
        <Route path="/order" component={OrderPage} />
      </Switch>
    </div>
  );
}

export default App;
