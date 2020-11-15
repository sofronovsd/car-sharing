import React, { useEffect, useState } from "react";
import Header from "../../header/Header";
import "./order-page.scss";
import { Typeahead } from "@gforge/react-typeahead-ts";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ICity from "../../../interfaces/i-city";
import IPoint from "../../../interfaces/i-point";
import OrderDetails from "../../order-details/order-details";
import MapWidget from "../../map-widget/map-widget";

const initialCity: ICity = { name: "", id: "" };
const initialPoint: IPoint = { name: "", address: "", cityId: { id: "" } };
const initialPoints: IPoint[] = [];
const initialCities: ICity[] = [];

const OrderPage = () => {
  const [cities, setCities] = useState(initialCities);
  const [points, setPoints] = useState(initialPoints);
  const [filteredPoints, setFilteredPoints] = useState(initialPoints);
  const [city, setCity] = useState(initialCity);
  const [point, setPoint] = useState(initialPoint);

  useEffect(() => {
    fetch("http://api-factory.simbirsoft1.com/api/db/city", {
      method: "GET",
      headers: {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const cities = res.data;
        setCities(cities);
      })
      .catch((e) => console.log(e));
    fetch("http://api-factory.simbirsoft1.com/api/db/point", {
      method: "GET",
      headers: {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const points = res.data;
        setPoints(points);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    const newFilteredPoints = points.filter(
      (point) => point.cityId.id === city.id
    );
    setFilteredPoints(newFilteredPoints);
  }, [city, points]);

  const changeCity = (value: any) => {
    if (value) {
      setCity(value);
    }
  };

  const changePoint = (value: any) => {
    if (value) {
      setPoint(value);
    }
  };

  return (
    <div className="order-page-container">
      <Header />
      <Tabs>
        <div className="order-nav-bar-container">
          <TabList className="order-nav-bar">
            <Tab
              className="tab-button link"
              default
              selectedClassName="link__accent"
            >
              Местоположение
            </Tab>
            <Tab
              className="tab-button link"
              selectedClassName="link__accent"
              disabledClassName="link__disabled"
              disabled={true}
            >
              Модель
            </Tab>
            <Tab
              className="tab-button link"
              disabled={true}
              disabledClassName="link__disabled"
              selectedClassName="link__accent"
            >
              Дополнительно
            </Tab>
            <Tab
              className="tab-button link"
              disabled={true}
              disabledClassName="link__disabled"
              selectedClassName="link__accent"
            >
              Итого
            </Tab>
          </TabList>
        </div>
        <TabPanel className="react-tabs__tab-panel">
          <main className="order-container">
            <div className="order_form-container">
              <form className="order_form">
                <label>Город</label>
                <span className="clearable">
                  <Typeahead
                    options={cities}
                    displayOption="name"
                    filterOption="name"
                    maxVisible={4}
                    customClasses={{ input: "input", listItem: "listItem" }}
                    showOptionsWhenEmpty={true}
                    value={city.name}
                    onOptionSelected={(value) => changeCity(value)}
                    placeholder="Начните вводить город..."
                  />
                  <button className="icon-clear" />
                </span>
                <label>Пункт выдачи</label>
                <span className="clearable">
                  <Typeahead
                    options={filteredPoints}
                    maxVisible={4}
                    displayOption="name"
                    filterOption="name"
                    customClasses={{ input: "input", listItem: "listItem" }}
                    showOptionsWhenEmpty={true}
                    value={point.name}
                    onOptionSelected={(e) => changePoint(e)}
                    placeholder="Начните вводить пункт..."
                  />
                  <button className="icon-clear" />
                </span>
              </form>
              <MapWidget />
            </div>
            <OrderDetails city={city} point={point} />
          </main>
        </TabPanel>
        <TabPanel>content for tab #2</TabPanel>
        <TabPanel>content for tab #3</TabPanel>
        <TabPanel>content for tab #4</TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderPage;
