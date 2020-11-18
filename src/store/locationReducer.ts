import { SET_CITY_NAME } from "./types";

const initialState = {
  city: {
    name: "",
    address: "",
  },
};

interface IAction {
  type: string;
  payload: string;
}

const locationReducer = (state = initialState, action: IAction) => {
  console.log("action", action);
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
    case "setCityAddress": {
      return {
        ...state,
        city: {
          ...state.city,
          address: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export default locationReducer;
