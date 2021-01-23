import { useState, useEffect } from "react";

export function useConvertNutrients(defaultData = null) {
  const [data, setData] = useState(defaultData);
  const [result, setResult] = useState(undefined);
  useEffect(() => {
    if (!data) return false;
    const convertedData = {
      calories: data.calories,
      carbs: data.carbs,
      fat: data.fat,
      protein: data.protein,
      nutrients: data.bad.map((item) => {
        return {
          title: item.title,
          amount: item.amount,
          percentOfDailyNeeds: Math.floor(item.percentOfDailyNeeds),
        };
      }),
    };
    setResult(convertedData);
  }, [data]);
  return [result, setData];
}
