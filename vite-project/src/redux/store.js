import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "./reducer";

const logger = (store) => (next) => (action) => {
  console.log("Action:", action);
  const result = next(action);
  console.log("New State:", store.getState());
  return result;
};

const store = createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;