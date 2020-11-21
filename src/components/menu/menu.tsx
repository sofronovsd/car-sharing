import React from "react";
import "./menu.scss";

interface IMenu {
  isOpen: boolean;
}

const Menu = (props: IMenu) => {
  const { isOpen } = props;
  return (
    <nav className={`modal ${isOpen ? "modal__active" : ""}`}>
      <ul className="modal_menu menu">
        <li>
          <a href="#" target="_blank">
            Парковка
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Страховка
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Бензин
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Обслуживание
          </a>
        </li>
        <li>
          <ul className="menu menu__horizontal">
            <li>
              <a href="#" target="_blank">
                <span className="telegram" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <span className="facebook" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <span className="instagram" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
