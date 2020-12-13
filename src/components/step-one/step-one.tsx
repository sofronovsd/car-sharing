import { OptionsObject, Typeahead } from "@gforge/react-typeahead-ts";
import MapWidget from "../map-widget/map-widget";
import React, { useCallback, useEffect, useState } from "react";
import {
  fetchCities,
  fetchPoints,
  rollbackOrder,
  setAvailable,
  setCity,
  setModel,
  setPoint,
} from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import ICity from "../../store/interfaces/i-city";
import IPoint from "../../store/interfaces/i-point";
import "./step-one.scss";
import { customFilter } from "../../utils/utils";
import ICar from "../../store/interfaces/i-car";
import IRateTypeId from "../../store/interfaces/i-rate-type-id";
import IRate from "../../store/interfaces/i-rate";
import {
  citiesSelector,
  citySelector,
  pointSelector,
  pointsSelector,
} from "../../store/selectors";
import { OrderState } from "../../store/orderReducer";

const StepOne = () => {
  const cities = useSelector(citiesSelector);
  const points = useSelector(pointsSelector);
  const storedCity = useSelector(citySelector);
  const storedPoint = useSelector(pointSelector);
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
      if (storedCity?.id) {
        return point.cityId.id === storedCity.id;
      } else {
        return true;
      }
    });
    setFilteredPoints(newFilteredPoints);
  }, [storedCity, points]);

  const resetFields = useCallback(() => {
    const orderRequest = {
      stage: 1,
      color: "",
      dateFrom: undefined,
      dateTo: undefined,
      isRightWheel: false,
      isFullTank: false,
      isNeedChildChair: false,
      price: 0,
      rate: {
        price: 0,
        rateTypeId: { name: "", unit: "" } as IRateTypeId,
      } as IRate,
    } as OrderState;
    dispatch(setModel({ id: "", name: "" } as ICar));
    dispatch(rollbackOrder(orderRequest));
  }, [dispatch]);

  const changeCity = useCallback(
    (value: string | number | OptionsObject | undefined) => {
      if (value) {
        const city = value as ICity;
        dispatch(setCity(city));
        if (city.id !== storedCity.id) {
          resetFields();
        }
      } else {
        resetFields();
      }
    },
    [dispatch, resetFields, storedCity.id]
  );

  const changePoint = useCallback(
    (value: string | number | OptionsObject | undefined) => {
      if (value) {
        const point = value as IPoint;

        dispatch(setPoint(point));
        if (point.id !== storedPoint.id) {
          resetFields();
        }

        const newCity = cities.find((city) => city.id === point.cityId.id);
        if (newCity?.id !== storedCity?.id) {
          dispatch(setCity(newCity));
        }
      } else {
        resetFields();
      }
    },
    [dispatch, storedPoint.id, cities, storedCity?.id, resetFields]
  );

  useEffect(() => {
    if (storedCity.id && storedPoint.name) {
      dispatch(setAvailable(true));
    } else {
      dispatch(setAvailable(false));
    }
  }, [storedCity.id, dispatch, storedPoint.name]);
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
            value={storedCity.name}
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
            value={storedPoint.name}
            onOptionSelected={changePoint}
            searchOptions={customFilter}
            placeholder="Начните вводить пункт..."
          />
          <button className="icon-clear" />
        </span>
      </form>
      <MapWidget points={filteredPoints} />
    </div>
  );
};

export default StepOne;
