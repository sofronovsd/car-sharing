import { Typeahead } from "@gforge/react-typeahead-ts";
import MapWidget from "../map-widget/map-widget";
import React, { useEffect, useState } from "react";
import { setCityName } from "../../store/actions";
import { connect, ConnectedProps } from "react-redux";
import ICity from "../../interfaces/i-city";
import IPoint from "../../interfaces/i-point";
import "./step-one.scss";

const initialCity: ICity = { name: "", id: "" };
const initialPoint: IPoint = { name: "", address: "", cityId: { id: "" } };
const initialPoints: IPoint[] = [];
const initialCities: ICity[] = [];

const StepOne = (props: StepOneProps) => {
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
      props.setCityName(value.name);
    }
  };

  const changePoint = (value: any) => {
    if (value) {
      setPoint(value);
    }
  };
  return (
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
  );
};

const mapStateToProps = (state: any) => ({
  name: state.location.city.name,
  address: state.location.city.address,
});

const mapDispatchToProps = {
  setCityName,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type StepOneProps = PropsFromRedux & {
  name: string;
  address: string;
};

export default connector(StepOne);
