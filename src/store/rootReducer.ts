import { combineReducers } from "redux";
import locationReducer from "./locationReducer";
import modelReducer from "./modelReducer";
import orderReducer from "./orderReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  location: locationReducer,
  model: modelReducer,
  order: orderReducer,
  auth: authReducer,
});

export default rootReducer;
