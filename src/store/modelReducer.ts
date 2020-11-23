import { FETCH_CARS, SET_MODEL } from "./types";

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

interface IAction {
  type: string;
  payload: any;
}

export interface ICar {
  id: string;
  colors: string[];
  name: string;
  description: string;
  number: string;
  priceMax: number;
  priceMin: number;
  tank: number;
  thumbnail: IThumbnail;
  categoryId: CategoryId;
}

interface IThumbnail {
  mimetype: string;
  originalname: string;
  path: string;
}

interface CategoryId {
  description: string;
  name: string;
  id: string;
}

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
