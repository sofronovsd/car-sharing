import { Typeahead } from "@gforge/react-typeahead-ts";
import MapWidget from "../map-widget/map-widget";
import React, { useEffect, useState } from "react";
import {
  fetchCities,
  fetchPoints,
  setCityAddress,
  setCityName,
} from "../../store/actions";
import { connect, ConnectedProps, useDispatch, useSelector } from "react-redux";
import ICity from "../../store/interfaces/i-city";
import IPoint from "../../store/interfaces/i-point";
import "./step-one.scss";
import { LocationState } from "../../store/locationReducer";

const initialCity: ICity = { name: "", id: "" };
const initialPoint: IPoint = { name: "", address: "", cityId: { id: "" } };

const StepOne = (props: PropsFromRedux) => {
  const cities = useSelector((state: StepOneState) => state.location.cities);
  const points = useSelector((state: StepOneState) => state.location.points);
  const dispatch = useDispatch();
  const [filteredPoints, setFilteredPoints] = useState(points);
  const [city, setCity] = useState(initialCity);
  const [point, setPoint] = useState(initialPoint);

  useEffect(() => {
    if (!cities || cities.length === 0 || !points || points.length === 0) {
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

  const changeCity = (value: any) => {
    if (value) {
      setCity(value);
      props.setCityName(value.name);
    }
  };

  const changePoint = (value: any) => {
    if (value) {
      setPoint(value);
      props.setCityAddress(value.address);
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

interface StepOneState {
  location: LocationState;
}

const mapStateToProps = (state: StepOneState) => ({
  name: state.location.city.name,
  address: state.location.city.address,
  cities: state.location.cities,
  points: state.location.points,
});

const mapDispatchToProps = {
  setCityName,
  setCityAddress,
  fetchCities,
  fetchPoints,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(StepOne);
