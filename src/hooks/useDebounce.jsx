import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

/* *How to use*

  const debounceValue = useDebounce(value, 2000);

  useEffect(() => {
    if (debounceCity) makeRequest(debounceValue);
  }, [debounceValue, makeRequest]);

 */
