import { OptionsObject, Typeahead } from "@gforge/react-typeahead-ts";
import MapWidget from "../map-widget/map-widget";
import React, { useEffect, useState } from "react";
import {
  fetchCities,
  fetchPoints,
  setCityAddress,
  setCityName,
} from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import ICity from "../../store/interfaces/i-city";
import IPoint from "../../store/interfaces/i-point";
import "./step-one.scss";
import { LocationState } from "../../store/locationReducer";

interface StepOneState {
  location: LocationState;
}

const initialCity: ICity = { name: "", id: "" };
const initialPoint: IPoint = { name: "", address: "", cityId: { id: "" } };

const citiesSelector = (state: StepOneState) => state.location.cities;
const pointsSelector = (state: StepOneState) => state.location.points;

const StepOne = () => {
  const cities = useSelector(citiesSelector);
  const points = useSelector(pointsSelector);
  const dispatch = useDispatch();
  const [filteredPoints, setFilteredPoints] = useState(points);
  const [city, setCity] = useState(initialCity);
  const [point, setPoint] = useState(initialPoint);

  useEffect(() => {
    if (!cities?.length || !points?.length) {
      (async () => {
        dispatch(fetchCities());
        dispatch(fetchPoints());
      })();
    }
  }, []);

  useEffect(() => {
    const newFilteredPoints = points.filter(
      (point) => point.cityId.id === city.id
    );
    setFilteredPoints(newFilteredPoints);
  }, [city, points]);

  const changeCity = (value: string | number | OptionsObject | undefined) => {
    if (value) {
      const city = value as ICity;
      setCity(city);
      dispatch(setCityName(city.name));
    }
  };

  const changePoint = (value: string | number | OptionsObject | undefined) => {
    if (value) {
      const point = value as IPoint;
      setPoint(point);
      dispatch(setCityAddress(point.address));
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
            onOptionSelected={changeCity}
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
            onOptionSelected={changePoint}
            placeholder="Начните вводить пункт..."
          />
          <button className="icon-clear" />
        </span>
      </form>
      <MapWidget />
    </div>
  );
};

export default StepOne;
