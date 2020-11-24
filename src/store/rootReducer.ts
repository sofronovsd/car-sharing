import { combineReducers } from "redux";
import locationReducer from "./locationReducer";
import modelReducer from "./modelReducer";

const rootReducer = combineReducers({
  location: locationReducer,
  model: modelReducer,
});

export default rootReducer;
