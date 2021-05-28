import { useState, useEffect } from "react";

export default function useConvertRecipe(variant = "normal") {
  const [data, setData] = useState(null);
  const [result, setResult] = useState(undefined);
  useEffect(() => {
    if (!data) return false;
    let convertedData = {};
    if (variant === "normal") {
      convertedData = {
        id: data.recipes[0].id,
        name: data.recipes[0].title,
        isVegan: data.recipes[0].vegan,
        isGlutenFree: data.recipes[0].glutenFree,
        isVegetarian: data.recipes[0].vegetarian,
        isLactoseFree: data.recipes[0].dairyFree,
        dishTypes: data.recipes[0].dishTypes,
        image: data.recipes[0].image,
        likes: data.recipes[0].aggregateLikes,
      };
    } else if (variant === "extended") {
      convertedData = {
        id: data.id,
        name: data.title,
        isVegan: data.vegan,
        isGlutenFree: data.glutenFree,
        isVegetarian: data.vegetarian,
        isLactoseFree: data.dairyFree,
        image: data.image,

        servings: data.servings,
        readyInMinutes: data.readyInMinutes,
        sourceUrl: data.sourceUrl,
        instruction: data.analyzedInstructions[0].steps.map(
          (item) => item.step
        ),
        ingredients: data.extendedIngredients.map(
          (item) => item.originalString
        ),
      };
    }
    return setResult(convertedData, variant);
  }, [data, variant]);
  return [result, setData];
}

// const [convertedData, setData] = useConvertRecipe()
