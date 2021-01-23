import { useState, useEffect } from "react";
//url === https://api.spoonacular.com/recipes/?apiKey=105c45c3c46749d4a2344c632ce5f2de;
// https://api.spoonacular.com/recipes/random?apiKey=105c45c3c46749d4a2344c632ce5f2de&number=6
export function useMakeRequest(defaultUrl = "") {
  const [url, setUrl] = useState(defaultUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!url) {
      return;
    }
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setHasError(true);
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setData(data);
      } catch (err) {
        setHasError(true);
        setError(err.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url, setData]);
  return [setUrl, data, hasError, error, isLoading];
}

/* 
/*https://dev.to/vinodchauhan7/react-hooks-with-async-await-1n9g
 *https://www.smashingmagazine.com/2020/07/custom-react-hook-fetch-cache-data/  -- кеш 
 */
