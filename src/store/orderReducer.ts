import {
  SET_CHILD_CHAIR,
  SET_COLOR,
  SET_DATE_FROM,
  SET_DATE_TO,
  SET_FULL_TANK,
  SET_RATE,
  SET_RIGHT_WHEEL,
} from "./types";
import IAction from "./interfaces/i-action";
import IRate from "./interfaces/i-rate";

const initialState: OrderState = {
  color: "",
  isFullTank: false,
  isNeedChildChair: false,
  isRightWheel: false,
  price: 0,
  rate: {
    price: 0,
    rateTypeId: {
      name: "",
      unit: "",
    },
  },
};

export interface OrderState {
  color: string;
  dateFrom?: Date;
  dateTo?: Date;
  price: number;
  isFullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
  rate: IRate;
}

const orderReducer = (state: OrderState = initialState, action: IAction) => {
  switch (action.type) {
    case SET_COLOR: {
      return {
        ...state,
        color: action.payload,
      };
    }
    case SET_RATE: {
      return {
        ...state,
        rate: action.payload,
      };
    }
    case SET_FULL_TANK: {
      return {
        ...state,
        isFullTank: action.payload,
      };
    }
    case SET_CHILD_CHAIR: {
      return {
        ...state,
        isNeedChildChair: action.payload,
      };
    }
    case SET_RIGHT_WHEEL: {
      return {
        ...state,
        isRightWheel: action.payload,
      };
    }
    case SET_DATE_FROM: {
      return {
        ...state,
        dateFrom: action.payload,
      };
    }
    case SET_DATE_TO: {
      return {
        ...state,
        dateTo: action.payload,
      };
    }
    default:
      return state;
  }
};

export default orderReducer;
