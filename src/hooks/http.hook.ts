import { useState, useCallback } from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const request: any = useCallback(
    async (
      url: string,
      method: string = 'GET',
      body: null = null,
      headers: any = { 'Content-Type': 'application/json' }
    ) => {
      setLoading(true);
      try {
        const response = await fetch(url, { method, body, headers });
        if (!response.ok) {
          return new Error(
            `Could not fetch ${url}, status: ${response.status}`
          );
        }
        const data = await response.json();
        setLoading(false);
        return data;
      } catch (e: any) {
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setError(null);
  }, []);
  return { loading, error, clearError, request };
};
