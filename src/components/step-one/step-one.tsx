import { OptionsObject, Typeahead } from "@gforge/react-typeahead-ts";
import MapWidget from "../map-widget/map-widget";
import React, { useCallback, useEffect, useState } from "react";
import {
  fetchCities,
  fetchPoints,
  setAvailable,
  setCity,
  setPoint,
} from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import ICity from "../../store/interfaces/i-city";
import IPoint from "../../store/interfaces/i-point";
import "./step-one.scss";
import { LocationState } from "../../store/locationReducer";
import { customFilter } from "../../utils/utils";

interface StepOneState {
  location: LocationState;
}

const citiesSelector = (state: StepOneState) => state.location.cities;
const pointsSelector = (state: StepOneState) => state.location.points;
const citySelector = (state: StepOneState) => state.location.city;
const pointSelector = (state: StepOneState) => state.location.point;

const StepOne = () => {
  const cities = useSelector(citiesSelector);
  const points = useSelector(pointsSelector);
  const city = useSelector(citySelector);
  const point = useSelector(pointSelector);
  const dispatch = useDispatch();
  const [filteredPoints, setFilteredPoints] = useState(points);

  useEffect(() => {
    if (!cities?.length || !points?.length) {
      (async () => {
        dispatch(fetchCities());
        dispatch(fetchPoints());
      })();
    }
  }, [cities?.length, dispatch, points?.length]);

  useEffect(() => {
    const newFilteredPoints = points.filter((point) => {
      if (city?.id) {
        return point.cityId.id === city.id;
      } else {
        return true;
      }
    });
    setFilteredPoints(newFilteredPoints);
  }, [city, points]);

  const changeCity = useCallback(
    (value: string | number | OptionsObject | undefined) => {
      if (value) {
        const city = value as ICity;
        dispatch(setCity(city));
      }
    },
    [dispatch]
  );

  const changePoint = useCallback(
    (value: string | number | OptionsObject | undefined) => {
      if (value) {
        const point = value as IPoint;

        dispatch(setPoint(point));

        const newCity = cities.find((city) => city.id === point.cityId.id);
        if (newCity?.id !== city?.id) {
          dispatch(setCity(newCity));
        }
      }
    },
    [cities, city?.id, dispatch]
  );

  useEffect(() => {
    if (city.id && point.name) {
      dispatch(setAvailable(true));
    } else {
      dispatch(setAvailable(false));
    }
  }, [city.id, dispatch, point.name]);
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
            value={city.name}
            onOptionSelected={changeCity}
            searchOptions={customFilter}
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
            value={point.name}
            onOptionSelected={changePoint}
            searchOptions={customFilter}
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
