import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useAppDatas = () => {
  const [appData, setAppData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios('../appData.json')
      .then(data => setAppData(data.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, []);

  return { appData, loading, error };
};

export default useAppDatas;