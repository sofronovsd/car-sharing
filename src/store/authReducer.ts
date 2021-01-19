import { AUTHENTICATE, UNAUTHENTICATE } from "./types";
import IAction from "./interfaces/i-action";

const initialState: AuthState = {
  accessToken: "",
  refreshToken: "",
  tokenType: "",
  userId: "",
  expiresIn: 0,
  isAuthenticated: false,
};

export interface AuthState {
  tokenType: string;
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
  userId: string;
  isAuthenticated: boolean;
}

const authReducer = (state: AuthState = initialState, action: IAction) => {
  switch (action.type) {
    case AUTHENTICATE: {
      if (typeof action.payload === "object") {
        return {
          ...state,
          ...action.payload,
        };
      }
      return state;
    }
    case UNAUTHENTICATE: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
