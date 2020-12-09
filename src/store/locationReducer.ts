import { FETCH_CITIES, FETCH_POINTS, SET_POINT, SET_CITY } from "./types";
import ICity from "./interfaces/i-city";
import IPoint from "./interfaces/i-point";
import IAction from "./interfaces/i-action";

const initialState: LocationState = {
  city: {
    name: "",
    id: "",
  },
  point: {
    name: "",
    address: "",
    cityId: {
      id: "",
    },
  },
  cities: [],
  points: [],
};

export interface LocationState {
  city: ICity;
  point: IPoint;
  cities: ICity[];
  points: IPoint[];
}

const locationReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_CITY: {
      return {
        ...state,
        city: action.payload,
      };
    }
    case SET_POINT: {
      return {
        ...state,
        point: action.payload,
      };
    }
    case FETCH_CITIES: {
      return {
        ...state,
        cities: action.payload,
      };
    }
    case FETCH_POINTS: {
      return {
        ...state,
        points: action.payload,
      };
    }
    default:
      return state;
  }
};

export default locationReducer;
