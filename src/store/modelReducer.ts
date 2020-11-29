import { FETCH_CARS, SET_MODEL } from "./types";
import ICar from "./interfaces/i-car";
import IAction from "./interfaces/i-action";

const initialState = {
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
};

export interface ModelState {
  model: ICar;
  cars: ICar[];
}

const modelReducer = (state: ModelState = initialState, action: IAction) => {
  switch (action.type) {
    case FETCH_CARS: {
      return {
        ...state,
        cars: action.payload,
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
