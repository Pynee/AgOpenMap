import fieldReducer from "./fieldReducer";
import treeReducer from "./treeReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  fieldReducer,
  treeReducer,
  userReducer
});

export default rootReducer;
