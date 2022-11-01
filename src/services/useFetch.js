import { useEffect, useState } from 'react';

const useFetch = (callFunction, params, initialValue) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    callFunction(params)
      .then(({ data: result }) => setData(result))
      .catch((err) => setError(err));
  }, [callFunction, params]);

  return { data, loading, error };
};

export default useFetch;
