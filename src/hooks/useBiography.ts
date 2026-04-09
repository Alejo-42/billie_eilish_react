import { useEffect, useState } from 'react'
import type { BiographyItem } from '../types/biography'
import { getBiography, getIcon } from '../services/artistService'

export const useBiography = () => {
  const [bioData, setBioData] = useState<BiographyItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
        const data = await getBiography();
    setBioData(data);
    setLoading(false);
  }
    loadData();
  }, [])
  return { bioData, loading }
}

export const useIcon = () => {
  const [icon, setIcon] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getIcon().then((url) => {
      if (url) setIcon(url);
      setLoading(false);
    });
  }, []);

  return { icon, loading };
};