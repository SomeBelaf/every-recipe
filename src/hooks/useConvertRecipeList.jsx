import { useState, useEffect } from "react";

export default function useConvertRecipeList(defaultData = null) {
  const [data, setData] = useState(defaultData);
  const [result, setResult] = useState(undefined);
  useEffect(() => {
    if (!data) return false;
    const convertedData = data.recipes.map((item) => {
      return {
        id: item.id,
        name: item.title,
        isVegan: item.vegan,
        isGlutenFree: item.glutenFree,
        isVegetarian: item.vegetarian,
        isLactoseFree: item.dairyFree,
        dishTypes: item.dishTypes,
        image: item.image,
        likes: item.aggregateLikes,
      };
    });
    return setResult(convertedData);
  }, [data]);
  return [result, setData];
}

// const [convertedData, setData] = useConvertRecipeList()
