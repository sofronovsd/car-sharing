import {
  CHANGE_STAGE,
  ROLLBACK_ORDER,
  SET_AVAILABLE,
  SET_CHILD_CHAIR,
  SET_COLOR,
  SET_DATE_FROM,
  SET_DATE_TO,
  SET_FULL_TANK,
  SET_ORDER,
  SET_PRICE,
  SET_RATE,
  SET_RIGHT_WHEEL,
} from "./types";
import IAction from "./interfaces/i-action";
import IRate from "./interfaces/i-rate";
import { Moment } from "moment";

const initialState: OrderState = {
  color: "",
  isFullTank: false,
  isNeedChildChair: false,
  isRightWheel: false,
  price: 0,
  rate: {
    id: "",
    price: 0,
    rateTypeId: {
      name: "",
      unit: "",
    },
  },
  stage: 1,
  available: false,
};

export interface OrderState {
  color: string;
  dateFrom?: Moment;
  dateTo?: Moment;
  price: number;
  isFullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
  rate: IRate;
  stage: number;
  available: boolean;
}

const orderReducer = (state: OrderState = initialState, action: IAction) => {
  switch (action.type) {
    case SET_COLOR: {
      return {
        ...state,
        color: action.payload,
      };
    }
    case SET_PRICE: {
      return {
        ...state,
        price: action.payload,
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
    case SET_AVAILABLE: {
      return {
        ...state,
        available: action.payload,
      };
    }
    case SET_ORDER: {
      if (typeof action.payload === "object") {
        return {
          ...state,
          ...action.payload,
        };
      } else {
        return state;
      }
    }
    case ROLLBACK_ORDER: {
      if (typeof action.payload === "object") {
        return {
          ...state,
          ...action.payload,
        };
      } else {
        return state;
      }
    }
    case CHANGE_STAGE: {
      if (typeof action.payload === "number") {
        return {
          ...state,
          stage: action.payload,
        };
      } else {
        return state;
      }
    }
    default:
      return state;
  }
};

export default orderReducer;
