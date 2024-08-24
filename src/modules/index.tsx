import { combineReducers } from "redux";
import counter from "./counter";

//reducer를 하나로 합쳐주기 위한 것
const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
