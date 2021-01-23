import { useState, useEffect } from "react";

export function useConvertEquipment(defaultData = null) {
  const [data, setData] = useState(defaultData);
  const [result, setResult] = useState(undefined);
  useEffect(() => {
    if (!data) return false;
    const convertedData = data.equipment.map((item) => {
      return {
        name: item.name,
        image: `https://spoonacular.com/cdn/equipment_500x500/${item.image}`,
      };
    });
    setResult(convertedData);
  }, [data]);
  return [result, setData];
}
