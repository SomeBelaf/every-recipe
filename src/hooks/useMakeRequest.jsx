import { useState, useEffect } from "react";

export default function useMakeRequest(defaultUrl = "") {
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
        const responseData = await response.json();
        setData(responseData);
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
