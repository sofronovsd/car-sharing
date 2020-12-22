import { ModelState } from "./modelReducer";
import { OrderState } from "./orderReducer";
import { LocationState } from "./locationReducer";
import { AuthState } from "./authReducer";

interface SelectorsState {
  model: ModelState;
  order: OrderState;
  location: LocationState;
  auth: AuthState;
}

export const modelSelector = (state: SelectorsState) => state.model.model;
export const colorSelector = (state: SelectorsState) => state.order.color;
export const rateSelector = (state: SelectorsState) => state.order.rate;
export const priceSelector = (state: SelectorsState) => state.order.price;
export const dateFromSelector = (state: SelectorsState) => state.order.dateFrom;
export const dateToSelector = (state: SelectorsState) => state.order.dateTo;
export const fullTankSelector = (state: SelectorsState) =>
  state.order.isFullTank;
export const childChairSelector = (state: SelectorsState) =>
  state.order.isNeedChildChair;
export const rightWheelSelector = (state: SelectorsState) =>
  state.order.isRightWheel;
export const cityNameSelector = (state: SelectorsState) =>
  state.location.city.name;
export const citySelector = (state: SelectorsState) => state.location.city;
export const pointSelector = (state: SelectorsState) => state.location.point;
export const addressSelector = (state: SelectorsState) =>
  state.location.point.address;
export const availableSelector = (state: SelectorsState) =>
  state.order.available;
export const citiesSelector = (state: SelectorsState) => state.location.cities;
export const pointsSelector = (state: SelectorsState) => state.location.points;
export const carsSelector = (state: SelectorsState) => state.model.cars;
export const carIdSelector = (state: SelectorsState) => state.model.model.id;
export const ratesSelector = (state: SelectorsState) => state.model.rates;
export const orderSelector = (state: SelectorsState) => state.order;
export const authenticatedSelector = (state: SelectorsState) =>
  state.auth.isAuthenticated;
