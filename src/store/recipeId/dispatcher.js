import { SET_RECIPE_ID } from "./action";

export const setRecipeId = (id) => ({
  type: SET_RECIPE_ID,
  payload: id,
});
