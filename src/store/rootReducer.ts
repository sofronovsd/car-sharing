import { combineReducers } from "redux";
import locationReducer from "./locationReducer";
import modelReducer from "./modelReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
  location: locationReducer,
  model: modelReducer,
  order: orderReducer,
});

export default rootReducer;
