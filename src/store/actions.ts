import {
  CHANGE_STAGE,
  FETCH_CARS,
  FETCH_CITIES,
  FETCH_POINTS,
  FETCH_RATES,
  ROLLBACK_ORDER,
  SET_AVAILABLE,
  SET_CHILD_CHAIR,
  SET_CITY,
  SET_COLOR,
  SET_DATE_FROM,
  SET_DATE_TO,
  SET_FULL_TANK,
  SET_MODEL,
  SET_ORDER,
  SET_POINT,
  SET_PRICE,
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
import { OrderState } from "./orderReducer";

export function setCity(city: ICity | undefined) {
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

export function setPrice(price: number) {
  return {
    type: SET_PRICE,
    payload: price,
  };
}

export function setOrder(order: OrderState) {
  return {
    type: SET_ORDER,
    payload: order,
  };
}

export function rollbackOrder(order: OrderState) {
  return {
    type: ROLLBACK_ORDER,
    payload: order,
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

export function changeStage(value: number) {
  return {
    type: CHANGE_STAGE,
    payload: value,
  };
}

export function setAvailable(value: boolean) {
  return {
    type: SET_AVAILABLE,
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

export function setModel(car: ICar | undefined) {
  return {
    type: SET_MODEL,
    payload: car,
  };
}
