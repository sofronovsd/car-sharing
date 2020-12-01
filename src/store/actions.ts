import {
  FETCH_CARS,
  FETCH_CITIES,
  FETCH_POINTS,
  FETCH_RATES,
  SET_CHILD_CHAIR,
  SET_POINT,
  SET_CITY,
  SET_COLOR,
  SET_DATE_FROM,
  SET_DATE_TO,
  SET_FULL_TANK,
  SET_MODEL,
  SET_RATE,
  SET_RIGHT_WHEEL,
} from "./types";
import {
  loadCars,
  loadCities,
  loadPoints,
  loadRates,
} from "../api/api-factory";
import { Dispatch } from "react";
import IAction from "./interfaces/i-action";
import ICar from "./interfaces/i-car";
import IRate from "./interfaces/i-rate";
import ICity from "./interfaces/i-city";
import IPoint from "./interfaces/i-point";
import { Moment } from "moment";

export function setCity(city: ICity) {
  return {
    type: SET_CITY,
    payload: city,
  };
}

export function setPoint(point: IPoint) {
  return {
    type: SET_POINT,
    payload: point,
  };
}

export function setColor(color: string) {
  return {
    type: SET_COLOR,
    payload: color,
  };
}

export function setRate(rate: IRate) {
  return {
    type: SET_RATE,
    payload: rate,
  };
}

export function setFullTank(value: boolean) {
  return {
    type: SET_FULL_TANK,
    payload: value,
  };
}

export function setChildChair(value: boolean) {
  return {
    type: SET_CHILD_CHAIR,
    payload: value,
  };
}

export function setRightWheel(value: boolean) {
  return {
    type: SET_RIGHT_WHEEL,
    payload: value,
  };
}

export function setDateFrom(value: string | Moment) {
  return {
    type: SET_DATE_FROM,
    payload: value,
  };
}

export function setDateTo(value: string | Moment) {
  return {
    type: SET_DATE_TO,
    payload: value,
  };
}

export function fetchCities() {
  return async (dispatch: Dispatch<IAction>) => {
    const response = await loadCities();
    dispatch({ type: FETCH_CITIES, payload: response.data });
  };
}

export function fetchPoints() {
  return async (dispatch: Dispatch<IAction>) => {
    const response = await loadPoints();
    dispatch({ type: FETCH_POINTS, payload: response.data });
  };
}

export function fetchCars() {
  return async (dispatch: Dispatch<IAction>) => {
    const response = await loadCars();
    dispatch({ type: FETCH_CARS, payload: response.data });
  };
}

export function fetchRates() {
  return async (dispatch: Dispatch<IAction>) => {
    const response = await loadRates();
    dispatch({ type: FETCH_RATES, payload: response.data });
  };
}

export function setModel(car: ICar) {
  return {
    type: SET_MODEL,
    payload: car,
  };
}
