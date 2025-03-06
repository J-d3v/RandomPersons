import { useState, useEffect } from 'react';

interface UserData {
  name: {
    first: string;
    last: string;
  };
  email: string;
  dob: {
    date: string;
  };
  phone: string;
  location: {
    street: {
      number: number;
      name: string;
    };
  };
  login: {
    password: string;
  };
}

interface ApiResponse {
  results: UserData[];
}

const useFetch = (url: string) => {
  const [data, setData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json: ApiResponse = await response.json();
        if (json.results && json.results.length > 0) {
          setData(json.results[0]);
        } else {
          setError('No data found');
        }
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;