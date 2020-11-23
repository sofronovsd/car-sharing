import {
  FETCH_CARS,
  FETCH_CITIES,
  FETCH_POINTS,
  SET_CITY_ADDRESS,
  SET_CITY_NAME,
  SET_MODEL,
} from "./types";
import { loadCars, loadCities, loadPoints } from "../api/api-factory";
import { ICar } from "./modelReducer";

export function setCityName(name: string) {
  return {
    type: SET_CITY_NAME,
    payload: name,
  };
}

export function setCityAddress(address: string) {
  return {
    type: SET_CITY_ADDRESS,
    payload: address,
  };
}

export function fetchCities() {
  return async (dispatch: any) => {
    const response = await loadCities();
    dispatch({ type: FETCH_CITIES, payload: response.data });
  };
}

export function fetchPoints() {
  return async (dispatch: any) => {
    const response = await loadPoints();
    dispatch({ type: FETCH_POINTS, payload: response.data });
  };
}

export function fetchCars() {
  return async (dispatch: any) => {
    const response = await loadCars();
    dispatch({ type: FETCH_CARS, payload: response.data });
  };
}

export function setModel(car: ICar) {
  return {
    type: SET_MODEL,
    payload: car,
  };
}
