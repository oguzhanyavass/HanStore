import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const fetchData = async () => {
    try {
      const { data: responseData } = await axios.get(url);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  return {error,loading,data};
}

export default useFetch;
