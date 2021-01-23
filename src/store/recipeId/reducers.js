import { SET_RECIPE_ID } from "./action";

const defaultState = {
  recipeId: undefined,
};

export const recipeIdReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_RECIPE_ID:
      return {
        ...state,
        recipeId: action.payload,
      };
    default:
      return state;
  }
};
