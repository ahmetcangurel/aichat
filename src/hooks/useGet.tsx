import {useEffect, useState} from 'react';
import axios from 'axios';

import useLoadingStore from '../store/useLoadingStore';

const useGet = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const {setLoading, loading} = useLoadingStore(({setLoading, loading}) => ({
    setLoading,
    loading,
  }));

  const getData = async (url: string) => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(url);
  }, []);

  return {data, error};
};

export default useGet;
