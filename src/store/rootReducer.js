import { combineReducers } from "redux";
import { recipeIdReducer } from "./recipeId/reducers";
import { RESET_STATE } from "./resetState/action";

// Собрать все reducer
const appReducer = combineReducers({
  recipeIdReducer: recipeIdReducer,
});

const rootReducer = (state, action) => {
  // очистить весь store в redux
  if (action.type === RESET_STATE) state = action.payload;
  return appReducer(state, action);
};

export default rootReducer;
