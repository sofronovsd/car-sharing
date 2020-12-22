import ICity from "./i-city";
import IPoint from "./i-point";
import ICar from "./i-car";
import { AuthState } from "../authReducer";

export default interface IAction {
  type: string;
  payload:
    | string
    | boolean
    | Date
    | ICity[]
    | IPoint[]
    | ICar[]
    | AuthState
    | null;
}
