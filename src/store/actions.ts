import {
  FETCH_CITIES,
  FETCH_POINTS,
  SET_CITY_ADDRESS,
  SET_CITY_NAME,
} from "./types";
import { loadCities, loadPoints } from "../api/api-factory";

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
