import { LOAD_CARS } from "./types";

const initialState = {
  cars: [],
};

interface IAction {
  type: string;
  payload: string | ICar[];
}

interface ICar {
  name: string;
  price: string;
  image: string;
  type: string;
}

interface State {
  cars: ICar[];
}

const modelReducer = (state: State = initialState, action: IAction) => {
  console.log("action", action);
  switch (action.type) {
    case LOAD_CARS: {
      if (typeof action.payload === "string") {
        return state;
      }
      return {
        ...state,
        cars: state.cars.concat(action.payload),
      };
    }
    default:
      return state;
  }
};

export default modelReducer;
