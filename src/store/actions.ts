import { SET_CITY_NAME } from "./types";

export function setCityName(name: string) {
  return {
    type: SET_CITY_NAME,
    payload: name,
  };
}
