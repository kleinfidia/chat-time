import { combineReducers } from "redux";
import userauthReducer from "./userauthReducer";

const myreducer = combineReducers({
  user: userauthReducer,
});

export default myreducer;
