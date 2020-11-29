import ICity from "./i-city";
import IPoint from "./i-point";
import ICar from "./i-car";

export default interface IAction {
  type: string;
  payload: string | ICity[] | IPoint[] | ICar[];
}
