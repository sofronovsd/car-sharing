import {
  FETCH_CITIES,
  FETCH_POINTS,
  SET_CITY_ADDRESS,
  SET_CITY_NAME,
} from "./types";
import ICity from "./interfaces/i-city";
import IPoint from "./interfaces/i-point";
import IAction from "./interfaces/i-action";

const initialState: LocationState = {
  city: {
    name: "",
    address: "",
  },
  cities: [],
  points: [],
};

interface StateCity {
  name: string;
  address: string;
}

export interface LocationState {
  city: StateCity;
  cities: ICity[];
  points: IPoint[];
}

const locationReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_CITY_NAME: {
      return {
        ...state,
        city: {
          ...state.city,
          name: action.payload,
        },
      };
    }
    case SET_CITY_ADDRESS: {
      return {
        ...state,
        city: {
          ...state.city,
          address: action.payload,
        },
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
