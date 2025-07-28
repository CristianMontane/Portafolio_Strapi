import { useState, useEffect } from 'react';
import { getHomeData } from './apiService';
import type { HomeData } from '../types';

interface UseHomeDataReturn {
  homeData: HomeData | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useHomeData(): UseHomeDataReturn {
  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHomeData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getHomeData();
      setHomeData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar la información del home');
      console.error('Error fetching home data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  return {
    homeData,
    loading,
    error,
    refetch: fetchHomeData
  };
}
