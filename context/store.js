import { createStore } from "redux";
import myreducer from "./reducers";

const Store = createStore(myreducer);

export default Store;
