import { FETCH_CARS, FETCH_RATES, SET_MODEL } from "./types";
import ICar from "./interfaces/i-car";
import IAction from "./interfaces/i-action";
import IRate from "./interfaces/i-rate";

const initialState: ModelState = {
  model: {
    id: "",
    colors: [],
    name: "",
    description: "",
    number: "",
    priceMax: 0,
    priceMin: 0,
    tank: 0,
    thumbnail: {
      mimetype: "",
      originalname: "",
      path: "",
    },
    categoryId: {
      description: "",
      name: "",
      id: "",
    },
  },
  cars: [],
  rates: [],
};

export interface ModelState {
  model: ICar;
  cars: ICar[];
  rates: IRate[];
}

const modelReducer = (state: ModelState = initialState, action: IAction) => {
  switch (action.type) {
    case FETCH_CARS: {
      return {
        ...state,
        cars: action.payload,
      };
    }
    case FETCH_RATES: {
      return {
        ...state,
        rates: action.payload,
      };
    }
    case SET_MODEL: {
      return {
        ...state,
        model: action.payload,
      };
    }
    default:
      return state;
  }
};

export default modelReducer;
