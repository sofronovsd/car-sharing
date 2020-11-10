import React, { useEffect, useState } from "react";
import Header from "../start-page/header/Header";
import "./order-page.scss";
import { Typeahead } from "@gforge/react-typeahead-ts";

const OrderPage = () => {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");
  useEffect(() => {
    fetch("http://api-factory.simbirsoft1.com/api/db/city", {
      method: "GET",
      headers: {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const data = res.data;
        const cities = data.map((row: any) => row.name);
        setCities(cities);
      })
      .catch((e) => console.log(e));
  }, []);

  const changeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <div className="order-page-container">
      <Header />
      <nav className="order-nav-bar">
        <ul>
          <li>
            <a className="link link__accent" href="#">
              Местоположение
            </a>
          </li>
          <li>
            <a className="link link__disabled" href="#">
              Модель
            </a>
          </li>
          <li>
            <a className="link link__disabled" href="#">
              Дополнительно
            </a>
          </li>
          <li>
            <a className="link link__disabled" href="#">
              Итого
            </a>
          </li>
        </ul>
      </nav>
      <main className="order-container">
        <div className="order_form-container">
          <form className="order_form">
            <label>Город</label>
            <span className="clearable">
              <Typeahead
                options={cities}
                maxVisible={4}
                customClasses={{ input: "input", listItem: "listItem" }}
                showOptionsWhenEmpty={true}
                value={city}
                onChange={(e) => changeCity(e)}
              />
              <button className="icon-clear" />
            </span>
            <label>Пункт выдачи</label>
            <input type="text" placeholder="Начните вводить пункт..." />
          </form>
          <div className="order_map-container">
            <span>Выбрать на карте:</span>
            <img src="./assets/map.png" />
          </div>
        </div>
        <div>order</div>
      </main>
    </div>
  );
};

export default OrderPage;
