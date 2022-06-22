import { combineReducers } from "redux";
import loginReducer from "./LoginReducer";
import reRenderReducer from "./ReRenderReducer";

export const rootReducer = combineReducers({
  loginReducer: loginReducer,
  reRenderReducer: reRenderReducer
});
