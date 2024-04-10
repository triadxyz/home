import api from '@/constants/api';

export const fetchMarkets = async () => {
  try {
    const response = await api.get('/company');

    return response.data;
  } catch {
    /* empty */
  }
};