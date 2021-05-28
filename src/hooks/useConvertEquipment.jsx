import { useState, useEffect } from "react";

export default function useConvertEquipment(defaultData = null) {
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
    return setResult(convertedData);
  }, [data]);
  return [result, setData];
}
